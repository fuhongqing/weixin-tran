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
		<title>填写信息</title>
		<link rel="stylesheet" type="text/css" href="../css/register.css?v=2017090511"/>
	</head>
	<body>

		<div class="warn">
			请输入您的姓名！
		</div>
		<ul class="registerBox">
			<li class="registerName">
				<h5>真实姓名</h5>
                <input type="text" placeholder="请输入您的姓名">
			</li>
			<li class="registerPhone">
				<h5>手机号</h5>
                <input type="tel" maxlength="11" placeholder="请输入您的手机号">
 			</li>
			<li class="registerPhoneCode">
				<h5>验证码</h5>
                <input type="tel" maxlength="4" id="PhoneCode" placeholder="请输入验证码">
                <button id="getCode">获取验证码</button>
 			</li>
			<li class="registerPsw">
				<h5>密码</h5>
                <input type="password" placeholder="请设置大于6位字符的密码">
			</li>
<!--			<p id="useRules"><i class="checkAgree"></i>同意<b>《用户使用协议》</b></p>
-->			<button class="registerNext" id="login">下一步</button>
		</ul>
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/fastclick.js?v=2017090511" type="text/javascript"></script>
		<script src="../js/register.js?v=2017090511" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
