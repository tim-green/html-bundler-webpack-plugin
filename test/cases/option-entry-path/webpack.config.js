const path = require('path');
const HtmlBundlerPlugin = require('../../../');

module.exports = {
  mode: 'production',

  output: {
    path: path.join(__dirname, 'dist/'),
  },

  resolve: {
    alias: {
      '@images': path.join(__dirname, '../../fixtures/images'),
      '@scripts': path.join(__dirname, 'src/assets/scripts'),
      '@styles': path.join(__dirname, 'src/assets/styles'),
    },
  },

  plugins: [
    new HtmlBundlerPlugin({
      // path to templates
      entry: 'src/views/pages/',

      filename: ({ filename, chunk: { name } }) => {
        console.log('\n\n~~~ filename: ', { name, filename });

        // transform 'home/index' filename to output file 'index.html'
        // note: compare the name with the valid path on windows
        if (name === path.join('home', 'index')) {
          return 'index.html'; // save as index.html in output directory
        }
        // bypass the original structure
        return '[name].html';
      },

      js: {
        // output filename of extracted JS
        filename: 'assets/js/[name].[contenthash:8].js',
      },

      css: {
        // output filename of extracted CSS
        filename: 'assets/css/[name].[contenthash:8].css',
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },

      {
        test: /\.(png|jpe?g|ico|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[hash:8][ext]',
        },
      },
    ],
  },
};
