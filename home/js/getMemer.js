window.onload = function () {
    var memberID=localStorage.getItem('memberID');
    var userType=localStorage.getItem('userType');
    var xibaoType=userType-1;
    var thisState=2;//是否有定位
    // 即将上线
    function PostData(url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('post', url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                callback(data)
            }
        }
    }
    getData(rootURL + "api/v1/propert/willOnlineProperty", "memberId=" + memberID, willUpProject);
    function willUpProject(data) {
        var lists = [];
        var _data = data.data.propertyList;
        if (!_data.length) {
            document.getElementsByClassName("no_item2")[0].style.display = "block";
            return;
        }
        for (var i = 0, l = _data.length; i < l; i++) {
            var list = "<a class='swiper-slide' href='" + propertyURL_HOME + "propertyID=" + _data[i]["id"] +
                "&memberID=" + memberID +
                "&qianYue=" + _data[i]["isSign"] +
                "&userType=" + userType +
                "&shangxian=" + 0 + " '>" +
                "<div class='img_box'>" +
                "<img  class='swiper-lazy' data-src='" + _data[i]["imageUrl"] + "?imageView2/2/w/200' />" +
                "<p>" + _data[i]["name"] + "</p>" +
                "</div>" +
                "</a>";
            lists.push(list)
        }
        lists = lists.join("");
        document.getElementById("continued").innerHTML = lists;
        var _willUpProject = new Swiper('.swiper-container_continued', {
            slidesPerView: 2.3,
            lazy: {
                loadPrevNext: true
            }
        });
    }

    //提示弹框
    var popLayer = {
        option: {},
        init: function (option) {
            this.initOptions(option);
            this.initElement();
            this.ensuer_Func();
            this.option.cancelFunc ? this.cancel_Func() : "";
        },
        initOptions: function (option) {
            this.option = option;
        },
        closeLayer: function () {
            document.getElementsByClassName("j-pop1")[0].parentNode.removeChild(document.getElementsByClassName("j-pop1")[0]);
        },
        ensuer_Func: function () {
            var _this = this;
            document.getElementsByClassName("ensuer")[0].onclick = function () {
                return _this.option.ensuerFunc();
            };
        },
        cancel_Func: function () {
            var _this = this;
            document.getElementsByClassName("cancel")[0].onclick = function () {
                return _this.option.cancelFunc();
            };
        },
        initElement: function () {
            var ele = "<div style='display: table-cell;vertical-align: middle;text-align: center'>" +
                "<div class='j-pop-cont'>" +
                "<div class='j-pop-cont-detail'>" +
                "<div class='j-pop-txt'>" +
                "<span class='text'>" + this.option.text + "</span>" +
                "</div>" +
                "</div>" +
                "<div class='j-pop-btn'>" +
                (this.option.showCancel ?
                    "<span class='cancel'>" + this.option.cancelText + "</span>" + "<span class='ensuer'>" + this.option.ensuerText + "</span>"
                    : "<span class='ensuer' style='width: 100%'>" + this.option.ensuerText + "</span>") +
                "</div>" +
                "</div>" +
                "</div>";
            var createElement = document.createElement("div");
            createElement.className = "j-pop1";
            createElement.innerHTML = ele;
            document.body.appendChild(createElement);
        }
    };
    //通过ready接口处理成功验证
    wx.ready(function () {
        wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                var latitude = res.latitude;
                var longitude = res.longitude;
                thisState=1;
                // 附近优推
                getData(rootURL + "api/v1/propert/nearbyProperty", "lat=" + latitude + "&lng=" + longitude + "&state=1&memberId="+memberID, firstlookProject);
            },
            cancel: function () {
                thisState=2;
                getData(rootURL + "api/v1/propert/nearbyProperty", "lat=&lng=&state=2&memberId="+memberID, firstlookProject);
            }
        });
    });
    wx.error(function (res) {
        console.log(res)
    });
    // 底部导航跳转
    //招聘和客户页面需要判断userType
    document.getElementById("to_zhaopin").onclick = function () {
        if (userType === "1") {
            var layerOptions = {
                text: "您还没有绑定分行码哦~",
                showCancel: true,
                ensuerFunc: ensuerFunc,
                ensuerText: "立即绑定",
                cancelFunc: cancelFunc,
                cancelText: "算了"
            };
            popLayer.init(layerOptions);
        }
        if (userType === "2") {
            window.location.href = "../../home/zhaopin.jsp?memberID=" + memberID
        }
    };
    document.getElementById("to_add").onclick = function () {
        if (userType === "1") {
            var layerOptions = {
                text: "您还没有绑定分行码哦~",
                showCancel: true,
                ensuerFunc: ensuerFunc,
                ensuerText: "立即绑定",
                cancelFunc: cancelFunc,
                cancelText: "算了"
            };
            popLayer.init(layerOptions);
        }
        if (userType === "2") {
            window.location.href = "add-reserve-client.jsp";
        }
    };
    document.getElementById("to_client").onclick = function () {
        if (userType === "1") {
            var layerOptions = {
                text: "您还没有绑定分行码哦~",
                showCancel: true,
                ensuerFunc: ensuerFunc,
                ensuerText: "立即绑定",
                cancelFunc: cancelFunc,
                cancelText: "算了"
            };
            popLayer.init(layerOptions);
        }
        if (userType === "2") {
            window.location.href = "client-index.jsp";
        }
    };
    document.getElementById("to_dongtai").onclick = function () {
        window.location.href = "dongtai.jsp";
    };
    document.getElementById("to_mine").onclick = function () {
        window.location.href = "mine.jsp";
    };
    document.getElementById("to_loupan").onclick = function () {
        window.location.href = '../../home/allproject.jsp?memberID=' + memberID + '&userType=' + userType;
    };
    document.getElementById("to_yeji").onclick = function () {
        window.location.href = '../../home/persontop.jsp?memberID=' + memberID;
    };

    //地图看房暂未开放
    document.getElementById("to_map").onclick = function () {
        var layerOptions = {
            text: "暂未开放，敬请期待~",
            showCancel: false,
            ensuerFunc: cancelFunc,
            ensuerText: "好的"
        };
        popLayer.init(layerOptions);
    };

    function ensuerFunc() {
        window.location.href = "../../login/login.jsp?member=" + userType;
        popLayer.closeLayer();
    }

    function cancelFunc() {
        popLayer.closeLayer();
    }

    // 喜报
    getData(rootURL + "api/v1/propert/xibao", "choose="+xibaoType, xibao);
    // 轮播
    PostData(oldRootURL + "Project/image", "", image);

    //微信获取地址
    getData(demoURL, "url=" + window.location.href, weixin);

    function getData(url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", url + "?" + data);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                callback(data)
            }
        }
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

    // 顶部search滚动显示差异
    window.onscroll = function (e) {
        var e = e || window.event;
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        var imageH = document.getElementById('image').clientHeight;
        if (scrolltop > imageH && document.getElementById('search_top').className.indexOf('search_active') == -1) {
            document.getElementById("search_top").className = "search search_active"
        }
        if (scrolltop < imageH && document.getElementById('search_top').className.indexOf('search_active') > -1) {
            document.getElementById("search_top").className = "search"
        }
    };

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
    }


    function firstlookProject(data) {
        var lists = [];
        var _data = data.data.propertyList;
        if (!_data.length) {
            document.getElementsByClassName("no_item1")[0].style.display = "block";
            return;
        }
        for (var i = 0, l = _data.length; i < l; i++) {
            if(!_data[i]["cityName"]){
                _data[i]["cityName"]='';
            }
            if(!_data[i]["boroughName"]){
                _data[i]["boroughName"]='';
            }
            var list = "<a class='swiper-slide' href='" + propertyURL_HOME + "propertyID=" + _data[i]["id"] +
                "&memberID=" + memberID +
                "&qianYue=" + _data[i]["isSign"] +
                "&userType=" + userType +
                "&shangxian=" + 1 + " '>" +
                "<div class='img_box'>" +
                "<img class='swiper-lazy' data-src='" + _data[i]["imageUrl"] + "?imageView2/2/w/200' />" +
                "<p>" + _data[i]["name"] + "</p>" +
                "</div>" +
                "<div class='content_box'>" +
                "<p>" + _data[i]["minPrice"] + "元/㎡·" + buildingType(_data[i]["buildType"]) + "</p>" +
                "<p><img src='../../home/img/ic__location@2x.png' height='24' width='20'/>" + _data[i]["cityName"] + _data[i]["boroughName"] + "</p>" +
                "<p style='color: #FC6F6F;font-weight: bold'>佣金:" +
                (userType === "2" ? (_data[i]["commissionMoney"] ? _data[i]["commissionMoney"].indexOf('%')<0?(~~_data[i]["commissionMoney"] > 100 ? ~~_data[i]["commissionMoney"] / 10000 + "万元/套" : _data[i]["commissionMoney"]):  _data[i]["commissionMoney"] + '/套': "未定")
                    : "绑定分行码后查看") +
                "</div>" +
                "</a>";
            lists.push(list);
        }
        lists = lists.join("");
        document.getElementById("recommend").innerHTML = lists;
        new Swiper('.swiper-container_recommend', {
            slidesPerView: 1.4,
            lazy: {
                loadPrevNext: true
            }
        });

    }

    function xibao(data) {
        
        var _data = data.data.xb;
        var lists = [];
        for (var i = 0, l = _data.length; i < l; i++) {
            var list = "<div class='swiper-slide'>" +
                "<div style='display: table;height: 1.6rem;'><span style='display: table-cell;vertical-align: middle'>" + _data[i] + "</span></div>" +
                "</div>";
            lists.push(list);
        }
        lists = lists.join("");
        document.getElementById("xibao").innerHTML = lists;
        new Swiper('.swiper-container_xibao', {
            loop: true,
            autoplay: true,
            direction: 'vertical',
            autoplayDisableOnInteraction: false
        });
    }

    function image(data) {
        var lists = [];
        var _data = data.image;
        for (var i = 0, l = _data.length; i < l; i++) {
            var list = "<a class='swiper-slide' href='" + _data[i]["RContent"] + "'>" +
                "<img class='swiper-lazy' data-src='" + imgUrl + _data[i]["ImgUrl"] + "' />" +
                "</a>";
            lists.push(list);
        }
        lists = lists.join("");
        document.getElementById("image").innerHTML = lists;
        new Swiper('.swiper-container_image', {
            loop: true,
            autoplay: true,
            autoplayDisableOnInteraction: false,
            lazy: {
                loadPrevNext: true
            },
            pagination: {
                el: '.swiper-pagination'
            }
        });
    }


    function buildingType(n) {
        var arr = n.split(",");
        var arrHtml = [];
        for (var i = 0, l = arr.length; i < l; i++) {
            switch (arr[i]) {
                case "1":
                    arrHtml.push("别墅");
                    break;
                case "2":
                    arrHtml.push("住宅");
                    break;
                case "3":
                    arrHtml.push("商铺");
                    break;
                case "4":
                    arrHtml.push("商住");
                    break;
                case "5":
                    arrHtml.push("其他");
                    break;
            }
        }
        return arrHtml.join("·")
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

    // 模糊搜索
    function chargeProperty(arg) {
        if (!arg) {
            document.getElementById("for_search_none").style.display = "none";
            document.getElementById("for_search").style.display = "";
            document.getElementById("property_list").innerHTML = "";
            return
        }
        getData(rootURL+"api/v1/propert/getallProperty", 'state='+thisState+'&memberId='+memberID+'&search='+arg+'&cityId=&saleState=&buildType=&lat=&lng=', thisProperty);
    }

    function thisProperty(data) {
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
            var list = "<li><a href='" + propertyURL_HOME + "propertyID=" + _data[i]["id"] +
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

};
