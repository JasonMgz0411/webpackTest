//控制层
var $ = require('jquery');
var likeModule = require('../modules/likeModule');
var likeView = require('../components/likeComponent/likeComponent');
function likeController() {

}
likeController.prototype = {
    constructor: likeController,
    init: function () {
        var likeObj = new likeModule();
        likeObj.init(function(data) {
            var view = new likeView();
            view.create(data);
            $('body').append(view.getDom());
        });
    }
};

module.exports = likeController;