$(function(){
	FastClick.attach(document.body);
	var proID = (window.location.search).substr(1,(window.location.search).length);
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
	$.post(dataStr+"/Project/projectdetails",{propertyID:proID}, function(data){
		
		console.log(data);
	    var typeStr = "";
	    var houseimg = ""
	    var mySwiper1;
	    //console.log(typeMark(check(data.zlhx[2].HouseType)));

	    $.each(check(data.zlhx), function(i) {
			if (check(data.zlhx[i].MainImage)) {
				houseimg = "<img src='http://image.ehaofang.com:8081"+ check(data.zlhx[i].minurlList[0])+ "' /><b></b>";
			
			} else{
				houseimg = "<img src='../img/picture1.png' /><b></b>";
			}
	    	if(check(data.zlhx[i])){
				typeStr += "<dl class='clearfix'>"
					+"<dt class='houseimg' value='"+ i +"'>"+ houseimg +"</dt>"
					+"<dd><span>"+ check(data.zlhx[i].HouseModel) +"</span></dd><dd><b><i>"+parseInt(check(data.zlhx[i].SalePrice))+"</i>起</b></dd>"
					+"<dd>"+ typeMark(check(data.zlhx[i].HouseType)) +"<b>|</b>"+ check(data.zlhx[i].Decoration) +"</dd>"
					+"<dd><i>"+ check(data.zlhx[i].Room1) +"</i>室"
					+"<i>"+ check(data.zlhx[i].Room2) +"</i>厅"
					+"<i>"+ check(data.zlhx[i].Room3) +"</i>卫"
					+"<b>|</b><i>"+ check(data.zlhx[i].Acreage) +"m&sup2;</i></dd></dl>";
			}	
		});
		$(".houseType").append(typeStr);
			
		$(".houseimg").click(function(){
			var _this=$(this).attr("value");
			typeimg =  "<div class='swiper-slide'> <div class='swiper-zoom-container'><img src='"+ imgurlStr+ check(data.zlhx[_this].bigurlList[0])+ "' /></div></div>";
			$(".swiper02").html(typeimg);
			//$("#list").hide();
			$("body").css("overflow","hidden");
			$(".bannerBox").fadeIn();
			mySwiper1 = new Swiper ('.bannerBox .swiper-container', {
				allowSwipeToNext : false,
				zoom : true,
				zoomToggle :true,
			    // 如果需要分页器
			    pagination: '.bannerBox .swiper-pagination',
			    paginationType : 'fraction'
		 	});

		})
		$(".bannerBack").on("click",function(){
			//$("#list").show();
			$(".swiper02").html("");
			$("body").css("overflow","scroll");
			$(".bannerBox").fadeOut()
			$(".imgBox").html("");
		})

	})
})
