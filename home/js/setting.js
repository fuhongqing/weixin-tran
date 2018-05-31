function GetUrlParms() {
    var args = new Object();
    var query = location.search.substring(1);//获取查询串
    var pairs = query.split("&");//在逗号处断开
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');//查找name=value
        if (pos == -1) return;//如果没有找到就跳过
        var argname = pairs[i].substring(0, pos);//提取name
        var value = pairs[i].substring(pos + 1);//提取value
        args[argname] = decodeURI(value);//存为属性
    }
    return args;
}

var imgUrl = "http://images.ehaofang.com/";
var propertyURL_HOME = "../../floordetail/floordetail.jsp?";
var propertyURL_LIST = "../floordetail/floordetail.jsp?";

// 正式
//  var rootURL = "http://agent2.ehaofang.com/efapp2/";
//  var appID = "wx54409552def47f3f";
//  var demoURL = "http://weixin.ehaofang.com/efangnet/weixin/member/demo.html";
//  var loadWeinXinMember = "http://agent2.ehaofang.com/efapp2/login/weixinLogin_2";

// 测试

var oldRootURL = 'http://agent2.ehaofang.com/efapp2/';//"http://weixintest.ehaofang.com/efapp2/";
var rootURL = 'http://jjrtest.ehaofang.com/';//http://agentapi.ehaofang.net/";
var appID = "wx9cbe0adb2edc523f";
var demoURL = "http://weixintest.ehaofang.com/efangnet/weixin/member/demo.html";
var loadWeinXinMember = "http://jjrtest.ehaofang.com/api/v1/agent/weixinLogin";

