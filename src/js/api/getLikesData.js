var $ = require('jquery');
module.exports = function() {
    return $.get({
        url: '/api/getLikesData'
    });
}