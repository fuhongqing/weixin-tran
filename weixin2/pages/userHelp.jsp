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
		<title>新手指引</title>
		<link rel="stylesheet" type="text/css" href="../css/swiper.min.css"/>
		<link rel="stylesheet" href="../css/mine.css" />
		<style type="text/css">
			*{margin:0;padding:0;}

    html, body {
        position: relative;
        height: 100%;
    }
    body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
			.imgtop{height:2rem;width:100%; position: absolute;top: 0;left: 0;z-index: 200;
				line-height:2rem;font-size:20px; text-align: center;color: #fff;}
			.imgBack{display:block; height:2rem;width:40px;position: absolute;
				background: url(../img/back.png) no-repeat center center;}
		</style>
	</head>
	<body>
	<div class="imgtop"><a class="imgBack"></a></div>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide user1"><img src="../img/user1.png" /></div>
		        <div class="swiper-slide user2"><img src="../img/user2.png" /></div>
		        <div class="swiper-slide user3"><img src="../img/user3.png" /></div>
		        <div class="swiper-slide user4"><img src="../img/user4.png" /></div>
		        <div class="swiper-slide user5"><img src="../img/user5.png" /></div>
		        <div class="swiper-slide user6"><img src="../img/user6.png" /></div>
		    </div>
    		<div class="swiper-pagination"></div>
		</div>
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/swiper.jquery.min.js" type="text/javascript"></script>
		<script type="text/javascript">
			$(function(){
				var mySwiper = new Swiper('.swiper-container',{
				  pagination : '.swiper-pagination',
				  paginationType : 'custom',
				  paginationCustomRender: function (swiper, current, total) {
				      return current + ' / ' + total;
				  }
				});
				$(".user6").on("click",function(){
					window.location.href = "help.jsp";
				})
				
				$(".imgBack").on("click",function(){
					window.history.back();
				});
				
			})
			
		</script>		
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
