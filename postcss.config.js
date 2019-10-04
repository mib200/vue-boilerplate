/* eslint-disable */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const plugins = [
  tailwindcss('./tailwind.config.js'),
  require('postcss-import'),
  require('postcss-preset-env')({
      stage: 1,
  }),
  require('postcss-nested'),
  autoprefixer({
    // add: true,
    // grid: true,
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano')({
    discardComments: {
      removeAll: true,
    }
  }));
  // plugins.push(
  //   purgecss({
  //     content: [
  //       './public/index.html',
  //       './src/**/*.js',
  //       './src/**/*.jsx',
  //     ],
  //     // whitelistPatterns: [/^fa-/, /^fade-/],
  //     extractors: [
  //       {
  //         extractor: TailwindExtractor,

  //         // Specify the file extensions to include when scanning for
  //         // class names.
  //         extensions: ["html", "js", "jsx"]
  //       }
  //     ]
  //   }),
  // );
}

module.exports = {
  plugins,
};
