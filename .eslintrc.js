module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'newline-destructuring', 'react'],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  extends: [
    'next',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'import/no-anonymous-default-export': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-max-props-per-line': ['warn',
      {
        'maximum': {
          'single': 1,
          'multi': 1,
        },
      }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-indent': [2, 2],
    'react/jsx-no-useless-fragment': ['warn', {
      allowExpressions: true,
    }],
    'react/jsx-one-expression-per-line': ['warn',
      {
        'allow': 'single-child',
      }],
    'react/jsx-curly-newline': ['warn',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      }],
    'react/jsx-curly-brace-presence': ['warn',
      {
        props: 'always',
        children: 'never',
      }],
    'react/jsx-tag-spacing': ['warn',
      {
        'beforeClosing': 'proportional-always',
        'beforeSelfClosing': 'proportional-always',
      }],
    'react/self-closing-comp': ['warn',
      {
        'component': true,
        'html': true,
      }],
    'react/destructuring-assignment': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': ['warn',
      {
        'vars': 'all',
      }],
    'no-alert': 'warn',
    'indent': ['warn', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'object-curly-spacing': ['warn', 'always'],
    'no-console': ['error',
      {
        allow: ['warn', 'error'],
      }],
    'comma-dangle': [
      'warn', 'always-multiline',
    ],
  },
};
