//첫번째 박스 제외하고 나머지는 모두 안보이게 하고, 콘텐츠에 마우스를 올렸을 때 이전&다음 버튼을 보이게 하고 마우스가 벗어났을 때 버튼을 숨긴다.
$(function(){
    $('.sevencontent-box').not(":first").hide();

    $('#sevencontent').hover(function(){
        $('.sevencontent-prev').stop().show();
        $('.sevencontent-next').stop().show();
    }, function(){
        $('.sevencontent-prev').stop().hide();
        $('.sevencontent-next').stop().hide();
    });
});
// 이전&다음 버튼을 클릭했을 때 이전&다음 콘텐츠보이게 하고 strong의 text 변경
$(function(){
    $('.sevencontent-prev').click(function(){
        var current = $('.sevencontent-box:visible');
        var prev = current.prev('.sevencontent-box');
        if (prev.length === 0) {
            prev = $('.sevencontent-box:last');
        }
        var index = $('.sevencontent-box').index(prev);

        if(index == 0){
            $('#sevencontent-number > strong').text("1");
        }else if(index == 1){
            $('#sevencontent-number > strong').text("2");
        }
        current.hide();
        prev.show();
    });

    $('.sevencontent-next').click(function(){
        var current = $('.sevencontent-box:visible');
        var next = current.next('.sevencontent-box');
        if (next.length === 0) {
            next = $('.sevencontent-box:first');
        }
        var index = $('.sevencontent-box').index(next);

        if(index == 0){
            $('#sevencontent-number > strong').text("1");
        }else if(index == 1){
            $('#sevencontent-number > strong').text("2");
        }
        
        current.hide();
        next.show();
    });
});