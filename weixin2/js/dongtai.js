$(function(){
//				var proID = (window.location.search).substr(1,(window.location.search).length);
//				$(".back").click(function(){
//					history.back();
//				})
	$.post(newsdataStr+"/Project/dongtai",{pageSize:"30",pageNum:"0"}, function(data){
		
		console.log(data)
		function toLocaleString(date) {
	        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	    };//获取日期标签;
		if(check(data.dongtai)){	
		    var newsStr = "";
		    var newsimg = ""
		    $.each(check(data.dongtai),function(i){
				var unixTimestamp = new Date( check(data.dongtai[i].CreatTime) ) ;
				commonTime = toLocaleString(unixTimestamp);
				if (check(data.dongtai[i].minurlList[0])) {
					newsimg = imgurlStr+ check(data.dongtai[i].minurlList[0])
					
				} else{
					newsimg = '../img/picture1.png';
				}
		    	newsStr += "<a href='newsDetails.jsp?"+ check(data.dongtai[i].ID) +"'><dl class='clearfix'><dt><img src='"+ newsimg +"' /></dt><dd>"
						+ check(data.dongtai[i].Title) +"</dd><dd>"+ check(data.dongtai[i].PropertyName) +"<span>"+ commonTime +"</span></dd></dl></a>";
		    	
		    })
	    }
		$(".buildNews1").html(newsStr);
	})
})
