import {Server} from 'hapi';
import Webpack from 'webpack';
import register from 'hapi-webpack-plugin';
import {webpackConfig} from './webpack';

const compiler = new Webpack(webpackConfig);
const {env} = process;
const host = env.npm_config_host || 'localhost';
const port = env.npm_config_port || 4000;
const server = new Server();

server.connection({host, port});

server.register({
  options: {
    assets: {
      publicPath: webpackConfig.output.publicPath,
      stats: {chunks: false, colors: true, hash: false, version: false}
    },
    compiler
  },
  register
}, error => {
  if (error) { throw error; }

  server.route({
    handler: function handler (request, reply) {
      reply(`
        <!doctype html>
        <html>
          <head>
            <meta charSet="utf-8"/>
            <title>Rūto</title>
          </head>
          <body>
            <div id="app"></div>
            <script src="/client.js"></script>
          </body>
        </html>
      `);
    },
    method: 'GET',
    path: '/'
  });

  server.start(() => {
    console.log(`Rūto deck: ${server.info.uri}`);
  });
});
