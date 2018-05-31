<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="description" content="">
		<meta name="keywords" content="">
		<meta name="author" content="">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
		<meta name="format-detection" content="telephone=no">
		<meta http-equiv="Cache-Control" content="no-cache" />	
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">		
		<title>报备详情</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<link rel="stylesheet" type="text/css" href="../css/client-index.css"/>
		<style type="text/css">
			body,html{background:#fff;}
			.warn{height:2rem;width:70%;position: absolute;left: 15%;top:1.5rem;z-index:9999; background: #000;
				border-radius:8px; opacity: 0.6;color:#fff;line-height: 2rem;text-align: center;
				font-size: 16px;display: none;}
			
		</style>
	</head>
	<body>
		<div class="top">
			<a class="back">返回</a>
			<span>报备详情</span>
			<button data-clipboard-action="copy" data-clipboard-target="ul" class="copyBtn"></button>
		</div>
		<div class="warn">
			
		</div>

		<div class="reportContent">
			<ul>
				<!--<li><b>姓</b>名<span>山川</span></li>
				<li><b>电</b>话<span>156••••1212</span></li>
				<li class="reportPro">意向项目<span>天润尚院</span></li>
				<li>来访时间<span>2016-11-09</span></li>
				<li>来访人数<span>3</span></li>
				<li>案场销售<span>张三</span></li>
				<li>来访方式<span>班车</span></li>
				<li>上车地点<span>黄浦区-----</span></li>
				<li>上车时间<span>2016-11-09-13:00</span></li>-->
				
			</ul>
			<a id="clickButton" class="green-btn">报备其他项目</a>	
		</div>

		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/clipboard.min.js" type="text/javascript" ></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/report-detail.js" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
