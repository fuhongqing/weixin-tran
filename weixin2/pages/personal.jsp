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
		<title>个人资料</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css?v=2017090511"/>
		<link rel="stylesheet" type="text/css" href="../css/mine.css?v=2017090511"/>
	</head>
	<body>
		<div class="top"> 
			<a class="back">返回</a>
			<span>个人资料</span>
		</div>
		<div class="editContent">
			<ul>
				<li id="editPhotoBox">头像
					<img class="editPhoto" src="../img/man1.png" />
				</li>
				<li id="editName">真实姓名<i></i><span>--</span></li>
				<li id="editSex">性别<i></i><span>男</span></li>
				<li id="editMobile">手机号码<i></i><span></span></li>
				<li id="companyName">所在公司<b>--</b></li>
				<li id="storeName">所在门店<b>--</b></li>
				<li id="storeCode">分行码<span></span></li>
			</ul>
		</div>
		<div class="warn">
			请输入您的姓名！
		</div>
		
		<!--修改姓名-->
		<div class="editWrap" id="nameWrap">
			<div class="edittop"> 
				<a class="editback" id="cancelName">取消</a>
				<span>修改姓名</span>
				<button>保存</button>
			</div>
			<div class="changeName">
			    <input type="text" name="name" id="nameID"/>
			    <b id="clearName"><img src="../img/clearBefore.png" /></b>
			</div>
		</div>
			
			
			<!--修改性别-->
		<div class="editWrap" id="sexWrap">
			<div class="edittop"> 
				<a class="editback" id="cancelSex">取消</a>
				<span>修改性别</span>
			</div>
			<div class="changeSex">
				<p value="1">男</p>
				<p value="2">女</p>
			</div>
		</div>
			
			
			<!--修改手机号-->
		<div class="editWrap" id="numberWrap">
			<div class="edittop"> 
				<a class="editback" id="cancelNumber">取消</a>
				<span>修改号码</span>
			</div>
			<div class="changeNumber">
				<p>修改后的手机号码将作为以后的登录帐号</p>
				<div class="writePhone">
					<label>新手机号</label>
					<input id="editNum" type="tel" maxlength="11" placeholder="请输入新的手机号码"/>
				    <b id="clearNum"><img src="../img/clearBefore.png" /></b>
				</div>
				<div class="writeCode">
					<label>验证码</label>
					<input type="tel" maxlength="4" placeholder="请输入验证码"/>
					<button id="getcode">获取验证码</button>
				</div>
			</div>
			<button id="updateNum" disabled="disabled">完成</button>			
		</div>
		
		<!--查看门店二维码-->
		<!-- 
		<div class="editWrap" id="QRcodeWrap">
			<div class="edittop"> 
				<a class="editback" id="cancelQRcode">返回</a>
				<span>二维码</span>
			</div>
		    <dl class="storeCodeBox">
				<dt class="storeCodepic">
					<img src="" />
				</dt>
				<dd class="companyName"  id="companyName"><b>上海上合房地产有限公司</b></dd>
				<dd class="storeName"  id="storeName"><b>上合A组</b></dd>
			</dl>
		</div>
		 -->
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
		
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/personal.js?v=2017090511" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
