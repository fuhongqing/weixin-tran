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
		<title>来访详情</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<link rel="stylesheet" type="text/css" href="../css/client-index.css"/>
	</head>
	<style type="text/css">
		body,html{overflow: auto;}
	</style>
	<body>
		<div class="top">
			<a class="back">返回</a>
			<span>来访详情</span>
		</div>
		<div class="visitItem">
			<div><b></b>张三</div>
			<div><i></i>130••••7376</div>
			<div>天润尚院</div>
		</div>
		<div class="visitContent">
			<ul>
				<!--<h4>三次来访<span>2016-11-06-13:00</span></h4>
				<li>来访人数 <span>3</span></li>
				<li>案场销售 <span>张三</span></li>				
				<li>落<b></b>座<span> 是</span></li>
				<li>落<b></b>位<span> 是</span></li>
				<li>出<b></b>价 <span>150万</span></li>
				<li>下次来访 <span>2016年4月3日 12:00</span></li>
				<li>备<b></b>注 <span>无</span></li>-->
			</ul>
		</div>

		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/visit-detail.js" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
