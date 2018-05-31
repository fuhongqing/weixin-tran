var oHtml = document.documentElement;

getSize();

function getSize(){

	var screenWidth = oHtml.clientWidth;
	//console.log(screenWidth);

	if(screenWidth >= 640){

		oHtml.style.fontSize = '40px';

	}else if(screenWidth <= 320){

		oHtml.style.fontSize = '20px';

	}else{

		oHtml.style.fontSize = screenWidth/640*40 +'px';

	}	

};

window.onresize = function(){

	getSize();

};

window.confirm = function (message) {
   var iframe = document.createElement("IFRAME");
   iframe.style.display = "none";
   iframe.setAttribute("src", 'data:text/plain,');
   document.documentElement.appendChild(iframe);
   var alertFrame = window.frames[0];
   var result = alertFrame.window.confirm(message);
   iframe.parentNode.removeChild(iframe);
   return result;
 };
//点击返回
$(".back").on("click",function(){
	window.history.back();
});

//检查数值
function check(Num){
	if ((!Num)&&(Num!=0)) {
		return Num = "";
	} else{
		return Num;
	}
}
//正式url
// var dataStr = "http://www.ehaofang.com/efapp";
// var dataStr2 = "http://agent2.ehaofang.com/efapp2";
// var dataStr3 = "http://agent2.ehaofang.com/efapp2";//2.5.3测试接口
// var imgurlStr = "http://images.ehaofang.com/";


// var dataStr = "http://192.168.3.159:80/api/";
//测试url
   var dataStr = "http://agentapi.ehaofang.net/api/";
   var hrdataStr = "http://hr.ehaofang.net/api/";
   
   var newsdataStr = "http://agent2.ehaofang.com/efapp2";
   var imgurlStr = "http://images.ehaofang.com/";


// var urlStr3 = "http://jjrtest.ehaofang.net";//2.5.3跳转地址



// var thiswxOpenId = localStorage.getItem('wxOpenId');
// var thiswxUnionId = localStorage.getItem('wxUnionId');


var thismemberID = localStorage.getItem('memberID');


var thisparentID = "";
var thisbranchID = "";
var thisunionID = "";
var thisfullName = "";
var thissex = "";
var thisagencyName = "";
var thisbranchName = "";
var thisphone = "";
var thisagencyCode = "";
var userType;
var manageLevel;

$.ajax({
	url: dataStr + "v1/agent/getChannelAgent?id="+thismemberID,
    type:"get",
    async:false,
    success: function(data) {
		if (data.code == 200) {
		    	thisparentID = data.data.companyId;//公司id
		    	thisbranchID = data.data.branchId;//分行id
		    	thisunionID = data.data.WeixinOpenId;
		    	thisfullName = data.data.name;//经纪人名字
		    	thissex = data.data.sex;//性别（0-未知，1-男，2-女）
		    	thisagencyName = data.data.companyName;//公司名字
		    	thisbranchName = data.data.branchName;//分行名字
		    	thisphone = data.data.phone;//经纪人手机号
		    	thisagencyCode = data.data.branchCode;//分行码
		    	userType = data.data.userType;//账号类型 1 游客  2 经纪人
		    	manageLevel =  data.data.manageLevel;//管理级别(0-普通员工，1-分行经理)
		} else{
			
		}

    }
});
var thiscustomerStatus = [];//客户列表传参
$.ajax({
	url: dataStr + "/options",
    type:"get",
    async:false,
    success: function(data) {
		if (data.code == 200) {
			thiscustomerStatus  =data.data.customerStatus;
		} else{
			
		}

    }
});
$("footer a").eq(0).on("touchstart",function(){
		window.location.href = "index.jsp";
});

$("footer a").eq(1).on("touchstart",function(){
	if (userType == "2") {
		window.location.href = "client-index.jsp";
	} else{
		var con;
		con=confirm("是否去绑定分行码查看？"); 
		if(con==true){
			window.location.href = "../../login/login.jsp?member=1";
		}
	}
});
$("footer a").eq(2).on("touchstart",function(){
	if (userType == "2") {
		window.location.href = "add-reserve-client.jsp";
	} else{
		var con;
		con=confirm("是否去绑定分行后报备？"); 
		if(con==true){
			window.location.href = "../../login/login.jsp?member=1";
		}
	}
});
$("footer a").eq(3).on("touchstart",function(){
		window.location.href = "dongtai.jsp";
});
$("footer a").eq(4).on("touchstart",function(){
		window.location.href = "mine.jsp";
});
$(".visitor").on("click",function(){
	var con;
	con=confirm("是否去绑定分行码查看？");
	if(con==true){
		window.location.href = "../../login/login.jsp?member=1";
	}
	
});

