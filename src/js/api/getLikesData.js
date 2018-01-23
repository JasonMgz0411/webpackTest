var $ = require('jquery');
module.exports = function () {
    return $.ajax({
        type: 'POST',
        url: '/api/getLikesData'
    });
}