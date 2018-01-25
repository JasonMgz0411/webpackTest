//数据层
import getLikesData from '../api/getLikesData';
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

export default likeModule;