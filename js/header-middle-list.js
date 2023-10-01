//이전 , 다음 버튼을 눌렀을 때 보이는 요소의 이전 , 다음 요소가 보이고 이전 , 다음 요소의 length가 0이면 처음과 마지막으로 넘어간다.
$(function(){
    $('.prev').click(function(){
        var current = $('.listbox:visible');
        var prev = current.prev('.listbox');
        if (prev.length === 0) {
            prev = $('.listbox:last');
        }
        current.hide();
        prev.show();
    });

    $('.next').click(function(){
        var current = $('.listbox:visible');
        var next = current.next('.listbox');
        if (next.length === 0) {
            next = $('.listbox:first');
        }
        current.hide();
        next.show();
    });
});