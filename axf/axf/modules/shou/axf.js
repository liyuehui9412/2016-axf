/*
	爱鲜蜂

	2016-12-9 20:30:48

	李跃辉 V1
*/
define(["text!./AXF.html","css!./axf.css","baidu","css!./swiper-3.4.0.min.css","swiper","lazy","wx"], function(shouPage){
	return {
		init: function(){
			$(".shou").html(shouPage).show().siblings("div").hide();

			// 第一次进APP首页
			(function(){
				// 定义一个定时器 
				var t = setInterval(function(){
					// 两秒钟后首页消失
					$("#shou").hide(300);
				},2000);
			})();

			// 封装公共的ajax请求
			function lun(lis, id){
				$.ajax({
					// 路径
					url:"data/top1.json",
					// 数据类型
					dataType:"json",
					// 数据请求成功后
					success:function(data){
						var list = lis;
						list.load("tmp/AXF_shou_lun.html",function(){
							var htmlStr = baidu.template(id, data);
							list.html(htmlStr);
							$(function(){
								$(".lazy").lazyload({
									threshold:200,
									effect:"fadeIn"
								});
								var gooo = $(".gooo");
								if(gooo.html() == ""){
									gooo.hide();
									gooo.html(0);
								}else if(gooo.html() !== ""){
									gooo.show();
									var s = parseInt(gooo.html());
								}
								$(".shou_shopInfo").on("click",".floatSpan",function(){
									var ths = $(this).closest("figure"),
										img = ths.find("img"),
										x = img.offset().left,
										y = img.offset().top - $("body").scrollTop(),
										b = $(".shouYe_gouWuChe"),
										bx = b.offset().left,
										by = b.offset().top - $("body").scrollTop();
									console.log(x,y,bx,by);
									if($(".style").html() !== ""){
										$(".style").html("");
									}
									$(".style").html("@keyframes dongHua{0%{width:30%;top:"+y+"px"+";left:"+x+"px"+";border-radius:50%;}20%{width:23%;top:"+y+20+"px"+";left:"+x+30+"px"+";border-radius:50%;}100%{width:0;display:none;top:"+by+"px"+";left:60%;border-radius:50%;}}");
									var pp = ths.find("h1");
									if(pp.html() !== ""){
										pp.html("");
									} 
									var img2 = img.clone().appendTo(pp).addClass("la");
									s++;
									$(".gooo").html(s);
								});
							});
						});
					}
				});
			}
			lun($(".shou_fourChoose"), "modules2");
			lun($(".zhuXiao"), "modules3");
			lun($(".main"), "modules4");

			// 获取轮播图图片
			$.ajax({
				// 路径
				url:"data/top1.json",
				// 数据类型
				dataType:"json",
				// 数据请求成功后
				success:function(data){
					var list = $(".swiper-wrapper");
					list.load("tmp/AXF_shou_lun.html",function(){
						var htmlStr = baidu.template("imgs", data);
						list.html(htmlStr);
						// 轮播图
						 var mySwiper = new Swiper ('.swiper-container', {
						    autoplay: 4000,
						    loop: true
						  })       
					});
				}
			});
			var latitude = 0,longitude = 0;
function get(){
wx.getLocation({
    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: function (res) {
        latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
        alert(latitude);
        alert(longitude);
    }
});
	
}

function getp(){
wx.openLocation({
    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
    name: '', // 位置名
    address: '', // 地址详情说明
    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
});
}
		}
	}
});