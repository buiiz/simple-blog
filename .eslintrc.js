module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.ts', '.tsx'],
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'unix'],
    'simple-import-sort/imports': 'error',
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
