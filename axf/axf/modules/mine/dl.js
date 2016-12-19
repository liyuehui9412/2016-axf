define(["text!./AXF_dl.html","css!./axf_dl.css"], function(dlPage){
	return {
		init: function(){
			$(".mine").html(dlPage).show().siblings("div").hide();
		}
	}
});