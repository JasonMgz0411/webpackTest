//视图层
var template = require('./likeComponent.hbs');
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

module.exports = likeComponent;