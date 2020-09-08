const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
  return {

    devServer: {
        host: '0.0.0.0',
        port: '8081',
        proxy: [{
            context: ['/blog'],
            target: 'http://localhost:8080',
        }],  
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html' 
      }),
      new CopyWebpackPlugin([
        {
          context: 'node_modules/@webcomponents/webcomponentsjs',
          from: '**/*.js',
          to: 'webcomponents'
        }
      ])
    ],
  };
};