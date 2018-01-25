const merge = require('webpack-merge');
const config = require('./webpack.common.js');
const data = require('./data.json');

module.exports = merge(config, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        before(app) {
            app.post('/api/getLikesData', function(req, res) {
                res.json({
                    status: 1,
                    data: data
                });
            });
        }
    }
});