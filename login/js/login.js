$(function() {
        localStorage.setItem('wxOpenId', weixinOpenId);
        localStorage.setItem('wxUnionId', weixinunionId);
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
        var member = location.search.slice(8);
        var
            initUrl = 'http://jjrtest.ehaofang.com/',//http://jjrtest.ehaofang.com/',//'http://192.168.6.4:82/',
            userType,
            jobNum = 4,
            mobilePhone = '',
            memberId,
            branchId,
            parentId;
        $('#title').on('click', '.back', function() {
            history.back();
        });
        $('#indexPage input').focus(function() {
            $('#indexPage>header').hide(500);
            $('#title').show(500);
        });
        $('#pnm>input').focus(function() {
            $('#pnm>img').show().click(function() {
                $('#pnm>input').val('');
            });
            $('#pnm>button').show();
        });
        $('#pnm').on('click', 'button', function() {
            mobilePhone = $('#pnm>input').val();
            if (!(/^1[3456789]\d{9}$/.test(mobilePhone))) {
                showTips("手机号无效");
            } else {
                getRegNum(mobilePhone);
            }
        });
        $('#myJob').on('click', function() {
            $('.jobModal').fadeIn();
        });
        $('.topDiv').on('click', 'li:not(.title)', function() {
            $(this).addClass('liActive').children('img').show().end().siblings().removeClass('liActive').children('img').hide();
            $('#myJob>span').html($(this).children('span').html()).css('color', '#000');
            jobNum = parseFloat($(this).attr('class'));
        });
        $(document).click(function(e) {
            var _con = $('#myJob,.title');
            if (!_con.is(e.target) && _con.has(e.target).length == 0) {
                $('.jobModal').hide();
            }
        });
        $('.page_next>header').on('click', '.back', function() {
            pageStatus(0);
            $('#login').click(function() {
                phoneInvalid();
            });
        });
        function showTips(text) {
            $('.modal').fadeIn();
            $('.toast').html(text);
            setTimeout(function() {
                $('.modal').fadeOut();
            }, 1000);
        }
        function weixinLogin(url) {
            $.ajax({
                url: initUrl + 'api/v1/agent/weixinLogin',
                type: 'GET',
                data: {
                    weixinOpenId: weixinOpenId,
                    weixinUnionId:weixinunionId,
                    loginType: 2
                },
                success: function(data) {
                    if (data.code == 200) {
                        var result = data.data;
                        parentId = result.companyId;
                        memberId = result.id;
                        userType = result.userType;
                        localStorage.setItem('memberID', memberId);
                        localStorage.setItem('userType', userType);
                        if (userType == 2) {
                            $(location).attr('href', url);
                        } else {
                            pageStatus(2);
                            $('#ignore').click(function() {
                                $(location).attr('href', '../weixin2/pages/index.jsp');
                            });
                            $('#next').click(function() {
                                if ($(this).html() == '完成') {
                                    branchCode();
                                }
                            });
                        }
                    } else if(data.code == 45001){//没有此用户
                        pageStatus(0);
                        $('#login').click(function() {
                            phoneInvalid();
                        });
                    }else{
                        showTips(data.msg||'服务异常')
                    }
                },
                error: function() {
                    showTips('服务器内部错误');
                }
            });
        }
        weixinLogin(pageUrl);
        function branchCode() {
            var branchCode = $('#branchCode').val();
            if (!branchCode) {
                showTips('分行码不能为空');
            } else {
                $.ajax({
                    url: initUrl + 'api/v1/agent/getCompanyByBranchcode',
                    type: 'GET',
                    async: false,
                    data: {
                        branchCode:branchCode
                    },
                    success: function(data) {
                        if (data.code == '200') {
                            branchId = data.data.branchId;
                            parentId = data.data.companyId;
                            var codeParams={
                                branchId: branchId,
                                companyId: parentId,
                                id: localStorage.getItem('memberID')
                            };
                            $.ajax({
                                url: initUrl + 'api/v1/agent/updateMemberCompany',
                                type: 'PUT',
                                async: false,
                                data: JSON.stringify(codeParams),
                                contentType : 'application/json',
                                success: function(data) {
                                    if (data.code == '200') {
                                        localStorage.setItem('userType', '2');
                                        $(location).attr('href', '../weixin2/pages/index.jsp');
                                    } else {
                                        showTips(data.msg||'朋友，我偶感不适，建议使用易好房经纪APP');
                                    }
                                },
                                error: function() {
                                    showTips('服务器内部错误');
                                }
                            });
                        } else {
                            showTips(data.msg || '无相关分行信息');
                        }
                    },
                    error: function() {
                        showTips('服务器内部错误');
                    }
                });
            }
        }
        function pageStatus(t) {
            switch (t) {
                case 0:
                    $('#indexPage').show();
                    $('.page_next').hide();
                    $('#pnm>input').val('');
                    $('#pnm>img').hide();
                    $('#pnm>span').hide();
                    $('#pwd>input').val('');
                    break;
                case 1:
                    $('#indexPage').hide();
                    $('.page_next').show();
                    $('#next').html('下一步');
                    $('#ignore').css('visibility', 'hidden');
                    $('.page_next>footer').hide();
                    $('.page_next>section>.container').show();
                    $('.page_next>section>.row').hide();
                    break;
                case 2:
                    $('#indexPage').hide();
                    $('.page_next').show();
                    $('#ignore').css('visibility', 'visible');
                    $('.page_next>footer').show();
                    $('.page_next>header>.back').hide();
                    $('.page_next>header>.center').html('绑定分行码');
                    $('.page_next>section>.container').hide();
                    $('.page_next>section>.row').show();
                    $('#next').html('完成');
                    break;
                default:
                    break;
            }
        }
        function getRegNum(phone) {
            $.ajax({
                url: initUrl + 'api/v1/agent/getCode',
                type: 'GET',
                data: {
                    phone: phone
                },
                success: function(data) {
                    var self = '#pnm>button';
                    showTips('验证码已发送');
                    var time = 60;
                    var timeReg = setInterval(function() {
                        time--;
                        $(self).html(time + 's后可重发');
                        if (time <= 0) {
                            clearInterval(timeReg);
                            timeReg = null;
                            $(self).html('重新获取验证码');
                        }
                    }, 1000);
                },
                error: function(data) {
                    showTips('服务器内部错误');
                }
            });
        }
        function phoneInvalid() {
            var curCode = $('#pwd>input').val();
            mobilePhone = $('#pnm>input').val();
            $.ajax({
                url: initUrl + 'api/v1/agent/checkCode',
                type: 'GET',
                async:false,
                data: {
                    phone:mobilePhone,
                    randCode:curCode
                },
                success: function(data) {
                    if (data.code == '200') {
                        $.ajax({
                            url: initUrl + 'api/v1/agent/checkPhone',
                            type: 'GET',
                            async:false,
                            data: {
                                phone: mobilePhone
                            },
                            success: function(data) {
                                if (data.code=='200') {//手机号不重复
                                    pageStatus(1);
                                    $('#next').click(function() {
                                        if ($(this).html() == '下一步') {
                                            perfect();
                                        }
                                    });
                                } else if(data.code=='43002'){//手机号重复
                                    $.ajax({//手机号与微信关联
                                        url:initUrl+'api/v1/agent/weixinLoginAfterCheckPhone',
                                        type:'GET',
                                        data:{
                                            phone:mobilePhone,//	是	string	手机
                                            weixinOpenId:localStorage.getItem('wxOpenId'),//	否	string	微信openid 网站页面的openID //网站页面必须参数 app端不需要填
                                            weixinUnionId:localStorage.getItem('wxUnionId'),//	是	string	微信授权用户唯一标识id //用户的唯一标识
                                            loginType:2
                                        },
                                        success:function (data) {
                                            memberId=data.data.id;
                                            var thisUserType=data.data.userType;
                                            localStorage.setItem('memberID', memberId);
                                            localStorage.setItem('userType', thisUserType);
                                            if(thisUserType==2){
                                                $(location).attr('href', '../weixin2/pages/index.jsp');
                                            }else{
                                                pageStatus(2);//分行码页面
                                                $('#ignore').click(function () {
                                                    $(location).attr('href', '../weixin2/pages/index.jsp');
                                                });
                                                $('#next').on('click',function () {
                                                    branchCode();
                                                });
                                            }
                                        },
                                        error:function () {
                                            showTips('请求失败');
                                        }
                                    });
                                }else{
                                    showTips(data.msg);
                                }
                            },
                            error: function() {
                                showTips('服务器内部错误');
                            }
                        });
                    }else {
                        showTips(data.msg||'验证码有误');
                    }
                },
                error: function() {
                    showTips('请求失败');
                }
            });
        }
        function perfect() {
            var isRight = true;
            var realName = $('#realName>input').val();
            var pwd = $('#setPwd>input').val();
            var confirmPwd = $('#confirmPwd>input').val();
            if (realName == '') {
                showTips('姓名不能为空');
                isRight = false;
            }
            if ($('#myJob>span').html() == '请选择') {
                showTips('职位不能为空');
                isRight = false;
            }
            if (pwd == '') {
                showTips('密码不能为空');
                isRight = false;
            }
            if (pwd != confirmPwd) {
                showTips('两次输入密码不同');
                isRight = false;
            }
            if (isRight) {
                var paramData={
                    name: realName,
                    phone: mobilePhone,
                    userPassword: pwd,
                    weixinOpenId: localStorage.getItem('wxOpenId'),//'oo47C1IWqaIr9_gNZt5n_LchPANY',
                    weixinUnionId: localStorage.getItem('wxUnionId'),//'o4SU8w5ZNBbs9LZB98F-5AROSLXg',
                    title: jobNum,
                    type:3
                };
                $.ajax({
                    url: initUrl + 'api/v1/agent/register',
                    type: 'POST',
                    data: JSON.stringify(paramData),
                    contentType : 'application/json',
                    success: function(data) {
                        if (data.code==200) {
                            showTips('注册成功');
                            localStorage.setItem('memberID', data.data.id);
                            pageStatus(2);
                            $('#ignore').click(function() {
                                $(location).attr('href', '../weixin2/pages/index.jsp');
                            });
                            $('#next').click(function() {
                                if ($(this).html() == '完成') {
                                    branchCode();
                                }
                            });
                        }else{
                            showTips(data.msg || '注册失败');
                        }
                    },
                    error: function(data) {
                        showTips('服务器内部错误');
                    }
                });
            }
        }
        if (member == 1) {
            pageStatus(2);
            $('#ignore').click(function() {
                $(location).attr('href', '../weixin2/pages/index.jsp');
            });
            $('#next').click(function() {
                if ($(this).html() == '完成') {
                    branchCode();
                }
            });
        }
    });