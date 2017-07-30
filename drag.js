function drag(obj) {
    obj.onmousedown = function (ev) {
        ev.preventDefault(); // 阻止默认事件
        var disX = ev.clientX - obj.getBoundingClientRect().left;
        var disY = ev.clientY - obj.getBoundingClientRect().top;
        document.onmousemove = function (ev) {
            var l = ev.clientX - disX;
            var t = ev.clientY - disY;
            obj.style.left = l + 'px';
            obj.style.top = t + 'px';
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}