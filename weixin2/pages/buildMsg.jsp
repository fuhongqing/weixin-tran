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
		<title>楼盘信息</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<link rel="stylesheet" type="text/css" href="../css/details.css"/>
		<style type="text/css">
			body,html{overflow-y:auto; background:#fff;}
			.buildMsg{margin:2.5rem 1rem 0;}
			.buildMsg p span,.buildMsg p b{color:#999;}
			.buildMsg p{color:#333;line-height: 1.2rem;}
			.buildMsg div:last-child{border:0;}
			#mapbox{height:7rem;width:14rem;border:0;}
			
			#mapbox img{height:100%;width:100%;}
		</style>
	</head>
	<body>
		<div class="top"> <a class="back"></a><span>楼盘信息</span></div>
			
			<!--------------楼盘信息--------------->
			<li class="buildMsg clearfix">
				<div>
					<p><b>开发商</b></p>
					<p><span>物业公司</span></p>
					<p><span>建筑类型</span></p>
					<p><b>物业费</b></p>
					<p><b>停车位</b></p>
					<p><span>装修情况</span></p>
				</div>
				<div>
					<p><span>占地面积</span></p>
					<p><span>建筑面积</span></p>
					<p><span>栋楼总数</span></p>
					<p><b>绿化率</b></p>
					<p><b>容积率</b></p>
				</div>
				<div>
					<p><span>开盘时间</span></p>
					<p><span>竣工时间</span></p>
					<p><span>交房时间</span></p>
				</div>	
				<div>	
					<p style="width:100%;"><span style="float: left;">配套设施</span><p style="width:10.7rem;float: left;"></p></p>
					<p style="clear:both;"><span>周围商圈</span></p>
					<p><span>交通出行</span></p>
				<div>							
					<p><span>楼盘地址</span></p>
					<div id="mapbox">
						<img src="../img/mappic.png" />
					</div>
				</div>							
			</li>	

		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/buildMsg.js" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
