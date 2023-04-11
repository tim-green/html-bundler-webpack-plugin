const path = require('path');

/**
 * The plugin module to extract the CSS and source map from asset.
 *
 * @note If webpack mode is `production` then `css-loader` minify the CSS self,
 *   if webpack mode is `development` then CSS is pretty formatted.
 *
 * @type {ModuleOptions}
 */

const extractCss = {
  test: /\.(css|scss|sass|less|styl)$/,
  enabled: true,
  verboseHeader: 'Extract CSS',
  sourcePath: null,
  outputPath: null,
  filename: '[name].css',
  // inline all CSS
  inline: false,

  /**
   * Extract CSS and source map.
   *
   * @note The @import handling in CSS is not supported, e.g.: @import 'assets/css/style.css'.
   * Disable @import at-rules handling in `css-loader`:
   * {
   *   test: /\.(css|scss)$/i,
   *   use: [
   *     {
   *       loader: 'css-loader'
   *       options: {
   *         import: false, // disable @import at-rules handling
   *       },
   *     },
   *     'sass-loader',
   *   ],
   * },
   *
   * @param {Compilation} compilation
   * @param {array} source
   * @param {string} assetFile
   * @param {boolean} inline
   * @returns {string}
   * @private
   */
  extract(compilation, { source: sourceMaps, assetFile, inline }) {
    const { compiler } = compilation;
    const { RawSource, ConcatSource } = compiler.webpack.sources;
    const { devtool } = compiler.options;
    const isInlineSourceMap = devtool && devtool.startsWith('inline-');
    const concatMapping = new ConcatSource();

    let result = '';
    let contentMapping = '';
    let hasMapping = false;
    let mapFile;

    for (const item of sourceMaps) {
      if (!Array.isArray(item)) continue;

      const [sourceFile, content, media, sourceMap, supports, layer] = item;

      if (result) result += '\n';

      // when in SCSS is used import of CSS file, like `@import url('./style.css');`
      // then `sourceFile` is null and `content` contains the output CSS filename
      if (sourceFile == null && content.endsWith('.css')) {
        result += `@import url(${content});`;
        continue;
      }

      result += content;

      if (sourceMap) {
        if (isInlineSourceMap || inline) {
          const sourceURLs = sourceMap.sources
            .map((url) => '/*# sourceURL=' + (sourceMap.sourceRoot || '') + url + ' */')
            .join('\n');
          const base64 = Buffer.from(JSON.stringify(sourceMap)).toString('base64');
          contentMapping +=
            '\n' + sourceURLs + '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64 + ' */';
        } else {
          concatMapping.add(new RawSource(JSON.stringify(sourceMap)));
        }
        hasMapping = true;
      }
    }

    if (hasMapping) {
      if (isInlineSourceMap || inline) {
        result += contentMapping;
      } else {
        mapFile = assetFile + '.map';
        result += `\n/*# sourceMappingURL=${path.basename(mapFile)} */`;
        compilation.emitAsset(mapFile, concatMapping);
      }
    }

    return result;
  },
};

/**
 * @param {ModuleOptions|{}} options The custom options.
 * @return {ModuleOptions} Default options merged with custom options.
 */
module.exports = (options = {}) => ({ ...extractCss, ...options });
