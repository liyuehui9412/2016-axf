/*
	爱鲜蜂 闪送超市

	2016-12-13 20:24:39

	李跃辉 V1
*/
$(function(){
	// 取数据  闪送超市   商城列表
	$.ajax({
		// json路径
		url:"../data/top2.json",
		// 请求数据类型
		dataType:"json",
		// 请求成功
		success:function(data){
			var list = $(".shopList");
			list.load("../tmp/AXF_shan.html",function(){
				var htmlStr = baidu.template("shan",data);
				list.html(htmlStr);
			})
		}
	});

	//  闪送超市     默认的显示页面
	/*$.ajax({
		// json路径
		url:"../data/top2.json",
		// 请求数据类型
		dataType:"json",
		// 请求成功
		success:function(data){
			var names = "104749";
			// 找出数据接收对象
			var l = $(".main_right");
			// 使用load将模板内容拼接到页面
			l.load("../tmp/AXF_shan_List.html",function(){
				var htmlStr = baidu.template("shan_List",{lis:data.data.products[names]});
				l.html(htmlStr);
			})
		}
	});*/

	//  闪送超市  给列表绑定事件   基于事件委托根据点击不同的对象  获取它的文本内容进行函数调用
	$(".shopList").on("tap","li",function(){
		var names = $(this).attr("name");
		// 取数据  闪送超市  列表内具体商品  (封装公共请求函数)
		$.ajax({
			// json路径
			url:"../data/top2.json",
			// 请求数据类型
			dataType:"json",
			// 请求成功
			success:function(data){
				// 找出数据接收对象
				var l = $(".main_right");
				// 使用load将模板内容拼接到页面
				l.load("../tmp/AXF_shan_List.html",function(){
					var htmlStr = baidu.template("shan_List",{lis:data.data.products[names]});
					l.html(htmlStr);
				})
			}
		});
	});


});