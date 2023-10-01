//빠른분야찾기를 마우스엔터하면 그 하위 요소인 <카테고리 헤더> 슬라이드다운
$(function(){
    $('#header-Bottom > h2').mouseenter(function(){
        $(this).find('#Category-header').stop().slideDown(400);
    }).mouseleave(function(){
        $('#Category-header').stop().slideUp(400);
    });
});
// 빠른분야찾기 하위 요소 콘텐츠 script
$(function(){
    $('#Category-header > li').mouseenter(function(){
        $(this).find('.categoryChild').stop().show();
    }).mouseleave(function(){
        $('.categoryChild').stop().hide();
    });
});

//카테고리의 하위 콘텐츠를 마우스엔터하면 부모요소 li의 background-color와 글자색 변경
$(function(){
    $('#Category-header > li > div').mouseenter(function(){
        $(this).parent().css('background-color','#0080ff','color','#fff');
    }).mouseleave(function(){
        $(this).parent().css('background-color','#fff' , 'color','#666');
    });
});