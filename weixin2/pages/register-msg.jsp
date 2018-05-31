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
		<title>填写分行</title>
		<link rel="stylesheet" type="text/css" href="../css/register.css?v=2017090511"/>
	</head>
	<body>
			<div class="top">
				<a class="regback">上一步</a>
				<!--<span>如何获取分行码</span>-->
				<button class="jumpIt">跳过</button>
			</div>
		
		
		<div class="warn">
			
		</div>
		<div class="registerBox1">
			<div class="companyCode">
				<h4>分行码</h4>
                <input id="companyCodeID" type="tel" maxlength="8" placeholder="请输入8位分行码">
                <span></span>
			</div>
			<div class="companyBox">
				<div class="companyTit">检索结果:</div>
				<div class="companyMsg">
					<!--<p>上海上合房地产有限公司</p>
					<p>上和A组</p>-->
				</div>
				<a href="javascript:;" id="againWrite">重新填写</a>
			</div>
			<a class="registerNext">完成</a>
		</div>
		<p class="howgetCode"><a>如何获取分行码？</a></p>
		<div class="getcompanyCode">
			<div class="top">
				<a id="codeBack"></a>
				<span>如何获取分行码</span>
			</div>
			<div class="codeMsg">
				<p>分行码是轩天合作经纪门店的唯一标识，可咨询您的分行经理获取唯一的邀请码，
				完善提交后可报备/带看，赚取佣金，并享受便捷透明的结佣方式。</p>
				<p>若贵司未与我司签约合作，请拨打
					<a href="tel:02131338882">021-31338882</a>
				</p>
			</div>
		</div>
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/register-msg.js?v=2017090511" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
