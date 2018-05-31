$(function(){
	FastClick.attach(document.body);
//	var proURL = decodeURI((window.location.search).substr(1,(window.location.search).length));
//	var proArr = proURL.split("&");
	
	var qyStr = "";
	var ddStr = "";
	var xdStr = "";
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
			
				$(".visitItem").html("<div><b></b>"+ check(data.data.customerList[0].customerName) +"</div>"
						+"<div><i></i>"+ check(data.data.customerList[0].customerPhone) +"</div>"
						+"<div>"+check(data.data.commonInfo[0].propertyName) +" "+check(data.data.commonInfo[0].buildingName) +" "+check(data.data.commonInfo[0].unitName)+"-"+check(data.data.commonInfo[0].roomNumber)+"</div>");
			
				if(data.data.dadingInfo){
					ddStr = "<ul>"
						+"<h4>大定<span>"+ checkMsg(data.data.dadingInfo[0].ddTime) +"</span></h4>"
						+"<li>大定金额<span>"+ checkMsg(data.data.dadingInfo[0].price) +"</span></li>"
						+"<li>团购方案<span>"+ checkMsg(data.data.dadingInfo[0].activityName) +"</span></li>"
						+"<li>案场销售<span>"+ checkMsg(data.data.dadingInfo[0].saleUserName) +"</span></li>"
						+"<li>约签时间<span>"+ checkMsg(data.data.dadingInfo[0].nextContractTime) +"</span></li>"
						+"<li><b>备</b>注 <span>"+ checkMsg(data.data.dadingInfo[0].remark) +"</span></li>"
						+"</ul>";
					
				}
				if(data.data.signInfo){
						qyStr = "<ul>"
							+"<h4>签约<span>"+ checkMsg(data.data.signInfo[0].signTime) +"</span></h4>"
							+"<li>签约总价<span>"+ checkMsg(data.data.signInfo[0].totalPrice) +"</span></li>"
							+"<li><b>面</b>积<span>"+ checkMsg(data.data.signInfo[0].buildArea) +"平米</span></li>"
							+"<li>团购方案<span>"+ checkMsg(data.data.signInfo[0].activityName) +"</span></li>"
							+"<li>案场销售<span>"+ checkMsg(data.data.signInfo[0].saleUserName) +"</span></li>"
							+"<li><b>备</b>注<span>"+ checkMsg(data.data.signInfo[0].remark) +"</span></li>"
						+"</ul>";
	
				}
			}else{
				alert('error')
			}
			$(".signContent").append(qyStr);
			$(".signContent").append(ddStr);
			
		}	
	});
    function signStatus(t){
    	
		switch(t)
		{
		case 0:
		  return t = "未售"
		  break;
		case 1:
		  return t = "带看"
		  break;
		case 2:
		  return t = "小定"
		  break;
		case 3:
		  return t = "大定"
		  break;
		case 4:
		  return t = "签约"
		  break;
		default:
		  return t = "未知"
		}			                    
    }
								  
    function checkMsg(Num){
    	if ((!Num)&&(Num!=0)||(Num.length ==0)) {
    		return Num = "-- ";
    	}else{
    		return Num;
    	}
    }

})
