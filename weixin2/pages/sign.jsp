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
		<title>客户中心</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<link rel="stylesheet" type="text/css" href="../css/client-index.css"/>
	</head>
	<body>
		<div class="searchBox">
			<div class="searchwrapActive">
				<a></a>
				<input id="search" type="text" placeholder="搜索"/>
				<a id="searchBtn">搜索</a>							
			</div>
			<a class="searchOut">取消</a>
		</div>
	<div class="client-top">
		<div><a href="client-index.jsp">报备</a></div>
		<div><a href="visit.jsp">来访</a></div>
		<div><a href="sign.jsp" class="active">成交</a></div>
		<div><a href="commission.jsp">佣金</a></div>
	</div>
	
	<div class="report">
		<div class="report-num">
			<span>0</span>人
		</div>
		<!--<ul class="report-add">
			<a class="active" id="filter" value="0">30天内</a>
			<li value="0">30天内</li>
			<li value="1">30天外</li>
			<li value="2">今日</li>
		</ul>-->
	</div>	
	
	<div id="wrapper">
		<div id="list">					
			<ul class="reportBox">				
				<!--<li>
					<div>
						<p>李三</p>
						<p>156<i>••••</i>1212</p>
					</div>
					<div>
						<p>天润尚院</p>
						<p>2016-10-09</p>
					</div>						  
					<div>
						<p><span>大定</span></p>
					</div>						  
				</li>-->
			</ul>
			<div class='ball-pulse' style="display: none;">加载更多</div>
			
		</div>	
	</div>

		<footer>
			<a href="javascript:;"><i></i>项目</a>
			<a href="javascript:;"><i></i>客户</a>
			<a href="javascript:;"></a>
			<a href="javascript:;"><i></i>动态</a>
			<a href="javascript:;"><i></i>我的</a>
		</footer>
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/iscroll.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="../js/sign.js"></script>		
		<%@ include file="trafficStatistic.jsp"%>
		
	</body>
</html>
