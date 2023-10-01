// 일정 시간 마다 다음 컨텐츠가 보여지는 스크립트
function slideLeft(){
    var current = $('.slide-left-top-box:visible');
    var prev = current.prev('.slide-left-top-box');
    if (prev.length === 0) {
        prev = $('.slide-left-top-box:last');
    }
    current.hide();
    prev.show();
};

setInterval(slideLeft, 5000);
// div에 마우스를 올렸을 때 보여지는 box에서 이미지를 찾아서 slideDown를 하고 마우스가 벗어나면 이미지를 slideUp하는 스크립트
$(function(){
    $('#Slide-Left-Top > div').mouseover(function(){
        $('.slide-left-top-box:visible').find('.slide-big-img').stop().slideDown();
    }).mouseout(function(){
        $('.slide-big-img').stop().slideUp();
    });
});
// 일정 시간 마다 다음 컨텐츠가 보여지는 스크립트
function slideLeftBottom(){
    var current = $('.slide-left-bottom-box:visible');
    var next = current.next('.slide-left-bottom-box');
    if (next.length === 0) {
        next = $('.slide-left-bottom-box:first');
    }
    current.hide();
    next.show();
};

setInterval(slideLeftBottom,4000);