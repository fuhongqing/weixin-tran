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
		<title>楼盘卖点</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<style type="text/css">
			body,html{overflow-y:auto; background:#fff;}
			.saleChoose{ background:#fff;white-space:nowrap;overflow-x: auto;border-bottom:0.5rem solid #EDF4F4;
				position: fixed;top:2rem;left:0;z-index: 200;height:2rem;width:100%;}
			.saleChoose div span{display:inline-block; font-size: 14px;
				height:1.2rem;line-height: 1.2rem; border-radius: 25px;padding:0 0.8rem;}
			.saleChoose div{display:inline-block;padding:0.25rem 0.5rem;}
			.saleChoose div .saleActive{background: #42C29D;color:#fff;}
			
			.saleMsg{margin-top:4.5rem;padding:1rem 0.7rem 4rem;font-size:16px;line-height:1.8em;}
			.saleMsg2{display:none;}
			.saleMsg3{display:none;}
			.saleMsg4{display:none;}
		</style>
	</head>
	<body>
		<div class="top"> <a class="back"></a><span>楼盘卖点</span></div>
			
			<!--------------楼盘卖点--------------->
			<div class="saleChoose">
				<div>
					<span class="saleActive">十大卖点</span>
					<span>产品FADB</span>
					<span>产品三段论</span>
					<span>CALL说辞</span>
				</div>
			</div>
			<div class="saleMsgbox">
				<div class="saleMsg saleMsg1">
				</div>
				<div class="saleMsg saleMsg2">
				</div>
				<div class="saleMsg saleMsg3">
				</div>
				<div class="saleMsg saleMsg4">
				</div>
			</div>
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/buildsale.js" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
