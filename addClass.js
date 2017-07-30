// 添加class
function addClass(el, className) {
    if (hasClass(el, className)) {
        return
    }
    var newClass = el.className.split(' ');
    newClass.push(className);
    el.className = newClass.join(' ');

    // 判断是否有指定的class
    function hasClass(el, className) {
        var reg = new RegExp('(^|\\s)' + className + '(\\s|$)'); // 已空格开头或者直接开头，已空格结尾或者直接结尾
        return reg.test(el.className);
    }
}