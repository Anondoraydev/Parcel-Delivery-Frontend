// / <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL_LIVE: string; 
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
