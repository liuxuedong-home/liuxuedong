$(function(){
	var lis=$("#lisbox li"),
		  w=lis.first().width(),
		  h=lis.first().height(),
		  len=lis.size(),
		  index=0,
		  timer=null;
	$("#lisbox").width((len+1)*w);
	$("#olbox").find("li").on("mouseover",function(){
		index=$(this).index();
		showlis()
	});
	
	function showlis(){
		$("#olbox").find("li").eq(index).addClass("on").siblings().removeClass("on");
		$("#lisbox").stop().animate({
			left:-index*w
		},300)
	}
	
	$("#imgbox").hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(function(){
		index++;
		if(index>=len){
			firstlis();
			index=0;
			$("#olbox").find("li").eq(index).addClass("on").siblings().removeClass("on");
			}else{
				showlis()
			}
		},2500)
	}).trigger('mouseleave')//一进来就触发定时器
	
	function leftgo(){
		index+=1;
		if(index<len){
			showlis()
		}else{
			firstlis()
			index=0;
			$("#olbox").find("li").eq(index).addClass("on").siblings().removeClass("on")
		}
		
	}
	$("#right").on("click",leftgo);
	function rightgo(){
		index-=1;
		if(index>=0){
			showlis()
		}else{
			index=len                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ;
			$("#olbox").find("li").eq(index).addClass("on").siblings().removeClass("on")
		}
	}
	$("#left").on("click",rightgo);
	function firstlis(){
		$("#lisbox").find("li:first").clone().appendTo("#lisbox");
		$("#lisbox").stop().animate({
			left:-len*w
		},function(){
			$("#lisbox").css('left',0).find("li:last").remove()
		})
	}
})
