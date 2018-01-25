//视图层
import less from './likeComponent.less';
import template from './likeComponent.hbs';
function likeComponent() { }
likeComponent.prototype = {
    constructor: likeComponent,
    create: function (data) {
        this.dom = template(data);
    },
    getDom: function () {
        return this.dom;
    }
};

export default likeComponent;