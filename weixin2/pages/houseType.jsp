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
		<title>主力户型</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<link rel="stylesheet" type="text/css" href="../css/swiper.min.css"/>
		<link rel="stylesheet" type="text/css" href="../css/details.css"/>
		<style type="text/css">
			body{overflow: scroll;}
			#list{position:absolute;top: 2.5rem;bottom: 0; 
				margin:0 0.6rem 1rem;}
			.houseType{background:#fff;}	
			

		</style>
		
	</head>
	<body>
		<div class="top">
			<a class="back"></a>
			<span>主力户型</span>
		</div>						
		<ul id="list">		
			<!--------------主力户型--------------->
			<li class="houseType clearfix">
			
				<!-- <div>
					<dl class="clearfix">
						<dt><img src="../img/houseType.png" /></dt>
						<dd><span>A-4</span><b><i>300</i>万起</b></dd>
						<dd>联排别墅<b>|</b>毛坯</dd>
						<dd><i>3</i>室<i>1</i>厅<i>1</i>卫<b>|</b><i>160m&sup2;</i></dd>
					</dl>
				</div> -->
			</li>
		</ul>
		<div class="bannerBox">
			<div class="bannertop"><a class="bannerBack"></a></div>
			<div class="swiper-container">
				<div class="swiper-wrapper swiper02">
			        <!-- <div class="swiper-slide"><img src="../img/lunbo.png"/><b></b></div>
			        <div class="swiper-slide"><img src="../img/goods-pic1.png"/><b></b></div>
			        <div class="swiper-slide"><img src="../img/goods-pic2.png"/><b></b></div> -->
			    </div> 
		    <!-- 如果需要分页器 -->
		    	<div class="swiper-pagination swiperpg"></div>       
			</div>
		</div>


		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/swiper.min.js" type="text/javascript"></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/houseType.js" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
