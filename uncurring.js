/*

    函数柯里化

*/

Function.prototype.uncurring = function() {
    var self = this;
    return function() {
        var obj = Array.prototype.shift.call(arguments)
        return self.apply(obj, arguments)
    }
}

var call = Function.prototype.call.uncurring();

var fn = function(name) {
    console.log(name)
}

call(fn, window, 'song')
