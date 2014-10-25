// 配置 jquery 并放入预加载项中

seajs.config({
    base: "/assets/javascripts",
    // 设置路径，方便跨目录调用
    paths: {
        'maxcdn': 'https://maxcdn.bootstrapcdn.com'
    },
    alias: {
        'jquery': 'https://a.alipayobjects.com/jquery/jquery/1.11.1/jquery.js'
    },
    preload: ["jquery"]
});



/*
define('my', [], function(require, exports, module){
    console.log(arguments);
    console.log(require('jquery').Deferred);
    console.log('--------------');
});
*/