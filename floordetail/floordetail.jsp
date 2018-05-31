<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>楼盘详情</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <link rel="stylesheet" href="css/swiper.min.css">
    <link rel="stylesheet" href="css/floorDetail.css?v=201806161050">
    <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
        <script src="js/floorDetail.js"></script>
    </head>
    <body>
    <!--loading-->
    <main id="loading" class="loaded">
        <div class="loaders">
            <div class="loader">
                <div class="loader-inner ball-spin-fade-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </main>
    <%--<script>--%>
        <%--document.addEventListener('DOMContentLoaded', function () {--%>
            <%--document.querySelector('main').className += 'loaded';--%>
        <%--});--%>
    <%--</script>--%>
    <!--楼盘详情页-->
    <div id="floorDetail">
    <header>
    <!--头部工具条-->
    <div id="topTool">
    <div class="backImg"  onclick="history.back()"><img src="img/topbar_ic_back_white@2x.png" alt=""></div>
    </div>
    <!--图片-->
    <div class="swiper-container headerImg">
    <ul class="swiper-wrapper">
    </ul>
    </div>
    <!--分页-->
    <div id="topPages">
    <div></div>
    <p></p>
    </div>
    </header>
    <!--向上滑动时头部-->
    <div id="swiperTitle">
    <!--动态-->
    </div>
    <!--向上滑动时导航条-->
    <div class="scrollAuto">
    <ul id="navbars">
    <li class="active commissionInfo"><a href="#commissionInfo">佣金信息</a></li>
    <li class="preferential"><a href="#preferential">优惠活动</a></li>
    <li class="sellPoints"><a href="#sellPoints">楼盘卖点</a></li>
    <li class="renderings"><a href="#renderings">户型图</a></li>
    <li class="progress"><a href="#progress">请佣流程</a></li>
    <li class="declaration"><a href="#declaration">规则说明</a></li>
    <li class="guess"><a href="#guess">猜你喜欢</a></li>
    </ul>
    </div>
    <!--楼盘信息-->
    <section id="floorInfo">
    <div>
    <div class="nameLeft">
    <!--动态数据-->
    </div>
    <div class="nameRight"><img src="img/home_ic_more_small@2x.png" alt=""></div>
    </div>
    <div class="items">
    <!--动态数据-->
    </div>
    <div class="attress">
    <!--动态数据-->
    </div>
    </section>
    <div class="gap"></div>
    <!--佣金信息-->
    <section id="commissionInfo">
    <div class="title">
    <h1>佣金信息</h1>
    <div class="more">
    <span>套方案</span><img src="img/home_ic_more_small@2x.png" alt="">
    </div>
    </div>
    <ul style="min-height: .5rem">
    <!--动态数据-->
    </ul>
    <div id="userType">绑定分行码后可查看</div>
    </section>
    <div class="gap"></div>
    <!--优惠活动-->
    <section id="preferential">
    <div class="title">
    <h1>优惠活动</h1>
    <div class="more">
    <span>套方案</span><img src="img/home_ic_more_small@2x.png" alt="">
    </div>
    </div>
    <ul  style="min-height: .5rem">
    <!--动态数据-->
    </ul>
    </section>
    <div class="gap"></div>
    <!--楼盘卖点-->
    <section id="sellPoints">
    <div class="title">
    <h1>楼盘卖点</h1>
    </div>
    <ul>
    <li>
    <p>
    <img src="img/project_ic_bus@2x.png" alt=""/><span>交通配套</span>
    </p>

    <p class="advantage">暂无</p>
    </li>
    <li>
    <p>
    <img src="img/project_ic_school@2x.png" alt=""/><span>教育资源</span>
    </p>

    <p class="attribute">暂无</p>
    </li>
    <li>
    <p>
    <img src="img/project_ic_medical@2x.png" alt=""/><span>医疗健康</span>
    </p>

    <p class="process">暂无</p>
    </li>
    <li>
    <p>
    <img src="img/project_ic_shop@2x.png" alt=""/><span>娱乐购物</span>
    </p>

    <p class="theWords"></p>
    </li>
    </ul>
    </section>
    <div class="gap"></div>
    <!--户型图-->
    <section id="renderings">
    <div class="title">
    <h1>户型图</h1>
    </div>
    <div class="items">
    <!--动态数据-->
    </div>
    </section>
    <div class="gap"></div>
    <!--请佣流程-->
    <section id="progress">
    <div class="title">
    <h1>请佣流程</h1>
    </div>
    <p>1. 乙方客户与甲方签订《咨询服务合同》且符合甲方要求的咨询服务费已经全部交齐。</p>

    <p>2. 乙方客户与开发商签订正式《商品房预售/买卖合同》且付款达到总房款的30%。</p>

    <p>3. 乙方客户签订银行按揭贷款合同(分期付款、一次性全额付清除外)。</p>

    <p><img src="img/home_img_1_export@2x.png" alt=""/></p>
    </section>
    <div class="gap"></div>
    <!--规则说明-->
    <section id="declaration">
    <div class="title">
    <h1>规则说明</h1>
    </div>
    <p>1. 乙方客户初访，须提前一小时预约报备，报备24小时有效。</p>

    <p>2. 乙方带客户至案场，并督导客户填写来访带看单，当场确认客户信息，确认后填写乙方信息并签字确认。</p>

    <p>3. 已确认为乙方客户的保护期为自签订《客户确认单》之日起30日。超过则以新的渠道带看重新认定客户归属。</p>

    <p>4. 客户界定以协议和现场判断为准。</p>
    </section>
    <div class="gap"></div>
    <!--猜你喜欢-->
    <section id="guess">
    <div class="title">
    <h1>猜你喜欢</h1>
    </div>
    <div class="lists">
    <!--动态数据-->
    </div>
    </section>
    <footer>
    <div>
    <div class="poster">
    <p><img src="img/project_ic_image@2x.png" alt=""></p>
    <p>制作海报</p>
    </div>
    <div class="consult">
    <p><img src="img/project_ic_phone@2x.png" alt=""></p>
    <p>咨询项目</p>
    </div>
    <div class="myReport">
    <p><img src="img/project_ic_note@2x.png" alt=""></p>
    <p>我的报备</p>
    </div>
    <div id="report">立即报备</div>
    </div>
    </footer>
    </div>
    <!--楼盘详情更多-->
    <div id="lpxq">
    <div class="topBar">
    <div class="back"><img src="img/topbar_ic_back_black@2x.png" alt=""></div>
    <div>楼盘详情</div>
    </div>
    <div class="lpxq-group" id="item1">
    <!--动态数据-->
    </div>
    <div class="lpxq-group" id="item2">
    <!--动态数据-->
    </div>
    <div class="lpxq-group" id="item3">
    <!--动态数据-->
    </div>
    </div>
    <!--佣金信息更多-->
    <div id="commissionInfoMore" class="morePage">
    <div>
    <div class="back"><img src="img/topbar_ic_back_black@2x.png" alt=""></div>
    <div>佣金信息</div>
    </div>
    <ul>
    <!--动态数据-->
    </ul>
    </div>
    <!--优惠活动更多-->
    <div id="preferentialMore" class="morePage">
    <div>
    <div class="back"><img src="img/topbar_ic_back_black@2x.png" alt=""></div>
    <div>优惠活动</div>
    </div>
    <ul>
    <!--动态数据-->
    </ul>
    </div>
    <!--暂无更多楼盘信息-->
    <!--<div class="noData">暂无更多楼盘信息</div>-->
    <!--提示框-->
    <div class="modal">
    <div class="toast"></div>
    </div>
    <!--图片展示框-->
    <div class="imgModal">
    <div class="imgToast"></div>
    </div>
    <!--电话弹框-->
    <div class="phoneModal">
    <div class="phoneToast">
    <!--动态-->
    </div>
    </div>
    <!--绑定分行码-->
    <div class="fhmModal">
    <div class="fhmToast">
    <!--动态-->
    </div>
    </div>
    <!--楼盘相册-->
    <div class="swiper-container_warp" id="propertyImg">
    <div class="PropertyImage-nav">
    <div class="back"><img src="img/topbar_ic_back_white@2x.png" height="17" width="9"/></div>
    <div class="PropertyImage-num"></div>
    </div>
    <div class="swiper-container_center">
    <div class="swiper-container swiper-container_PropertyImage">
    <div class="swiper-wrapper" id="PropertyImage"></div>
    </div>
    </div>
    <div class="append-center">
    <p class="append-buttons"></p>
    </div>
    </div>
    <script type="text/javascript" src="js/swiper.min.js"></script>
    <script type="text/javascript" src="http://api.map.baidu.com/api?
    v=3.0&ak=CB2ede775afeb6e413abd40261396a69"></script>
    <script type="text/javascript" src="js/floorDetail.js?v=201806161050"></script>
    <script src="js/zoomimg.js"></script>
    </body>
    </html>