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
		<title>楼盘动态</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css?v=2017090511"/>
		<link rel="stylesheet" type="text/css" href="../css/details.css?v=2017090511"/>
		<style type="text/css">
			body,html{background:#fff;}
			.buildNews1{margin: 2.5rem 0;}
			.buildNews1 div{margin:0.5rem 0.5rem;}
			.buildNews1 dl{ padding:0.5rem;border-bottom: 1px solid #eee;position: relative;}
			
			.buildNews1 dl dt img{width:100%;}
			.buildNews1 dl dt{overflow:hidden;height:4rem;width:4.5rem;float: left;}
			.buildNews1 dl dd:nth-child(2){margin-left:5rem;font-size: 14px;color:#333;font-weight:600;}
			.buildNews1 dl dd:nth-child(3){color:#42C29D;font-size: 12px;width:10rem; position: absolute;right: 0.5rem;bottom: 0.8rem;}
			.buildNews1 dl dd span{float: right;}

			/*----------footer---------*/
			footer a:nth-child(1) i{background: url(../img/proIcon.png) no-repeat center center;background-size: contain;}
			footer a:nth-child(2) i{background: url(../img/visitor.png) no-repeat center center;background-size: contain;}
			footer a:nth-child(3){background: url(../img/reportIcon.png) no-repeat center center;background-size: contain;}
			footer a:nth-child(4) i{background: url(../img/dongtai1.png) no-repeat center center;background-size: contain;}
			footer a:nth-child(5) i{background: url(../img/me.png) no-repeat center center;background-size: contain;}
			footer a:nth-child(4){color:#42C29D;}


		</style>
	</head>
	<body>
		<div class="top">
			<span>楼盘动态</span>
		</div>
		<li class="buildNews1 clearfix">
		<!-- 
			<div>
				<dl class="clearfix">
					<dt><img src="../img/buildnews1.png" /></dt>
					<dd>2016年轩天11.11单身狂欢联谊会狂欢邀请！</dd>
					<dd>轩天<span>2016-10-26</span></dd>
				</dl>
				<dl class="clearfix">
					<dt><img src="../img/buildnews2.png" /></dt>
					<dd>天润尚苑元旦开盘，超值楼盘活动进行中…</dd>
					<dd>轩天<span>2016-10-13</span></dd>
				</dl>
			</div>
			 -->
		</li>
		<footer>
			<a href="javascript:;"><i></i>项目</a>
			<a href="javascript:;"><i></i>客户</a>
			<a href="javascript:;"></a>
			<a href="javascript:;"><i></i>动态</a>
			<a href="javascript:;"><i></i>我的</a>
		</footer>

		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804291356" type="text/javascript" ></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/dongtai.js?v=201804291356" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
		
	</body>
</html>
