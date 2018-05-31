    <%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>易招聘</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="zhaopin/index.css">
    <style>
        #cnzz_stat_icon_1273316153 a{
            display: none;
        }
    </style>
</head>
<body>
<div class="header">
    <div class="title">易招聘</div>
    <div class="back" onclick="history.go(-1)">
    </div>
</div>
<div class="bg">
    <img src="zhaopin/img/img_bg2.jpg" alt="" style="width: 100%;display: block">
    <div class="button-next">立即申请</div>
</div>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script>
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
    const canUse = true;
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
    document.getElementsByClassName("button-next")[0].onclick = function () {
        if (!canUse) {
            var layerOptions = {
                text: "由于近期提交需求过于火爆，本期名额已满，敬请期待我们下次开发哦～！",
                showCancel: false,
                ensuerFunc: ensuerFunc,
                ensuerText: "我知道了",
            };
            popLayer.init(layerOptions);
            return
        }
        window.location.href="zhaopin2.jsp?memberId="+ GetUrlParms().memberID
    };
    var ensuerFunc = function () {
        popLayer.closeLayer();
    };
</script>
<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1273316153'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1273316153' type='text/javascript'%3E%3C/script%3E"));</script>
</body>
</html>
