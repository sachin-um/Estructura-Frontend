module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'import',
    'react',
    'perfectionist',
    '@typescript-eslint/eslint-plugin',
  ],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
    'no-console': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src', 'public'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
