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
		<title>项目</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<link rel="stylesheet" type="text/css" href="../css/index.css?v=2017090511"/>
		<link rel="stylesheet" type="text/css" href="../css/swiper.min.css"/>	
	</head>
	<body>

		<div id="list">					
			<ul>
				<div class="searchBox">
					<div class="searchwrapActive">
						<a></a>
						<input id="search" type="text" placeholder="楼盘搜索"/>
						<a id="searchBtn">搜索</a>							
					</div>
					<a class="searchOut">取消</a>
				</div>
				<div class="searchBg">
					<!--<li>上海中盈－金地家园</li>
					<li>上海中盈－金地家园</li>
					<li>上海中盈－金地家园</li>
					<li>上海中盈－金地家园</li>-->
					<h3>搜索</h3>
					
					<p><b>输入关键字，搜索您感兴趣的楼盘</b></p>
				</div>

				<div class="swiper-container">
					<div class="swiper-wrapper banner">
				        <div class="swiper-slide"><div class="bannerBg"></div><img src="../img/picture2.png"/><p>标题1</p></div>
				        <div class="swiper-slide"><div class="bannerBg"></div><img src="../img/picture2.png"/><p>标题2</p> </div>
				        <div class="swiper-slide"><div class="bannerBg"></div><img src="../img/picture2.png"/><p>标题3</p> </div>
				    </div> 
			    <!-- 如果需要分页器 -->
			    	<div class="swiper-pagination" style="z-index: 200;"></div>       
				</div>
				<!-------以下是列表项目部分-------->
				<div class="headerFix">
					<div id="header">
						<div class="list-tit">
							<button id="buildLocation">区域</button>
							<button id="buildSale">总价</button>
							<button id="buildType">类型</button>												
						</div>
						<dl id="locationChoose">
							<dd>全部</dd>
							<dd>上海</dd>
							<dd>昆山</dd>
							<dd>苏州</dd>
							<dd>南京</dd>
						</dl>
						<dl id="saleChoose">
							<dd value="">全部</dd>
							<dd value="0">50万以下</dd>
							<dd value="1">50-100万</dd>
							<dd value="2">100-200万</dd>
							<dd value="3">200-250万</dd>
							<dd value="4">250-350万</dd>
							<dd value="5">350-400万</dd>
							<dd value="6">450-500万</dd>
							<dd value="7">500-1000万</dd>
							<dd value="8">1000万以上</dd>
						</dl>
						<dl id="typeChoose">
							<dd value="">全部</dd>
							<dd value="1">住宅</dd>
							<dd value="2">别墅</dd>
							<dd value="3">公寓</dd>
							<dd value="4">商铺</dd>
							<dd value="5">写字楼</dd>
							<dd value="6">洋房</dd>
						</dl>
					</div>
				</div>
				<div class="list-content">

				</div>
				<div class='ball-pulse'>加载更多</div>
			</ul>	
		</div>	
<!---------底部板块切换--------------->			
		<footer>
			<a href="javascript:;"><i></i>项目</a>
			<a href="javascript:;"><i></i>客户</a>
			<a href="javascript:;"></a>
			<a href="javascript:;"><i></i>动态</a>
			<a href="javascript:;"><i></i>我的</a>
		</footer>
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/swiper.min.js" type="text/javascript"></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/index.js?v=2017090511" type="text/javascript" ></script>	
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
