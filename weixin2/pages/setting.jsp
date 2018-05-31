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
		<title>设置</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<link rel="stylesheet" type="text/css" href="../css/mine.css"/>
	</head>
	<body>
		<div class="top"> 
			<a class="back">返回</a>
			<span>设置</span>
		</div>
		<p id="clearID">账号注销</p>
		<div class="clearIDwrap">
			<div class="clearIDchoose">
				<p>注销后您将退出当前公司，客户数据将被清除，确定要注销吗？</p>
				<div>
					<a id="cancel">取消</a>
					<a id="enter">确定</a>
				</div>
			</div>
		</div>
		
		<div class="loadWrap">
			<div class="loaderBox">
				<div class="loader">
					<div class="loading">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<!--<div class="right">
						
					</div>-->
				</div>
				加载中
			</div>
		</div>
		<div class="warn">
			操作失败！
		</div>
		
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804121244" type="text/javascript" ></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/help.js?v=201804291356" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
