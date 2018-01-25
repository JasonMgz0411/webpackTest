const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/views/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name][hash].js'
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            title: 'Production'
        })
    ],
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            }
        ]
    }
};