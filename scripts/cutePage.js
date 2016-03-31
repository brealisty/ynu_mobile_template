/**
 * Created by baiyang on 2016/3/20.
 */
/**
 * Created by baiyang on 2016/3/1.
 */
(function ($) {
    $(document).ready(function () {
        //滑动切换下一页
        var $wrapper = $("#wrapper");
        var nowpage = 0;//可以考虑scrollbottom为0
        $(".content").height($("#container").height()+$(".decoration").height()+$wrapper.height());

        function cutPage() {
            $wrapper.children(".cur").fadeOut();
            $(".timeline").eq(nowpage).addClass("cur").siblings().removeClass("cur");
            $wrapper.children(".cur").fadeIn();
            //$(".box").animate({"top":nowpage*-922+"px"},500);
            $("body").animate({scrollTop: 0}, 500);
        }

        //跳转第一页
        $("#container").click(function () {
            nowpage = 0;
            cutPage();
        });
        //计算滑动高度已完成翻页


        refresher.init({
            id: "wrapper",//<------------------------------------------------------------------------------------┐
            pullDownAction: Refresh,
            pullUpAction: Load
        });
        function Refresh() {
            setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
                nowpage = nowpage - 1;
                if (nowpage < 0) {
                    nowpage = 1;
                }
                cutPage();
                wrapper.refresh();/****remember to refresh after  action completed！ ---yourId.refresh(); ----| ****/
            }, 1000);

        }
        function Load() {
            setTimeout(function () {// <-- Simulate network congestion, remove setTimeout from production!
                nowpage = nowpage + 1;
                if (nowpage > 1) {
                    nowpage = 0;
                }
                cutPage();
                wrapper.refresh();/****remember to refresh after action completed！！！   ---id.refresh(); --- ****/
            }, 1000);
        }
        //
        //var viewH, contentH, scrollTop = 0;
        //$(window).scroll(function () {
        //    viewH = $(document).height(),//可见高度
        //        contentH = $(window).height(),//内容高度
        //        scrollTop = $(window).scrollTop();//滚动高度
        //    console.log(viewH , contentH , scrollTop)
        //    $box.swipe({
        //        swipe: function (event, direction, distance, duration, fingerCount) {
        //            if (direction == "up" && viewH - contentH - scrollTop == 0) {    //到底才能下一页
        //                nowpage = nowpage + 1;
        //                if (nowpage > 1) {
        //                    nowpage = 0;
        //                }
        //                cutPage();
        //            } else if (direction == "down" && scrollTop == 0) {       //到头才能前一页
        //                nowpage = nowpage - 1;
        //                if (nowpage < 0) {
        //                    nowpage = 1;
        //                }
        //                cutPage();
        //            }
        //        }
        //    });
        //});

    })
}(jQuery));