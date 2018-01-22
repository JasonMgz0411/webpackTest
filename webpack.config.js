const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const express = require('express');
const app = express();
const apiRouter = express.Router();
let data = require('./data.json');
app.use('/api', apiRouter);

module.exports = {
    entry: {
        app: './src/js/views/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 8080,
        before(app) {
            app.get('/api/getLikesData', function (req, res) {
                res.json({
                    status: 1,
                    data: data
                });
            })
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    }
};