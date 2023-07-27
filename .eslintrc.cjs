module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:perfectionist/recommended-natural',
  ],
  parser: '@babel/eslint-parser',

  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
  },
  plugins: ['prettier', 'import', 'react', 'perfectionist'],
  root: true,
  rules: {
    'import/no-unresolved': [2, { caseSensitive: false }],
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
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
