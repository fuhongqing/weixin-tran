$(function(){
	FastClick.attach(document.body);

	var proID = (window.location.search).substr(1,(window.location.search).length);
	$(".back").click(function(){
		history.back();
	})
	$.post(dataStr+"/Project/projectdetails",{propertyID:proID,memberId:thismemberID}, function(data){
		function toLocaleString(date) {
	        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	    };//获取日期标签;
		var unixTimestamp = new Date( check(data.xmxq[0].CheckTime) ) ;
		commonTime = toLocaleString(unixTimestamp);
//		console.log(check(data.xmxq[0]));
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
				default:
				  return t = ""
				  console.log("x")
				}			                    
            }
		
            var x = check(data.xmxq[0].BuildingType).split(",");	                    
            if(x[0] == "0"){
            	x.shift();			                    	
            }

			var typeHTML = "";
			for (var i=0;i<x.length;i++) {
				typeHTML +=  buildMark(x[i]) +"、";
			}
	$(".buildMsg").html("<div><p><b>开发商</b>"+checkMsg(data.xmxq[0].Developer)
				+"</p><p><span>物业公司</span>"+checkMsg(data.xmxq[0].PropertyCorp)
				+"</p><p><span>建筑类型</span>"+typeHTML
				+"</p><p><b>物业费</b>"+checkMsg(data.xmxq[0].OverheadCost)
				+"</p><p><b>停车位</b>"+checkMsg(data.xmxq[0].ParkingSpace)
				+"</p><p><span>装修情况</span>"+checkMsg(data.xmxq[0].Decoration)
				+"</p></div><div><p><span>占地面积</span>"+check(data.xmxq[0].Acreage2)
				+"平米</p><p><span>建筑面积</span>"+check(data.xmxq[0].Acreage1)
				+"平米</p><p><span>栋楼总数</span>"+checkMsg(data.xmxq[0].BuildingTotal)
				+"</p><p><b>绿化率</b>"+checkMsg(data.xmxq[0].VirescenceRatio)
				+"</p><p><b>容积率</b>"+checkMsg(data.xmxq[0].CubageRatio)
				+"</p></div><div><p><span>开盘时间</span>"+checkMsg(data.xmxq[0].OpenTime)
				+"</p><p><span>竣工时间</span>"+checkMsg(data.xmxq[0].FinishTime)
				+"</p><p><span>交房时间</span>"+commonTime
				+"</p></div><div><p><span style='float: left;'>配套设施</span><p style='width:10.5rem;float: left;'>"+checkMsg(data.xmxq[0].Equipment)
				+"</p></p><p style='clear:both;'><span>周围商圈</span>"+checkMsg(data.xmxq[0].ShoppingArea)
				+"</p><p><span>交通出行</span>"+checkMsg(data.xmxq[0].Traffic)
				+"</p><div><p><span>楼盘地址</span>"+checkMsg(data.xmxq[0].Address)
				+"</p><div id='mapbox'></div></div>");
    function checkMsg(Num){
    	if ((!Num)&&(Num!=0)||(Num.length ==0)) {
    		return Num = "暂无";
    	}else{
    		return Num;
    	}
    	
    	
    }
	})
	
	
	
})
