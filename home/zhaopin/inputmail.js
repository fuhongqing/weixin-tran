// JavaScript Document
(function ($) {
    $.fn.extend({
        "changeTips": function (value) {
            value = $.extend({
                divTip: ""
            }, value);

            var $this = $(this);
            var indexLi = 0;
            //点击document隐藏下拉层
            $(document).click(function (event) {
                if ($(event.target).attr("class") == value.divTip || $(event.target).is("li")) {
                    var liVal = $(event.target).text();
                    $this.val(liVal);
                    blus();
                } else {
                    blus();
                }
            });

            //隐藏下拉层
            function blus() {
                $(value.divTip).hide();
            }

            //值发生改变时
            function valChange() {
                var tex = $this.val();//输入框的值
                var fronts = "";//存放含有“@”之前的字符串
                var af = /@/;
                var regMail = new RegExp(tex.substring(tex.indexOf("@")));//有“@”之后的字符串,注意正则字面量方法，是不能用变量的。所以这里用的是new方式。


                //让提示层显示，并对里面的LI遍历
                if ($this.val() == "") {
                    blus();
                } else {

                    $(value.divTip).show().children().each(function (index) {
                        var valAttr = $(this).attr("email1");
                        if (index == 1) {
                            $(this).text(tex).addClass("active").siblings().removeClass();
                        }
                        //索引值大于1的LI元素进处处理
                        if (index > 1) {
                            //当输入的值有“@”的时候
                            if (af.test(tex)) {
                                //如果含有“@”就截取输入框这个符号之前的字符串
                                fronts = tex.substring(tex.indexOf("@"), 0);
                                $(this).text(fronts + valAttr);
                                //判断输入的值“@”之后的值，是否含有和LI的email属性
                                if (regMail.test($(this).attr("email1"))) {
                                    $(this).show();
                                } else {
                                    if (index > 1) {
                                        $(this).hide();
                                    }
                                }

                            }
                            //当输入的值没有“@”的时候
                            else {
                                $(this).text(tex + valAttr);
                            }
                        }
                    })
                }
            }


            //输入框值发生改变的时候执行函数，这里的事件用判断处理浏览器兼容性;
            $(this).bind("input", function () {
                valChange();
            });


            //鼠标点击和悬停LI
            $(value.divTip).children().hover(function () {
                indexLi = $(this).index();//获取当前鼠标悬停时的LI索引值;
                if ($(this).index() != 0) {
                    $(this).addClass("active").siblings().removeClass();
                }
            })
        }
    })
})(jQuery);