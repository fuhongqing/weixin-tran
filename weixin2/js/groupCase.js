$(function(){
	var proID = (window.location.search).substr(1,(window.location.search).length);
	$(".back").attr("href","details.jsp?"+proID)
	$.post(dataStr+"/Project/projectdetails",{propertyID:proID}, function(data){
		
		console.log(check(data.tgxq))
		var groupStr = "";
		$.each(check(data.tgxq), function(i) {
			groupStr += "<p>"+ check(data.tgxq[i].BuildingType) +"<b>"+ check(data.tgxq[i].DetailName) +"</b></p>";
		});
		
		$(".groupCase1").append(groupStr);
	})
})
