$(function(){
    var box = $('.first-right-box').length;

    var result = Math.floor(Math.random()*box);

    $('#content-first-right img').hide().eq(result).stop().show();
});

$(function(){
    $('#content-first-left li em').not(":first").hide();

    $('#content-first-left li img').not(":first").hide();

    $('#content-first-left li a').hover(function(){
        $('#content-first-left li em').stop().hide();

        $('#content-first-left li img').stop().hide();

        $('#content-first-left li a').css({"color":"#666","background-color":"#fff","font-weight":"normal"});

        $(this).find("em").stop().show();

        $(this).css({"font-weight":"bold","color":"#333","background-color":"#eee"});

        $(this).find("img").stop().show();

    }, function(){
        $(this).css({"font-weight":"bold","color":"#333","background-color":"#eee"});
    });
});