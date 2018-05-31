$(function(){
	var proID = (window.location.search).substr(1,(window.location.search).length);
	$(".back").attr("href","details.jsp?"+proID)
	$.post(dataStr+"/Project/projectdetails",{propertyID:proID}, function(data){
		//console.log(check(data.yjfa))
		var caseStr = "";
		if (check(data.yjfa).length) {
			$.each(check(data.yjfa), function(i) {
				caseStr += "<p>"+ check(data.yjfa[i].CommissionAdword) +"<b>"+ check(data.yjfa[i].CommissionMoney) +"元/套</b></p>";
			});

			$(".buildCase").append(caseStr);
			
		}
	})
})
