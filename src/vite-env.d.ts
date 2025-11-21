/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FACEBOOK_PAGE_ID?: string;
  readonly VITE_FACEBOOK_ACCESS_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

