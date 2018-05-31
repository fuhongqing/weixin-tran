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
		<title>楼盘详情</title>
		<link rel="stylesheet" type="text/css" href="../css/common.css?v=2017090511"/>
		<link rel="stylesheet" type="text/css" href="../css/details.css?v=2017090511"/>
		<link rel="stylesheet" type="text/css" href="../css/swiper.min.css"/>
		<script type="text/javascript">
			if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
			  var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
			    version = parseInt(v[1], 10);
			  if(version >= 8){
			    document.documentElement.classList.add('hairlines')
			  }
			}
		</script>
		
			
	</head> 
	<body>
	
		<div class="bannerBox bannerBox1">
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
	
		<div class="bannerBox bannerBox2">
			<div class="bannertop"><a class="bannerBack"></a></div>
			<div class="swiper-container">
				<div class="swiper-wrapper swiper03">
			        <!-- <div class="swiper-slide"><img src="../img/lunbo.png"/><b></b></div>
			        <div class="swiper-slide"><img src="../img/goods-pic1.png"/><b></b></div>
			        <div class="swiper-slide"><img src="../img/goods-pic2.png"/><b></b></div> -->
			    </div> 
		    <!-- 如果需要分页器 -->
		    	<div class="swiper-pagination swiperpg"></div>       
			</div>
		</div>
	
	
		<div id="list">					
			<ul class="swiper01">

				<div class="detailstop"><a id="detailsBack" href="index-ago.jsp"></a></div>

				<div class="swiper-container">
					<div class="banner swiper-wrapper">
				        <!--<div class="swiper-slide"><img src="../img/lunbo.png"/></div>
				        <div class="swiper-slide"><img src="../img/goods-pic1.png"/></div>
				        <div class="swiper-slide"><img src="../img/goods-pic2.png"/></div>-->
				    </div> 
			    <!-- 如果需要分页器 -->
			    	<div class="swiper-pagination" style="z-index: 200;text-align: right;width:95%;font-size: 16px;"></div>       
				</div>
				<!-------以下是列表项目部分-------->
				<div class="proTit">
					<!--<div>
						<b>2000<i>元/m&sup2;</i></b>
						<p>
							<span>住宅</span>
							<span>商铺</span>
							<span>酒店式公寓</span>
						</p>
					</div>
					<div>
						上海长宁区通协路268号<b></b> 
						<span>查看地图</span>
					</div>
					<div>
						合作经纪人:<span>8036</span><b>|</b>
						意向客户:<span>8036</span><b>|</b>
						最近成交:<span>86</span>
					</div>-->
				</div>
			<!--------------佣金方案--------------->					
				<li class="buildCase clearfix">
					<h4><b></b>佣金方案
					</h4>
					<p class='buildcase0'>佣金方案暂无</p>
					<!--<h4><b></b>佣金方案
						<a href="buildCase.jsp">共3种方案<i></i></a>
					</h4>
					<div>
						<p>联排别墅：15000元/套</p>
						<p>独栋别墅：12000元/套</p>
					</div>-->
				</li>
			<!--------------十大卖点--------------->					
				<li class="buildsale clearfix">
					<h4><b></b>楼盘卖点
						<a><span>查看详情</span><i></i></a>
					</h4>
					
					<div>
						<span>
							<p>十大</p>
							<p>卖点</p>
						</span>
						<span>
							<p>产品</p>
							<p>FADB</p>
						</span>
						<span>
							<p>产品三</p>
							<p>段论</p>
						</span>
						<span>
							<p>CALL</p>
							<p>说辞</p>
						</span>
					</div>
				</li>
				<!--------------团购方案--------------->
				<li class="groupCase clearfix">
					<!--<h4><b></b>团购方案
						<a href="groupCase.jsp">共8种方案<i></i></a>
					</h4>
					
					<div>
						<p>独栋别墅</p>
						<p>10万抵20万</p>
					</div>
					<div>
						<p>联排别墅</p>
						<p>20万抵40万</p>
					</div>-->
				</li>
				
				
				<!--------------楼盘动态--------------->
				<li class="buildNews clearfix">
					<h4></h4>
					<!--<h4><b></b>楼盘动态
						<a href="buildNews.jsp">查看全部<i></i></a>
					</h4>
					<div>
						<dl class="clearfix">
							<dt><img src="../img/buildnews1.png" /></dt>
							<dd>2016年轩天11.11单身狂欢联谊会狂欢邀请！</dd>
							<dd>2016-10-26</dd>
						</dl>
						<dl class="clearfix">
							<dt><img src="../img/buildnews2.png" /></dt>
							<dd>天润尚苑元旦开盘，超值楼盘活动进行中…</dd>
							<dd>2016-10-13</dd>
						</dl>
					</div>-->
				</li>
				
				
				<!--------------主力户型--------------->
				<li class="houseType clearfix">
					<h4></h4>
					<!-- 
					<h4><b></b>主力户型
						<a href="houseType.jsp">共8种户型<i></i></a>
					</h4>
					<div>
						<dl class="clearfix">
							<dt><img src="../img/houseType.png" /></dt>
							<dd><span>A-4两室一厅一厨一卫</span></dd>
							<dd><b><i>300</i>万起</b></dd>
							<dd>联排别墅<b>|</b>毛坯</dd>
							<dd><i>3</i>室<i>1</i>厅<i>1</i>卫<b>|</b><i>160m&sup2;</i></dd>
						</dl>
					</div>
					 -->
				</li>
				
				<!--------------楼盘信息--------------->
				<li class="buildMsg clearfix">
					<!--<h4><b></b>楼盘信息
						<a href="buildMsg.jsp">查看全部<i></i></a>
					</h4>
					<div>
						<p><b>开发商</b>上海上合房地产开发有限公司</p>
						<p><span>物业公司</span>上海樱草有限公司</p>
						<p><span>开盘时间</span>2015年5月4日</p>
						<p><span>交房时间</span>2016年6月9日</p>
					</div>
					<div>
						<p><b>容积率</b>3</p>
						<p><b>绿化率</b>69%</p>
						<p><span>配套设施</span>篮球场</p>
						<p><span>周围商圈</span>万达广场</p>
						<p><span>交通出行</span>地铁9号线</p>
					</div>						-->
				</li>	

				<div id="sameAreaBuilds">
						<h4><b></b>
							同区位楼盘
						</h4>

				</div>
			</ul>	
		</div>
		<!-- 
		<div class="houseTypeImg">
			<div class="imgtop"><a class="imgBack"></a></div>		
			<div class="imgBox"></div>
		</div>	
		 -->	
<!-----------------详情页底部报备-------------------->
		<div class="detailfooter">
			<a href="javascript:;"><i></i>我的报备</a>
			<a href="javascript:;">立即报备</a>
		</div>
		<script src="../js/jquery.min.js" type="text/javascript" ></script>
		<script src="../js/rem.js?v=201804120937" type="text/javascript" ></script>
		<script src="../js/swiper.min.js" type="text/javascript"></script>
		<script src="../js/fastclick.js" type="text/javascript"></script>
		<script src="../js/details.js?v=2017090511" type="text/javascript"></script>
		<%@ include file="trafficStatistic.jsp"%>
	</body>
</html>
