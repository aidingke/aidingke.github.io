
/**
 * 下拉菜单插件
 * $(".option").dropdown();
 */
;(function($) {
    $.fn.extend({
        dropdown : function() {
            $(this).each(function() {
                var self = $(this);
                var act = self.children("a");
                var para = self.children("p");
                var links = para.find("a");
                self.addClass("dropdown");
                links.filter(":contains("+ act.text() +")").hide();
                self.on("click", function() {
                    para.toggle();
                    self.toggleClass("open");
                    links.on("click", function() {
                        var _this = $(this);
                        act.text(_this.text());
                        _this.hide().siblings().show();
                    })
                    return false;
                })
                $(document).on("click", function() {
                    para.hide();
                    self.removeClass("open");
                });
            });
        }
    });
})(jQuery);



//页面是否在微信里面打开的
var isWeixin = function() {
    return /MicroMessenger/i.test(window.navigator.userAgent);
};

//微信分享
if (isWeixin()) {
    var shareData = {
        "appid": "",
        "img_url": "http://weixin.uzise.com/topic/fairy/images/mouth-shut.png",
        "img_width": "",
        "img_height": "",
        "link": "http://mobile.uzise.com/topic-fairy/",
        "title": "全民大吃神仙柚游戏！",
        "desc": "大吃神仙柚，敢不敢来挑战~~"
    };
    //给好友
    function shareFriend() {
        WeixinJSBridge.invoke('sendAppMessage', shareData)
    }
    //朋友圈
    function shareTimeline() {
        WeixinJSBridge.invoke('shareTimeline', shareData);
    }
    // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', shareFriend);
        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', shareTimeline);

    }, false);
}


$(function() {


    //吃柚子
    var modWelcome = $(".mod-welcome"),
        modGame = $(".mod-game"),
        boxTotal = $(".box-fraction"),
        boxCountdown = $(".box-countdown"),
        boxPlayList = $(".box-play ul"),
        btnStart = $(".btn-start"),
        rate = $(".box-progress .rate"),
        mask = $(".mask"),
        popupOver = $(".popup-over"),   //游戏结束的弹窗
        sum = popupOver.find(".sum"),
        compare =  $(".compare"),
        imgSlogan = $(".slogan img"),
        btnView = $(".btn-view"),
        btnAgain = $(".btn-again"),
        btnShare = $(".btn-share"),
        popupRank = $(".popup-rank"),   //排行榜弹窗
        len = 20;

    //生成柚子
    function createPomelo() {
        var str = "",
            pomeloHtml = "\
            <li>\
                <div class=\"shell\">\
                    <div class=\"pomelo\"></div>\
                    <div class=\"mouth\"></div>\
                </div>\
                <div class=\"desk\"></div>\
                <div class=\"layer\"></div>\
            </li>";
        boxPlayList.empty();
        for (var i=0; i<len; i++) {
            str += pomeloHtml;
        }
        boxPlayList.append(str);
    }
    createPomelo();

    //开始游戏
    function gameStart() {
        var timer = null,
            num = 0,    //统计柚子数量
            now = 10000,    //游戏时间20s
            percent = 0;    //存储百分比 打败人数

        modWelcome.hide();
        modGame.show();

        //进行游戏
        function gamePlay() {
            var self = $(this),
                item = self.parent(),
                pomelo = item.find(".pomelo"),
                mouth = item.find(".mouth"),
                fill = "";

            self.hide();
            num++;
            if (num < 10 && num > 0) {
                fill = "00";
            } else if (num < 100 && num > 10) {
                fill = "0";
            }
            boxTotal.html(fill + num);
            percent = num >= 180 ? 99 : num / 180 * 100;
            rate.width(percent + "%");
            pomelo.hide();
            mouth.show();
			//alert(len);
			//$('body').attr("cc",len);
            setTimeout(function() {
                mouth.addClass("eat");
                setTimeout(function() {
                    mouth.hide();
                    pomelo.show().hide("fast");
                }, 100);
				
				//总数到了之后 重新填满	
                if (num % len == 0) {
                    createPomelo();
                }
				
            }, 100);
            //微信分享
            if (isWeixin()) {
                shareData.title = "我吃了" + num + "个神仙柚，吃出个国色天香，美色力压全国 " + parseInt(percent) + "% 的人，敢不敢来挑战！";
            }
        }
        boxPlayList.on("touchstart", ".layer", gamePlay);


        //游戏初始化
        function gameInit() {
            popupOver.hide();
            popupRank.hide();
            mask.hide();
            modWelcome.show();
            modGame.hide();
            createPomelo();
            num = 0;
            now = 10000;
        }
        btnAgain.on("click", gameInit);

        //排行榜弹窗
        function gameRank() {
            popupOver.hide();
            popupRank.show();
        }
        btnView.on("click", gameRank);

        //弹窗：战斗结果
        function gameResult() {
            mask.show();
            popupOver.show();
            sum.html(num);
            compare.html(parseInt(percent) + "%");  //百分比，打败多少人
            var amount = num >= 180 ? 18 : parseInt(num / 10);
            imgSlogan.attr({"src": "images/slogan-" + amount + ".png"});
        }


        //结束游戏
        function gameOver() {
            clearInterval(timer);
            gameResult();
        }

        //倒计时
        function countdown() {
            now -= 10;
            var now1 = parseInt(now / 1000),
                now2 = parseInt((now / 1000 - now1) * 10),
                now3 = parseInt(Math.random() * 10); //用随机数充数
            if (!now) {
                now3 = 0;
                gameOver();
            }
            var result = now1 + ":" + now2 + now3;
            boxCountdown.html(result);
        }
        timer = setInterval(countdown, 10);

    }
    btnStart.on("click", gameStart);


    //提示分享
    btnShare.on("click", function() {
        if (isWeixin()) {
            $("body").append("<div class='tips-share'></div>");
            var tipsShare = $(".tips-share");
            tipsShare.on("click", function() {
                tipsShare.remove();
            });
        } else {
            alert("请点击分享按钮分享给你的朋友们吧！！");
        }
    });



    //日期下拉菜单
    $(".option").dropdown();

});


