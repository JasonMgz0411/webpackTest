//控制层
import $ from 'jquery';
import likeModule from '../modules/likeModule';
import likeView from '../components/likeComponent/likeComponent';
function likeController() {

}
likeController.prototype = {
    constructor: likeController,
    init: function () {
        var likeObj = new likeModule();
        likeObj.init(function (data) {
            var view = new likeView();
            view.create(data);
            $('body').append(view.getDom());
        });
    }
};

export default likeController;