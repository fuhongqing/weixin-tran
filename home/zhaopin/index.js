"use strict";
// const rootURL = "http://agent2.ehaofang.com/efapp2/";
const rootURL = "http://weixintest.ehaofang.com/efapp2/";
var GetUrlParms = function () {
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
};
var memberId = GetUrlParms().memberId;
var popLayer = {
    option: {},
    init: function (option) {
        this.initOptions(option);
        this.initElement();
        this.ensuer_Func();
        this.cancel_Func();
    },
    initOptions: function (option) {
        this.option = option;
    },
    closeLayer: function () {
        document.getElementsByClassName("j-pop1")[0].parentNode.removeChild(document.getElementsByClassName("j-pop1")[0]);
    },
    ensuer_Func: function () {
        var _this = this;
        document.getElementsByClassName("ensuer")[0].onclick = function () {
            return _this.option.ensuerFunc();
        };
    },
    cancel_Func: function () {
        if (this.option.showCancel) {
            var _this = this;
            document.getElementsByClassName("cancel")[0].onclick = function () {
                return _this.option.cancelFunc();
            };
        }
    },
    initElement: function () {
        var ele = "<div style='display: table-cell;vertical-align: middle;text-align: center'>" +
            "<div class='j-pop-cont' style='border:1px solid #cccccc'>" +
            "<div class='j-pop-cont-detail'>" +
            "<div class='j-pop-txt'>" +
            "<span class='text'>" + this.option.text + "</span>" +
            "</div>" +
            "</div>" +
            "<div class='j-pop-btn'>" +
            (this.option.showCancel ? "<span class='cancel'>" + this.option.cancelText + "</span>" + "<span class='ensuer'>" + this.option.ensuerText + "</span>" :
                "<span class='ensuer' style='width: 100%'>" + this.option.ensuerText + "</span>") +
            "</div>" +
            "</div>" +
            "</div>";
        var createElement = document.createElement("div");
        createElement.className = "j-pop1";
        createElement.innerHTML = ele;
        document.body.appendChild(createElement);
    },
};
var BallWithTime = {
    option: {},
    init: function (option) {
        this.initOptions(option);
        this.initElement();
        this.closeLayer();
    },
    initOptions: function (option) {
        this.option = option
    },
    initElement: function () {
        var ele = "<div style='display: table-cell;vertical-align: middle;text-align: center'>" +
            "<div class='j-pop-cont'>" +
            "<div class='j-pop-cont-detail'>" +
            "<div class='j-pop-txt'>" +
            "<span class='text'>" + this.option.text + "</span>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        var createElement = document.createElement("div");
        createElement.className = "j-pop1 pop-reverse";
        createElement.innerHTML = ele;
        document.body.appendChild(createElement);
    },
    closeLayer: function () {
        setTimeout(function () {
            document.getElementsByClassName("j-pop1")[0].parentNode.removeChild(document.getElementsByClassName("j-pop1")[0]);
        }, this.option.delay || 2000)
    },
};

var flag = true;
var testEmail = function (email) {
    var reg = /^[A-Za-z0-9_-\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return reg.test(email)
};
var SendmailforZP = function (data) {
    $("#SendmailforZP").hide();
    if (data.status === "success") {
        $("#result_success").show();
    } else {
        $("#result_faile").show();
    }
};
var ensuerFunc = function () {
    popLayer.closeLayer();
};
var cancelFunc = function () {
    flag = false;
    popLayer.closeLayer();
};
var zhaopin = function (data) {
    console.log(data)
};

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

//提交
$(".submit").on("click", function () {
    if (!$("#Number").val()) {
        BallWithTime.init({text: "请输入人数"});
        return
    }
    if (!testEmail($("#Email").val())) {
        BallWithTime.init({text: "请输入有效的邮件地址"});
        return
    }
    var text = $("#AreaCityID").html() + "、" +
        $("#IsManager").html() + "、" + $("#Number").val() + "人、" +
        ($("#IsShare").prop("checked") ? "独享、" : "不独享、") + ($("#IsReservation").prop("checked") ? "代约" : "不代约");
    var text_json = {
        MemberID: memberId,
        AreaCityID: $("[name=AreaCityID]").val(),
        IsManager: $("[name=IsManager]").val(),
        Number: $("#Number").val(),
        Email: $("#Email").val(),
        IsShare: $("#IsShare").prop("checked") ? "1" : "0",
        IsReservation: $("#IsReservation").prop("checked") ? "1" : "0"
    };
    $ajax("Project/zhaopin", text_json, zhaopin);
    $ajax("login/SendmailforZP", {
        text: text,
        memberId: memberId,
        Email: $("#Email").val()
    }, SendmailforZP);
});
$(".data-target").on("click", function () {
    var target = this.getAttribute("data-target");
    document.getElementById(target).style.display = "block";
})
document.getElementById("Number").oninput = function () {
    this.value = parseInt(this.value)
};


