/**
 * Created by baiyang on 2016/3/1.
 */
(function ($) {
    $(document).ready(function () {

        //top menu
        $('.show-nav').click(function () {
            $('.menu-top').toggleClass('show-menus');
            $('.menu-wrapper-background').fadeIn(250);
            return false;
        });
        $('.close-menu,.menu-wrapper-background').click(function () {
            $('.menu-top').toggleClass('show-menus');
            $('.menu-wrapper-background').fadeOut(250);
            return false;
        });
        $('.has-submenu').click(function () {
            $(this).parent().find('.submenu').toggleClass('show-submenu');
            $(this).find('.fa-plus').toggleClass('active-plus');
        });

        //联系方式菜单
        $('.footer-share').click(function () {
            $('.share-bottom').toggleClass('active-share-bottom');
            return false;
        });

        $('.close-share-bottom').click(function () {
            $('.share-bottom').removeClass('active-share-bottom');
            return false;
        });

        //首位掩藏
        $("header").headroom({
            "tolerance": 5,
            "offset": 20,
            "classes": {
                "initial": "animated",
                "pinned": "swingInX",
                "unpinned": "swingOutX"
            }
        });
        $("footer").headroom({
            "tolerance": 5,
            "offset": 20,
            "classes": {
                "initial": "animated",
                "pinned": "swingBInX",
                "unpinned": "swingBOutX"
            }
        });


        //计算滑动高度已完成翻页
        var viewH, contentH, scrollTop = 0;
        $(window).scroll(function () {
            viewH = $(document).height(),//可见高度
                contentH = $(window).height(),//内容高度
                scrollTop = $(window).scrollTop();//滚动高度
            //console.log(viewH - contentH - scrollTop, scrollTop)
        });
        //滑动切换下一页
        var nowpage = 0;//可以考虑scrollbottom为0
        var $box = $(".box");

        function cutPage() {
            $box.children(".cur").fadeOut();
            $(".timeline").eq(nowpage).addClass("cur").siblings().removeClass("cur");
            $box.children(".cur").fadeIn();
            //$(".box").animate({"top":nowpage*-922+"px"},500);
            $("body").animate({scrollTop: 0}, 500);
        }

        //跳转第一页
        $("#container").click(function () {
            nowpage = 0;
            cutPage();
        });
        //滑动换页
        $box.swipe({
            swipe: function (event, direction, distance, duration, fingerCount) {
                if (direction == "up" && viewH - contentH - scrollTop == 0) {    //到底才能下一页
                    nowpage = nowpage + 1;
                    if (nowpage > 1) {
                        nowpage = 0;
                    }
                    cutPage();
                } else if (direction == "down" && scrollTop == 0) {       //到头才能前一页
                    nowpage = nowpage - 1;
                    if (nowpage < 0) {
                        nowpage = 1;
                    }
                    cutPage();
                }
            }
        });

        //Fullscreen Slider Variables
        //var screen_width = 0;
        //var screen_height = 0;
        //function resize_slider(){
        //    screen_width = $(window).width();
        //    screen_height = $(window).height();
        //
        //    $('.homepage-slider').css({
        //        height: screen_height-110,
        //        width: screen_width
        //    });
        //};
        //resize_slider();
        //$(window).resize(resize_slider);

        var time=6;
        var $elem,isPause,tick,percentTime;
        $("#owl-demo").owlCarousel({
            slideSpeed : 500,
            paginationSpeed : 500,
            singleItem : true,
            pagination:false,
            afterInit : progressBar,
            afterMove : moved,
            startDragging : pauseOnDragging
        });
        function progressBar(elem){
           $elem=elem;
            start();
        }
        function start(){
            percentTime=0;
            isPause = false;
            tick = setInterval(interval,10);
        }
        function interval(){
            if(isPause===false){
                percentTime+=1/time;
            }
            if(percentTime>=100){
                $elem.trigger('owl.next')
            }
        }
        function pauseOnDragging(){
            isPause=true;
        }
        function moved(){
            clearTimeout(tick);
            start();
        }
        $elem.on('mouseover', function () {
            isPause=true;
        })
        $elem.on('mouseout', function () {
            isPause=false;
        })

    })
}(jQuery));