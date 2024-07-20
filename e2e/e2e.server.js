const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const generateConfig = require('../webpack.config');

const config = generateConfig({ env: { development: true }})

const PORT = 9000;

const compiler = Webpack(config);
const devServerOptions = { ...config.devServer, open: false, port: PORT };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  await server.start();
};

runServer();
