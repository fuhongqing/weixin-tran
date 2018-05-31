	$(function(){
		FastClick.attach(document.body);
//	    console.log(thismemberID);
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
 

   
      
    	if(thissex == "2"){
    		$("#editSex span").html("女");
    		$("#editSex span").attr("value","2");
			$("#editPhotoBox img").attr("src","../img/woman1.png");
    		
    	}else if(thissex == "1"){
    		$("#editSex span").html("男")
    		$("#editSex span").attr("value","1")
			$("#editPhotoBox img").attr("src","../img/man1.png");
    	}else{
    		$("#editSex span").html("男")
    		$("#editSex span").attr("value","0")
			$("#editPhotoBox img").attr("src","../img/man1.png");
    	};
    	$("#editName span").html(thisfullName);
    	$("#editMobile span").html(thisphone);
    	
    	
    	
	    if (userType == "2"){
    	
	    	if(thisagencyName.length <= 15){
	    		$(".editContent ul #companyName b").css("lineHeight","2rem")
	    		$("#companyName b").html(thisagencyName);
	    	}else{
	    		$(".editContent ul #companyName b").css("lineHeight","1rem")
	    		$("#companyName b").html(thisagencyName);
	    	}
	    	if(thisbranchName.length <= 15){
	    		$(".editContent ul #storeName b").css("lineHeight","2rem")
	    		$("#storeName b").html(thisbranchName);
	    	}else{
	    		$(".editContent ul #storeName b").css("lineHeight","1rem")
	    		$("#storeName b").html(thisbranchName);
	    	}
	//查看门店二维码  
			$("#storeCode span").html(thisagencyCode);
	
		}else{
	    		$(".editContent ul #storeName b").css("lineHeight","2rem")
	    		$("#storeName b").html("<a class='visitor'>去绑定分行</a>");
	    		$(".editContent ul #companyName b").css("lineHeight","2rem")
	    		$("#companyName b").html("<a class='visitor'>去绑定分行</a>");
	    		$("#storeCode span").css("fontSize","14px");
	    		$("#storeCode span").html("<a class='visitor'>去绑定分行</a>");
				$(".visitor").on("touchstart",function(){
					var con;
					con=confirm("是否去绑定分行码查看？"); //在页面上弹出对话框
					if(con==true){
						window.location.href = "../../login/login.jsp?member=1";
					}
					
				})
		}
		
		
	    //console.log(thismemberID)
	    if ($("#editSex span").html() == "女") {
			$("#editPhotoBox img").attr("src","../img/woman1.png");
		}else{
			$("#editPhotoBox img").attr("src","../img/man1.png");
		}
			
		$(".back").click(function(){
			window.history.back();
		})
		
		$(".editback").on("click",function(){
			//$(".editWrap").css("display","none").animate({left:"30rem"},"slow");
			$(".editWrap").animate({left: "19rem"}, 300 )
			setTimeout(function(){
				$(".editWrap").css("display","none");
			},200);
		})//取消修改
		
//修改姓名				
		$("#editName").on("click",function(){
			
			$("#nameID").val($("#editName span").html());
			$("#nameWrap").css("display","block").animate({left: "0"}, 300 );			
		})
		$("#nameID").on("keyup",function(){
			if($(this).val().length >= 2){
				$("#nameWrap button").addClass("saveName");
				$("#clearName").css("display","block");
			}else{
				$("#nameWrap button").removeClass("saveName");
				$("#clearName").css("display","none");
			}
		})
		
		
		$(".edittop button").on("click",function(){
			if ($(".edittop button").hasClass("saveName")) {

//此处书写保存名字的ajax；
				updateMember(6,'name',$("#nameID").val())
			}
		})
		
		
		function updateMember(Type,Name,Value){
//					id:thismemberID,	//是	Long	经纪人id
//					deviceToken	//是	string	设备标识 updateType 为1 时必传
//					userPassword	//是	string	经纪人密码 updateType 为4 时必传
//					sex	//是	Integer	性别（0-未知，1-男，2-女） updateType 为5 时必传
//					name	//是	string	经纪人名字 updateType 为6 时必传
//					updateType:Type	//是	Integer	// 1 更新设备标识 2 经纪人注销 3 经纪人退出登录 4 经纪人修改密码 5 更新性别 6 更新姓名
			
			var updateMemberParams = {
				id:thismemberID,
//				Name:Value,
				updateType:Type
			}
			updateMemberParams[Name] = Value;
			$.ajax({
				url: dataStr + "v1/agent/updateMember",
			    type:"put",
				data:JSON.stringify(updateMemberParams),
				headers: { 
				    "Content-Type": "application/json"
				},
			    success: function(data) {
					if(data.code == 200){
						$(".loaderWrap").css("display","block");
						setTimeout(function(){
							$(".loaderWrap").css("display","none");
//姓名更新							
							if(Name == 'name'){
								$("#editName span").html($("#nameID").val());
							}
//性别更新							
							if(Name == 'sex'){
								$("#editSex span").text($(".changeSexActive").html());
								$("#editSex span").attr("value",$(".changeSexActive").attr("value"));
								if ($("#editSex span").html() == "女") {
									$("#editPhotoBox img").attr("src","../img/woman1.png");
								}else{
									$("#editPhotoBox img").attr("src","../img/man1.png");
								}
							}
							
							
							$(".editWrap").animate({left: "19rem"}, 300 )
							setTimeout(function(){
								$(".editWrap").css("display","none");
							},200);
						},300);
						
					}else{
						$(".loaderWrap").css("display","block");
						setTimeout(function(){
							//$(".loaderBox").html("<div class='loader'><div class='right'></div></div>操作失败！");
							$(".loaderWrap").css("display","none");
							warn("操作失败！");
						},500);
						
					}
			    	
			    }
			})
			
		}
		
		$("#clearName").on("click",function(){
			$("#nameID").val("");
			$("#editNum").val("");
			$("#nameWrap button").removeClass("saveName");
			$(this).css("display","none");
		})
		
//修改性别

		$("#editSex").on("click",function(){			
			if ($("#editSex span").html() == "男") {
				$(".changeSex p[value=1]").addClass("changeSexActive");
			} else if($("#editSex span").html() == "女"){
				$(".changeSex p[value=2]").addClass("changeSexActive");
			}else{
				$(".changeSex p").removeClass(".changeSexActive");
			};
			$("#sexWrap").css("display","block").animate({left: "0"}, 300 );			
		})
		$(".changeSex p").on("click",function(){
			
			
			if (!$(this).hasClass("changeSexActive")) {
				$(this).addClass("changeSexActive");
				$(".changeSex p").not($(this)).removeClass("changeSexActive");
				
				updateMember(5,'sex',$(".changeSexActive").attr("value"));
			}

		})
//修改手机号				

		$("#editMobile").on("click",function(){
			$("#numberWrap").css("display","block").animate({left: "0"}, 300 );			
		})
		var thisNum = "";
		$("#getcode").on("click",function(){
			thisNum = parseInt($(".writePhone input").val());
			
			if( /^1[34578]\d{9}$/.test(thisNum) ){
				$.get(dataStr+"v1/agent/checkPhone?phone="+thisNum,function(data){
					if (data.code) {
				
						$(".loaderWrap").css("display","block");
						setTimeout(function() { 
							$(".loaderWrap").css("display","none");
						},4000);
						$.get(dataStr+"v1/agent/getCode?phone="+thisNum,function(data){
							console.log(data);
							$(".loaderWrap").css("display","none");
							if (data.code == 200) {
								warn("验证码发送成功！");
								settime($("#getcode"));
								
							}else{
								warn(data.msg)
							}
						})
						
					} else{
						warn(data.msg);
					}
	
				})			
				
			
			
			}
		})
		$("#clearNum").on("click",function(){
			$("#editNum").val("");
			thisNum = "";
			$(this).css("display","none");
		})
		
		$("#editNum").on("keyup",function(){
			if($(this).val().length >= 2){
				$("#clearNum").css("display","block");
			}else{
				$("#clearNum").css("display","none");
			}
		})
		
			var countdown=60; 
			function settime(val) { 
				if (countdown == 0) { 
					val.removeAttr("disabled");
					val.css("color","#31B431");
					val.html("重新获取"); 
					countdown = 60;
					return;
				} else { 
					val.attr("disabled", "disabled");  
					val.css("color","#999");
					val.html("重新发送(" + countdown + "s)"); 
					countdown--; 
				} 
				setTimeout(function() { 
					settime(val) 
				},1000) 
			}//手机验证码60s倒计时
		
//输入手机验证码				
		var codelength = "";
		$(".writeCode input").on("keyup",function(){
			codelength = $(this).val().length
			thisNum = parseInt($(".writePhone input").val());
			if( codelength == 4 && /^1[34578]\d{9}$/.test(thisNum) ){
				$("#updateNum").css("background","#31B431");
				$("#updateNum").removeAttr("disabled");
			}else{
				$("#updateNum").css("background","#B8DDB8");
				$("#updateNum").attr("disabled", "disabled");  
			}
			
		});
//点击更改电话号码完成				
		$("#updateNum").on("click",function(){
			$(".loaderWrap").css("display","block");
			setTimeout(function() { 
				$(".loaderWrap").css("display","none");
			},4000);
			$.get(dataStr+"v1/agent/checkCode",
				{
					phone:$(".writePhone input").val(),
					randCode:$(".writeCode input").val()
				},function(data){

				if (data.code == 200) {
					$.ajax({
						url: dataStr + "v1/agent/updatePhone",
					    type:"put",
						data:JSON.stringify({
							"phone":$(".writePhone input").val(),
							"id":thismemberID
						}),
						headers: { 
						    "Content-Type": "application/json"
						},
					    success: function(data) {
							console.log(data);
							if(data.code == 200){
								$(".loaderBox").html("<div class='loader'><div class='right'><img src='../img/finish.png' /></div></div>更改成功！")
								setTimeout(function(){
									$(".loaderWrap").css("display","none");
									$("#editMobile span").html($(".writePhone input").val());
									
									$(".editWrap").animate({left: "19rem"}, 300 )
									setTimeout(function(){
										$(".editWrap").css("display","none");
									},200);
								},500)
							}else{
								$(".loaderWrap").css("display","none");
								warn(data.msg);
							}
						}
					})
				}else{
					warn(data.msg);
				}
			})
				
		})
		
		
		function warn(word){
			$(".warn").html(word).fadeIn("fast");
			setTimeout(function(){$(".warn").fadeOut("normal");},2000)
		}
//		$("#storeCode").on("click",function(){
//			$("#QRcodeWrap").css("display","block").animate({left: "0"}, 300 );			
//			$.post(dataStr+"/login/weiXinUrl",{parentId:thisparentID,branchId:thisbranchID},function(data){
//				//console.log(data)
//				$(".storeCodepic img").attr("src",check(data.url));
//			})
//		})
//		
//		
//		$("#cancelQRcode").on("click",function(){
//			$(".editWrap").animate({left: "19rem"}, 300 )
//			setTimeout(function(){
//				$(".editWrap").css("display","none");
//			},200);
//		})
		 
	})
