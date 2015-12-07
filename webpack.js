import {HotModuleReplacementPlugin, optimize} from 'webpack';

const {OccurenceOrderPlugin} = optimize;
const entry = {client: ['./client']};

Object.keys(entry).forEach(function (key) {
  entry[key].unshift('webpack-hot-middleware/client?reload=true');
});

export const webpackConfig = {
  cache: true,
  debug: true,
  devtool: 'eval',
  entry,
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: [
          ],
          presets: ['es2015', 'react']
        },
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions&safe=true',
        test: /\.css$/
      },
      {
        exclude: /node_modules/,
        loader: 'json',
        test: /\.json$/
      },
      {
        exclude: /node_modules/,
        loader: 'html!highlight!markdown?breaks=true',
        test: /\.md$/
      }
    ],
    preLoaders: [{
      exclude: /node_modules/,
      loader: 'eslint',
      test: /\.js$/
    }]
  },
  output: {
    filename: '[name].js',
    path: __dirname,
    publicPath: '/'
  },
  plugins: [
    new OccurenceOrderPlugin(),
    new HotModuleReplacementPlugin()
  ]
};
