const path = require('path');

module.exports = {
  root: true,
  extends: [
    'stylelint-config-shopify',
  ],
  plugins: [
    // "stylelint-order"
    "stylelint-declaration-use-variable",
    "stylelint-color-format",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-group-selectors",
    "stylelint-high-performance-animation",
    "stylelint-media-use-custom-media",
    "stylelint-no-indistinguishable-colors",
    "stylelint-use-logical",
    "stylelint-use-nesting",
    "stylelint-value-no-unknown-custom-properties",
	],
  rules: {
    // "order/properties-alphabetical-order": true,
    // "selector-class-pattern": null,
    "csstools/value-no-unknown-custom-properties": true,
    "csstools/use-nesting": true,
    "csstools/use-logical": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/stylelint-group-selectors": true,
    "plugin/no-low-performance-animation-properties": [true, { ignore: "paint-properties" }],
    "plugin/stylelint-no-indistinguishable-colors": true,
    "csstools/media-use-custom-media": "always-known",
    "color-format/format": {
      "format": "rgba"
    },
    "sh-waqar/declaration-use-variable": "color",
    // "selector-class-pattern": "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
    "selector-id-pattern": "^[a-zA-Z][a-z0-9\-]+$",
    "selector-class-pattern": "^[a-zA-Z][a-z0-9\-]+$",
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen'
      ]
    }],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'color-no-hex': null,
    'selector-max-combinators': null,
    'selector-max-specificity': "1,5,0",
    'selector-max-id': 1,
  },
}
