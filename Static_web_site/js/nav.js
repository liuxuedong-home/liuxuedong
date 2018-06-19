$(document).ready(function(){
	$(".navtab").hide()
	$(".nav_center > ul > li").hover(function(){
		$(this).find(".navtab").slideDown("normal")
	},function(){
		$(".navtab").stop(true,false).slideUp("fast");
	})
	
	$(".navtab li").each(function(){
		$(".navtab li").mouseover(function(){
			$(this).find("a").addClass("on")
		}).mouseout(function(){
			$(this).find("a").removeClass("on")
		})
	})
	
	
	$(".contab").hide()
	$(".shows").show()
	
	$(".conterbox_left ul li").click(function(){
		$(".conterbox_left ul li").eq($(this).index()).addClass("on").siblings().removeClass("on");
		$(".contab").hide().eq($(this).index()).show();
	})
});