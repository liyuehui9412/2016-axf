define(["backbone"], function(backbone){
		var Router = Backbone.Router.extend({
			routes:{
				"":"shou",
				shou:"shou",
				shan:"shan",
				gou:"gou",
				mine:"mine"
			},
			shou:function(){
				require(["modules/shou/axf.js"],function(shou){
					shou.init();
				});
			},
			shan:function(){
				require(["modules/shan/AXF_shan.js"],function(shan){
					shan.init();
				});
			},
			gou:function(){
				require(["modules/gou/gou.js"],function(gou){
					gou.init();
				});
			},
			mine:function(){
				require(["modules/mine/dl.js"],function(mine){
					mine.init();
				});
			}
		});
	return new Router();
});