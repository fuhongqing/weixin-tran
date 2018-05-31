<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <link rel="stylesheet" href="css/login.css?v=201807080851">
    <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script type="text/javascript">
        var pageUrl = '<%=request.getParameter("url")%>';
        var weixinOpenId = '<%=session.getAttribute("WeixinOpenId")%>';//微信openid 网站页面的openID skudvheonfeljnvljervnlekkvn
        var weixinunionId = '<%=session.getAttribute("unionID")%>';//微信app用户唯一标识符 eklvugoerfjerpvoerv

    </script>
</head>
<body>
    <div class="page" id="indexPage">
        <!--图片-->
        <header>
            <img src="img/login_bg_title.png" alt="">
        </header>
        <!--手机号，密码-->
        <div id="title" class="backHead">
            <div class="back"><img src="img/topbar_ic_back_black.png" alt=""></div>
            <div class="center">绑定手机号</div>
        </div>
        <section>
            <div id="pnm">
                <input type="text" placeholder="请输入手机号">
                <img src="img/home_ic_close.png" alt="">
                <button>获取验证码</button>
            </div>
            <div id="pwd">
                <input type="text" placeholder="请输入验证码">
            </div>
            <div id="login" class="btn">下一步</div>
        </section>
    </div>
    <!--完善信息页面-->
    <div class="page_next">
        <header class="backHead">
            <div class="back"><img src="img/topbar_ic_back_black.png" alt=""></div>
            <div class="center">完善信息</div>
            <div id="ignore">跳过</div>
        </header>
        <section>
            <div class="container">
                <div class="row" id="realName">
                    <span>真实姓名：</span><input type="text" placeholder="请输入真实姓名">
                </div>
                <div class="row">
                    <span>我的职位：</span>
                    <div id="myJob">
                        <span>请选择</span>
                        <img src="img/home_btn_more_grey.png" alt="">
                    </div>
                </div>
                <div class="row" id="setPwd">
                    <span>设置密码：</span><input type="password" placeholder="请输入密码">
                </div>
                <div class="row" id="confirmPwd">
                    <span>确认密码：</span><input type="password" placeholder="确认密码">
                </div>
            </div>
            <div class="row">
                <span>分行码：</span>
                <input type="text" placeholder="咨询分行经理获取分行码" id="branchCode">
            </div>
            <div id="addAgent">添加公司认证</div>
            <div id="next" class="btn">下一步</div>
        </section>
        <footer>
            <p>如何获取分行码？</p>
            <p>分行码是易好房合作经纪门店的唯一标识，可咨询您的分行经理获取唯一的邀请码，完善提交后即可报备/带看，赚取佣金，并享受便捷透明的结佣方式。 </p>
            <p>若贵司未与我司签约合作，可点击拨打<a href="tel:021-31338882">021-31338882</a>咨询合作。</p>
        </footer>
    </div>
    <!--提示框-->
    <div class="modal">
        <div class="toast"></div>
    </div>
    <!--职位选择弹框-->
    <div class="jobModal">
        <ul class="topDiv">
            <li class="title">我的职位</li>
            <li class="0item"><span>销售顾问</span><img src="img/all_ic_selecte_green.png" alt=""></li>
            <li class="1item"><span>分行店长</span><img src="img/all_ic_selecte_green.png" alt=""></li>
            <li class="2item"><span>分行经理</span><img src="img/all_ic_selecte_green.png" alt=""></li>
            <li class="3item"><span>公司高管</span><img src="img/all_ic_selecte_green.png" alt=""></li>
            <li class="4item"><span>其他</span><img src="img/all_ic_selecte_green.png" alt=""></li>
        </ul>
    </div>
<script type="text/javascript" src="js/login.js?v=201869080851"></script>
</body>
</html>