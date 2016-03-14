/**
 * Created by baiyang on 2016/2/26.
 */
//$(document).ready(function(){
//    $("#timings-demo-btn").toggle(
//        function(){
//            $(this).next("div#timings-demo").addClass("timings-demo-hover");
//        },function(){
//            $(this).next("div#timings-demo").removeClass("timings-demo-hover");
//        });
//});
$(function(){
    var time = 7;    //进度条时间，以秒为单位，越小越快

    var $progressBar, $bar, $elem, isPause, tick, percentTime;

    $('#owl-demo').owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 500,
        singleItem: true,
        afterInit: progressBar,
        afterMove: moved,
        startDragging: pauseOnDragging
    });

    function progressBar(elem){
        $elem = elem;
        buildProgressBar();
        start();
    }

    function buildProgressBar(){
        $progressBar = $('<div>',{
            id:'progressBar'
        });
        $bar = $('<div>',{
            id:'bar'
        });
        $progressBar.append($bar).insertAfter($elem.children().eq(0));
    }

    function start(){
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval(){
        if(isPause === false){
            percentTime += 1 / time;
            $bar.css({
                width: percentTime+'%'
            });
            if(percentTime >= 100){
                $elem.trigger('owl.next')
            }
        }
    }

    function pauseOnDragging(){
        isPause = true;
    }

    function moved(){
        clearTimeout(tick);
        start();
    }

    $elem.on('mouseover',function(){
        isPause = true;
    })

    $elem.on('mouseout',function(){
        isPause = false;
    });


    $("header").headroom({
        "tolerance": 5,
        "offset": 205,
        "classes": {
            "initial": "animated",
            "pinned": "swingInX",
            "unpinned": "swingOutX"
        }
    });

});
