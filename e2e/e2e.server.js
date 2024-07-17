const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

const PORT = 9000;

const compiler = Webpack(config);
const devServerOptions = { ...config.devServer, open: true, port: PORT };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  await server.start();
};

runServer();
