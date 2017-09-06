function IEContentLoaded(w, fn) {
    var d = w.document, done = false,
    // 只执行一次用户的回调函数init()
    init = function () {
        if (!done) {
            done = true;
            fn();
        }
    };
    (function () {
        try {
            // DOM树未创建完之前调用doScroll会抛出错误
            d.documentElement.doScroll('left');
        } catch (e) {
            //延迟再试一次~
            setTimeout(arguments.callee, 50);
            return;
        }
        // 没有错误就表示DOM树创建完毕，然后立马执行用户回调
        init();
    })();
    //监听document的加载状态
    d.onreadystatechange = function () {
        // 如果用户是在domReady之后绑定的函数，就立马执行
        if (d.readyState == 'complete') {
            d.onreadystatechange = null;
            init();
        }
    };
}
