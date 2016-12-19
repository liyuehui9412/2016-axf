define(["text!./AXF_shop.html","css!./axf_shop.css"], function(gouPage){
	return {
		init: function(){
			$(".gou").html(gouPage).show().siblings("div").hide();
			// 获取购物车内商品数量和单价
			(function(){
				var shu = parseInt($(".gou_floatS").html()),
					pri = parseInt($(".shopInfo_price").html().substring(1));
					$(".price").html("￥"+(pri*shu));
				$(".gou_floatSp2").off().on("click",function(){
					shu++;
					$(".gou_floatS").html(shu);
					console.log(shu,pri);
					$(".price").html("￥"+(pri*shu));
				});
				$(".gou_floatSp1").off().on("click",function(){
					if(shu == 0){return};
					shu--;
					$(".gou_floatS").html(shu);
					console.log(shu,pri);
					$(".price").html("￥"+(pri*shu));
				});
			})();
		}
	}
});