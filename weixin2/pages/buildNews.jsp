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
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">		
		<title>动态详情</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<link rel="stylesheet" type="text/css" href="../css/details.css"/>
		<style type="text/css">
			body,html{background:#fff;}
			.buildNews1{margin-top: 2.5rem;}
			.buildNews1 div{margin:0.5rem 0.5rem;}
			.buildNews1 dl{ padding:0.5rem 0 0.5rem 0.5rem;border-bottom: 1px solid #eee;position: relative;}
			
			.buildNews1 dl dt img{height:100%;width:100%;}
			.buildNews1 dl dt{height:4rem;width:4.5rem;float: left;}
			.buildNews1 dl dd:nth-child(2){width:9rem;margin-left:5rem;font-size: 14px;color:#333;}
			.buildNews1 dl dd:nth-child(3){color:#42C29D;font-size: 12px; position: absolute;right: 0.5rem;bottom: 0.8rem;}

		</style>
	</head>
	<body>
		<div class="top">
			<a class="back"></a>
			<span>动态详情</span>
		</div>

		
		<li class="buildNews1 clearfix">
			<!-- 
			<div>
				<dl class="clearfix">
					<dt><img src="../img/buildnews1.png" /></dt>
					<dd>2016年轩天11.11单身狂欢联谊会狂欢邀请！</dd>
					<dd>2016-10-26</dd>
				</dl>
				<dl class="clearfix">
					<dt><img src="../img/buildnews2.png" /></dt>
					<dd>天润尚苑元旦开盘，超值楼盘活动进行中…</dd>
					<dd>2016-10-13</dd>
				</dl>
			</div>
			 -->
		</li>

		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/buildNews.js" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
		
	</body>
</html>
