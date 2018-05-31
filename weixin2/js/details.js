	$(function(){
		FastClick.attach(document.body);

		var proID = (window.location.search).substr(1,(window.location.search).length);
		var mySwiper;
		var mySwiper1;
		var imglist = "";
		var imglist1 = "";
		var bannerStr = "";
		$("#detailsBack").on("click",function(){
			window.history.back();
		})
//		
		$.post(dataStr+ "/Project/projectdetails",{propertyID:proID,memberId:thismemberID}, function(data){
			$.post(dataStr+"/Project/maidi",{propertyid:proID},function(data){
				if(data.map.lfmd.length == 0){
					$(".buildsale").hide();
				}else{
					$(".buildsale").show();
				}
			})			
			$.each(check(data.imglist), function(i){
				
				if (data.imglist[i]) {
					bannerStr = "<img src='"+imgurlStr+ check(data.imglist[i])+ "' />";
				
				} else{
					bannerStr = "<img src='../img/picture1.png' />";
				}
				
				imglist += "<div class='swiper-slide'><div class='bannerBg'></div>"+ bannerStr +"</div>";
				imglist1 +=  "<div class='swiper-slide'> <div class='swiper-zoom-container'> "+ bannerStr +"</div></div>";
			});
			$(".banner").html(imglist);
			
			mySwiper = new Swiper ('.swiper01 .swiper-container', {
			    direction: 'horizontal',
			    loop: false,
			    // 如果需要分页器
			    pagination: '.swiper01 .swiper-pagination',
			    paginationType : 'fraction'
		 	});
			
			$(".bannerBack").click(function(){
				$("#list").show();
				$(".bannerBox").fadeOut();
				
			})
			$(".banner").click(function(){
				$("#list").hide();
				$(".swiper02").html(imglist1);
				$(".bannerBox1").fadeIn();

				mySwiper1 = new Swiper ('.bannerBox1 .swiper-container', {
					zoom : true,
					zoomToggle :true,
				    // 如果需要分页器
				    pagination: '.bannerBox1 .swiper-pagination',
				    paginationType : 'fraction'
			 	});
			})
			
			
			
            function buildMark(t){
            	
				switch(t)
				{
				case "1":
				  return t = "住宅";
				  break;
				case "2":
				  return t = "别墅";
				  break;
				case "3":
				  return t = "公寓";
				  break;
				case "4":
				  return t = "商铺";
				  break;
				case "5":
				  return t = "写字楼";
				  break;
				case "6":
				  return t = "洋房"
				  break;
				default:
				  return t = "";
				}			                    
            }
			if(check(data.mess[0])){
		        $(".detailstop").append(check(data.mess[0].PropertyName));        
	            var x = check(data.mess[0].BuildingType).split(",");	                    
	            if(x[0] == "0"){
	            	x.shift();			                    	
	            }
	
				var typeHTML = "";
				for (var i=0;i<x.length;i++) {
					typeHTML += "<span>"+ buildMark(x[i]) +"</span>";
				}
//房屋基本信息		

				$(".proTit").html("<div><b>"+ checkprice(data.mess[0].AveragePrice) +"</b><p>"+ typeHTML +"</p></div><div>"
					+ check(data.mess[0].Address) +"</div><div>合作经纪人:<span>"
					+ check(data.mess[0].AgentMemberCount)+ "</span><b>|</b>意向客户:<span>"+ check(data.mess[0].ReportCustomer) 
					+"</span><b>|</b>最近成交:<span>"+ check(data.mess[0].TotalHouse) +"</span></div>");
			}
			
			
			$(".buildsale h4").on("click",function(){
				window.location.href = "buildsale.jsp?"+proID;
			})
			
//佣金方案
			function checkcommisson(msg){
				var thismsg = Number(msg);
				if(thismsg < 100){
					return thismsg + '%';
				}else{
					return thismsg + '元/套';
				}
			}
			
			//if(check(data.yjfa[0])){	
				//console.log(check(data.yjfa[0])
				//$(".buildCase").html("<h4><b></b>佣金方案<a href='buildCase.jsp?"+ proID +"'><span>共"+ check(data.yjfasize) +"种方案</span><i></i></a></h4><div><p>"
				//	+ check(data.yjfa[0].CommissionAdword) +"元/套</p><p>"+ check(data.yjfa[1].CommissionAdword) +"元/套</p></div>");
			//}
			//console.log(check(data.tgxq))
			
			
	        if (userType == "2"){
				$(".detailfooter a:first").on("click",function(){
					window.location.href = "client-index.jsp";
				});
				$(".detailfooter a:last").on("click",function(){
					window.location.href = "add-reserve-client.jsp?"+proID+ "$" +encodeURI(check(data.mess[0].PropertyName));
				});
				
				if(check(data.yjfa[1])){	
					//$(".buildCase").css("display","block");
					if(parseInt(data.yjfasize) >2){
						$(".buildCase").html("<h4><b></b>佣金方案<a href='buildCase.jsp?"+ proID +"'><span>共"+ check(data.yjfasize) +"种方案</span><i></i></a></h4><div><p>"
								+check(data.yjfa[0].CommissionAdword)+"</p><p>"+check(checkcommisson(data.yjfa[0].CommissionMoney))+"</p></div><div><p>"
								+check(data.yjfa[1].CommissionAdword)+"</p><p>"+check(checkcommisson(data.yjfa[1].CommissionMoney))+"</p></div>");
					}else{
						$(".buildCase").html("<h4><b></b>佣金方案</h4><div><p>"
								+check(data.yjfa[0].CommissionAdword)+"</p><p>"+check(checkcommisson(data.yjfa[0].CommissionMoney))+"</p></div><div><p>"
								+check(data.yjfa[1].CommissionAdword)+"</p><p>"+check(checkcommisson(data.yjfa[1].CommissionMoney))+"</p></div>");
						
					}
				}else{
					if(check(data.yjfa[0])){	
						//$(".buildCase").css("display","block");
						$(".buildCase").html("<h4><b></b>佣金方案</h4><div class='yongjin1'><p>"
							+check(data.yjfa[0].CommissionAdword)+"</p><p>"+check(checkcommisson(data.yjfa[0].CommissionMoney))+"</p></div>");
					}else{
						$(".buildCase").html("<h4><b></b>佣金方案</h4><p class='buildcase0'>佣金方案暂无</p>");
					}
				}
			}else{
				$(".buildCase").html("<h4><b></b>佣金方案</h4><p class='buildcase0 visitor'>绑定分行后查看</p>");
				$(".detailfooter a").on("touchstart",function(){
					var con;
					con=confirm("是否去绑定分行码查看？"); //在页面上弹出对话框
					if(con==true){
						window.location.href = "../../login/login.jsp?member=1";
					}
					
				})
				
			}
//团购方案
			//console.log(check(data.tgxq))
			if(check(data.tgxq[1])){	
				$(".groupCase").css("display","block");
				if(parseInt(data.tgxqsize) >2){
					$(".groupCase").html("<h4><b></b>团购方案<a href='groupCase.jsp?"+ proID +"'><span>共"+ check(data.tgxqsize) +"种方案</span><i></i></a></h4><div><p>"
							+check(data.tgxq[0].BuildingType)+"</p><p>"+check(data.tgxq[0].DetailName)+"</p></div><div><p>"
							+check(data.tgxq[1].BuildingType)+"</p><p>"+check(data.tgxq[1].DetailName)+"</p></div>");
				}else{
					$(".groupCase").html("<h4><b></b>团购方案</h4><div><p>"
							+check(data.tgxq[0].BuildingType)+"</p><p>"+check(data.tgxq[0].DetailName)+"</p></div><div><p>"
							+check(data.tgxq[1].BuildingType)+"</p><p>"+check(data.tgxq[1].DetailName)+"</p></div>");
				}
			}else{
				if(check(data.tgxq[0])){	
					$(".groupCase").css("display","block");
					$(".groupCase").html("<h4><b></b>团购方案</h4><div class='groupCase1'><p>"
						+check(data.tgxq[0].BuildingType)+"</p><p>"+check(data.tgxq[0].DetailName)+"</p></div>");
				}else{
					$(".groupCase").css("display","none");
				}
			}
//楼盘动态

	
			function toLocaleString(date) {
		        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
		    };//获取日期标签;
			if(check(data.prostate[0])){	
				var newsStr = "";
				var newsimgStr = "";
				
				$(".buildNews").css("display","block");

			    for(var i=0;i<3;i++){
			    	if(check(data.prostate[i])){
			    		if(data.prostate[i].minurlList[0]){
			    			newsimgStr = "<img src='"+ imgurlStr + check(data.prostate[i].minurlList[0]) +"' />";
			    		}else{
			    			newsimgStr = "<img src='../img/picture1.png' />";
			    		}
					var unixTimestamp = new Date( check(data.prostate[i].CreatTime) ) ;
					commonTime = toLocaleString(unixTimestamp);
					
			    	newsStr += "<a href='newsDetails.jsp?"+ check(data.prostate[i].ID) +"'><dl class='clearfix'><dt>"+ newsimgStr +"</dt><dd>"
								+ check(data.prostate[i].Title) +"</dd><dd>"+ commonTime +"</dd></dl></a>";
			    	}	
			    }
			    
			    $(".buildNews h4").html("<b></b>楼盘动态<a href='buildNews.jsp?"+proID+"'><span>查看全部</span><i></i></a>");
			    
			    $(".buildNews").append(newsStr);
		   }else{
			   $(".buildNews").css("display","none");
		   }
//主力户型		
			function typeMark(t){
				switch(t)	
				{
				case 1:return t = "住宅";break;
				case 101:return t = "普通住宅";break;
				case 2:return t = "别墅";break;
				case 201:return t = "联排别墅";break;
				case 202:return t = "独栋别墅";break;
				case 203:return t = "双拼别墅";break;
				case 204:return t = "叠加别墅";break;
				case 205:return t = "串联别墅";break;
				case 206:return t = "亲水别墅";break;
				case 207:return t = "类独栋别墅";break;
				case 208:return t = "Mini墅";break;
				case 209:return t = "合院别墅";break;
				case 210:return t = "商用别墅";break;
				case 3:return t = "公寓";break;
				case 301:return t = "酒店式公寓";break;
				case 4:return t = "商铺";break;
				case 401:return t = "商铺";break;
				case 5:return t = "写字楼";break;
				case 501:return t = "写字楼";break;
				case 6:return t = "洋房";break;
				case 601:return t = "洋房";break;
				default:return t = "";
				}
            }
			
			
		    var typeStr = "";
		    var houseimg = "";
		    	
		    	if(data.zlhx.length > 3){
					$(".houseType h4").html("<b></b>主力户型<a href='houseType.jsp?"+ proID +"'><span>共"+ data.zlhxsize +"种户型</span><i></i></a>");					
		    	}else{
					$(".houseType h4").html("<b></b>主力户型");					
		    		
		    	}
		    	if(check(data.zlhx[2])){
					$(".houseType").css("display","block");
				    for (var i=0;i<3;i++) {
						if (check(data.zlhx[i].minurlList[0])) {
							houseimg = "<img src='"+ imgurlStr + check(data.zlhx[i].minurlList[0])+ "' />";
						
						} else{
							houseimg = "<img src='../img/picture1.png' />";
						}
		
							typeStr += "<dl class='clearfix'>"
								+"<dt class='houseimg' value='"+ i +"'>"+ houseimg +"</dt>"
								+"<dd><span>"+ check(data.zlhx[i].HouseModel) +"</span></dd><dd><b><i>"+parseInt(check(data.zlhx[i].SalePrice))+"</i>元起</b></dd>"
								+"<dd>"+ typeMark(check(data.zlhx[i].HouseType)) +"<b>|</b>"+ check(data.zlhx[i].Decoration) +"</dd>"
								+"<dd><i>"+ check(data.zlhx[i].Room1) +"</i>室"
								+"<i>"+ check(data.zlhx[i].Room2) +"</i>厅"
								+"<i>"+ check(data.zlhx[i].Room3) +"</i>卫"
								+"<b>|</b><i>"+ check(data.zlhx[i].Acreage) +"m&sup2;</i></dd></dl>";
					}	
				    $(".houseType").append(typeStr);
				    $("#list ul .houseType dl:last").css("border","0");
				}else if(check(data.zlhx[1])){
					$(".houseType").css("display","block");
				    for (var i=0;i<2;i++) {
						if (check(data.zlhx[i].minurlList[0])) {
							houseimg = "<img src='"+ imgurlStr + check(data.zlhx[i].minurlList[0])+ "' />";
						
						} else{
							houseimg = "<img src='../img/picture1.png' />";
						}
		
							typeStr += "<dl class='clearfix'>"
								+"<dt class='houseimg' value='"+ i +"'>"+ houseimg +"</dt>"
								+"<dd><span>"+ check(data.zlhx[i].HouseModel) +"</span></dd><dd><b><i>"+parseInt(check(data.zlhx[i].SalePrice))+"</i>元起</b></dd>"
								+"<dd>"+ typeMark(check(data.zlhx[i].HouseType)) +"<b>|</b>"+ check(data.zlhx[i].Decoration) +"</dd>"
								+"<dd><i>"+ check(data.zlhx[i].Room1) +"</i>室"
								+"<i>"+ check(data.zlhx[i].Room2) +"</i>厅"
								+"<i>"+ check(data.zlhx[i].Room3) +"</i>卫"
								+"<b>|</b><i>"+ check(data.zlhx[i].Acreage) +"m&sup2;</i></dd></dl>";
					}	
					//$(".houseType h4").html("<b></b>主力户型");					
				    $(".houseType").append(typeStr);
				    $("#list ul .houseType dl:last").css("border","0")
				}else if(check(data.zlhx[0])){
					$(".houseType").css("display","block");
						if (check(data.zlhx[0].minurlList[0])) {
							houseimg = "<img src='"+ imgurlStr+ check(data.zlhx[0].minurlList[0])+ "' />";
						
						} else{
							houseimg = "<img src='../img/picture1.png' />";
						}
		
							typeStr += "<dl class='clearfix'>"
								+"<dt class='houseimg' value='"+ 0 +"'>"+ houseimg +"</dt>"
								+"<dd><span>"+ check(data.zlhx[0].HouseModel) +"</span></dd><dd><b><i>"+parseInt(check(data.zlhx[0].SalePrice))+"</i>元起</b></dd>"
								+"<dd>"+ typeMark(check(data.zlhx[0].HouseType)) +"<b>|</b>"+ check(data.zlhx[0].Decoration) +"</dd>"
								+"<dd><i>"+ check(data.zlhx[0].Room1) +"</i>室"
								+"<i>"+ check(data.zlhx[0].Room2) +"</i>厅"
								+"<i>"+ check(data.zlhx[0].Room3) +"</i>卫"
								+"<b>|</b><i>"+ check(data.zlhx[0].Acreage) +"m&sup2;</i></dd></dl>";
	
					//$(".houseType h4").html("<b></b>主力户型");					
				    $(".houseType").append(typeStr);
				    $("#list ul .houseType dl:last").css("border","0");
				}else{
				$(".houseType").css("display","none");
			}	
				$(".houseimg").click(function(){
					var _this=$(this).attr("value");
					typeimg =  "<div class='swiper-slide'> <div class='swiper-zoom-container'><img src='"+ imgurlStr+ check(data.zlhx[_this].bigurlList[0])+ "' /></div></div>";
					$(".swiper03").html(typeimg);
					//$("#list").hide();
					$("body").css("overflow","hidden");
					$(".bannerBox2").fadeIn();
					mySwiper1 = new Swiper ('.bannerBox2 .swiper-container', {
						//allowSwipeToNext : false,
						zoom : true,
						zoomToggle :true,
					    // 如果需要分页器
					    pagination: '.bannerBox2 .swiper-pagination',
					    paginationType : 'fraction'
				 	});

				})
				$(".bannerBack").on("click",function(){
					//$("#list").show();
					$(".swiper03").html("");
					$("body").css("overflow","scroll");
					$(".bannerBox2").fadeOut()
					$(".imgBox").html("");
				})
		    	
		    	
//				$(".houseimg").on("click",function(){
//					$("#list").hide();
//					$("body").css("overflow","hidden");
//					$(".houseTypeImg").fadeIn();
//					$(".imgBox").html($(this).html()+"<b></b>");
//				})
//				$(".imgBack").on("click",function(){
//					$("#list").show();
//					$("body").css("overflow","scroll");
//					$(".houseTypeImg").fadeOut()
//					$(".imgBox").html("");
//				})
			
//楼盘信息	

				function checkprice(num){
                    if((num == "")||(!num)&&(num!=0)){
                    	return num = "暂无报价";
                    }else{
                    	return num+"<i>元/m&sup2;</i>";
                    }
					
				}
				function checkprice2(num){
                    if((num == "")||(!num)&&(num!=0)){
                    	return num = "暂无报价";
                    }else{
                    	return num+"元/m&sup2";
                    }
					
				}
				
				function checkMsg(Num){
		    	if ((!Num)&&(Num!=0)||(Num.length ==0)) {
		    		return Num = "暂无";
		    	}else{
		    		return Num;
		    	}
		    }
			if(check(data.xmxq)){	
	
				//console.log(check(data.xmxq[0])
				var checkTime = new Date( check(data.xmxq[0].CheckTime) );
				checkDay = toLocaleString(checkTime);
				$(".buildMsg").html("<h4><b></b>楼盘信息<a href='buildMsg.jsp?"+proID+"'><span>查看全部</span><i></i></a></h4><div><p><b>开发商</b>"
					+ checkMsg(data.xmxq[0].Developer) +"</p><p><span>物业公司</span>"
					+ checkMsg(data.xmxq[0].PropertyCorp) +"</p><p><span>开盘时间</span>"
					+ checkMsg(data.xmxq[0].OpenTime) +"</p><p><span>交房时间</span>"
					+ checkDay +"</p></div><div><p><b>容积率</b>"
					+ check(data.xmxq[0].CubageRatio) +"</p><p><b>绿化率</b>"
					+ check(data.xmxq[0].VirescenceRatio) +"%</p><p><span>配套设施</span>篮球场</p><p><span>周围商圈</span>"
					+ checkMsg(data.xmxq[0].ShoppingArea) +"</p><p><span>交通出行</span>"
					+ checkMsg(data.xmxq[0].Traffic) +"</p></div>");
			}		
//同区位楼盘				
			//console.log(check(data.xmxq[0].ID)
			if(check(data.xmxq[0].CityID)){	
		
				var thisID = check(data.xmxq[0].ID);
				var thiscityID = check(data.xmxq[0].CityID);
			    $.post(dataStr+"/Project/getproject",{ pageSize: 10, pageNum: 0 ,cityid: thiscityID,memberId:9309},function(data){
			    	console.log(data)
			    	var sameAreaStr = "";
			    	var arr = new Array();
			    	$.each(check(data.projectInf), function(i) {
			    		
			    		if (check(data.projectInf[i].id) != thisID) {
			    			arr.push(check(data.projectInf[i].id))
			    		}
			    	});

					var out = [];
					var num = 3;
					while(out.length < num){
					    var temp = (Math.random()*arr.length) >> 0;
					    out.push(arr.splice(temp,1)[0]);
					}
					
					var imgStr = "";
					var yjStr = "";			
			    	$.each(check(data.projectInf), function(i) {
			    			
			    		for (var j=0;j<out.length;j++) {
							//console.log(check(data.projectInf[j].id)
				    		if (out[j] == check(data.projectInf[i].id)  ) {
				    			//console.log(i)
//			                    if(check(data.projectInf[i].commissionMoney) == ""){
//			                    	yjStr = "暂无";
//			                    }else{
//			                    	yjStr = check(data.projectInf[i].commissionMoney);
//			                    }
			                    if (userType == "2"){
			                    	if(check(data.projectInf[i].commissionMoney) == ""){
				                    	yjStr = "暂无";
				                    }else{
				                    	yjStr = check(data.projectInf[i].commissionMoney);
				                    }
			                    } else{
			                    	yjStr = "<a class='visitor'>绑定分行后查看</a>"
			                    } 
				    			
								if (check(data.projectInf[i].mainPic)) {
									imgStr = "<img src='"+imgurlStr+ check(data.projectInf[i].mainPic)+ "' />";
								
								} else{
									imgStr = "<img src='../img/picture1.png' />";
								}
								sameAreaStr +="<li><a href='details.jsp?"+ check(data.projectInf[i].id) +"'>"
									+"<div class='goods-pic'>"+ imgStr + "</div></a><div class='goods-txt'><p>"
									+ check(data.projectInf[i].propertyName) +"</p><p>"+ check(data.projectInf[i].cityName)+ check(data.projectInf[i].boroughName) +"<span>"
									+ checkprice2(data.projectInf[i].averagePrice) +"</span></p><p><b>住宅</b><b>商铺</b><b>"
									+check(parseInt(data.projectInf[i].minAcreage))+"~"+ check(parseInt(data.projectInf[i].maxAcreage)) +"平</b></p><p><b>佣</b>"
									+ yjStr +"</p></div></li>";
				    		}
			    		}		
			    	});
			    	if(sameAreaStr != ""){
			    		$("#sameAreaBuilds").css("display","block");
						$("#sameAreaBuilds").append(sameAreaStr);
						$(".visitor").on("click",function(){
							var con;
							con=confirm("是否去绑定分行码查看？"); //在页面上弹出对话框
							if(con==true){
								window.location.href = "../../login/login.jsp?member=1";
							}
							
						})
			    		
			    	}else{
			    		$("#sameAreaBuilds").css("display","none");
			    	}
		    	});
			}		
		});

	});
