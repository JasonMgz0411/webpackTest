//数据层
var getLikesData = require('../api/getLikesData');
function likeModule() {
    this.data = null;
}
likeModule.prototype = {
    constructor: likeModule,
    init: function (callback) {
        getLikesData().then(function(data) {
            callback(data);
        },function(error) {
            console.log(error);
        }); 
    }
};

module.exports = likeModule;