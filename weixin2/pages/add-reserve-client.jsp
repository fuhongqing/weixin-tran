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
		<title>添加报备</title>
        <!--[if lt IE 9]>
        <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
		
		<link rel="stylesheet" type="text/css" href="../css/common.css"/>
		<link rel="stylesheet" type="text/css" href="../css/lCalendar.css"/>
		<link rel="stylesheet" type="text/css" href="../css/client-add.css"/>
		<style type="text/css">
			.tel-num{
				width: 50%;
			}
			.tel-num input{
				width: 30%;
			}
			.tel-num2 input{
				width: 80%;
			}
			.tel-num2{
				display: none;
			}
			.isAllnum{
				width: 2rem;
				height: 1.2rem;
				border-radius: 0.6rem;
				background: #48CFAD;
				margin: 0.3rem 0 0 0.5rem;
			}
			.numActive{
				background: #bbb;
				
			}
			.numActive .phoneBtn{
				float: left;
			}
			.phoneBtn{
				display: block;
				height: 0.95rem;
				width: 1rem;
				margin: 0.1rem;
				float: right;
				border-radius: 50%;
				background: #FFFFFF;
				border: 0 solid rgba(0,0,0,0.10);
				box-shadow: 0 3px 1px 0 rgba(0,0,0,0.05), 0 2px 2px 0 rgba(0,0,0,0.10), 0 3px 3px 0 rgba(0,0,0,0.05);				
			}
			.add-client .remark{
				height: 5rem;
			}
			.add-client .remark div{
				padding-top:0.5rem;
				box-sizing: border-box;
				
			}
			.add-client #remark{
				height: 4rem;
				line-height: 1rem;
				width: 9.5rem;
				border: 0;
				font-size: 16px;
    			color: #42C29D;
			}
		</style>
	</head>
	<body>
		<div class="top">
			<a class="back"></a>
			<span>添加报备</span>
			<a id="finish" href="#">完成</a>
		</div>
		<div class="warn">
			
		</div>
	    <div class="add-client-box">
			<ul class="add-client">
				<li>
					<em>*</em>
					<label for="">姓<i>名</i></label>					
					<div id="fullNameBox">
						<input placeholder="请输入姓名" type="text" name="fullName" id="fullNameID" value="" />
					</div>					
				</li>
				<li>
					<em>*</em>
					<label for="">电<i>话</i></label>
					<div class="tel-num tel-num1">
						<input type="tel" maxlength="3" placeholder="前三位" name="firstNum" class="phoneNum" id="firstNumID" value="" />
						<b style="color:#999;font-size: 18px;">••••</b>
						<input type="tel" maxlength="4" placeholder="后四位" name="lastNum" class="phoneNum" id="lastNumID" value=""/>
					</div>
					<div class="tel-num tel-num2">
						<input type="tel" maxlength="11" placeholder="11位手机号" class="phoneNum" id="phone" value="" />
					</div>
					<div class="isAllnum">
						<span class="phoneBtn"></span>
					</div>
				</li>
				<li class="sectionBox">
					<em>*</em>
					<label for="selectInit">意向项目</label>
                    <div class="section">
                    	<i>请选择▾</i>
                    </div>
				</li>
				<li class="caseSaleBox">
					<em></em>
					<label for="">案场销售</label>
					<div id="caseSale"><i>请选择▾</i></div>
				</li>
				<li id="addmoreMsg">
					<em></em>完善更多信息
				</li>
				<li id="visitway">
					<em></em>
					<label for="">来访方式</label>
					<div id="visitwaychoose" value="1"><span>自驾</span><i>▾</i></div>
				</li>
				<li id="visitorsNum">
					<em></em>
					<label for="">来访人数</label>
					<div>
						<input placeholder="请输入人数" type="number" name="visitorsNumber" id="visitorsNumberID" value=""/>
					</div>
				</li>
				<li id="visitDate">
					<em></em>
					<label for="">来访时间</label>
					<div>
						<input placeholder="请选择▾" type="text"  onfocus="this.blur();" name="lookHomeDate" id="dateID" class="weui_input" value=""/>
					</div>
				</li>
				<li id="takeCarTime">
					<em>*</em>
					<label for="">上车时间</label>
					<div>
						<input placeholder="请选择▾" class="weui_input" type="text"  onfocus="this.blur();" name="lookTimeMinute" id="lookTimeMinuteID"/>
					</div>
				</li>
				<li id="takeCarID">
					<em>*</em>
					<label for="">上车地点</label>
					<div>
						<input placeholder="请输入详细地址" type="text" name="houseValuation" id="houseValuationID" value="" />
					</div>
				</li>
				<li class="remark"> 
					<em></em>
					<label for="">备<i>注</i></label>
					<div>
						<textarea id="remark" cols="4" placeholder="请输入备注"></textarea>
					</div>
				</li>
			</ul>
		</div>
		<div class="chooseBox">
			
			<ul id="visitWay">
				<li value="1">自驾</li>
				<li value="0">班车</li>
			</ul>
			<ul id="salePerson">
			</ul>
			<div class="chooseOutBox">
				<div id="chooseOut"></div>
			</div>
		</div>
		
		
		
		<div class="proWrap">
			<div class="top" style="height:45px;line-height:45px;">
				<a class="proBack" style="line-height:25px;">返回</a>
				<span>意向项目</span>
				<a id="complete">确定</a>
			</div>
			<div class="proChoose">
				<!--<input id="search" type="text" placeholder="搜索"/>-->
				<div></div>
			</div>
			<div id="letter" ></div>

			<ul class="proBox sort_box">
				<!--<li><b></b>阿里家园</li>-->
			</ul>
			
			
			<div class="initials">
				<ul>
					
				</ul>
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
						<img src="../img/finish.png" />
					</div>-->
				</div>
				加载中
			</div>
		</div>
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js" type="text/javascript"></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script type="text/javascript" src="../js/jquery.charfirst.pinyin.js"></script>
		<script type="text/javascript" src="../js/lCalendar.js"></script>
		<script type="text/javascript" src="../js/add-reserve-client.js"></script>			
		
	
	</body>
</html>
