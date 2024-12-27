import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules/**'], // Paths to ignore
  },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  
  // { extends: ['eslint:recommended', 'plugin:prettier/recommended'] },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
];
