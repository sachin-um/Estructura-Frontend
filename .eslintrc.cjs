module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },

  extends: [
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:perfectionist/recommended-natural',
  ],
  plugins: ['prettier', 'unused-imports', 'react', 'perfectionist'],
  root: true,
  rules: {
    "react/react-in-jsx-scope": 0,
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'prettier/prettier': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
