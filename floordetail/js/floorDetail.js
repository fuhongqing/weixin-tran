$(function () {
    //根字体大小设置
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
    //提示框显示
    function showTips(text) {
        $('.modal').fadeIn();
        $('.toast').html(text);
        setTimeout(function () {
            $('.modal').fadeOut();
        },1000)
    }
    //点击图片，显示大图
    function showBigImg(imgSrc) {
        $('.imgModal').fadeIn();
        $('.imgToast').html(imgSrc);
    }
    //console.log($('#commissionInfo').offset().top);
    //获取元素到底部距离
    function contactToolbar(curId) {
        var top = document.getElementById(curId).getBoundingClientRect().top; //元素顶端到可见区域顶端的距离
        if(top<200&&top>150){
            $('#navbars>li.'+curId).addClass('active').siblings().removeClass('active');
        }
    }
    var idArr=['commissionInfo','preferential','sellPoints','renderings','progress',
        'declaration','guess'];
    //向上滑动时导航条
    $('#navbars').on('click','li',function () {
        $('#floorDetail').css({'top':'0'});
        $(this).addClass('active').siblings().removeClass('active');
        switch ($(this).index()){
            case 5:
                $('#floorDetail').animate({'top':'0rem'},50);
                break;
            case 6:
                $('#floorDetail').animate({'top':'0rem'},50);
                break;
            default:
                $('#floorDetail').animate({'top':'1rem'},50);
                break;
        }
    });
    //点击楼盘信息时显示详情
    $('#floorInfo>div:first-child').click(function () {
        $('#floorDetail').hide();
        $('#lpxq').show();
    });
    //楼盘详情返回详情主页
    $('#lpxq').on('click','.back',function () {
        $('#floorDetail').show();
        $('#lpxq').hide();
    });
    //佣金信息显示详情
    $('#commissionInfo>div').on('click','.more',function () {
        if(userType==2){
            $('#floorDetail').hide();
            $('#commissionInfoMore').show();
        }else{
            $('.fhmModal').fadeIn();
            var consultHtml=`
                    <div>您还没有绑定分行码</div>
                    <div>
                        <div class="cancel">算了</div>
                        <div class="call">立即绑定</div>
                    </div>
                    `;
            $('.fhmToast').html(consultHtml);
            //取消
            $('.cancel').on('click',function () {
                $('.fhmModal').fadeOut();
            });
            $('.call').on('click',function () {
                $(location).attr('href','../login/login.jsp?member=1');
            });
            return;
        }
    });
    //佣金信息详情返回主页
    $('#commissionInfoMore').on('click','.back',function () {
        $('#floorDetail').show();
        $('#commissionInfoMore').hide();
    });
    //优惠活动显示详情
    $('#preferential>div').on('click','.more',function () {
        $('#floorDetail').hide();
        $('#preferentialMore').show();
    });
    //优惠活动详情返回主页
    $('#preferentialMore').on('click','.back',function () {
        $('#floorDetail').show();
        $('#preferentialMore').hide();
    });
    //楼盘相册返回事件
    $('#propertyImg').on('click','.back',function () {
        $('#floorDetail').show();
        $('#propertyImg').hide();
    });
    // 楼盘详情页滚动事件
    $(document).scroll(function () {
        contactToolbar(idArr[0]);
        contactToolbar(idArr[1]);
        contactToolbar(idArr[2]);
        contactToolbar(idArr[3]);
        contactToolbar(idArr[4]);
        contactToolbar(idArr[5]);
        contactToolbar(idArr[6]);
        var scrollTop=$(this).scrollTop();
        if(scrollTop){
            $('#swiperTitle').css('visibility','visible');//显示头部
            $('.scrollAuto').css('visibility','visible');//显示导航条
        }else{
            $('#floorDetail').css({'top':'0'});
            $('#floorDetail>header').show();
            $('#swiperTitle').css('visibility','hidden');//隐藏头部
            $('.scrollAuto').css('visibility','hidden');//隐藏导航条
        }
    });
    //获取链接中的楼盘信息
    var searchArr=location.search.slice(1).split('&');
    var
        // floorUrl = 'http://weixintest.ehaofang.com/efapp2/',
        floorUrl ='http://jjrtest.ehaofang.com/' ,//'http://agentapi.ehaofang.net/',
        weixinUrl = 'http://weixintest.ehaofang.com/efangnet/',
        wxAppId = 'wx9cbe0adb2edc523f',
        imgUrl = "http://images.ehaofang.com/",//初始图片地址
        propertyId=searchArr[0].split('=')[1],//楼盘id3
        memberId=searchArr[1].split('=')[1],//经纪人id151774
        sign=searchArr[2].split('=')[1],//是否签约0
        userType=searchArr[3].split('=')[1],//1为游客  2为员工1
        isShangXian=searchArr[4].split('=')[1],//是否上线
        propertyName='',//楼盘名
        hasConsult=true;//判断是否有咨询信息
    //判断是否为上线项目
    if(isShangXian==0){//未上线
        $('#floorDetail>footer').hide();
    }
    var noDataHtml=`<div class="noData">暂无更多楼盘信息</div>`;//卖点，户型图，猜暂无数据
    var initImg='img/all_bg_wait_best@2x.png';
    var shareImgUrl='';
    function weixin(data) {
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的
            //参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId:wxAppId,//  必填，企业号的唯一标识，此处填写企业号corpid  wx9cbe0adb2edc523f
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.noncestr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1W
            jsApiList: [
                'getLocation',
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
            ]
        });
        wx.ready(function () {
            wx.getLocation({
                type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，
                //可传入'gcj02'
                success: function (res) {
                    getFloorDetail(res);
                    //_distance 获取到的距离
                }
            });
        });
        wx.error(function (res) {
            console.log(res);
        });
    }
    function getDistance(itemPoint, pointOrigin) {
        var map = new BMap.Map('');
        var pointB = new BMap.Point(itemPoint.Longitude, itemPoint.Latitude);
        var distance = ~~(map.getDistance(pointOrigin, pointB));
        return distance;
    }
    PostData('post',weixinUrl+"weixin/member/demo.html", {url:window.location.href}, weixin);
    //楼盘状态
    function sellState(t) {
        switch (t) {
            case 1:
                return t="预售";
                break;
            case 2:
                return t="待开盘";
                break;
            case 3:
                return t="在售";
                break;
            case 4:
                return t="撤场";
                break;
            case 5:
                return t="售罄";
                break;
            default:
                return t="其他";
                break;
        }
    }
    //建筑类型
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
                default:
                    break;
            }
        }
        return arrHtml.join("；")
    }
    //楼盘相册
    function PropertyImage(data) {
        var propertyImageData=data.data.propertyImage;
        if (propertyImageData.length) {
            var photoNum=propertyImageData[0].allImageUrl.split(',');
            var _data = photoNum;
            localStorage.setItem('imgLength',_data.length);
            var lists = [];
            for (var j = 0, k = _data.length; j < k; j++) {
                var list = "<div class='swiper-slide'>" +
                    "<img class='swiper-lazy' data-src='" + imgUrl + _data[j] + "' />" +
                    "</div>";
                lists.push(list);
            }
            lists = lists.join("");
            document.getElementById("PropertyImage").innerHTML = lists;
            var swiper_PropertyImage = new Swiper('.swiper-container_PropertyImage', {
                zoom:true,
                lazy: {
                    loadPrevNext: true
                },
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                on: {
                    slideChangeTransitionEnd: function () {
                        document.getElementsByClassName("PropertyImage-num")[0].innerHTML = this.activeIndex + 1 + "/" + localStorage.getItem('imgLength');
                    }
                }
            });
            document.getElementsByClassName("PropertyImage-num")[0].innerHTML = 1 + "/" + _data.length;
        }
    }

    function PostData(type,url, data, callback) {
        $.ajax({
            type:type,
            url:url,
            data:data,
            async:false,
            success:function (data) {
                callback(data);
            },
            error:function () {
                showTips('请求失败');
            }
        });
    }
    function fmtDate(obj){
        var date =  new Date(obj);
        var y = 1900+date.getYear();
        var m = "0"+(date.getMonth()+1);
        var d = "0"+date.getDate();
        return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
    }
    //楼盘相册
    function  floorImage(){
        $.ajax({
            type:'get',
            url:floorUrl+'api/v1/propert/propertyImage',
            data:{
                propertyId:propertyId
            },
            async:false,
            success:function (data) {
                var propertyImageData=data.data.propertyImage;
                if(propertyImageData.length){
                    var photoNum=propertyImageData[0].allImageUrl.split(',');
                    shareImgUrl=photoNum[0];
                    if(photoNum.length){
                        var spanHtml='';
                        $('#topPages>p').text('查看相册('+photoNum.length+')');
                        for(var i=0;i<photoNum;i++){
                            spanHtml+=`
                       <span></span>
                       `;
                        }
                        $('#topPages>div').html(spanHtml);
                    }
                    if(photoNum.length){
                        var midImgHtml='';
                        $.each(photoNum,function (i) {
                            midImgHtml+=`
                        <li class="swiper-slide">
                        <img data-src="${imgUrl+photoNum[i]}" class="swiper-lazy" alt="">
                        </li>
                       `;
                        });
                        $('#floorDetail .swiper-wrapper').html(midImgHtml);
                        var mySwiper = new Swiper ('.headerImg', {
                            direction: 'horizontal',
                            zoom:true,
                            lazy: {
                                loadPrevNext: true
                            },
                            observer:true,//修改swiper自己或子元素时，自动初始化swiper
                            observeParents:true,//修改swiper的父元素时，自动初始化swiper
                        });
                    }
                }else{
                    $('#floorDetail .swiper-wrapper').html(`<li><img src="${initImg}" width="375" height="195" alt=""></li>`);
                    $('#topPages>p').text('查看相册()');
                    $('#topPages>div').html('<span></span>');
                }
            } ,
            error:function () {
                showTips('服务器内部错误');
            }
        });
    }
    floorImage();
    //咨询项目
    function consult(){
        $.ajax({
            type:'get',
            url:floorUrl+'api/v1/propert/saleUserPhone',
            data:{
                propertyId:propertyId
            },
            async:false,
            success:function (data) {
                if(data.code=='200'){
                    var anChangTuiJian=data.data.saleUserPhone.split(':');
                    if(!anChangTuiJian[0]){
                        anChangTuiJian[0]='';
                        hasConsult=false;
                    }
                    if(!anChangTuiJian[1]){
                        anChangTuiJian[1]='';
                        hasConsult=false;
                    }
                    var consultHtml=`
                <div>${anChangTuiJian[0]+' '+anChangTuiJian[1]}</div>
                <div>
                    <div id="cancel">取消</div>
                    <div id="call"><a href="tel:${anChangTuiJian[1]}">呼叫</a></div>
                </div>
                `;
                    $('.phoneToast').html(consultHtml);
                    //咨询项目取消
                    $('#cancel').on('click',function () {
                        $('.phoneModal').fadeOut();
                    });
                }else{
                    hasConsult=false;
                }
            } ,
            error:function () {
                showTips('服务器内部错误');
            }
        });
    }
    consult();
    //获取楼盘详情
    function getFloorDetail(res) {
        $.ajax({
            type:'get',
            url:floorUrl+'api/v1/propert/propertyDeatil',
            data:{
                propertyId:propertyId,//	是	string	楼盘id
            },
            success:function (data) {
                $('#loading').hide();
                var floorDetailData=data.data.propertyDeatil;//详情数据
                var propertyCommissionData=data.data.propertyCommission;//佣金信息
                var propertyActivityData=data.data.propertyactivityList;//优惠活动
                var propertyRemarkData=data.data.propertyRemark;//楼盘卖点
                var guessLikeData=data.data.guessYouLikePropertyList;//猜你喜欢
                var houseTypeListData=data.data.houseTypeList;//主力户型
                if(guessLikeData.length){
                    var guessLikeDataHtml='';
                    $.each(guessLikeData,function (i) {
                        var thisPrice=guessLikeData[i].commissionMoney;
                        if(!guessLikeData[i].name){
                            guessLikeData[i].name='';
                        }
                        if(guessLikeData[i].minPrice==null){
                            guessLikeData[i].minPrice='';
                        }
                        if(!guessLikeData[i].cityName){
                            guessLikeData[i].cityName='';
                        }
                        if(!guessLikeData[i].boroughName){
                            guessLikeData[i].boroughName='';
                        }
                        if(thisPrice==null){
                            thisPrice='';
                        }
                        if(thisPrice.indexOf('%')>0){
                            thisPrice=thisPrice+'/套';
                        }
                        guessLikeDataHtml+=`
                        <ul id="${guessLikeData[i].id}" class="${guessLikeData[i].isSign}">
                           <li>
                               <img src="${!guessLikeData[i].imageUrl?initImg:guessLikeData[i].imageUrl}" alt=""/>
                               <p>${guessLikeData[i].name}</p>
                           </li>
                           <li>${guessLikeData[i].minPrice}元/㎡·${guessLikeData[i].cityName+guessLikeData[i].boroughName}</li>
                           <li class="useType">佣金:${thisPrice}</li>
                        </ul>
                        `;
                    });
                    $('#guess>.lists').html(guessLikeDataHtml);
                    if(userType!=2){
                        $('#guess .useType').hide();
                    }
                    //
                    $('#guess>.lists').on('click','ul',function () {
                        propertyId=$(this).attr('id');
                        sign=$(this).attr('class');
                        PostData('post',weixinUrl+"weixin/member/demo.html", {url:window.location.href}, weixin);
                        floorImage();
                        consult();
                        $("html,body").animate({scrollTop:0}, 500);
                    });
                }else{
                    $('#guess>.lists').html(noDataHtml);
                }
                if(propertyCommissionData.length){
                    $('#commissionInfo .more>span').text(propertyCommissionData.length+'套方案');
                    var yjfaHtml='',yjfaMoreHtml='';
                    var noMoreHtml='<li><span class="line"></span><sapn>已经到底啦</sapn><span class="line"></span></li>';
                    $.each(propertyCommissionData,function (i) {
                        var thisMoney=propertyCommissionData[i].commissionMoney;
                        if(thisMoney==null){
                            thisMoney='';
                        }
                        if(thisMoney.indexOf('%')>0){
                            thisMoney=thisMoney+'/套';
                        }
                        if(!propertyCommissionData[i].commissionPlanName){
                            propertyCommissionData[i].commissionPlanName='';
                        }
                        yjfaHtml+=`
                        <li>
                            <p>${thisMoney}</p>
                            <p>${propertyCommissionData[i].commissionPlanName}</p>
                        </li>
                        `;
                        yjfaMoreHtml+=`
                        <li><span>${propertyCommissionData[i].commissionPlanName}</span><span>${thisMoney}</span></li>
                        `;
                    });
                    if(userType==2){

                        $('#commissionInfo>ul').html(yjfaHtml);
                        $('#commissionInfoMore>ul').html(yjfaMoreHtml+noMoreHtml);
                    }else{
                        $('#userType').show();
                    }
                }else{
                    $('#commissionInfo>ul').text('暂无数据');
                    $('#commissionInfoMore>ul').text('暂无数据');
                }
                if(propertyActivityData.length){
                    $('#preferential .more>span').text(propertyActivityData.length+'套方案');
                    var tgxqHtml='',tgxqMoreHtml='';
                    var noMoreHtml='<li><span class="line"></span><sapn>已经到底啦</sapn><span class="line"></span></li>';
                    $.each(propertyActivityData,function (i) {
                        if(!propertyActivityData[i].activityName){
                            propertyActivityData[i].activityName='';
                        }
                        if(!propertyActivityData[i].activityMoney){
                            propertyActivityData[i].activityMoney='';
                        }
                        tgxqHtml+=`
                        <li>
                            <span>${propertyActivityData[i].activityName}</span>
                            <span>${propertyActivityData[i].activityMoney}</span>
                        </li>
                        `;
                        tgxqMoreHtml+=`
                        <li><span>${propertyActivityData[i].activityName}</span><span>${propertyActivityData[i].activityMoney}</span></li>
                        `;
                    });
                    $('#preferential>ul').html(tgxqHtml);
                    $('#preferentialMore>ul').html(tgxqMoreHtml+noMoreHtml);
                }else{
                    $('#preferential>ul').text('暂无数据');
                    $('#preferentialMore>ul').text('暂无数据');
                }
                //判断合作，意向客户，成交数据是否存在
                //基本详情
                if(floorDetailData.length){
                    propertyName=floorDetailData[0].name;
                    if(!propertyName){
                        propertyName='';
                    }
                    var averagePrice=floorDetailData[0].minPrice;
                    if(!averagePrice){
                        averagePrice='暂无定价';
                    }else{
                        averagePrice=averagePrice+'元/㎡';
                    }
                    // 楼盘信息
                    var floorInfoHtml=`
                    <p><span>${propertyName}</span><span class="floorState">${sellState(floorDetailData[0].saleState)}</span><span class="isSigned"></span></p>
                    <p>均价:${averagePrice}</p>
                    `;
                    $('#floorInfo .nameLeft').html(floorInfoHtml);
                    if(sign==0){
                        $('#floorInfo span.isSigned').hide();
                    }
                    //上滑屏幕时头部
                    var swiperTitleHtml=`
                    <div class="img backImg" onclick="history.back()"><img src="img/topbar_ic_back_black@2x.png" alt=""></div>
                    <div>${propertyName}</div>
                    <div class="img"><img src="img/topbar_ic_share_black@2x.png" alt=""></div>
                    `;
                    $('#swiperTitle').html(swiperTitleHtml);
                    //项目属性
                    if(floorDetailData[0].minArea==null){
                        floorDetailData[0].minArea='';
                    }
                    if(floorDetailData[0].maxArea==null){
                        floorDetailData[0].maxArea='';
                    }
                    var itemsHtml=`
                    <span>项目属性：</span><span>${floorDetailData[0].minArea}-${floorDetailData[0].maxArea}㎡；</span><span>${buildingType(floorDetailData[0].buildType)}</span><span></span>
                    `;
                    $('#floorInfo>.items').html(itemsHtml);
                    //楼盘地址
                    var x = res.longitude;//微信经度
                    var y = res.latitude;//微信纬度
                    var pointOrigin,_distance;//起始坐标点
                    var url = "http://api.map.baidu.com/geoconv/v1/?coords=" + x + "," + y + "&from=1&to=5&ak=CB2ede775afeb6e413abd40261396a69";
                    var geocoder = new BMap.Geocoder();
                    var thisLongitude=floorDetailData[0].longitude,
                        thisLatitude=floorDetailData[0].latitude;
                    if(!thisLongitude||!thisLatitude){
                        //获取起始地址经纬度
                        geocoder.getPoint(floorDetailData[0].address, function(point){
                            if(point) {
                                thisLongitude = point.lng;
                                thisLatitude = point.lat;
                                callback();
                            }
                        },floorDetailData[0].address);
                    }else{
                        callback();
                    }
                    function callback(){
                        $.get(url, function(data) {
                            if(data.status === 0) {
                                pointOrigin = new BMap.Point(data.result[0].x,data.result[0].y);
                                //参数是楼盘所在地的经纬度
                                _distance = getDistance({
                                    Longitude: thisLongitude,
                                    Latitude: thisLatitude
                                }, pointOrigin);
                                if(!floorDetailData[0].address){
                                    floorDetailData[0].address='';
                                }
                                if(String(_distance).length>3){
                                    _distance=Math.round(_distance/1000)+'km';
                                }else{
                                    _distance=_distance+'m';
                                }
                                var attressHtml=`
                                    <div class="attressLeft">
                                      <img src="img/project_ic_location_big@2x.png" alt=""><span>${floorDetailData[0].address}</span>
                                    </div>
                                    <div class="attressRight">
                                      <span>${_distance}</span>
                                    </div>
                                    `;
                                $('#floorInfo>.attress').html(attressHtml);
                            }
                        }, 'jsonp');
                    }
                    //楼盘卖点propertyRemarkData
                    var shoppingHtml='';
                    if(propertyRemarkData.length>0&&propertyRemarkData[0].nearbyBusiness){
                        $.each(propertyRemarkData,function (i) {
                            shoppingHtml+=propertyRemarkData[i].nearbyBusiness+';';
                        });
                        $('#sellPoints .theWords').html(shoppingHtml);//娱乐购物
                    }else{
                        $('#sellPoints .theWords').html('暂无');
                    }
                    //楼盘分享
                    $.ajax({
                        type:"post",
                        url:weixinUrl+"weixin/member/demo.html",
                        async:true,
                        data:{
                            url:window.location.href
                        },
                        success:function(data){
                            wx.config({

                                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。

                                appId: wxAppId, // 必填，公众号的唯一标识

                                timestamp: data.timestamp, // 必填，生成签名的时间戳

                                nonceStr: data.noncestr, // 必填，生成签名的随机串

                                signature: data.signature,// 必填，签名，见附录1

                                jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表

                            });
                        }
                    });

                    wx.ready(function () {
                        wx.onMenuShareTimeline({
                            title: floorDetailData[0].name+' '+floorDetailData[0].minPrice+'元/㎡', // 分享标题 楼盘名称和均价
                            link: weixinUrl+'pages/efshare/pro.jsp?propertyID='+propertyId+'&memberId='+memberId,
                            imgUrl: imgUrl+shareImgUrl, // 分享图标  当前轮播图第一张图
                            success: function () {
                                console.log("分享成功");
                            },
                            cancel: function () {
                                console.log('分享失败');// 用户取消分享后执行的回调函数
                            }
                        });
                        wx.onMenuShareAppMessage({
                            title: floorDetailData[0].name+' '+floorDetailData[0].minPrice+'元/㎡', // 分享标题 楼盘名称和均价
                            link: weixinUrl+'pages/efshare/pro.jsp?propertyID='+propertyId+'&memberId='+memberId,
                            imgUrl: imgUrl+shareImgUrl, // 分享图标  当前轮播图第一张图
                            success: function () {
                                console.log("分享成功");
                            },
                            cancel: function () {
                                console.log('分享失败');// 用户取消分享后执行的回调函数
                            }
                        });
                    });
                    //楼盘信息跳转楼盘详情
                    if(!floorDetailData[0].openTime){
                        floorDetailData[0].openTime='';
                    }
                    if(!floorDetailData[0].completedTime){
                        floorDetailData[0].completedTime='';
                    }
                    if(!floorDetailData[0].finishTime){
                        floorDetailData[0].finishTime='';
                    }
                    var item1Html=`
                    <div class="lpxq-item">
                        <div class="lpxq-group_name">开盘时间</div>
                        <div class="lpxq-group_value">${fmtDate(floorDetailData[0].openTime)}</div>
                    </div>
                    <div class="lpxq-item">
                        <div class="lpxq-group_name">竣工时间</div>
                        <div class="lpxq-group_value">${fmtDate(floorDetailData[0].completedTime)}</div>
                    </div>
                    <div class="lpxq-item">
                        <div class="lpxq-group_name">交房时间</div>
                        <div class="lpxq-group_value">${fmtDate(floorDetailData[0].finishTime)}</div>
                    </div>
                    `;
                    $('#item1').html(item1Html);
                    if(!floorDetailData[0].developers){
                        floorDetailData[0].developers='';
                    }
                    var item2Html=`
                    <div class="lpxq-item">
                        <div class="lpxq-group_name">开发商</div>
                        <div class="lpxq-group_value">${floorDetailData[0].developers}</div>
                    </div>
                    <div class="lpxq-item">
                        <div class="lpxq-group_name">物业公司</div>
                        <div class="lpxq-group_value">${floorDetailData[0].wuyeName}</div>
                    </div>
                    <div class="lpxq-item">
                        <div class="lpxq-group_name">建筑类型</div>
                        <div class="lpxq-group_value">${buildingType(floorDetailData[0].buildType)}</div>
                    </div>
                    `;
                    $('#item2').html(item2Html);
                    if(floorDetailData[0].buildCount==null){
                        floorDetailData[0].buildCount='';
                    }
                    if(floorDetailData[0].coverArea==null){
                        floorDetailData[0].coverArea='';
                    }
                    if(floorDetailData[0].buildArea==null){
                        floorDetailData[0].buildArea='';
                    }
                    if(!floorDetailData[0].volume){
                        floorDetailData[0].volume='';
                    }
                    if(!floorDetailData[0].afforest){
                        floorDetailData[0].afforest='';
                    }
                    if(!floorDetailData[0].parkNumber){
                        floorDetailData[0].parkNumber='';
                    }
                    if(floorDetailData[0].managementCost==null){
                        floorDetailData[0].managementCost='';
                    }
                    if(!floorDetailData[0].address){
                        floorDetailData[0].address='';
                    }
                    var item3Html=`
                    <div class="lpxq-item">
                <div class="lpxq-group_name">栋楼总数</div>
                <div class="lpxq-group_value">${floorDetailData[0].buildCount}</div>
            </div>
            <div class="lpxq-item">
                <div class="lpxq-group_name">占地面积</div>
                <div class="lpxq-group_value">${floorDetailData[0].coverArea}㎡</div>
            </div>
            <div class="lpxq-item">
                <div class="lpxq-group_name">建筑面积</div>
                <div class="lpxq-group_value">${floorDetailData[0].buildArea}㎡</div>
            </div>
            <div class="lpxq-item">
                <div class="lpxq-group_name">容积率</div>
                <div class="lpxq-group_value">${floorDetailData[0].volume}</div>
            </div>
            <div class="lpxq-item">
                <div class="lpxq-group_name">绿化率</div>
                <div class="lpxq-group_value">${floorDetailData[0].afforest}</div>
            </div>
            <div class="lpxq-item">
                <div class="lpxq-group_name">停车位</div>
                <div class="lpxq-group_value">${floorDetailData[0].parkNumber}</div>
            </div>
            <div class="lpxq-item">
                <div class="lpxq-group_name">物业费</div>
                <div class="lpxq-group_value">${floorDetailData[0].managementCost}</div>
            </div>
            <div class="lpxq-item">
                <div class="lpxq-group_name">楼盘地址</div>
                <div class="lpxq-group_value">${floorDetailData[0].address}</div>
            </div>
                    `;
                    $('#item3').html(item3Html);
                }
                //户型图
                if(houseTypeListData.length){
                    var zlhxHtml='';
                    $.each(houseTypeListData,function (i) {
                        if(!houseTypeListData[i].doorModelName){
                            houseTypeListData[i].doorModelName='';
                        }
                        if(houseTypeListData[i].bedroom==null){
                            houseTypeListData[i].bedroom='';
                        }
                        if(houseTypeListData[i].hall==null){
                            houseTypeListData[i].hall='';
                        }
                        if(houseTypeListData[i].bathroom==null){
                            houseTypeListData[i].bathroom='';
                        }
                        if(houseTypeListData[i].constructionArea==null){
                            houseTypeListData[i].constructionArea='';
                        }
                        if(!houseTypeListData[i].houseTypeName){
                            houseTypeListData[i].houseTypeName='';
                        }
                        if(houseTypeListData[i].tablePrice==null){
                            houseTypeListData[i].tablePrice='';
                        }

                        zlhxHtml+=`
                            <ul class="swiper-slide">
                                <li class="slideImg ">
                                  <img src="${!houseTypeListData[i].imageUrl?initImg:houseTypeListData[i].imageUrl}" alt=""/>
                                  <div></div>
                                </li>
                                <li class="status"><span>${houseTypeListData[i].doorModelName}</span><span>${sellState(floorDetailData[0].saleState)}</span></li>
                                <li>${houseTypeListData[i].bedroom}室${houseTypeListData[i].hall}厅${houseTypeListData[i].bathroom}卫·${houseTypeListData[i].constructionArea}㎡·${houseTypeListData[i].houseTypeName}</li>
                                <li>${houseTypeListData[i].tablePrice}万起</li>
                            </ul>
                            `;
                    });
                    $('#renderings>.items').html(zlhxHtml);
                    $('#renderings').on('click','.slideImg',function () {
                        $('#swiperTitle').css('visibility','hidden');//隐藏头部
                        $('.scrollAuto').css('visibility','hidden');//隐藏导航条
                        var bigImgSrc=$(this).children('img').attr('src');
                        showBigImg(`<img class="zoomImg" src="${bigImgSrc}" />`);
                    });
                    //点击非目标区域，弹框隐藏
                    // $(document).click(function(e){
                    //     var _con=$('.slideImg,.zoomImg');//设置点击，展示目标区域
                    //     if(!_con.is(e.target)&&_con.has(e.target).length==0){
                    //         $('.imgModal').hide();
                    //     }
                    // });
                    $('.imgModal').click(function () {
                        $(this).hide();
                    });
                    // var box=document.querySelector(".zoomImg");
                    // var boxGesture=setGesture(box);  //得到一个对象
                    // boxGesture.gesturemove=function(e){  //双指移动
                    //     box.innerHTML = e.scale+"<br />"+e.rotation;
                    //     box.style.transform="scale("+e.scale+") rotate("+e.rotation+"deg)";//改变目标元素的大小和角度
                    // };
                }else{
                    $('#renderings>.items').html(noDataHtml);
                }
            },
            error:function () {
                showTips('请求失败');
            }
        });
    }

    //页面底部报备页面跳转
    $('#floorDetail>footer').on('click','.myReport',function () {//我的报备

        if(userType==2){//经纪人
            $(location).attr('href','../weixin2/pages/client-index.jsp');
        }else{
            $('.fhmModal').fadeIn();
            var consultHtml=`
                    <div>您还没有绑定分行码</div>
                    <div>
                        <div class="cancel">算了</div>
                        <div class="call">立即绑定</div>
                    </div>
                    `;
            $('.fhmToast').html(consultHtml);
            //取消
            $('.cancel').on('click',function () {
                $('.fhmModal').fadeOut();
            });
            $('.call').on('click',function () {
                $(location).attr('href','../login/login.jsp?member=1');
            });
        }
    })
        .on('click','.poster',function () {//制作海报
            showTips('暂未开放此功能');
        })
        .on('click','.consult',function () {//咨询项目
            if(hasConsult){
                $('.phoneModal').fadeIn();
            }else{
                $('.phoneModal').fadeOut();
                showTips('无相关信息');
            }
        });
    $('#report').on('click',function () {
        if(userType==2){//经纪人
            $(location).attr('href',"../weixin2/pages/add-reserve-client.jsp?"+propertyId+ "$" +encodeURI(propertyName));
        }else{
            $('.fhmModal').fadeIn();
            var consultHtml=`
                    <div>您还没有绑定分行码</div>
                    <div>
                        <div class="cancel">算了</div>
                        <div class="call">立即绑定</div>
                    </div>
                    `;
            $('.fhmToast').html(consultHtml);
            //取消
            $('.cancel').on('click',function () {
                $('.fhmModal').fadeOut();
            });
            $('.call').on('click',function () {
                $(location).attr('href','../login/login.jsp?member=1');
            });
        }
    });
    //点击轮播图显示相册
    $('#topPages').on('click','p',function (e) {
        e.stopPropagation();
        $('#propertyImg .append-buttons').html('');
        //楼盘相册
        PostData('get',floorUrl+"api/v1/propert/propertyImage", "propertyId=" + propertyId, PropertyImage);
        $('#floorDetail').hide();
        $('#propertyImg').show();
    });
    //点击轮播图显示相册
    $('#floorDetail').on('click','.headerImg',function (e) {
        e.stopPropagation();
        $('#propertyImg .append-buttons').html('');
        //楼盘相册
        PostData('get',floorUrl+"api/v1/propert/propertyImage", "propertyId=" + propertyId, PropertyImage);
        $('#floorDetail').hide();
        $('#propertyImg').show();
    });
});