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
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<link rel="stylesheet" type="text/css" href="../css/swiper.min.css"/>
		<style type="text/css">
			body{overflow:scroll;}
			body,html{background:#fff;}
			.newsDetails{padding:3rem 0.5rem;}
			.newsDetails h4{font-size: 16px;line-height:1.5rem;font-weight:600;}
			.newsDetails p{font-size: 14px;color:#333;width: 100%;}
			.newsDetails p img{width: 100%;}
			.newsDetails p:nth-child(2){font-size: 12px;line-height:1.5rem; color:#42C29D;text-align: right;}
			.newsDetails p:nth-child(3){line-height: 1.5em;}
			
			.newsimg{height:4rem;width:30%;margin:0.5rem 1%;float:left;overflow:hidden;}
			.newsimg img{width:100%;}

			.newsimg1{height:10rem;width:98%;margin:1rem auto;float:none;overflow:hidden;}
			.newsimg1 img{width:100%;}
			
			
			.bannerBox{display:none;height:100%;width:100%;position:fixed;left:0;top:0;z-index:500;}
			
			.bannerBox .bannertop{height:2rem;width:100%; position: absolute;top: 0;left: 0;z-index: 200;
				line-height:2rem;font-size:20px; text-align: center;color: #fff;}
			.bannerBack{display:block; height:2rem;width:40px;position: absolute;
				background: url(../img/back.png) no-repeat center center;}
			
			.bannerBox{background:#000;}
			.bannerBox b{height:100%;width:0;overflow:hidden;display:inline-block;vertical-align:middle;}
			.bannerBox .swiper-slide img{width:100%;vertical-align:middle;}
			.bannerBox .swiper-wrapper .swiper-slide{height:100%;width:100%;text-align:center;}
			.bannerBox .swiper-container{height:100%;width:100%;}
			
			.bannerBox .swiperpg{z-index: 600;width:100%;font-size: 16px;color:#fff;font-size: 18px;margin-bottom:1rem;}
			.bannerBox .swiperpg span:nth-child(1){ color:#42C29D;}
			.swiper-pagination .swiper-pagination-bullet-active{opacity: 1;background:#16C585;}
						
			

		</style>
	</head>
	<body>
		<div class="top">
			<a class="back"></a>
			<span>楼盘动态</span>
		</div>

		
		<div class="newsDetails clearfix">
			<!-- 
			<h4>2016年轩天11.11单身狂欢联谊会狂欢邀请！</h4>
			<p>2016-10-26</p>
			<p>你的光棍节是这样过？</p>
			<p>淘宝购物，</p>
			<p>买买买？</p>
			<p>孤单一人，</p>
			<p>没人陪？</p>
			<p>站在街角，</p>
			<p>冷风吹？</p>
			<p>2016年轩天11.11单身狂欢联谊会狂欢邀请！</p>
			<br />
			<p>单身有罪，福利满满~ </p>
			<p>这一夜，我们都单身。</p>
			<div>
				<img src="../img/buildnews1.png" />
			</div>
			-->
		</div>
		
			
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
		<script src="../js/rem.js?v=201804291356" type="text/javascript" ></script>
		<script src="../js/swiper.min.js" type="text/javascript"></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/newsDetails.js?v=201804291356" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
