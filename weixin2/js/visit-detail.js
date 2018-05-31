$(function(){
	FastClick.attach(document.body);
//	var proURL = decodeURI((window.location.search).substr(1,(window.location.search).length));
//	var thiscustomerID = proURL.substr(0,proURL.indexOf("&"));
//	var thisproccessId = proURL.substr(proURL.indexOf("&")+1,proURL.length);
    var params = window.location.search.substr(1).split('&');
	$.ajax({
		type:"get",
		url:dataStr+"/v1/customer",
		data:{
			customerState:params[0],	//是	Integer	customerState(列表给出)
			customerId:params[1],	//是	Long	customerId(列表给出)
			transactionNumber:params[2]	//否	String	transactionNumber(列表给出)
		},
		success:function(data){
			console.log(data);

			if (data.code == 200) {
	
				$(".visitItem").html("<div><b></b>"+check(data.data.customerList[0].customerName)+"</div><div><i></i>"
						+check(data.data.customerList[0].customerPhone)+"</div><div>"
						+check(data.data.reportInfo[0].propertyName)+"</div>");
				var visitStr = "";
				var visitorCount = [];
				for (var i =1;i<=data.data.visitInfo.length;i++) {
					visitorCount.push(i)
				}
				visitorCount = visitorCount.reverse();
				console.log(visitorCount);
				$.each(check(data.data.visitInfo), function(i) {
					visitStr += "<ul><h4>"+ checkMsg(visitorCount[i]) +"访<span>"+checkMsg(data.data.visitInfo[i].realVisitTime)+"</span></h4>"
							+"<li>来访人数<span>"+checkMsg(data.data.visitInfo[i].visitorsNumber)+"</span></li>"
							+"<li>案场销售<span>"+checkMsg(data.data.visitInfo[i].saleUserName)+"</span></li>"				
							+"<li><b>落</b>座<span>"+check(data.data.visitInfo[i].isSitDown)+"</span></li>"//1 落座  2没有落座
							+"<li><b>落</b>位<span>"+check(data.data.visitInfo[i].isEngoyHouse)+"</span></li>"//不为空  说明落位了
							+"<li><b>出</b>价<span>"+checkMsg(data.data.visitInfo[i].offerPrice)+"</span></li>"
							+"<li>下次来访<span>"+checkMsg(data.data.visitInfo[i].nextComeTime)+"</span></li>"
							+"<li><b>备</b>注<span>"+checkMsg(data.data.visitInfo[i].remark)+"</span></li></ul>"
				});
			}else{
				alert('error')
			}
			$(".visitContent").html(visitStr);
		function IsSeat(t){
			if(t == "1"){
				return t = " 是";
			}else{
				return t = " 否";
			}
		}
	    function checkMsg(Num){
	    	if ((!Num)&&(Num!=0)||(Num.length ==0)) {
	    		return Num = "-- ";
	    	}else{
	    		return Num;
	    	}
	    }

		function HouseIDarr(t){
			if(t == ""){
				return t = " 否";
			}else{
				return t = " 是";
			}
		}
			
		}
		
	});
});
