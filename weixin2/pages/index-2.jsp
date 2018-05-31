    <%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link href="http://www.ehaofang.com/img/ef.ico" type="image/x-icon" rel="icon">
    <link href="http://www.ehaofang.com/img/ef.ico" type="image/x-icon" rel="shortcut icon">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <meta http-equiv="Expires" content="0">
    <link rel="stylesheet" href="../../home/less/index.css?v=201804090937">
    <link rel="stylesheet" href="../../home/static/swiper.min.css?v=201804090937">
    <script src="../../home/js/setting.js?v=201804090937"></script>
    <script src="../../home/js/getMemer-test.js?v=201804090937"></script>
</head>
<body>
<div class="page_index" id="page_index">
    <div class="search" id="search_top">
        <div class="search_box">
            <img src="img/ic_search@2x.png"/>
            <input type="search" placeholder="项目名称" disabled/>
        </div>
    </div>
    <div class="swiper-container swiper-container_image">
        <div class="swiper-wrapper" id="image">
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <div class="container">
        <div class="nav">
            <div onclick="window.location.href='allproject.jsp?memberID='+ memberID + '&userType='+userType">
                <img src="img/home_ic_building@2x.png"/>
                <p>全部楼盘</p></div>
            <div id="to_map"><img src="img/home_ic_map@2x.png"/>
                <p>地图看盘</p></div>
            <a href="loan.jsp"><img src="img/home_ic_calculator@2x.png"/>
                <p>房贷计算</p></a>
            <div onclick="window.location.href='persontop.jsp?memberID='+ memberID">
                <img src="img/home_ic_performance@2x.png"/>
                <p>我的业绩</p></div>
            <div id="to_zhaopin"><img src="img/home_ic_offer@2x.png"/>
                <p>易招聘</p></div>
        </div>
    </div>
    <div class="container">
        <img src="img/home_ic_report@2x.png" style="width: 1.15rem;vertical-align: middle;"/>
        <div class="swiper-container swiper-container_xibao">
            <div class="swiper-wrapper" id="xibao"></div>
        </div>
    </div>
    <div class="container" style="padding-right: 0;padding-left: 0">
        <div class="h2">
            附近优推
        </div>
        <div class="swiper-container swiper-container_recommend">
            <div class="swiper-wrapper" id="recommend">
            </div>
        </div>
        <div class="no_item no_item1">
            <div>暂无更多楼盘</div>
        </div>
    </div>
    <div class="container" style="padding-right: 0;padding-left: 0">
        <div class="h2">
            即将上线
        </div>
        <div class="swiper-container swiper-container_continued">
            <div class="swiper-wrapper" id="continued">
            </div>
        </div>
        <div class="no_item no_item2">
            <div>暂无更多楼盘</div>
        </div>
    </div>
    <footer>
        <a href="javascript:;"><i></i>项目</a>
        <a href="javascript:;" id="to_client"><i></i>客户</a>
        <a href="javascript:;" id="to_add"></a>
        <a href="javascript:;" id="to_dongtai"><i></i>动态</a>
        <a href="javascript:;" id="to_mine"><i></i>我的</a>
    </footer>
</div>
<div class="page_search" id="page_search" style="display: none">
    <div class="search search_only">
        <div class="search_box">
            <img src="img/ic_search@2x.png"/>
            <input type="search" placeholder="项目名称"/>
            <span id="search_cancel">取消</span>
        </div>
    </div>
    <div style="text-align: center;margin-top: 4rem;font-size:.7rem;color:#bcbcbc;display: none" id="for_search_none">
        <img src="img/ic_no_list.png" style="width: 3rem;margin-bottom: 2rem"/>
        <p>没有找到匹配的楼盘，换个条件试试吧</p>
    </div>
    <div style="text-align: center;margin-top: 4rem" id="for_search">
        <img src="img/ic_for_search.png" style="width: 5.5rem"/>
    </div>
    <div id="property_list" class="property_list"></div>
</div>
<script src="../../home/static/swiper.min.js?v=201804090937"></script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script src="../../home/static/fastclick.min.js?v=201804090937"></script>
</body>
</html>