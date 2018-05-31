$(function(){
window.confirm = function (message) {
   var iframe = document.createElement("IFRAME");
   iframe.style.display = "none";
   iframe.setAttribute("src", 'data:text/plain,');
   document.documentElement.appendChild(iframe);
   var alertFrame = window.frames[0];
   var result = alertFrame.window.confirm(message);
   iframe.parentNode.removeChild(iframe);
   return result;
 };
	FastClick.attach(document.body);
	$("#search").on("focus",function(){
		$(".list-content").hide();
		$(".searchBg").css("display","block");
		$(".searchBox").addClass("searchBoxActive");
		$(".searchOut").css("display","block");
		$("body").css("overflow","hidden");
	});
	$(".searchOut").on("click",function(){
		$(".list-content").show();
		$("#search").val("");
		$(".searchBg").html("<h3>搜索</h3><p><b>输入关键字，搜索您感兴趣的楼盘</b></p>");					

		$(".searchBg").css("display","none");
		$(".searchBox").removeClass("searchBoxActive");
		$(this).css("display","none");
		$("body").css("overflow","auto");
	});
	$("#search").on("keyup",function(){
		
		searchbuild($("#search").val());
	});
	$("#searchBtn").on("touchstart",function(){
		$(this).css("background","#ddd");
	});
	$("#searchBtn").on("touchend",function(){
		$(this).css("background","#fff");
		searchbuild($("#search").val());
	});
	function searchbuild(searchVal){
		var searchHTML = "";
		if(searchVal != ""){
			
			$.post(dataStr+"/Project/property",{ property:searchVal }, function(data){
				if (check(data.propertyname.length)) {
					//console.log(check(data.propertyname[0].PropertyName));
					$.each(check(data.propertyname), function(i) {
						//console.log(check(data.propertyname[i]));
						searchHTML += "<li value='"+ check(data.propertyname[i].ID) +"'>"+ check(data.propertyname[i].PropertyName) +"</li>";
						
					});
					$(".searchBg").html(searchHTML);
					$(".searchBg li").on("click",function(){
						window.location.href = "details.jsp?"+ $(this).val();
					});
				}else{
					
					$(".searchBg").html("<dt><img src='../img/space3.png' /></dt>"
						+"<dd>没有找到匹配的楼盘，换个条件试试吧</dd>");
					
				}
				
			});
		}else{
			$(".searchBg").html("<h3>搜索</h3><p><b>输入关键字，搜索您感兴趣的楼盘</b></p>");
		}
	}	
	/*--------------------------首页轮播图------------------------------------------*/
	var mySwiper;       

	var a,b,c;
	var count = 0;
	getData(10,count);
	var bannerHtml = "";
	var bannerimg = "";
		$.post(dataStr+"/Project/image", function(data){
			console.log(data);
			$(".swiper-wrapper").html('');
			if(data.image.length){
				$.each(check(data.image), function(i) {
	                if (check(data.image[i].ImgUrl)) {
	                	bannerimg ="<img src='"+imgurlStr + check(data.image[i].ImgUrl) +"' />";
	                } else{
	                	bannerimg = "<img src='../img/picture2.png' />";
	                }
					bannerHtml += "<div class='swiper-slide'><a href='"+ check(data.image[i].RContent) +"'><div class='bannerBg'></div></a>"+ bannerimg +"<p>"+ check(data.image[i].Title) +"</p></div>";
				});
			}else{
				bannerHtml = "<div class='swiper-slide'><img src='../img/picture2.png' /></div>";
				
			}
			//console.log(bannerHtml);
			$(".swiper-wrapper").html(bannerHtml);
			mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    
			    loop: false,
			    autoplay:2000,
			    autoplayDisableOnInteraction : false,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
		 	});        
	 	});			
	 	
	 	
		$(".list-tit button").click(function(e){

			$(this).toggleClass("Active");
			//$(".titBg").toggle();

			$("#header dl").eq($(this).index()).slideToggle();
			$(".list-tit button").not($(this)).attr("disabled","disabled");
			if(!$(this).hasClass("Active")){
				$(".list-tit button").removeAttr("disabled","disabled");				
			}
			
		});
		//$(".titBg").click(function(){
			//$("#header dl").slideUp();
		//})
//区域筛选接口
	$.post(dataStr+"/Project/getcity", function(data){
		//console.log(data)
		//console.log(check(data.cityname.length)
		$("#locationChoose").html('<dd value="">全部</dd>');
		var cityhtml = "";
		for (var i=0;i<check(data.cityname).length;i++) {
			cityhtml += "<dd value='"+ check(data.cityname[i].ID) +"'>"+ check(data.cityname[i].CityName) +"</dd>";
		}
		$("#locationChoose").append(cityhtml);
		
		
			$("#locationChoose dd").click(function(){
				$("#buildLocation").removeClass("Active");
				$("#locationChoose dd span").remove();
				$("#buildLocation").text($(this).text());
				$("#buildLocation").attr("value",$(this).attr("value"));
				if ($(this).text() == "全部") {
					$("#buildLocation").text("区域");
				}
				count=0;
				a = $("#buildLocation").attr("value");
				b = $("#buildSale").attr("value");
				c = $("#buildType").attr("value");
				$(".list-content li").remove();
					getData(10,count,a,b,c);
					//myScroll.refresh();
				$(this).append("<span>已选</span>");
				$("#locationChoose dd").css("color","#333").has("span").css("color","#31B431");
				$(".list-tit button").removeAttr("disabled","disabled");											
				
				$(this).parent().slideUp();
				
				
			});
	
 	});				
					
//总价筛选				
				
				$("#saleChoose dd").click(function(){
				$("#buildSale").text($(this).text());
				$("#buildSale").attr("value",$(this).attr("value"));
				if ($(this).text() == "全部") {
					$("#buildSale").text("总价");
				}
				count=0;
				a = $("#buildLocation").attr("value");
				b = $("#buildSale").attr("value");
				c = $("#buildType").attr("value");
				$(".list-content li").remove();
					getData(10,count,a,b,c);
					//myScroll.refresh();
					$("#buildSale").removeClass("Active");
					$("#saleChoose dd span").remove();
					$(this).append("<span>已选</span>");
					$("#saleChoose dd").css("color","#333").has("span").css("color","#31B431");
					$(".list-tit button").removeAttr("disabled","disabled");											
					$(this).parent().slideUp();
				});
//类型筛选				
				
				$("#typeChoose dd").click(function(e){
					e.stopPropagation(); 
					$("#buildType").text($(this).text());
					$("#buildType").attr("value",$(this).attr("value"));
					if ($(this).text() == "全部") {
						$("#buildType").text("类型");
					}
					count=0;
					a = $("#buildLocation").attr("value");
					b = $("#buildSale").attr("value");
					c = $("#buildType").attr("value");
					$(".list-content li").remove();
					
						getData(10,count,a,b,c);
						//myScroll.refresh();
						$("#buildType").removeClass("Active");
						$("#typeChoose dd span").remove();
						$(this).append("<span>已选</span>");
						$("#typeChoose dd").css("color","#333").has("span").css("color","#31B431");
						$(".list-tit button").removeAttr("disabled","disabled");											
						$(this).parent().slideUp();
				});
			var proSize =0;
			function getData(thispageSize, thispageNum ,thiscityid ,thisSalePriceLevel ,thishouseType) {

			    $.ajax({
			        url:dataStr+"/Project/getproject",
			        type:"POST",
			        dataType: "json",
			        data: { pageSize: thispageSize,
			        	pageNum: thispageNum ,
			        	cityid:thiscityid ,
			        	SalePriceLevel:thisSalePriceLevel ,
			        	houseType:thishouseType,
			        	memberId:thismemberID
//			        	memberId:29597
			        },
			        success: function(data) {
						proSize = check(data.projectInfsize);
//						console.log(data);
			            if (check(data.projectInf).length) {
			                //$.each(data, function(index) {
			                for(var index = 0;index <check(data.projectInf.length);index++){	
			                    var x = check(data.projectInf[index].buildingType).split(",");
			                    //console.log(x);
			                    if(x[0] == "0"){
			                    	x.shift();			                    	
			                    }
								
			                    function buildMark(t){
			                    	
									switch(t)
									{
									case "1":
									  return t = "住宅"
									  break;
									case "2":
									  return t = "别墅"
									  break;
									case "3":
									  return t = "公寓"
									  break;
									case "4":
									  return t = "商铺"
									  break;
									case "5":
									  return t = "写字楼"
									  break;
									case "6":
									  return t = "洋房"
									  break;
									default:
									  return t = "其他"
									  //console.log("x")
									}			                    
			                    }
			                    var markStr1;
			                    var markStr2;
								var yjStr = "";
								function checkprice(num){
				                    if((num == "")||(!num)&&(num!=0)){
				                    	return num = "暂无报价";
				                    }else{
				                    	return num+"元/m&sup2";
				                    }
									
								}
								
			                    if(x[0]){
			                    	markStr1 = buildMark(x[0]);
			                    }else{
			                    	markStr1 = "display:none;";
			                    }
		                    	
			                    
			                    if(x[1]){
			                    	markStr2 = buildMark(x[1]);
			                    }else{
			                    	markStr2 = "display:none;";
			                    }
			                    var $liBox = $("<li></li>");
			                    var $aBox = $("<a href='details.jsp?"+ check(data.projectInf[index].id) +"'>");
			                    var imgBox = $("<div class='goods-pic'></div>");
			                    var thisimg;
			                    if (check(data.projectInf[index].mainPic)) {
			                    	thisimg =$("<img src='"+imgurlStr + check(data.projectInf[index].mainPic) +"' />");
			                    } else{
			                    	thisimg = "<img src='../img/picture1.png' />";
			                    	
			                    }
			                    
			                    if (userType == "1"){
			                    	if(check(data.projectInf[index].commissionMoney) == ""){
				                    	yjStr = "暂无";
				                    }else{
				                    	yjStr = check(data.projectInf[index].commissionMoney);
				                    }
			                    } else{
			                    	yjStr = "<a class='visitor'>绑定分行后查看</a>"
			                    } 
			                    
			                    var txtBox = $("<div class='goods-txt'><p>"+check(data.projectInf[index].propertyName)+"</p><p>"
											+check(data.projectInf[index].cityName)+check(data.projectInf[index].boroughName)+"<span>"+checkprice(parseInt(data.projectInf[index].averagePrice))
											+"</span></p><p><b style='"+ markStr1 +"'>"+ markStr1 +"</b><b style='"+ markStr2 +"'>"+ markStr2 +"</b><b>"
											+check(parseInt(data.projectInf[index].minAcreage))+"～"+ check(parseInt(data.projectInf[index].maxAcreage)) +"平</b></p><p><b>佣</b>"
											+yjStr +"</p></div>");
			                    
			                    
								imgBox.html(thisimg);
			                    $liBox.append(imgBox); 
			                    $liBox.append(txtBox);
			                    $aBox.append($liBox);
			                    
			                    $(".list-content").append($aBox);
			                    $(".list-content li").eq(0).css("margin",0);
							}

			            }

			        }
			    });
			}
			proSize;
		$.post(dataStr+"/Project/getproject",{ pageSize: 10, pageNum: 1}, function(data){
			var proSize = check(data.projectInfsize);
			//console.log(proSize);
		});
		

/****************** 滚动上拉下拉加载 ***************/
		$(document).on("scroll",function() {

            var scrollTop = $(this).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(window).height();
            //console.log(scrollTop);
            if(scrollTop >= 290){
            	$(".headerFix").css("position","fixed");
            }else{
            	$(".headerFix").css("position","static");
            }

            if ($(".list-content li").length == proSize) {
            	$(".ball-pulse").html("已经到底了！");
            }else{
	            if (scrollTop + windowHeight == scrollHeight ) {
	                //console.log("我到底部了");
	                setTimeout(getmore,600);
	                function getmore(){
						$(".ball-pulse").html("<div></div><div></div><div></div>");
						setTimeout(function(){
							count++;
							getData(10,count,a,b,c);
							$(".ball-pulse").html("加载更多");
						},1000);
	
	            	}
	            }    
            }

		});
		
			
});
