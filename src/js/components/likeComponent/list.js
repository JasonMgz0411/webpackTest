export default function (items, options) {
    var temp = '<ul>';
    for (var i = 0; i < items.length; i++) {
        temp += '<li>' + options.fn(items[i]) + '</li>';
    }
    return temp + '</ul>';
};