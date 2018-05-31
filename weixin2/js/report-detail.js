$(function(){
	FastClick.attach(document.body);
//	var proURL = decodeURI((window.location.search).substr(1,(window.location.search).length));
//	var customerId = proURL.substr(proURL.indexOf("&")+1,proURL.length);
//	var propertyId = proURL.substr(0,proURL.indexOf("&"));
	
    var clipboard = new Clipboard('.copyBtn');
    
    var params = window.location.search.substr(1).split('&');
	
	//console.log(propertyId+"-----"+customerId);
	
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
				$(".reportContent ul").html("<li><b>姓</b>名:<span>"+ check1(data.data.customerList[0].customerName) +"</span></li>"
					+"<li><b>电</b>话:<span>"+ check1(data.data.customerList[0].customerPhone) +"</span></li>"
					+"<li class='reportPro'>意向项目:<span>"+ check1(data.data.reportInfo[0].propertyName) +"</span></li>"
					+"<li>预访时间:<span>"+ check1(data.data.reportInfo[0].visitTime) +"</span></li>"
					+"<li>案场销售:<span>"+ check1(data.data.reportInfo[0].saleUserName) +"</span></li>"
					+"<li>来访方式:<span>"+ check1(data.data.reportInfo[0].visitType) +"</span></li>"
					+"<li>报备时间:<span>"+ check1(data.data.reportInfo[0].reportTime) +"</span></li>");

			
			}
			$("#clickButton").on("click",function(){
				window.location.href = "add-reserve-client.jsp?"+ check(data.data.customerList[0].customerName) + "@" + check(data.data.customerList[0].customerPhone) ;
			})
			
			function checkvisitor(num){
				if(num == "0"){
					return num = "";
				}else{
					return num ;
				}
			}
			function check1(num){
				if((num == "")||(!num)&&(num!=0)){
					return num = "无";
				}else{
					return num ;
				}
			}
			
		}
	});
	
//复制文本				
	
	    clipboard.on('success', function(e) {
	        //console.log(e);
	    	  console.info('Action:', e.action);
	    	  console.info('Text:', e.text);
	    	  console.info('Trigger:', e.trigger);
			warn("文本已复制！");
			e.clearSelection();
	    });
		function warn(word){
			$(".warn").html(word).fadeIn("fast");
			setTimeout(function(){$(".warn").fadeOut("normal");},2000)
		}
	
	    clipboard.on('error', function(e) {
	    	  console.error('Action:', e.action);
	    	  console.error('Trigger:', e.trigger);
	        //console.log(e);
	    });

})
