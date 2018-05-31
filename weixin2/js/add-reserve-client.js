$(function() {
	FastClick.attach(document.body);
	
	//隐号开关
	$(".isAllnum").on("click",function(){
		$(this).toggleClass("numActive")
		$(".tel-num1").toggle()
		$(".tel-num2").toggle()
		$(".tel-num input").val("");
		var a = $("#fullNameID").val();
		var b = $("#firstNumID").val();
		var c = $("#lastNumID").val();
		var d = $(".section span").length; //意向项目个数
		var e = $("#dateID").val();
		var f = $("#visitorsNumberID").val();
		var g = $("#caseSale i").length; //案场销售人员
		var h = $("#visitwaychoose span").html();
		var m = $("#houseValuationID").val();
		var n = $("#lookTimeMinuteID").val();
		var p = $("#phone").val();
		if(h == "自驾") {
			if(a != "" && (b != "" && c != "" || p != "") && d != 0) {
				$("#finish").css("opacity", 1).addClass("finish");
			} else {
				$("#finish").css("opacity", 0.5).removeClass("finish");
			}
		} else if(h == "班车") {
			if(a != "" && (b != "" && c != "" || p != "") && d != 0 && f != "" && m != "" && n != "") {
				$("#finish").css("opacity", 1).addClass("finish");
			} else {
				$("#finish").css("opacity", 0.5).removeClass("finish");
			}

		} else {
			$("#finish").css("opacity", 0.5).removeClass("finish");
		}
	})
	
	//从详情页进入报备页，意向项目不能点击
	$("#addmoreMsg").on("click", function() {
		$(this).css("display", "none");
		$("#visitway").css("display", "block");
		$("#visitorsNum").css("display", "block");
		$("#visitDate").css("display", "block");
		_czc.push(['_trackEvent', '报备信息', '点击', '完善更多信息', '', 'addmoreMsg']);
	});
	//声明_czc对象:
	var _czc = _czc || [];
	//绑定siteid，请用您的siteid替换下方"xxxxx"部分
	_czc.push(["_setAccount", "1261065396"]);

	var proURL = decodeURI((window.location.search).substr(1, (window.location.search).length));
	//console.log(proURL);
	if(proURL.indexOf("$") != -1) {
		var proName = proURL.substr(proURL.indexOf("$") + 1, proURL.length);
		var proID = proURL.substr(0, proURL.indexOf("$"));
		//console.log(proName)
	} else {
		var proFullname = proURL.substr(0, proURL.indexOf("@"));

		var proPhone1 = proURL.substr(proURL.indexOf("@") + 1, 3);
		var proPhone2 = proURL.substr(proURL.indexOf("@") + 8);
		//console.log(proFullname)
		//console.log(proPhone1+"              "+proPhone2)

	}
	var calendar = new lCalendar();
	var calendardatetime = new lCalendar();
	calendardatetime.init({
		'trigger': '#dateID',
		'type': 'datetime'
	});
	var calendartime = new lCalendar();
	calendartime.init({
		'trigger': '#lookTimeMinuteID',
		'type': 'datetime'
	});

	function salerChoose(proID) {
		$.get(hrdataStr + "/outside/property-users?propertyId="+proID+"&orgName=案场&orgJobName=专员", function(data) {
//			console.log(data);
			var saleStr = "";
			$.each(check(data.data), function(i) {
				saleStr += "<li value='" + check(data.data[i].userId) + "'>" + check(data.data[i].fullName) + "</li>";
			});
			$("#salePerson").html(saleStr);
			$("#salePerson li").on("click", function(e) {
				e.preventDefault();
				$(".chooseBox").css("display", "none");
				$("#salePerson").css("display", "none");
				$("#caseSale").html($(this).html());
				$("#caseSale").attr("value", $(this).val());
				var a = $("#fullNameID").val();
				var b = $("#firstNumID").val();
				var c = $("#lastNumID").val();
				var d = $(".section span").length; //意向项目个数
				var e = $("#dateID").val();
				var f = $("#visitorsNumberID").val();
				var g = $("#caseSale i").length; //案场销售人员
				var h = $("#visitwaychoose span").html();
				var m = $("#houseValuationID").val();
				var n = $("#lookTimeMinuteID").val();
				var p = $("#phone").val();
				if(h == "自驾") {
					if(a != "" && (b != "" && c != "" || p != "") && d != 0) {
						$("#finish").css("opacity", 1).addClass("finish");
					} else {
						$("#finish").css("opacity", 0.5).removeClass("finish");
					}
				} else if(h == "班车") {
					if(a != "" && (b != "" && c != "" || p != "") && d != 0 && f != "" && m != "" && n != "") {
						$("#finish").css("opacity", 1).addClass("finish");
					} else {
						$("#finish").css("opacity", 0.5).removeClass("finish");
					}

				} else {
					$("#finish").css("opacity", 0.5).removeClass("finish");
				}

			})
		})
	}

	if(proName) {
		$(".section").html("<span value='" + proID + "'>" + proName + "</span>");
		$(".section").on("touchend", function() {
			$(".proBox li[value='" + proID + "']").addClass("active");
		})
		$(".caseSaleBox").css("display", "block");
		//点击案场销售
		//console.log(proID);
		salerChoose(proID);
	} else {

		if(proFullname) {
			$("#fullNameID").val(proFullname);
			//$(".tel-num").html(proPhone);
			$("#firstNumID").val(proPhone1);
			$("#lastNumID").val(proPhone2);

		} //else{
		$(".caseSaleBox").css("display", "none");
		$(".section").html("<i>请选择▾</i>");
		$("#caseSale").attr("value", "");
	}

	//从主菜单进入报备页，意向项目能点击

	var proVal = "";
	var proArr = [];
	$(".section").on("touchstart", function() {
		proArr = [];
		$(".proBox li").removeClass("active");
		for(var i = 0; i < $(".section span").length; i++) {
			proArr.push($(".section span").eq(i).attr("value"));

			$(".proBox li[value='" + proArr[i] + "']").addClass("active");
		}
//		console.log(proArr);
		proVal = $(".section").html();
		setTimeout(function() {
			$(".proWrap").css("display", "block");
			$(".add-client-box").css("display", "none");

		}, 300);
		if($(".section").html() == "<i>请选择▾</i>") {
			$(".proChoose div").html("");
			$(".proBox li").removeClass("active");
		} else {
			$(".proChoose div").html($(".section").html());
		}

		$(".proWrap").animate({
			left: "0"
		}, "slow");

	})

	$(".proBack").click(function(event) {
		$(".add-client-box").css("display", "block");
		$(".proWrap").animate({
			//display:"none",
			left: "19rem"
		}, 300)
		setTimeout(function() {
			$(".proWrap").css("display", "none");

		}, 200);
		if($(".proChoose div").html() == "") {
			$(".section").html("<i>请选择▾</i>");
			$("#caseSale").attr("value", "");
			$(".caseSaleBox").css("display", "none");
		}
		$(".section").html(proVal);

		var a = $("#fullNameID").val();
		var b = $("#firstNumID").val();
		var c = $("#lastNumID").val();
		var d = $(".section span").length; //意向项目个数
		var e = $("#dateID").val();
		var f = $("#visitorsNumberID").val();
		var g = $("#caseSale i").length; //案场销售人员
		var h = $("#visitwaychoose span").html();
		var m = $("#houseValuationID").val();
		var p = $("#phone").val();

		if($(this).html() == "班车") {

			if(a != "" && (b != "" && c != "" || p != "") && d != 0 && e != "" && f != "" && m != "") {
				$("#finish").css("opacity", 1).addClass("finish");
			} else {
				$("#finish").css("opacity", 0.5).removeClass("finish");
			}

		} else {

			if(a != "" && (b != "" && c != "" || p != "") && d != 0) {
				$("#finish").css("opacity", 1).addClass("finish");
			} else {
				$("#finish").css("opacity", 0.5).removeClass("finish");
			}

		}

	})

	//addpro();
	//proClick();
	//}

	//点击搜索项目		
	//				addpro($("#search").val());
	//				$("#search").on("keyup",function(){
	//					addpro($("#search").val());
	//				})

	//项目列表			

	//function addpro(n){
	var searchHTML = "";
//timeout

	$.get(dataStr + "v1/propertys", function(data) {
//		console.log(data);
		if(data.code ==200) {
			var proList = data.data.list;
			$.each(check(proList), function(i) {
				//console.log(check(data.propertyname[i]));
				searchHTML += "<li class='sort_list' value='" + check(proList[i].propertyId) + "'><b></b><span class='num_name'>" + check(proList[i].propertyName) + "</span></li>";

			});
			$(".proBox").html(searchHTML);
			$(".proBox li").on("click", function(event) {
				//event.preventDefault();
				$(this).toggleClass("active");
				if($(this).hasClass("active")) {
					$(".proChoose div").append("<span class='active' value='" + $(this).attr("value") + "'>" + $(this).text() + "</span>");
					//$(".section").append("<span value='"+ $(this).attr("value") +"'>"+ $(this).text() +"</span>");

				} else {
					$(".proChoose div span[value='" + $(this).attr("value") + "']").remove();
					//$(".section span[value='"+ $(this).attr("value") +"']").remove();
				}

				if($(".proChoose div span").hasClass("active")) {
					$("#complete").css("opacity", 1);
					$("#complete").addClass("complete");
				} else {
					$("#complete").css("opacity", 0.5);
					$("#complete").removeClass("complete");
				}

			})

			var Initials = $('.initials');
			var LetterBox = $('#letter');
			Initials.find('ul').append('<li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li><li>G</li><li>H</li><li>I</li><li>J</li><li>K</li><li>L</li><li>M</li><li>N</li><li>O</li><li>P</li><li>Q</li><li>R</li><li>S</li><li>T</li><li>U</li><li>V</li><li>W</li><li>X</li><li>Y</li><li>Z</li><li>#</li>');
			initials();

			$(".initials ul li").on("click", function() {
				var _this = $(this);
				var LetterHtml = _this.html();
				LetterBox.html(LetterHtml).fadeIn();

				Initials.css('background', 'rgba(145,145,145,0.6)');

				setTimeout(function() {
					Initials.css('background', '#ececea');
					LetterBox.fadeOut();
				}, 1000);

				var _index = _this.index()
				if(_index == 0) {
					$('html,body').animate({
						scrollTop: '0px'
					}, 300); //点击第一个滚到顶部
				} else if(_index == 27) {
					var DefaultTop = $('#default').position().top;
					$('html,body').animate({
						scrollTop: DefaultTop + 'px'
					}, 300); //点击最后一个滚到#号
				} else {
					var letter = _this.text();
					if($('#' + letter).length > 0) {
						var LetterTop = $('#' + letter).position().top;
						$('html,body').animate({
							scrollTop: LetterTop - 90 + 'px'
						}, 300);
					}
				}
			})
		}
		proClick();

	})
	//}

	//点击选择项目					
	function proClick() {
		$("#complete").on("click", function() {
			if($("#complete").hasClass("complete")) {
				$(".proWrap").animate({
					left: "19rem"
				}, 300);
				setTimeout(function() {
					$(".add-client-box").css("display", "block");
					$(".proWrap").css("display", "none");
				}, 200);

				if($(".proChoose div span").length == 1) {
					$("#caseSale").html("<i>请选择▾</i>");
					$(".caseSaleBox").css("display", "block");
					$("#salePerson").html("");
					//console.log($(".proChoose div span").attr("value"))
					salerChoose($(".proChoose div span").attr("value"));
				} else {
					$("#caseSale").html("<i>请选择▾</i>");
					$("#caseSale").attr("value", "");
					$(".caseSaleBox").css("display", "none");
				}

				if($(".section").has("span")) {
					$(".section i").remove();
					$(".section").html($(".proChoose div").html());
				} else {
					$(".section").html("<i>请选择▾</i>");

				}

				var a = $("#fullNameID").val();
				var b = $("#firstNumID").val();
				var c = $("#lastNumID").val();
				var d = $(".section span").length; //意向项目个数
				var e = $("#dateID").val();
				var f = $("#visitorsNumberID").val();
				var g = $("#caseSale i").length; //案场销售人员
				var h = $("#visitwaychoose span").html();
				var m = $("#houseValuationID").val();
				var p = $("#phone").val();
				if($("#visitwaychoose span").html() == "班车") {
					if(a != "" && (b != "" && c != "" || p != "") && d != 0 && e != "" && f != "" && m != "") {
						$("#finish").css("opacity", 1).addClass("finish");
					} else {
						$("#finish").css("opacity", 0.5).removeClass("finish");
					}

				} else {

					if(a != "" && (b != "" && c != "" || p != "") && d != 0) {
						$("#finish").css("opacity", 1).addClass("finish");
					} else {
						$("#finish").css("opacity", 0.5).removeClass("finish");
					}
				}
			}
		})

	}

	$(".back").on("click", function() {
		history.back();
	})

	//来访时间			
	$("#dateID").focus(function() {
		$(this).attr("placeholder", "")
	})
	$("#dateID").change(function() {
		if($("#dateID").val() == "") {
			$(this).attr("placeholder", "请选择▾")
		} else {
			$(this).attr("placeholder", "")
		}
//		console.log($("#dateID").val());
	})
	//上车时间			
	$("#lookTimeMinuteID").focus(function() {
		$(this).attr("placeholder", "")
	})
	$("#lookTimeMinuteID").change(function() {
		if($("#lookTimeMinuteID").val() == "") {
			$(this).attr("placeholder", "请选择▾")
		} else {
			$(this).attr("placeholder", "")
		}
//		console.log($("#lookTimeMinuteID").val());
	})

	//选择案场销售人员			
	$("#caseSale").click(function() {
		$(".chooseBox").css("display", "block");
		$("#salePerson").css("display", "block");

	})

	$("#chooseOut").click(function() {
		$(".chooseBox").css("display", "none");
		$("#salePerson").css("display", "none");

	})

	//点击来访方式			
	$("#visitwaychoose").click(function() {
		$(".chooseBox").css("display", "block");
		$("#visitWay").css("display", "block");
	})
	$("#visitWay li").click(function() {
		$("#visitwaychoose span").html($(this).html());
		$("#visitwaychoose").attr("value", $(this).val());
		$(".chooseBox").css("display", "none");
		$("#visitWay").css("display", "none");

		$("#visitDate").val("");
		$("#houseValuationID").val("");
		$("#visitDate").attr("placeholder", "请选择▾");
		$("#lookTimeMinuteID").attr("placeholder", "请选择▾");

		var a = $("#fullNameID").val();
		var b = $("#firstNumID").val();
		var c = $("#lastNumID").val();
		var d = $(".section span").length; //意向项目个数
		var e = $("#dateID").val();
		var f = $("#visitorsNumberID").val();
		var g = $("#caseSale i").length; //案场销售人员
		var h = $("#visitwaychoose span").html();
		var m = $("#houseValuationID").val();
		var p = $("#phone").val();

		if($(this).html() == "自驾") {
			$("#visitorsNum em").html("");
			$("#visitDate em").html("");
			$("#visitDate").css("display", "block");

			$("#houseValuationID").val("");
			$("#houseValuationID").attr("placeholder", "请输入详细地址");
			$("#lookTimeMinuteID").val("");
			$("#lookTimeMinuteID").attr("placeholder", "请选择▾");

			$("#takeCarID").css("display", "none");
			$("#takeCarTime").css("display", "none");

			if(a != "" && (b != "" && c != "" || p != "") && d != 0) {
				$("#finish").css("opacity", 1).addClass("finish");
			} else {
				$("#finish").css("opacity", 0.5).removeClass("finish");
			}

		} else {
			$("#dateID").val("");
			$("#dateID").attr("placeholder", "请选择▾");

			$("#visitorsNum em").html("*");
			$("#takeCarID em").html("*");
			$("#takeCarTime em").html("*");
			$("#visitDate").css("display", "none");
			$("#takeCarID").css("display", "block");
			$("#takeCarTime").css("display", "block");
			//					if(a != ""&& b!="" && c!= "" &&d != 0&&e != ""&&f != ""&&m != ""){
			//						$("#finish").css("opacity",1).addClass("finish");
			//					}else{
			$("#finish").css("opacity", 0.5).removeClass("finish");
			//					}

		}
	})
	$("#dateID").on("click", function() {

		//alert("aaaa");
		var a = $("#fullNameID").val();
		var b = $("#firstNumID").val();
		var c = $("#lastNumID").val();
		var d = $(".section span").length; //意向项目个数

		if(a != "" && (b != "" && c != "" || p != "") && d != 0) {
			$("#finish").css("opacity", 1).addClass("finish");
		} else {
			$("#finish").css("opacity", 0.5).removeClass("finish");
		}
	})
	$("#lookTimeMinuteID").on("click", function() {

		//alert("aaaa");
		var a = $("#fullNameID").val();
		var b = $("#firstNumID").val();
		var c = $("#lastNumID").val();
		var d = $(".section span").length; //意向项目个数
		var f = $("#visitorsNumberID").val();
		var m = $("#houseValuationID").val();

		if(a != "" && (b != "" && c != "" || p != "") && d != 0 && f != "" && m != "") {
			$("#finish").css("opacity", 1).addClass("finish");
		} else {
			$("#finish").css("opacity", 0.5).removeClass("finish");
		}
	})

	//判断完成
	var thispropertyStr = "";
	var thispropertyArr = [];

	$("#finish").on("click", function() {
		//var f = $("#visitorsNumberID").val();
		//console.log(f);
		if($(this).hasClass("finish")) {
			if($("#firstNumID").val().length == 3 && $("#lastNumID").val().length == 4|| $("#phone").val().length == 11) {
				var thisPhone = 0;
				if($("#phone").val().length == 0){
					thisPhone = $("#firstNumID").val() + '****' +$("#lastNumID").val();
				}else{
					thisPhone = $("#phone").val();
				}
				
				if(parseInt($("#visitorsNumberID").val()) < 0) {
					warn("来访人数不能为 0!");
				} else {
					$(".loadWrap").css("display", "block");
					for(var i = 0; i < $(".section span").length; i++) {
						thispropertyArr.push($(".section span").eq(i).attr("value"));
					}
					thispropertyStr = JSON.stringify(thispropertyArr) ;
					//console.log(thispropertyStr);
					setTimeout(function() {
						$(".loadWrap").css("display", "none");
//						window.location.href = "client-index.jsp";
						//warn("网络繁忙，请稍后重试！");
					}, 4000);
					$.ajax({
						type: "post",
						url: dataStr + "v1/report",
						timeout:5000,
						headers: { 
						    "Content-Type": "application/json"
						},
						data: JSON.stringify({
							memberId: thismemberID, //经纪人ID
							customerName: $("#fullNameID").val(), //报备客户名称
							phone: thisPhone, //手机号
							propertyIds: thispropertyArr, //楼盘ID（格式要求id 要用逗号隔开 例如1,2）
							salesUserId: $("#caseSale").attr("value"), //案场ID
							visitorsNumber: $("#visitorsNumberID").val(), //来访人数
							visitTime: $("#dateID").val(), //带看日期
//							shuttle: $("#visitwaychoose").attr("value"), //来访方式 0班车 1自驾
							address: $("#houseValuationID").val(), //上车地点 （班车时为必须参数）
							carTime: $("#lookTimeMinuteID").val(), //上车时间 （班车时为必须参数）
							remark:$("#remark").val()
						}),
						success: function(data) {
							console.log(data);
							if(data.code == 200) {
								$(".loadWrap .loaderBox").html("<div class='loader'><div class='right'><img src='../img/finish.png' /></div></div>报备成功")
								setTimeout(function() {
									window.location.href = "client-index.jsp";
								}, 200)
							} else {
								//$(".loaderBox").html("<div class='loader'></div>操作失败")
								$(".loadWrap").css("display", "none");
								warn("操作失败,请检查输入信息！")
								thispropertyStr = "";
								thispropertyArr = [];
							}
						},
						error:function(msg){
							if(msg.statusText == 'timeout'){
								$(".loadWrap").css("display", "none");
								warn("请求超时，请稍后重试！")
							}
						}

					});
				}

			} else {
				warn("请检查手机号码！")
			}
			//报备成功ajax，操作失败情况！		
		}
	})

	function warn(word) {
		$(".warn").html(word).slideDown("normal");
		setTimeout(function() {
			$(".warn").slideUp("normal");
		}, 2500)
	}

	//判断表单是否完成
	judgeInput($("#fullNameID"));
	judgeInput($("#firstNumID"));
	judgeInput($("#lastNumID"));
	judgeInput($("#phone"));
	judgeInput($("#visitorsNumberID"));
	judgeInput($("#houseValuationID"));

	function judgeInput(Input) {
		Input.blur(function() {
			var a = $("#fullNameID").val();
			var b = $("#firstNumID").val();
			var c = $("#lastNumID").val();
			var d = $(".section span").length; //意向项目个数
			var e = $("#dateID").val();
			var f = $("#visitorsNumberID").val();

			var h = $("#visitwaychoose span").html();
			var m = $("#houseValuationID").val();
			var n = $("#lookTimeMinuteID").val();
			var p = $("#phone").val();
			//console.log(String(b).length);

			//if ($(".section span").length == 1) {
			if(h == "自驾") {
				if(a != "" && (b != "" && c != "" || p != "") && d != 0) {
					$("#finish").css("opacity", 1).addClass("finish");
				} else {
					$("#finish").css("opacity", 0.5).removeClass("finish");
				}
			} else if(h == "班车") {
				if(a != "" && (b != "" && c != "" || p != "") && d != 0 && f != "" && m != "" && n != "") {
					$("#finish").css("opacity", 1).addClass("finish");
				} else {
					$("#finish").css("opacity", 0.5).removeClass("finish");
				}

			} else {
				$("#finish").css("opacity", 0.5).removeClass("finish");
			}

			//					}else if($(".section span").length > 1){
			//						if(h == "自驾"){
			//							if(a != ""&& b!="" && c!= "" &&e != ""&&f != ""){
			//								$("#finish").css("opacity",1).addClass("finish");
			//							}else{
			//								$("#finish").css("opacity",0.5).removeClass("finish");
			//							}
			//						}else if(h == "班车"){
			//							if(a != ""&& b!="" && c!= "" &&e != ""&&f != ""&&m != ""&&n != ""){
			//								$("#finish").css("opacity",1).addClass("finish");
			//							}else{
			//								$("#finish").css("opacity",0.5).removeClass("finish");
			//							}
			//							
			//						}else{
			//							$("#finish").css("opacity",0.5).removeClass("finish");
			//						}
			//					}else{
			//						$("#finish").css("opacity",0.5).removeClass("finish");
			//					}
		})
	}

	function initials() { //排序
		var SortList = $(".sort_list");
		var SortBox = $(".sort_box");
		SortList.sort(asc_sort).appendTo('.sort_box'); //按首字母排序
		function asc_sort(a, b) {
			return makePy($(b).find('.num_name').text().charAt(0))[0].toUpperCase() < makePy($(a).find('.num_name').text().charAt(0))[0].toUpperCase() ? 1 : -1;
		}

		var initials = [];
		var num = 0;
		SortList.each(function(i) {
			var initial = makePy($(this).find('.num_name').text().charAt(0))[0].toUpperCase();
			if(initial >= 'A' && initial <= 'Z') {
				if(initials.indexOf(initial) === -1)
					initials.push(initial);
			} else {
				num++;
			}

		});

		$.each(initials, function(index, value) { //添加首字母标签
			SortBox.append('<div class="sort_letter" id="' + value + '">' + value + '</div>');
		});
		if(num != 0) {
			SortBox.append('<div class="sort_letter" id="default">#</div>');
		}

		for(var i = 0; i < SortList.length; i++) { //插入到对应的首字母后面
			var letter = makePy(SortList.eq(i).find('.num_name').text().charAt(0))[0].toUpperCase();
			switch(letter) {
				case "A":
					$('#A').after(SortList.eq(i));
					break;
				case "B":
					$('#B').after(SortList.eq(i));
					break;
				case "C":
					$('#C').after(SortList.eq(i));
					break;
				case "D":
					$('#D').after(SortList.eq(i));
					break;
				case "E":
					$('#E').after(SortList.eq(i));
					break;
				case "F":
					$('#F').after(SortList.eq(i));
					break;
				case "G":
					$('#G').after(SortList.eq(i));
					break;
				case "H":
					$('#H').after(SortList.eq(i));
					break;
				case "I":
					$('#I').after(SortList.eq(i));
					break;
				case "J":
					$('#J').after(SortList.eq(i));
					break;
				case "K":
					$('#K').after(SortList.eq(i));
					break;
				case "L":
					$('#L').after(SortList.eq(i));
					break;
				case "M":
					$('#M').after(SortList.eq(i));
					break;
				case "N":
					$('#N').after(SortList.eq(i));
					break;
				case "O":
					$('#O').after(SortList.eq(i));
					break;
				case "P":
					$('#P').after(SortList.eq(i));
					break;
				case "Q":
					$('#Q').after(SortList.eq(i));
					break;
				case "R":
					$('#R').after(SortList.eq(i));
					break;
				case "S":
					$('#S').after(SortList.eq(i));
					break;
				case "T":
					$('#T').after(SortList.eq(i));
					break;
				case "U":
					$('#U').after(SortList.eq(i));
					break;
				case "V":
					$('#V').after(SortList.eq(i));
					break;
				case "W":
					$('#W').after(SortList.eq(i));
					break;
				case "X":
					$('#X').after(SortList.eq(i));
					break;
				case "Y":
					$('#Y').after(SortList.eq(i));
					break;
				case "Z":
					$('#Z').after(SortList.eq(i));
					break;
				default:
					$('#default').after(SortList.eq(i));
					break;
			}
		};
	}

})