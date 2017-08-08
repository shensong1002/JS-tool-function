ajax({
    url: '', // 请求地址
    type: 'POST',   // 请求方式，默认是GET
    data: { // 请求参数
        name: 'shensong',
        age: 24
    },
    dataType: 'json', // 返回值类型的设定
    async: false,   //是否异步，默认异步true
    success: function (response, xml) {
        console.log(response);   // 此处执行请求成功后的代码
    },
    fail: function (status) {
        console.log(status);   // 此处执行请求失败后的代码
    }
});

function ajax(options) {
    // 传入方式默认为对象
    options = options || {};
    // 默认为GET请求
    options.type = (options.type || 'GET').toUpperCase();
    // 返回值类型默认为json
    options.dataType = options.dataType || 'json';
    // 默认为异步请求
    options.async = options.async || true;
    // 对需要传入的data参数的处理
    var params = formatParams(options.data);
    var xhr;

    // 创建AJAX对象 - 第一步
    if (window.XMLHttpRequest) {
        // 标准浏览器
        xhr = new XMLHttpRequest();
    } else {
        // IE标准浏览器
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    // 接收请求 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    }

    // 连接请求地址和发送请求 - 第二步
    if (options.type == 'GET') {
        xhr.open("GET", options.url + '?' + params, options.async);
        xhr.send(null)
    } else if (options.type == 'POST') {
        xhr.open('POST', options.url, options.async);
        // POST必须请求设置请求头
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }

    // data对象参数的处理
    function formatParams(data) {
        var arr = [];
        for (var param in data) {
            arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(data[param]));
        }
        // 随机一个数，防止地址不变，请求不变
        arr.push(('v=' + Math.random()).replace('.', ''));
        return arr.join('&');
    }
}