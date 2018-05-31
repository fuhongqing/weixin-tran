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

var month = (new Date()).getMonth() ? (new Date()).getMonth() : "12";
$("#month").html(month);

$ajax("login/personTop", {memberId: memberID}, personTop);
$ajax("login/xiangGuan", {memberId: memberID, condition: 2}, xiangGuan);

function personTop(data) {
    if (data.status === "success") {
        con.font = "60px PingFang-SC";
        con.fillText(data.data.zb, 90, 180);
        $("#cJJinE").html(data.data.cJJinE);
        //画实线圆形
        con.beginPath();
        con.lineWidth = 2;
        con.setLineDash([0, 0]);
        con.strokeStyle = "rgba(255,255,255,1)";
        con.arc(150, 150, 126, -0.5 * Math.PI, (parseInt(data.data.zb) / 100) * Math.PI + 0.5 * Math.PI);
        con.stroke();
    }
}

function xiangGuan(data) {
    if (data.status === "success") {
        var _data = data.info;
        var list = "<div><b>" + (_data.baoBei ? _data.baoBei : "0") + "</b>" +
            "<p style='color: #999999'>报备(组)</p></div>" +
            "<div><b>" + (_data.laiFang ? _data.laiFang : "0") + "</b>" +
            "<p style='color: #999999'>来访(组)</p></div>" +
            "<div><b>" + (_data.chengJiaoJinE ? _data.chengJiaoJinE : "0") + "</b>" +
            "<p style='color: #999999'>" + _data.chengJiaoShuLiang + "成交(套)</p></div>" +
            "<div><b>" + (_data.faFangYongJin ? _data.faFangYongJin : "0") + "</b>" +
            "<p style='color: #999999'>" + (_data.faFangShuLiang ? _data.faFangShuLiang : "0") + "发佣(套)</p></div>";
        $("#xiangGuan").html(list)
    }
}

$(".tab_nav_item").on("click", function () {
    var condition = +($(this).attr("data-condition"));
    $(".tab_nav_item").removeClass("active");
    $(this).addClass("active");
    $ajax("login/xiangGuan", {memberId: memberID, condition: condition}, xiangGuan);
});

var circle = document.getElementById("circle");
var con = circle.getContext("2d");
//画外部大圆
con.beginPath();
con.lineWidth = 12;
con.strokeStyle = "rgba(255,255,255,.6)";
con.arc(150, 150, 144, 0, 2 * Math.PI);
con.stroke();

//画虚线圆形
con.beginPath();
con.setLineDash([6, 6]);
con.lineWidth = 2;
con.strokeStyle = "rgba(255,255,255,.6)";
con.arc(150, 150, 126, 0, 2 * Math.PI);
con.stroke();

con.font = "24px PingFang-SC";
con.fillStyle = "#ffffff";
con.fillText("超过", 124, 100);

con.font = "24px PingFang-SC";
con.fillText("易好房经纪人", 80, 230);

