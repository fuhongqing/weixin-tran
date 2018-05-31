$(function(){
	FastClick.attach(document.body);

//	var proURL = decodeURI((window.location.search).substr(1,(window.location.search).length));
//	//console.log(proURL.indexOf("&"));
//	var thiscustomerId = proURL.substr(proURL.indexOf("&")+1,proURL.length);
//	var thishouseId = proURL.substr(0,proURL.indexOf("&"));
	var jinduStr = "";
	var qyStr = "";
	var ddStr = "";
	
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
			
				if(data.data.commissionInfo){
	
					$(".visitItem").html("<div><b></b>"+ check(data.data.customerList[0].customerName) +"</div>"
						+"<div><i></i>"+ check(data.data.customerList[0].PhoneNum) +"</div>"
						+"<div>"+ check(data.data.commissionInfo[0].propertyName) +" "+check(data.data.commonInfo[0].buildingName) +" "+check(data.data.commonInfo[0].unitName)+"-"+check(data.data.commonInfo[0].roomNumber)+"</div>");
		
								
					$(".commissionDetail").html("<h4>佣金详情</h4>"
						+"<li>申佣时间<span>"+ checkMsg(data.data.commissionInfo[0].updateTime) +"</span></li>"
						+"<li><b>佣</b>金<span>"+ checkMsg(data.data.commissionInfo[0].commissionMoney) +"元</span></li>"
						+"<li><b>折</b>佣<span>"+ checkMsg(data.data.commissionInfo[0].zyMoney) +"元</span></li>"
						+"<li>应发佣金<span>"+ checkMsg(data.data.commissionInfo[0].shouldSendMoney) +"元</span></li>"
						+"<li>联动姓名<span>"+ checkMsg(data.data.commissionInfo[0].placeUserName) +"</span></li>"
						+"<li>提供发票<span>"+ check(data.data.commissionInfo[0].isInvoice) +"</span></li>")
				
				}
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
				
				var commissionChecks = check(data.data.commissionChecks);
				if(commissionChecks){
				
					$.each(commissionChecks, function(i) {
						jinduStr += "<li><b></b>"+check(commissionChecks[i].createTime)+"<i></i>"+ check(commissionChecks[i].showContent) +"</li>"
					});
				}
			}else{
				alert('error')
			}
			
			$(".commissionProgress").append(jinduStr);
			$(".commissionContent").append(qyStr);
			$(".commissionContent").append(ddStr);
			function fapiao(t){
				if (t == "1 ") {
					return t = "是";
				}else{
					return t = "否";
				}
			}
		    function checkMsg(Num){
		    	if ((!Num)&&(Num!=0)||(Num.length ==0)) {
		    		return Num = "-- ";
		    	}else{
		    		return Num;
		    	}
		    }
			
		}
	})	
})
