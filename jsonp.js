jsonp({
    url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', // 请求地址
    data: { // 请求参数
        wd: '中国'
    },
    callback: 'cb', // callback名称，默认是callback
    time: 1000, // 设置请求时间
    success: function (data) {
        // 此处放成功后执行的代码
        console.log(data.s);
    },
    fail: function (data) {
        // 此处放失败后执行的代码
        console.log(data);
    }
});

function jsonp(options) {
    options = options || {};
    // 默认callback是callback
    options.callback = options.callback || 'callback';
    if (!options.url) {
        throw new Error('参数不合法');
    }

    // 创建空的script标签并加入到页面中
    // 随机不同的回调函数名
    var callbackFnName = ('jsonp_' + Math.random()).replace('.', '');
    // 将callback放入data中
    options.data[options.callback] = callbackFnName;
    // 将data中的参数用&连接起来
    var params = formatParams(options.data);
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    head.appendChild(script);

    //创建jsonp_回调函数，并且放在window下
    window[callbackFnName] = function (data) {
        clearTimeout(script.timer);
        head.removeChild(script);
        window[callbackFnName] = null;
        options.success && options.success(data);
    };

    //发送请求
    script.src = options.url + '?' + params;

    //超时处理
    if (options.time) {
        script.timer = setTimeout(function () {
            head.removeChild(script);
            // 防止超时后callbackFnName没有报错
            window[callbackFnName] = function () { };
            options.fail && options.fail('请求超时');
        }, options.time);
    }

    //data参数拼接
    function formatParams(data) {
        var arr = [];
        for (var param in data) {
            arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(data[param]));
        }
        return arr.join('&');
    }
}
