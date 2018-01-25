const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

const data = require('./data.json');

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.post('/api/getLikesData', function (req, res) {
    res.json({
        status: 1,
        data: data
    });
});

app.listen(8080, () => {
    console.log('Server listening at port 8080\n');
});