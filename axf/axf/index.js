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
	}
});

require(["jquery", "backbone", "router"],function($, backbone){
	Backbone.history.start();
});