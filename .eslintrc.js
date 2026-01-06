module.exports = {
  extends: [
    'google',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Google style guide rules
    'quotes': ['error', 'single', {avoidEscape: true}],
    'semi': ['error', 'always'],
    'indent': ['error', 2, {SwitchCase: 1}],
    'max-len': ['warn', {code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true, ignoreRegExpLiterals: true}],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'space-infix-ops': 'error',
    'eol-last': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1}],
    'prefer-const': 'error',
    'no-var': 'error',
    'arrow-spacing': 'error',
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'camelcase': ['error', {properties: 'always'}],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'key-spacing': 'error',
    'no-multi-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['/'],
        exceptions: ['-', '+'],
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true,
      },
    }],

    // React-specific overrides
    'react/prop-types': 'off', // Disable if not using PropTypes
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off', // Allow apostrophes and quotes in text content
    'require-jsdoc': 'off', // Google style requires JSDoc, but can be relaxed for React
    'valid-jsdoc': 'off',
    'no-invalid-this': 'off', // React class components use 'this'
    
    // Allow PascalCase for React components (pragmatic adaptation)
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: false,
      properties: true,
    }],
  },
};
