/*

    <div id="box">
        <img data-src="http://pic124.nipic.com/file/20170313/23313285_204125403000_2.jpg" src="">
        <img data-src="http://pic76.nipic.com/file/20150824/21321671_165321269000_2.jpg" src="">
        <img data-src="http://pic1.nipic.com/2008-12-02/200812223312728_2.jpg" src="">
        <img data-src="http://pic11.nipic.com/20101214/213291_155243023914_2.jpg" src="">
        <img data-src="http://www.tupianzj.com/uploads/allimg/131223/1-131223095629.jpg" src="">
        <img data-src="http://pic24.nipic.com/20121008/3822951_094451200000_2.jpg" src="">
        <img data-src="http://pic41.nipic.com/20140519/18505720_094832590165_2.jpg" src="">
        <img data-src="http://pic24.nipic.com/20121029/3822951_090442794000_2.jpg" src="">
    </div>

*/

var imgs = document.querySelectorAll('img');

window.onload = window.onscroll = function () {
    lazyLoad(imgs);
}

// 封装懒加载
function lazyLoad(imgs) {
    var H = window.innerHeight;
    var S = document.documentElement.scrollTop || document.body.scrollTop;
    [].forEach.call(imgs, function (img) {
        if (!img.getAttribute('data-src')) {
            return;
        }
        if (H + S > getTop(img)) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        }
    })
}

// 获取元素距离顶部的高度
function getTop(obj) {
    var top = obj.offsetTop;
    while (obj = obj.offsetParent) {
        top += obj.offsetTop;
    }
    return top;
}