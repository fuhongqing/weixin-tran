$(function() {

	/***************************************** 滚动上拉下拉加载 ************************************/
	var myScroll;

	function load() {
		myScroll = new IScroll("#wrapper", {
			//probeType:2,
			//preventDefault:false,
			scrollbars: false,
			mouseWheel: true,
			interactiveScrollbars: true,
			tap: true,
			click: true,
		});
	}
	setTimeout(load, 200);
	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	}, false);
	//iscroll默认阻止事件

	$(".reportBox").html("");
	var count = 1;
	getData(count,  $("#search").val());

	$("#search").on("focus", function() {
		$(".searchBg").css("display", "block");
		$(".searchBox").addClass("searchBoxActive");
		$(".searchOut").css("display", "block");
		$("body").css("overflow", "hidden");
	})

	$(".searchOut").on("touchstart", function() {
		$(".searchBg").css("display", "none");
		$("#search").blur();
		$(".searchBox").removeClass("searchBoxActive");
		$(this).css("display", "none");
		$("body").css("overflow", "auto");

		$("#search").val("")
		$(".reportBox").html("");
		count = 1;
		getData(count,  $("#search").val());

	});

	$("#searchBtn").on("touchstart", function() {
		$(this).css("background", "#ddd");
	});
	$("#searchBtn").on("touchend", function() {
		$(this).css("background", "#fff");

		//});

		//$("#search").on("keyup",function(){
		//count = 1;
		//$(".reportBox").html("");
		//getData(0,$(".report-add a").attr("value"),$("#search").val());
		var searchStr = "";
		$.ajax({
			type: "get",
			url: dataStr + "/v1/customers",
			data: {
				memberId: thismemberID,
				branchId:thisbranchID,
				customerState: thiscustomerStatus[0].code,
				searchStr: $("#search").val(),
				pageNo: count,
				pageSize: 20
			},
			success: function(data) {
				console.log(data);
				if(data.code == 200) {
					if(data.data.totalCount != 0) {
						$(".reportBox dt,.reportBox dd").remove();
						$(".report-num").html("<span>" + data.data.totalCount + "</span>人");
						$.each(data.data.list, function(i) {
							searchStr += "<a href='report-detail.jsp?" + data.data.list[i].customerState + "&" + data.data.list[i].customerId + "&" + data.data.list[i].transactionNumber +
								"'><li><div>" + data.data.list[i].customerName + "</div><div>" +
								data.data.list[i].propertyName + "</div><div><span>" +
								data.data.list[i].theDate + "</span></div></li></a>";
						});

						$(".reportBox").html(searchStr);
						myScroll.refresh();
						if($(".reportBox a").length % 20 == 0) {
							$(".ball-pulse").css("display", "block");
						} else {
							$(".ball-pulse").html("已经到底了！");
						}
						myScroll.refresh();
					} else {
						$(".report-num").html("");
						$(".reportBox").html("<dt></dt>" +
							"<dd>没有相关客户数据～</dd>")
						$(".ball-pulse").css("display", "none");
					}
				}
			}
		});

	})

//	$(".report-add a").on("touchstart", function() {
//		if($(".report-add li").css("display") == "none") {
//			$(".report-add").css("background", "#fff");
//			$(".report-add li").css("display", "block");
//
//		} else {
//			$(".report-add").css("background", "#EDF4F4");
//			$(".report-add li").css("display", "none");
//
//		}
//	});
//
//	$(".report-add li").on("touchstart", function() {
//
//		$(".report-add").css("background", "#EDF4F4");
//		$(".report-add a").html($(this).text());
//		$(".report-add a").attr("value", $(this).val());
//		//console.log($(".report-add a").attr("value"));
//		count = 1;
//		$(".reportBox").html("");
//		getData(count, $(".report-add a").attr("value"), $("#search").val());
//
//		$(".report-add li").css("display", "none");
//	})

	$(document).on("touchend", function() {
		//console.log("click");

		if(myScroll.y < myScroll.maxScrollY - 50) {

			if($(".reportBox a").length % 20 == 0) {
				$(".ball-pulse").css("display", "block");
				count++;
				$(".ball-pulse").html("<div></div><div></div><div></div>");
				getData(count, $("#search").val());
				myScroll.refresh();
				setTimeout(function() {
					$(".ball-pulse").html("加载更多");
				}, 800)
			} else {
				//$(".ball-pulse").css("display","none");
				$(".ball-pulse").html("已经到底了！");
			}

		}
	})

	function getData(count, search) {
		var reportStr = "";
		$.ajax({
			type: "get",
			url: dataStr + "/v1/customers",
			data: {
				memberId: thismemberID,
				branchId:thisbranchID,
				customerState: thiscustomerStatus[0].code,
				searchStr: search,
				pageNo: count,
				pageSize: 20
			},
			success: function(data) {
				console.log(data);
				if(data.code == 200) {
					if(data.data.totalCount != 0) {
						$(".reportBox dt,.reportBox dd").remove();
						$(".report-num").html("<span>" + data.data.totalCount + "</span>人");
						$.each(data.data.list, function(i) {
							reportStr += "<a href='report-detail.jsp?" + data.data.list[i].customerState + "&" + data.data.list[i].customerId + "&" + data.data.list[i].transactionNumber +
								"'><li><div>" + data.data.list[i].customerName + "</div><div>" +
								data.data.list[i].propertyName + "</div><div><span>" +
								data.data.list[i].theDate + "</span></div></li></a>";
						});
						$(".reportBox").append(reportStr);
						myScroll.refresh();
						if($(".reportBox a").length % 20 == 0) {
							$(".ball-pulse").css("display", "block");
						} else {
							$(".ball-pulse").html("已经到底了！");
						}
						myScroll.refresh();
					} else {
						$(".report-num").html("");
						$(".reportBox").html("<dt></dt>" +
							"<dd>没有相关客户数据～</dd>")
						$(".ball-pulse").css("display", "none");
					}
				}

			}
		});

	}

})