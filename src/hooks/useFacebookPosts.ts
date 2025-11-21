import { useState, useEffect } from 'react';
import { facebookConfig, FacebookPost, FacebookApiResponse, mockFacebookPosts } from '../data/facebook';

interface UseFacebookPostsResult {
  posts: FacebookPost[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  isMockData: boolean;
}

export function useFacebookPosts(): UseFacebookPostsResult {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMockData, setIsMockData] = useState(false);

  const fetchPosts = async () => {
    if (!facebookConfig.pageId || !facebookConfig.accessToken) {
      // Utiliser les données mockées si l'API n'est pas configurée
      setPosts(mockFacebookPosts);
      setIsMockData(true);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Construction de l'URL de l'API Graph Facebook
      const fields = [
        'message',
        'story',
        'created_time',
        'full_picture',
        'permalink_url',
        'likes.summary(total_count)',
        'comments.summary(total_count)',
        'shares',
      ].join(',');

      const url = `https://graph.facebook.com/v18.0/${facebookConfig.pageId}/posts?fields=${fields}&limit=${facebookConfig.postsLimit}&access_token=${facebookConfig.accessToken}`;

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erreur API Facebook: ${response.status} ${response.statusText}`);
      }

      const data: FacebookApiResponse = await response.json();
      
      // Filtrer les posts sans message ni story
      const filteredPosts = data.data.filter(
        (post) => post.message || post.story
      );

      setPosts(filteredPosts);
      setIsMockData(false);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement des posts Facebook';
      setError(errorMessage);
      console.error('Erreur Facebook API:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts,
    isMockData,
  };
}

