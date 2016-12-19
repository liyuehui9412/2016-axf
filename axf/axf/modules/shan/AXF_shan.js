/*
	爱鲜蜂 闪送超市

	2016-12-13 20:24:39

	李跃辉 V1
*/
define(["text!./AXF_shan.html","css!./axf_shan.css", "baidu","lazy"], function(shanPage){
	return {
		init: function(){
			$(".shan").html(shanPage).show().siblings("div").hide();
			// 为左边列表绑定事件  点击添加标识
			$(".shopList").on("click","li",function(){
				$(this).find("span").show().end().siblings("li").find("span").hide();
			});
			// 取数据  闪送超市   商城列表
			$.ajax({
				// json路径
				url:"data/top2.json",
				// 请求数据类型
				dataType:"json",
				// 请求成功
				success:function(data){
					var list = $(".shopList");
					list.load("tmp/AXF_shan.html",function(){
						var htmlStr = baidu.template("shan",data);
						list.html(htmlStr);
					})
				}
			});
			//  闪送超市     默认的显示页面
			$.ajax({
				// json路径
				url:"data/top2.json",
				// 请求数据类型
				dataType:"json",
				// 请求成功
				success:function(data){
					var names = "104749";
					// 找出数据接收对象
					var l = $(".main_right");
					// 使用load将模板内容拼接到页面
					l.load("tmp/AXF_shan_List.html",function(){
						var htmlStr = baidu.template("shan_List",{lis:data.data.products[names]});
						l.html(htmlStr);
						$(function(){
							$(".lazy").lazyload({
								effect:"fadeIn",
								container:$(".main_right")
							});
						});
					})
				}
			});

			//  闪送超市  给列表绑定事件   基于事件委托根据点击不同的对象  获取它的文本内容进行函数调用
			$(".shopList").on("click","li",function(){
				var names = $(this).attr("name");
				// 取数据  闪送超市  列表内具体商品  (封装公共请求函数)
				$.ajax({
					// json路径
					url:"data/top2.json",
					// 请求数据类型
					dataType:"json",
					// 请求成功
					success:function(data){
						// 找出数据接收对象
						var l = $(".main_right");
						// 使用load将模板内容拼接到页面
						l.load("tmp/AXF_shan_List.html",function(){
							var htmlStr = baidu.template("shan_List",{lis:data.data.products[names]});
							l.html(htmlStr);
							$(function(){
								$(".lazy").lazyload({
									effect:"fadeIn",
									container:$(".main_right")
								});
								var s = 0;
								$(".shan_shopInfo").on("click",".shan_floatSp2",function(){
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
									$(".style").html("@keyframes gongHua{0%{width:30%;top:"+y+"px"+";left:"+x+"px"+";border-radius:50%;}20%{width:23%;top:"+y+20+"px"+";left:"+x+30+"px"+";border-radius:50%;}100%{width:0;display:none;top:"+by+"px"+";left:60%;border-radius:50%;}}");
									var pp = ths.find("h2");
									if(pp.html() !== ""){
										pp.html("");
									} 
									var img2 = img.clone().appendTo(pp).addClass("la");
									s++;
									$(".gooo").html(s);
								});
							});
						})
					}
				});
			});
		}
	}
});