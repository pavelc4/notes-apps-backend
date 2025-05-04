import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  // Base JS recommended rules
  js.configs.recommended,

  // Dicoding Academy style
  daStyle,

  // Project-specific configuration
  {
    files: ['**/*.js'],
    ignores: [
      '**/node_modules/**',
      '**/coverage/**',
      '**/logs/**',
      '**/build/**',
      '**/.github/**'
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        // Add any additional custom globals here
      },
      ecmaVersion: 'latest',
      sourceType: 'commonjs' // Matches your package.json type
    },
    rules: {
      // Basic formatting rules
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'indent': ['error', 2, { 'SwitchCase': 1 }],

      // Console handling (modify as needed)
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],

      // Best practices
      'curly': 'error',
      'eqeqeq': 'error',
      'no-multi-spaces': 'error',
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],

      // Node.js specific
      'require-await': 'warn',
      'no-buffer-constructor': 'error',

      // Disabled rules that conflict with common Node patterns
      'strict': 'off'
    }
  },

  // Optional: Test files specific rules
  {
    files: ['**/*.test.js'],
    rules: {
      'no-console': 'off',
      'no-undef': 'off'
    }
  }
]);