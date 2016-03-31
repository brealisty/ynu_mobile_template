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
            "offset": 5,
            "classes": {
                "initial": "animated",
                "pinned": "swingInX",
                "unpinned": "swingOutX"
            }
        });
       /* $("#footer").headroom({
            "tolerance": 5,
            "offset": 5,
            "classes": {
                "initial": "animated",
                "pinned": "swingInX",
                "unpinned": "swingOutX"
            }
        });*/


    })
}(jQuery));
