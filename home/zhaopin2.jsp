    <%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>易招聘</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <meta name="format-detection" content="telephone=no, email=no"/>
    <link href="http://www.ehaofang.com/img/ef.ico" type="image/x-icon" rel="icon">
    <link href="http://www.ehaofang.com/img/ef.ico" type="image/x-icon" rel="shortcut icon">
    <link rel="stylesheet" href="zhaopin/index.css">
    <style>
        #cnzz_stat_icon_1273316153 a {
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
<div class="container" id="SendmailforZP">
    <form>
        <div class="content">
            <div class="input-group">
                <div class="input-group-box">
                    <label>需求岗位</label>
                    <div class="input-group-input input-select data-target" id="IsManager"
                         data-target="IsManager_model">销售顾问
                    </div>
                    <input type="hidden" name="IsManager" value="0">
                </div>
            </div>
            <div class="input-group">
                <div class="input-group-box">
                    <label>需求人数</label>
                    <input name="Number" type="number" class="input-group-input" id="Number" step="1" min="1">
                </div>
            </div>
            <div class="input-group">
                <div class="input-group-box">
                    <label>工作地点</label>
                    <div class="input-group-input input-select data-target" id="AreaCityID"
                         data-target="AreaCityID_model">上海
                    </div>
                </div>
                <input type="hidden" name="AreaCityID" value="1">
            </div>
            <div class="input-group">
                <div class="input-group-box" style="position: relative">
                    <label>接收邮箱：</label>
                    <input type="email" name="Email" class="input-group-input" id="Email">
                    <ul class="on_changes" style="position: absolute; left: 7rem; top: 42px; display: none;">
                        <li email1="" style="display: none">请选择邮箱类型</li>
                        <li email1=""></li>
                        <li email1="@qq.com"></li>
                        <li email1="@163.com"></li>
                        <li email1="@sina.com"></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="input-group" style="border: none">
                <div class="input-group-box" style="height: 3rem">
                    <input type="checkbox" id="IsShare" class="input-group-input" name="IsShare">
                    <label for="IsShare" class="input-group-label"><span>独享岗位：</span><br><span class="tip">选择后，应聘者的简历仅会发送给您哦～</span>
                        <i></i></label>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="input-group" style="border: none">
                <div class="input-group-box" style="height: 3rem">
                    <input id="IsReservation" type="checkbox" class="input-group-input" name="IsReservation">
                    <label for="IsReservation" class="input-group-label"><span>代约面试：</span><br><span class="tip">服务正在测试中，我们将随机进行代约</span><i></i></label>
                </div>
            </div>
        </div>
    </form>
    <div class="button submit">提交</div>
</div>
<div id="IsManager_model" style="display: none">
    <div class="select-mask">
        <div class="main">
            <div class="title">需求岗位</div>
            <div>
                <div class="list active" type="IsManager" IsManager="0">销售顾问</div>
                <div class="list" type="IsManager" IsManager="2">分行经理</div>
            </div>
        </div>
    </div>
</div>
<div id="AreaCityID_model" style="display: none">
    <div class="select-mask">
        <div class="main">
            <div class="title">工作地点</div>
            <div style="height:calc(100% - 50px);overflow-y: scroll">
                <div style="height:20rem">
                    <div class="list active" type="AreaCityID" AreaCityID="1">上海</div>
                    <div class="list" type="AreaCityID" AreaCityID="3">苏州</div>
                    <div class="list" type="AreaCityID" AreaCityID="4">杭州</div>
                    <div class="list" type="AreaCityID" AreaCityID="7">嘉兴</div>
                    <div class="list" type="AreaCityID" AreaCityID="9">常州</div>
                    <div class="list" type="AreaCityID" AreaCityID="10">无锡</div>
                    <div class="list" type="AreaCityID" AreaCityID="11">南通</div>
                    <div class="list" type="AreaCityID" AreaCityID="14">南京</div>
                    <div class="list" type="AreaCityID" AreaCityID="295">合肥</div>
                    <div class="list" type="AreaCityID" AreaCityID="398">宁波</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container" style="display:none;text-align: center" id="result_success">
    <img src="img/img_success.png" alt="" style="width: 1.5rem;margin-top: 9.5rem;margin-bottom: 25px;">
    <p style="width:13.5rem;font-size: .8rem;color: #999999;margin: 0 auto 10rem auto">
        提交成功！我们将会以最快的速度将简历发送至您的邮箱，请注意查收！</p>
    <button class="button"
            style="width: 12rem;height: 2.3rem;line-height: 2.3rem;margin: 0 auto;border:1px solid #999999;background: transparent;color: #333333;border-radius: 2px"
            id="to_index" onclick="history.go(-2)">我知道了
    </button>
</div>
<div class="container" style="display:none;text-align: center" id="result_faile">
    <img src="img/img_failed.png" alt="" style="width: 2.5rem;margin-top: 9.5rem;margin-bottom: 25px;">
    <p style="font-size: .8rem;margin-top: 0;margin: 0 auto 10rem auto">抱歉，提交失败了！</p>
    <div class="button"
         style="width: 12rem;height: 2.3rem;line-height: 2.3rem;margin: 0 auto;margin-bottom: 1rem;border-radius: 2px"
         onclick="document.getElementById('result_faile').style.display='none';document.getElementById('SendmailforZP').style.display='block'">
        重新提交
    </div>
    <button class="button"
            style="width: 12rem;height: 2.3rem;line-height: 2.3rem;margin: 0 auto;border:1px solid #999999;background: transparent;color: #333333;border-radius: 2px"
            id="to_index1" onclick="history.go(-2)">直接关闭
    </button>
</div>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="zhaopin/inputmail.js"></script>
<script src="zhaopin/index.js?v=201804251459" charset="UTF-8" type="text/javascript"></script>
<script>
    $(function () {
        $("#Email").changeTips({
            divTip: ".on_changes"
        });
        var dataButton = $("[data-target]");
        for (var i = 0, l = dataButton.length; i < l; i++) {
            $(dataButton[i]).on("click", function () {
                var target = this.getAttribute("data-target");
                document.getElementById(target).style.display = ""
            })
        }
        $(".select-mask").click(function () {
            $(this).parent().hide()
        });
        $(".main").click(function (e) {
            e.stopPropagation();
        });
        $(".select-mask .list").on("click", function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            var type = $(this).attr("type");
            $("#" + type).html($(this).html());
            $("[name=" + type + "]").val($(this).attr(type));
            $(".select-mask").parent().hide()
        });
    })
</script>
<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cspan id='cnzz_stat_icon_1273316153'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1273316153' type='text/javascript'%3E%3C/script%3E"));</script>
</body>
</html>