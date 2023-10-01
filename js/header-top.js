//헤더 > 탑 > 오른쪽 > 스크립트
$(function(){
    $('#header-Top-Right > li').mouseenter(function(){
        $(this).find('#mypage').stop().show();
    }).mouseleave(function(){
        $('#mypage').stop().hide();
    });
});