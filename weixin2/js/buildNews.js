$(function(){
	FastClick.attach(document.body);

	var proID = (window.location.search).substr(1,(window.location.search).length);
	$(".back").click(function(){
		window.history.back();
	})
	$.post(dataStr+"/Project/projectdetails",{propertyID:proID}, function(data){
		
		console.log(data)
		function toLocaleString(date) {
	        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	    };//获取日期标签;
		if(check(data.prostate)){	
		    var newsStr = "";
		    var newsimg = "";
		    $.each(check(data.prostate),function(i){
				var unixTimestamp = new Date( check(data.prostate[i].CreatTime) ) ;
				
				commonTime = toLocaleString(unixTimestamp);
				if(data.prostate[i].midurlList[0]){
					newsimg = imgurlStr + data.prostate[i].midurlList[0];
				}else{
					newsimg = "../img/picture1.png";
				}
		    	newsStr += "<dl class='clearfix'><a href='newsDetails.jsp?"+ check(data.prostate[i].ID) +"'><dt><img src='" + newsimg +"' /></dt><dd>"
							+ check(data.prostate[i].Title) +"</dd><dd>"+ commonTime +"</dd></a></dl>";
		    	
		    })
	    }
		$(".buildNews1").html(newsStr);
	})
})
