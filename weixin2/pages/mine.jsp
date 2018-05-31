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
		<title>我的</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css?v=2017090511"/>
		<link rel="stylesheet" type="text/css" href="../css/mine.css?v=201805041547"/>
		<style type="text/css">
			html,body{overflow:auto;}
		</style>
	</head>
	<body>
		<div class="mineBox">
			<div class="mine-pic" id="myphoto">
				<img src="../img/man.png" />				
			</div>
			<h4>--</h4>
			<p></p>
		</div>
		<!--<div class="datawrap">
			<div class="dataItem"><span></span>数据中心</div>
			<div class="rankItem"><span></span>龙虎榜</div>
		</div>-->
		<div class="mineList">
			<div class="helpItem"><b></b><p>帮助与反馈</p></div>
			<!--<div class="employeeItem"><b></b><p>我的员工</p></div>-->
			<div class="hotline"><a href="tel:02131338882"><b></b><p>客服热线    021-3133-8882 </p></a></div>
			<!--<div class="companyItem"><b></b><p>认证公司</p><div id="company"><span></span><i class=""></i></div></div>-->
			<!--<div class="firendItem"><b></b><p>邀请好友</p></div>-->
			<div class="setting"><b></b><p>设置</p></div>
		</div>
		<footer>
			<a href="javascript:;"><i></i>项目</a>
			<a href="javascript:;"><i></i>客户</a>
			<a href="javascript:;"></a>
			<a href="javascript:;"><i></i>动态</a>
			<a href="javascript:;"><i></i>我的</a>
		</footer>
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201805041412" type="text/javascript" ></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/help.js?v=201805041655" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
		
	</body>
</html>
