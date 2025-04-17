// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly OAS_ENTRY_FILE_PATHS: string[];
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
