$(function(){
//	FastClick.attach(document.body);
	
	//var checkCode = false;
	//$("#PhoneCode").on("keyup",function(){
		//if ($(this).val().length == 4) {
		//}
	//})//验证验证码

	$("#login").on("touchstart",function(){
		$(this).css("background","#3dab8c");
	})

	$("#login").on("click",function(){
		$(this).css("background","#42C29D");
		if($(".registerName input").val() == ""){
				warn("请输入您的姓名！");
			//console.log($(".registerPsw input").val().length);
		}else if($(".registerPhone input").val() == ""){
				warn("请输入您的手机号！");
		}else if(!(/^1[34578]\d{9}$/.test(parseInt($(".registerPhone input").val()))) ){
				warn("请输入正确的手机号！");
		}else if($(".registerPhoneCode input").val() == ""){
				warn("请输入验证码！");
		}else if($(".registerPsw input").val() == ""){
				warn("请设置您的密码！");
		}else if($(".registerPsw input").val().length < 6){
				warn("密码不能小于6位！");
//		}else if(!$("#useRules i").hasClass("checkAgree")){
//				warn("请同意《用户使用协议》！");
		}else{
			$.post(dataStr+"/login/clickcode",{"mobilephone":$(".registerPhone input").val(),"code":$("#PhoneCode").val()},function(data){
				//console.log(data);
				if(check(data.staus) == "success"){
					$.ajax({
					 	url : dataStr+"/login/register",
						type:"post",
						data:{name:$(".registerName input").val(),
							mobilephone:$(".registerPhone input").val(),
							memberId:thismemberID,
							"password":$(".registerPsw input").val(),
							weixinunionid:thisunionID
						},
						dataType:"json",
						success:function(result){
			   	        	//console.log(result);
							warn("操作成功！");
							$("#login").attr("disabled", "disabled");
							setTimeout(function(){
				   	        	window.location.href = "../../login/login.jsp?member=1";
							},300);
						},
						error:function(){
							$("#login").removeAttr("disabled");
						}
					});
				}else if(check(data.staus) == "failure"){
					warn("验证码不正确！");
				}else if(check(data.staus) == "验证码已过期"){
					warn("验证码已过期,请重新获取");
				}
			})
		}
	})
	
	
	function warn(word){
		$(".warn").html(word).fadeIn("fast");
		setTimeout(function(){$(".warn").fadeOut("normal");},2000)
	}
//	$("#useRules i").on("touchstart",function () {
//	    $(this).toggleClass("checkAgree");
//	})
//	
//	$(".registerPsw b").on("touchstart",function () {
//	    $(this).toggleClass("pswShow");
//	    if ($(this).hasClass("pswShow")) {
//	    	$(".registerPsw input").attr("type","text")
//	    }else{
//	    	$(".registerPsw input").attr("type","password")
//	    }
//		
//	})
	
		var countdown=60; 
		function settime(val) { 
			if (countdown == 0) { 
				val.removeAttr("disabled");
//				val.css("background","#42C29D");
				val.html("获取验证码"); 
				countdown = 60;
				return;
			} else { 
				val.attr("disabled", "disabled");  
//				val.css("background","#999");
				val.html("重新发送(" + countdown + "s)"); 
				countdown--; 
			} 
			setTimeout(function() { 
				settime(val) 
			},1000) 
		}
			
			
		
	$("#getCode").on("touchend",function(){
		//console.log($(".registerPhone input").val())
		if (!(/^1[34578]\d{9}$/.test(parseInt($(".registerPhone input").val())))) {
			warn("请输入正确的手机号码！");
			
		} else{
			$.post(dataStr+"/login/getcode",{mobilephone:$(".registerPhone input").val()},function(data){
				if (check(data.staus) == "验证码已发送") {
					settime($("#getCode"));
					warn("验证码发送成功！")
				}else if(check(data.staus) == "验证码发送失败"){
					warn("验证码发送失败！")
				}
				console.log(data);
			})
		}
				
		
	})
	
})
