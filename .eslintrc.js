module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: "module"
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
    'plugin:prettier/recommended'
  ],
  globals: {
    cordova: true,
  },
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 240,
      jsxBracketSameLine: true
    }],
    'max-len': [2, {
      code: 240,
      ignoreStrings: true,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreTemplateLiterals: true
    }],
    'import/no-unresolved': ['error', {
      'ignore': [
        '@/',
        '~/'
      ]}
    ],
    "vue/max-attributes-per-line": [
      2,
      {
        "singleline": 5,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 0
      }
    ],
    // semi: "off",
    // "no-undef": "off",
  },
};
