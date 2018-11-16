const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/App',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.js',
      publicPath: '/assets/',
      library: 'GentleJack',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        }
      ],
    },
    resolve: {
      // options for resolving module requests
      // (does not apply to resolving to loaders)
      modules: [
        'node_modules',
        path.resolve(__dirname, 'src')
      ],
      // directories where to look for modules
      extensions: ['.js', '.json', '.jsx', '.css'],
    },
    context: __dirname,
    target: 'web',
    serve: {
      port: 1337,
      content: './build',
    },
    stats: 'errors-only',
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      historyApiFallback: true,
      watchContentBase: true
    },
    plugins: []
};
