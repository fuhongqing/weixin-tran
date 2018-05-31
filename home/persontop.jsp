    <%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>我的业绩</title>
    <link href="http://www.ehaofang.com/img/ef.ico" type="image/x-icon" rel="icon">
    <link href="http://www.ehaofang.com/img/ef.ico" type="image/x-icon" rel="shortcut icon">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="less/persontop.css">
    <script src="js/setting.js?v=201804251233"></script>
    <script src="static/fastclick.min.js"></script>
</head>
<body>
<div class="page_persontop">
    <div class="jump">
        <a class="back"  href="javascript:;" onclick="history.go(-1)">
            <img src="img/ic_back_white.png" style="width: .45rem"/></a>
        <p style="position: absolute; bottom:1rem;width: 100%"><span id="month">*</span>月业绩：￥<span
                id="cJJinE">*****</span></p>
        <div class="circle">
            <canvas id="circle" width="300" height="300" style="margin: 0 auto;"></canvas>
        </div>
    </div>
    <div class="tab_nav">
        <div class="tab_nav_item active" data-condition="1">上周</div>
        <div class="tab_nav_item" data-condition="2">本周</div>
        <div class="tab_nav_item" data-condition="3">本月</div>
        <div class="tab_nav_item" data-condition="0">全部</div>
    </div>
    <div class="tab_list">
        <div class="tab_list_item" id="xiangGuan">
            <div><b>0</b>
                <p>报备(组)</p></div>
            <div><b>0</b>
                <p>来访(组)</p></div>
            <div><b>0</b>
                <p>0成交(套)</p></div>
            <div><b>0</b>
                <p>0发佣(套)</p></div>
        </div>
    </div>
</div>
<script src="static/jquery.min.js"></script>
<script src="js/persontop.js?v=201804121244"></script>
</body>
</html>