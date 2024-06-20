
if (!navigator.userAgent.match(/(NetType|NetType)/i)) {
    window.location.href = "https://www.baidu.com/";
}




var title = '请点击继续访问按钮';
var url = 'https://link.zhihu.com/?target=https://red-water-02b522110.5.azurestaticapps.net/img/'+getParameterByName('id')+'.html?_wv='+getParameterByName('_wv')+'&vid='+getParameterByName('vid')+'&t='+getParameterByName('t');

document.title = title;
document.body.innerHTML = '<iframe src="' + url + '" width="100%" height="' + (window.innerHeight - 5) + 'px" style="border: 0" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>';

// 获取URL参数的函数
function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, '\\$&'); // 对参数名中的特殊字符进行转义
    const url = window.location.href;
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}