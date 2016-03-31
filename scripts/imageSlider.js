/**
 * Created by baiyang on 2016/3/20.
 */
/**
 * Created by baiyang on 2016/3/1.
 */
(function ($) {
    $(document).ready(function () {
//images slider
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