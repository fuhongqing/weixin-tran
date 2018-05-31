$(function(){
	FastClick.attach(document.body);
	var proID = (window.location.search).substr(1,(window.location.search).length);
	//$(".back").attr("href","details.jsp?"+proID)
	var imgarr = [];
	var imgStr = "";
	var lookimg = ""
		function toLocaleString(date) {
	        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	    };//获取日期标签;
	
	$.post(newsdataStr+"/Project/dongtaidetails",{ id: proID},function(data){
			var unixTimestamp = new Date( check(data.dongtaitails[0].CreatTime) ) ;
			console.log(check(data.prostate))
			if(check(data.dongtaitails[0].ImgUrl) != ""){
				imgarr = check(data.dongtaitails[0].ImgUrl).split(",");
			
				if(imgarr.length == 1){
					imgStr = "<div class='newsimg newsimg1'><img src='"+imgurlStr+imgarr[0]+"' /></div>";
					lookimg =  "<div class='swiper-slide'> <div class='swiper-zoom-container'><img src='"+ imgurlStr+imgarr[0]+ "' /></div></div>";
				}else if(imgarr.length > 1){
					$.each(imgarr, function(i) {
						imgStr += "<div class='newsimg'><img src='"+imgurlStr+imgarr[i]+"' /></div>";
						lookimg +=  "<div class='swiper-slide'> <div class='swiper-zoom-container'><img src='"+ imgurlStr+imgarr[i]+ "' /></div></div>";
					})
				}
			}else{
				imgStr = "";
				lookimg = "";
			}
			
//			console.log(imgarr);
			commonTime = toLocaleString(unixTimestamp);
		
		
//		console.log(check(data.dongtaitails[0]));
		$(".newsDetails").html("<h4>"+ check(data.dongtaitails[0].Title) +"</h4><p>"+ commonTime +"</p><p>"
		+ check(data.dongtaitails[0].RContent) +"</p>"+imgStr);
		
		if(lookimg != ""){
	
			$(".newsDetails img").click(function(){
				$(".swiper02").html(lookimg);
				//$("#list").hide();
				$("body").css("overflow","hidden");
				$(".bannerBox").fadeIn();
				mySwiper1 = new Swiper ('.bannerBox .swiper-container', {
					initialSlide :$(".newsDetails img").index(this),
					zoom : true,
					zoomToggle :true,
				    // 如果需要分页器
				    pagination: '.bannerBox .swiper-pagination',
				    paginationType : 'fraction'
			 	});
	
			})
			$(".bannerBack").on("click",function(){
				//$("#list").show();
				$(".swiper02").html("");
				$("body").css("overflow","scroll");
				$(".bannerBox").fadeOut()
				//$(".imgBox").html("");
			});
			
			
			
			
		}
	})
})
