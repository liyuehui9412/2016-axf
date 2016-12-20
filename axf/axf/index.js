require.config({
	paths:{
		"jquery":"./js/jquery-1.8.1",
		"backbone":"./js/backbone",
		"underscore":"./js/underscore",
		"text":"./js/text",
		"css":"./js/css",
		"baidu":"./js/baiduTemplate",
		"swiper":"./js/swiper-3.4.0.jquery.min",
		"lazy":"./js/jquery.lazyload.min"
		"wx":"http://res.wx.qq.com/open/js/jweixin-1.0.0"
	}
});

require(["jquery", "backbone", "router"],function($, backbone){
	Backbone.history.start();
});