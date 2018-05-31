var memberID = GetUrlParms().memberID;
function $ajax(url, data, callBack) {
    $.ajax({
        type: "POST",
        url: rootURL + url,
        data: data,
        dataType: "json",
        success: function (data) {
            callBack(data)
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function debounce(fn, delay) {
    var timer;
    return function () {
        clearTimeout(timer);
        var _this = this;
        timer = setTimeout(function () {
            fn();
        }, delay)
    }
}

function IsManager(n) {
    var IsManager;
    switch (n) {
        case 0:
            IsManager = "销售顾问";
            break;
        case 1:
            IsManager = "分行店长";
            break;
        case 2:
            IsManager = "分行经理";
            break;
        case 3:
            IsManager = "公司高管";
            break;
        case 4:
            IsManager = "其他职位";
            break;
        default:
            IsManager = "未定";
            break;
    }
    return IsManager;
}

var flag = false;
var pageNum = 0;
var pageSize = 20;
var winHeight = $(window).height();
$(window).scroll(debounce(scrollFun, 100));
$ajax("login/myEmployee", {
    MemberId: memberID,
    pageNum: pageNum + "",
    pageSize: pageSize + ""
}, myEmployee);

function scrollFun() {
    if (flag && ($(window).scrollTop() + winHeight + 100 > $("#tab_list").height())) {
        flag = !flag;
        $ajax("login/myEmployee", {
            MemberId: 167,
            pageNum: pageNum + "",
            pageSize: pageSize + ""
        }, myEmployee)
    }
}

function myEmployee(data) {
    if (data.status === "success") {
        var _data = data.data.myEmployee;
        if (!_data.length) {
            $("#tab_list").append("<div style='text-align: center;padding: .75rem;color: #666666'>没有员工信息</div>");
            return
        }
        var lists = [];
        for (var i = 0, l = _data.length; i < l; i++) {
            var list = " <div class='tab_list_item'>" +
                "                <div class='tl_1'>" +
                "                    <p><span>" + (_data[i]["FullName"] ? _data[i]["FullName"] : "***") + "</span><span class='IsManager'>" + IsManager(_data[i]["IsManager"]) + "</span></p>" +
                "                    <p class='Mobilephone'>" + _data[i]["Mobilephone"] + "</p>" +
                "                </div>" +
                "                <div class='tl_2'>" +
                "                    <p>注册时间:" + _data[i]["CreatTime"] + "</p>" +
                "                </div>" +
                "                <a class='tl_3' href='tel:" + _data[i]["Mobilephone"] + "#mp.weixin.qq.com'>" +
                "                    <img src='img/ic_phone@2x.png' alt=''>" +
                "                </a>" +
                "            </div>";
            lists.push(list)
        }
        lists = lists.join("");
        $("#tab_list").append(list);
        pageNum++;
        flag = !flag;
    }
}
