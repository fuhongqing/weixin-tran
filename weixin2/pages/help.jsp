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
		<title>帮助与反馈</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<link rel="stylesheet" type="text/css" href="../css/mine.css"/>
		<style type="text/css">
			body{overflow: hidden;}
			.helpList{margin-top:2.5rem;}	
			.helpList li{height:2.5rem;width:100%;background: #fff;line-height: 2.5rem;
				border-bottom: 1px solid #eee;box-sizing: border-box;padding:0 0.5rem;
				color:#333;font-size: 16px;}
			.helpList p{font-size: 12px;font-weight:600;color:#999;height:1.8rem;line-height: 2.2rem;padding-left: 0.5rem;}	
			.helpList li i{display:block;height:2rem;width:10px;float: right;
				background: url(../img/more2.png) no-repeat center center;background-size:contain ;}
			
			
			
		</style>
	</head>
	<body>
		<div class="top"> 
			<a class="back">返回</a>
			<span>帮助与反馈</span>
		</div>
		<div class="helpList">
				<li id="userhelp">新手指引<i></i></li>
				<p>常见问题</p>
			<ul>	
				<li>怎么报备客户？<i></i></li>
				<li>一次可以报备几个项目？如何展示？<i></i></li>
				<li>如何进行客户搜索？<i></i></li>
				<li>报备详情如何复制转发？<i></i></li>
				<li>分行码是什么，从哪里获得？<i></i></li>
				<li>门店更换了该怎么弄？<i></i></li>
			</ul>
		</div>
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804121244" type="text/javascript" ></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/help.js" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
