$(function(){
    $('.bar-click:eq(0)').click(function(e){
        var h1 = 1740
        $('html, body').animate({ scrollTop: h1 }, 'normal');

        e.preventDefault();

        $('.bar-click').css('background-color','#f8f8f8');

        $('.bar-txt').css('color','#333');

        $(this).find('.bar-txt').css('color','#fff');

        $(this).css({"background-color":"#333"});

        $(this).find(".bar-txt").css('color','#fff');
    });
    $('.bar-click:eq(1)').click(function(e){
        var h2 = 12480
        $('html, body').animate({ scrollTop: h2 }, 'normal');

        e.preventDefault();

        $('.bar-click').css('background-color','#f8f8f8');

        $('.bar-txt').css('color','#333');

        $(this).find('.bar-txt').css('color','#fff');

        $(this).css({"background-color":"#333"});

        $(this).find(".bar-txt").css('color','#fff');
    })
    $('.bar-click:eq(2)').click(function(e){
        var h3 = 16400
        $('html, body').animate({ scrollTop: h3 }, 'normal');

        e.preventDefault();

        $('.bar-click').css('background-color','#f8f8f8');

        $('.bar-txt').css('color','#333');

        $(this).find('.bar-txt').css('color','#fff');

        $(this).css({"background-color":"#333"});

        $(this).find(".bar-txt").css('color','#fff');
    })
});

$(function(){
    $(window).scroll(function() {
        var h = $(window).scrollTop();

        if(h > 1713){
            $('#third-nav').css({"position":"fixed","z-index":"10000"});

            $('.third-nav-title').css({'position':'static','height':'40px','border-bottom':'solid 1px #ebebeb'});
        }else if (h <= 1713){
            $('#third-nav').css({"position":"absolute","top":"0","left":"0","right":"0"});

            $('.third-nav-title').css({'position':'absolute','height':'0'});
        }
    });
});