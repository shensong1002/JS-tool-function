function addMouseWheel(init) {
    // 除火狐浏览器只能识别mousewheel事件，ev.wheelDelta向上为正值，向下为负值
    init.ele.onmousewheel = fn;
    // 火狐浏览器只能识别DOMMouseScroll事件，ev.detail向上为负值，向下为正值
    init.ele.addEventListener('DOMMouseScroll', fn);
    function fn(ev) {
        var onOff = null;
        //true：向上滚动，false：向下滚动
        if (ev.wheelDelta) {
            // 除火狐浏览器
            if (ev.wheelDelta > 0) {
                onOff = true;
            } else {
                onOff = false;
            }
        } else {
            // 火狐浏览器
            if (ev.detail < 0) {
                onOff = true;
            } else {
                onOff = false;
            }
        }

        if (onOff) {
            // 向上滚动
            typeof init.fnUp == 'function' && init.fnUp();
        } else {
            // 向下滚动
            typeof init.fnDown == 'function' && init.fnDown();
        }

    }
}

addMouseWheel({
    ele: obj, // 滚动对象，在谁的身上滚动
    fnUp: function () {
        // 向上滚动执行的函数
    },
    fnDown: function () {
        // 向下滚动执行的函数
    }
})