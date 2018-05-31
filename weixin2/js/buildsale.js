$(function(){
	var proID = (window.location.search).substr(1,(window.location.search).length);
	$(".saleChoose span").on("touchstart",function(){
		$(".saleChoose span").removeClass("saleActive").eq($(this).index()).addClass("saleActive");
		$(".saleMsgbox div").hide().eq($(this).index()).show();
		
		//$(".saleChoose").scrollLeft(70)
	})
	$(".saleChoose span:lt(2)").on("touchstart",function(){
		$(".saleChoose").animate({ scrollLeft: 0 }, 200);
	})
	$(".saleChoose span:gt(1)").on("touchstart",function(){
		$(".saleChoose").animate({ scrollLeft: 70 }, 200); 
	})
	$.post(dataStr+"/Project/maidi",{propertyid:proID},function(data){
		console.log(data);
		$(".saleMsg1").html(data.map.lfmd[0].Advantage);
		$(".saleMsg2").html(data.map.lfmd[0].Attribute);
		$(".saleMsg3").html(data.map.lfmd[0].Process);
		$(".saleMsg4").html(data.map.lfmd[0].TheWords);
	})
	
})
