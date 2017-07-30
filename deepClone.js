function deepClone(obj) {
    // 储存Object.prototype原型上的toString方法
    var _toString = Object.prototype.toString;
    // 判断如果obj是数组则[],不是数组{}
    var o = obj.push ? [] : {};
    for (var attr in obj) {
        // _toString.call(obj[attr]) 将Object.prototype原型上的toString方法给obj[attr]使用
        if (_toString.call(obj[attr]) === '[object Object]' || _toString.call(obj[attr]) === '[object Array]') {
            // 如果obj[attr]是对象或者数组就递归
            o[attr] = deepClone(obj[attr]);
        } else {
            o[attr] = obj[attr];
        }
    }
    return o;
}