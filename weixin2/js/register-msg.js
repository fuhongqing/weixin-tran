$(function(){
	
	
	var bind_name = 'input';
      if (navigator.userAgent.indexOf("MSIE") != -1){
        bind_name = 'propertychange';
      }
      
    $(".jumpIt").on("click",function(){
		window.location.href = "index.jsp";
    });
      
	$(".howgetCode a").on("click",function(){
		$(".getcompanyCode").show();
		$(".getcompanyCode").animate({ left:0 });
	});
	$("#codeBack").on("click",function(){
		$(".getcompanyCode").animate({ left:'20rem' },"fast");
		setTimeout(function(){
			$(".getcompanyCode").hide();		
		},800);
	});
	$(".regback").on("click",function(){
		window.history.back();
	});
	
	
	$(".companyBox").hide();
	$("#againWrite").on("click",function(){
		$("#companyCodeID").val("");
		$(".companyBox").hide();
	})
	$("#companyCodeID").on(bind_name,function(){
		if ($("#companyCodeID").val().length == 8) {
			$.ajax({
			    type: "post",
			    url: dataStr+"/login/branchcode",
			    data: {branchcode:$("#companyCodeID").val()},
			    success: function(data){
			    	console.log(data);
			    	if (check(data.status) == "success") {
						$(".companyBox").show();
				    	$(".companyMsg").html("<p>"+check(data.info.AgencyName)+"</p><p>"+check(data.info.branchName)+"</p>");
					    $(".companyMsg").css("display","block");
					    $(".companyWarn").css("display","none");
					    $(".companyBox").css("color","#333");
					    $("#againWrite").hide();
					    
					    $(".registerNext").css("background","#42C29D");
					    $(".registerNext").on("touchstart",function(){
					    	$(".registerNext").css("background","#3dab8c");
					    })
					    $(".registerNext").on("touchend",function(){
					    	$.post(dataStr+"/login/registerBranchCode",
					    		{
					    		weixinunionid:thisunionID,
					    		branchID:data.info.ID,
					    		parentID:data.info.ParentID,
					    		memberId:thismemberID
					    		},
								function(data){
									//console.log(data);
					    			if(data.status == "success"){
					    				warn("注册成功！");
					    				setTimeout(function(){
						    				window.location.href = "index.jsp";
					    					
					    				},1000);
					    			}else{
					    				warn("操作失败！")
					    			}
								}
					    	)
					    	
					    	
					    })
			    	}else if(check(data.status) == "failure"){
						$(".companyBox").show();
					    $(".companyBox").css("color","#f55");
					    $("#againWrite").show();
			    		$(".companyMsg").html("<p>"+check(data.info)+"</p>");
					    $(".companyMsg").css("display","block");
					    $(".companyWarn").css("display","none");
					    $(".registerNext").off();
			    	}else if(check(data.Exception) =="系统异常" ){
						$(".companyBox").show();
					    $(".companyBox").css("color","#f55");
					    $("#againWrite").show();
			    		$(".companyMsg").html("<p>"+check(data.Exception)+"</p>");
					    $(".companyMsg").css("display","block");
					    $(".companyWarn").css("display","none");
					    $(".registerNext").off();
			    	}
				}
			});
			
		}else{
			$(".companyBox").hide();
		    $(".companyBox").css("color","#333");
		    $("#againWrite").hide();
			$(".companyMsg").css("display","none");
		    $(".companyWarn").css("display","block");
			$(".registerNext").css("background","#A3D4C6");
		}

	})

	function warn(word){
		$(".warn").html(word).fadeIn("fast");
		setTimeout(function(){$(".warn").fadeOut("normal");},2000)
	}
	$(".companyCode span").on("touchstart",function(){
		$(".companyMsg").css("display","none");
	    $(".companyWarn").css("display","block");
		$(".registerNext").css("background","#A3D4C6");
		$("#companyCodeID").val("");
	})
	
})
