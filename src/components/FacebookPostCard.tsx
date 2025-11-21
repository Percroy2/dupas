import { FacebookPost } from '../data/facebook';
import AnimatedSection from './AnimatedSection';

interface FacebookPostCardProps {
  post: FacebookPost;
  index: number;
}

export default function FacebookPostCard({ post, index }: FacebookPostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'À l\'instant';
    if (diffInSeconds < 3600) return `Il y a ${Math.floor(diffInSeconds / 60)} min`;
    if (diffInSeconds < 86400) return `Il y a ${Math.floor(diffInSeconds / 3600)} h`;
    if (diffInSeconds < 604800) return `Il y a ${Math.floor(diffInSeconds / 86400)} j`;
    if (diffInSeconds < 2592000) return `Il y a ${Math.floor(diffInSeconds / 604800)} sem`;
    if (diffInSeconds < 31536000) return `Il y a ${Math.floor(diffInSeconds / 2592000)} mois`;
    return `Il y a ${Math.floor(diffInSeconds / 31536000)} an${Math.floor(diffInSeconds / 31536000) > 1 ? 's' : ''}`;
  };

  const formatFullDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const likesCount = post.likes?.summary?.total_count || 0;
  const commentsCount = post.comments?.summary?.total_count || 0;
  const sharesCount = post.shares?.count || 0;
  const postText = post.message || post.story || '';

  return (
    <AnimatedSection direction="up" delay={index * 100}>
      <article className="bg-light-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
        {/* En-tête du post */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
              DT
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">Dupas Terrassement</h3>
              <p className="text-sm text-gray-500" title={formatFullDate(post.created_time)}>
                {formatDate(post.created_time)}
              </p>
            </div>
            <a
              href={post.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="Voir sur Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contenu du post */}
        {postText && (
          <div className="p-4">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {postText}
            </p>
          </div>
        )}

        {/* Image du post */}
        {post.full_picture && (
          <div className="w-full overflow-hidden">
            <a
              href={post.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={post.full_picture}
                alt=""
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </a>
          </div>
        )}

        {/* Statistiques et actions */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-4">
              {likesCount > 0 && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  {likesCount}
                </span>
              )}
              {commentsCount > 0 && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                  </svg>
                  {commentsCount}
                </span>
              )}
              {sharesCount > 0 && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                  </svg>
                  {sharesCount}
                </span>
              )}
            </div>
          </div>
          <a
            href={post.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            Voir sur Facebook →
          </a>
        </div>
      </article>
    </AnimatedSection>
  );
}

