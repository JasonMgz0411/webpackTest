const merge = require('webpack-merge');
const config = require('./webpack.common.js');
const uglifyJs = require('uglifyjs-webpack-plugin');

module.exports = merge(config, {
    devtool: 'source-map',
    plugins: [
        new uglifyJs()
    ]
});