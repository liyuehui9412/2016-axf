/*
	爱鲜蜂

	2016-12-9 20:30:48

	李跃辉 V1
*/
define(["text!./AXF.html","css!./axf.css"], function(shouPage){
	return {
		init: function(){
			$(".shou").html(shouPage).show().siblings("div").hide();
		}
	}
});
$(function(){
	// 第一次进APP首页
	(function(){
		// 定义一个定时器 
		var t = setInterval(function(){
			// 两秒钟后首页消失
			$("#shou").hide(300);
		},2000);
	})();

	// 轮播图
	(function(){
		 var mySwiper = new Swiper ('.swiper-container', {
		    autoplay: 4000,
		    loop: true
		  })       
	})();
})