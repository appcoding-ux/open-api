//스크롤 이벤트로 일정 스크롤 위치에 도달하면 슬라이더 - 오른쪽 컨텐츠가 position:fixed가 적용되는 스크립트
$(function(){
    $(window).scroll(function() {
        var h = $(window).scrollTop();

        if(h > 475){
            $('#Slide-Right').css({'position':'fixed','left':'50%','top':'30px','z-index':'1000'});
        }else if(h <= 475){
            $('#Slide-Right').css({'position':'absolute','left':'600px','top':'135px'})
        }
    });
});

//5초 마다 다음 콘텐츠로 넘어가는 스크립트
function slideRightBottom(){
    var current = $('.slide-right-bottom-box:visible');
    var next = current.next('.slide-right-bottom-box');
    if (next.length === 0) {
        next = $('.slide-right-bottom-box:first');
    }
    current.hide();
    next.show();
};

setInterval(slideRightBottom,5000);