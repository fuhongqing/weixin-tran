var _res = null;
var pointOrigin;
var distanceFlag;
var map = new BMap.Map('');
var memberID = GetUrlParms().memberID;
var userType = GetUrlParms().userType;
var thisState=2;//是否有定位
$ajax("api/v1/propert/cityList", {}, getCityList);
// 微信获取地址
getData(demoURL, {url: window.location.href}, weixin);
$(".filter").on("click", ".value_label_box input", function () {
    var sellState = $("input[name=sellState]:checked").val();
    var houseType = $("input[name=houseType]:checked").val();
    var cityid = $("input[name=cityID]:checked").val();
    getData(rootURL+"api/v1/propert/getallProperty", {
        state:thisState,
        memberId: memberID,
        saleState: sellState,
        buildType:houseType,
        cityId: cityid,
        search:'',
        lat:'',	//否	Double	纬度
        lng:''//否	Double	经度
    }, allproject);
});

function weixin(data) {
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appID, // 必填，企业号的唯一标识，此处填写企业号corpid
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.noncestr, // 必填，生成签名的随机串
        signature: data.signature,// 必填，签名，见附录1W
        jsApiList: [
            'getLocation'
        ]
    });
    wx.ready(function () {
        wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                _res = res;

                pointOrigin = new BMap.Point(_res.longitude, _res.latitude);
                var convertor = new BMap.Convertor();
                var pointArr = [];
                pointArr.push(pointOrigin);
                convertor.translate(pointArr, 1, 5, translateCallback);

                function translateCallback(data) {
                    if (data.status === 0) {
                        thisState=1;
                        pointOrigin = new BMap.Point(data.points[0].lng,data.points[0].lat);

                        getData(rootURL+"api/v1/propert/getallProperty", {
                            state:1,
                            memberId: memberID,
                            lat:data.points[0].lat,
                            lng:data.points[0].lng,
                            cityId:'',//	否	Long	城市id
                            search:'',//	否	string	搜索条件
                            saleState:'',//	否	Byte	在售状态 ‘’：全部 1:预售 2:待开盘 3:在售 4:撤场 5:售罄 (3 =在售 ，12 =待开盘 ， 45 =售罄)
                            buildType:''//	否	Byte	建筑类型 1: 别墅 2:住宅 3:商铺 4:商住 5:其他
                        }, allproject);
                    }else{
                        thisState=2;
                        getData(rootURL+"api/v1/propert/getallProperty", {
                            state:2,
                            memberId: memberID,
                            cityId:'',//	否	Long	城市id
                            search:'',//	否	string	搜索条件
                            saleState:'',//	否	Byte	在售状态 ‘’：全部 1:预售 2:待开盘 3:在售 4:撤场 5:售罄 (3 =在售 ，12 =待开盘 ， 45 =售罄)
                            buildType:'',//	否	Byte	建筑类型 1: 别墅 2:住宅 3:商铺 4:商住 5:其他
                            lat:'',//
                            lng:''
                        }, allproject);
                    }
                }
            }
        });
    });
    wx.error(function (res) {
        console.log(res)
    });
}

function getData(url, data, callback) {
    $.ajax({
        type: "GET",
        url: url,
        data: data,
        dataType: "json",
        success: function (data) {
            callback(data)
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function buildingType(n) {
    var arr = n.split(",");
    var arrHtml = [];
    for (var i = 0, l = arr.length; i < l; i++) {
        switch (arr[i]) {
            case "1":
                arrHtml.push("<span class='buildingType'>别墅</span>");
                break;
            case "2":
                arrHtml.push("<span class='buildingType'>住宅</span>");
                break;
            case "3":
                arrHtml.push("<span class='buildingType'>商铺</span>");
                break;
            case "4":
                arrHtml.push("<span class='buildingType'>商住</span>");
                break;
            case "5":
                arrHtml.push("<span class='buildingType'>其他</span>");
                break;
            default:
                break;
        }
    }
    return arrHtml.join("")
}

function $ajax(url, data, callBack) {
    $.ajax({
        type: "get",
        url: rootURL + url,
        data: data,
        dataType: "json",
        success: function (data) {
            callBack(data)
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getCityList(data) {
    if (data.data.cityList.length) {
        var _data = data.data.cityList;
        var lists = [];
        for (var i = 0, l = _data.length; i < l; i++) {
            var list = "<div class='value_label_box'><input type='radio' name='cityID' value='" + _data[i]["id"] + "' id='area_item" + (i + 1) + "'>" +
                "<label class='value_label' for='area_item" + (i + 1) + "'>" +
                "<div class='value_title'>" + _data[i]["cityName"] + "</div>" +
                "<div class='value_img'><img src='img/ic_filter_check@2x.png' alt=''></div>" +
                "</label></div>";
            lists.push(list)
        }
        // lists.push("<option>区域</option>");
        lists = lists.join("");
        $("#getCityList").append(lists);
        var _this_radio;
        var checkBoxUl = $(".filter_box .check_box_ul");
        $.each(checkBoxUl, function (index, ele) {
            $(ele).find("input[type=radio]").eq(0).prop("checked", true);
        });
        $(".filter_box .filter_item_box").on("click", function () {
            _this_radio = $(this);
            checkBoxUl.hide();
            checkBoxUl.eq($(this).index()).show();
            $(".filter_mask").show()
        });
        $("input[type=radio]").on("click", function () {
            var value = $(this).siblings().find(".value_title").html();
            if (!_this_radio.hasClass("filter_item_box-img")) {
                _this_radio.find(".filter_item_txt").html(value);
            }
            checkBoxUl.hide();
            $(".filter_mask").hide()
        });
        $(".filter_mask").on("click", function () {
            checkBoxUl.hide();
            $(".filter_mask").hide();
        })
    }
}

function allproject(data) {
    if (data.data.propertyList.length) {
        var _data = data.data.propertyList;
        var lists = [];
        var distanceNum;
        for (var i = 0, l = _data.length; i < l; i++) {
            if (_data[i]["longitude"] && _data[i]["latitude"]) {
                var _distance = getDistance({
                    Longitude: _data[i]["longitude"],
                    Latitude: _data[i]["latitude"]
                }, pointOrigin);
                _data[i]["distance"] = _distance;
            } else {
                _data[i]["distance"] = 0;
            }

        }
        if (distanceFlag && distanceFlag === 1) {
            _data = _data.sort(function (a, b) {
                if (!a["distance"]) {
                    a["distance"] = Infinity
                }
                if (!b["distance"]) {
                    b["distance"] = Infinity
                }
                return a["distance"] - b["distance"]
            })
        }
        if (distanceFlag && distanceFlag === 2) {
            _data = _data.sort(function (a, b) {
                return b["distance"] - a["distance"]
            })
        }
        for (var j = 0, m = _data.length; j < m; j++) {
            if(String(_data[j]["distance"]).length>3){
                distanceNum=Math.round(_data[j]["distance"]/1000)+'km';
            }else{
                distanceNum=Math.round(_data[j]["distance"])+'m';
            }
            if(!_data[j]["cityName"]){
                _data[j]["cityName"]='';
            }
            if(!_data[j]["boroughName"]){
                _data[j]["boroughName"]='';
            }
            var list = "<li>" +
                "<a href='" + propertyURL_LIST + "propertyID=" + _data[j]["id"] +
                "&memberID=" + memberID +
                "&qianYue=" + _data[j]["isSign"] +
                "&userType=" + userType +
                "&shangxian=" + 1 + " '>" +
                "<div class='img_box'>" +
                "<img src='" + (_data[j]["imageUrl"] + "?imageView2/2/h/100" ?  _data[j]["imageUrl"] : "img/default_pic2.png") + "' />" +
                "<p>" + (_data[j]["minPrice"] ? _data[j]["minPrice"] + "元/㎡" : "暂未定价") + "</p>" +
                "</div>" +
                "<div class='content_box'>" +
                "<p>" + "<span style='font-weight:bold;white-space: nowrap;max-width: 5rem;overflow: hidden;text-overflow: ellipsis'>" + _data[j]["name"] + "</span>" + "<span class='state'>" + _data[j]["saleStateName"] + "</span>" + (_data[j]["isSign"] ? "<span class='qianYue'>签约项目</span>" : "") + "</p>" +
                "<p><img src='img/ic__location@2x.png' />" + "<span style='width: 4rem;text-overflow: ellipsis;overflow:hidden;white-space: nowrap;'>" + _data[j]["cityName"] + _data[j]["boroughName"] + "</span>" + (_data[j]["longitude"] ? "<span>(" +distanceNum + ")" : "") + "</span></p>" +
                "<p>" + buildingType(_data[j]["buildType"])  + "</p>" +
                "<p style='font-weight: bold'>佣金:" + (userType === "2" ? (_data[j]["commissionMoney"] ?_data[j]["commissionMoney"].indexOf('%')<0? _data[j]["commissionMoney"] : _data[j]["commissionMoney"]+'/套': "暂未定价") : "绑定分行码后查看") + "</p>" +
                "</div>" +
                "</a>" +
                "</li>";
            lists.push(list)
        }

        lists = lists.join("");
        $("#getPropertyList").html(lists);
        $(".list_footer").html("<p><span>共" + _data.length + "条结果，已经到底啦</span></p>")
    } else {
        $("#getPropertyList").html("");
        $(".list_footer").html("<p><span>没有你要找的楼盘呢</span></p>")
    }
}

function getDistance(itemPoint, pointOrigin) {
    var map = new BMap.Map('');
    var pointB = new BMap.Point(itemPoint.Longitude, itemPoint.Latitude);
    var distance = ~~(map.getDistance(pointOrigin, pointB));
    return distance
}

//主页和搜索页面交互
document.getElementById("search_top").onclick = function () {
        document.getElementById("page_index").style.display = "none";
        document.getElementById("page_search").style.display = "";
        document.getElementById("page_search").getElementsByTagName("input")[0].focus();
    };
document.getElementById("search_cancel").onclick = function () {
    document.getElementById("page_index").style.display = "";
    document.getElementById("page_search").style.display = "none";
};
//模糊搜索
document.getElementById("page_search").getElementsByTagName("input")[0].oninput = debounce(chargeProperty, 800);

function chargeProperty(arg) {
    if (!arg) {
        document.getElementById("for_search_none").style.display = "none";
        document.getElementById("for_search").style.display = "";
        document.getElementById("property_list").innerHTML = "";
        return
    }
    getData(rootURL+"api/v1/propert/getallProperty", {
        state:thisState,
        memberId: memberID,
        search:arg,
        cityId:'',//	否	Long	城市id
        saleState:'',//	否	Byte	在售状态 ‘’：全部 1:预售 2:待开盘 3:在售 4:撤场 5:售罄 (3 =在售 ，12 =待开盘 ， 45 =售罄)
        buildType:'',//	否	Byte	建筑类型 1: 别墅 2:住宅 3:商铺 4:商住 5:其他
        lat:'',//
        lng:''
    }, property);
}

function property(data) {
    var _data = data.data.propertyList;
    if (!_data.length) {
        document.getElementById("for_search_none").style.display = "";
        document.getElementById("for_search").style.display = "none";
        document.getElementById("property_list").innerHTML = "";
        return
    }
    document.getElementById("for_search_none").style.display = "none";
    document.getElementById("for_search").style.display = "none";
    var lists = [];
    for (var i = 0, l = _data.length; i < l; i++) {
        var list = "<li><a href='" + propertyURL_LIST + "propertyID=" + _data[i]["id"] +
            "&memberID=" + memberID +
            "&qianYue=" + 0 +
            "&userType=" + userType +
            "&shangxian=" + 1 + " '>"
            + _data[i]["name"] + "</li>";
        lists.push(list);
    }
    lists.push("</ul>");
    lists.unshift("<ul>");
    lists = lists.join("");
    var value = document.getElementById("page_search").getElementsByTagName("input")[0].value;
    lists = lists.replace(new RegExp(value, 'g'), "<span style='color: #59CCAD'>" + value + "</span>");
    document.getElementById("property_list").innerHTML = lists;
}

function debounce(fn, delay) {
    var timer;
    return function () {
        clearTimeout(timer);
        var _this = this;
        timer = setTimeout(function () {
            fn(_this.value);
        }, delay)
    }
}
