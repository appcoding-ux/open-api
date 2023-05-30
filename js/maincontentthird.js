//세번째 콘텐츠 도서 12개
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"현대소설",size:12 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('third-img-box');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".third-img-box").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".third-text-title > a").eq(i).text(data.documents[i].title);
                
        $(".third-text-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        $(".third-text-price").eq(i).text(data.documents[i].price + '원');
        
    }
        
    });
//세번째 콘텐츠 왼쪽에 마우스를 올리면 이전 , 다음 버튼이 보이고 마우스가 벗어나면 숨긴다.
$(function(){

    $('#thirdcontent-left').hover(function(){
        $('.thirdcontent-left-prev').stop().show();
        $('.thirdcontent-left-next').stop().show();
    }, function(){
        $('.thirdcontent-left-prev').stop().hide();
        $('.thirdcontent-left-next').stop().hide();
    });
});
//세번째 콘텐츠 오른쪽에 마우스를 올리면 이전 , 다음 버튼이 보이고 마우스가 벗어나면 숨긴다.
$(function(){

    $('#thirdcontent-right').hover(function(){
        $('.thirdcontent-right-prev').stop().show();
        $('.thirdcontent-right-next').stop().show();
    }, function(){
        $('.thirdcontent-right-prev').stop().hide();
        $('.thirdcontent-right-next').stop().hide();
    });
});

//이전 , 다음 버튼을 클릭했을 때 보이는 요소의 이전 , 다음 요소를 변수로 설정해서 보이는 요소를 숨기고 이전 , 다음 콘텐츠를 보이게 한다.
$(function(){
    $('.thirdcontent-left-prev').click(function(){
        var current = $('.thirdcontent-left-img:visible');
        var prev = current.prev('.thirdcontent-left-img');
        if (prev.length === 0) {
            prev = $('.thirdcontent-left-img:last');
        }
        var index = $('.thirdcontent-left-img').index(prev);

        if(index == 0){
            $('#thirdcontent-left-number > strong').text("1");
        }else if(index == 1){
            $('#thirdcontent-left-number > strong').text("2");
        }else if(index == 2){
            $('#thirdcontent-left-number > strong').text("3");
        }
        current.hide();
        prev.show();
    });

    $('.thirdcontent-left-next').click(function(){
        var current = $('.thirdcontent-left-img:visible');
        var next = current.next('.thirdcontent-left-img');
        if (next.length === 0) {
            next = $('.thirdcontent-left-img:first');
        }
        var index = $('.thirdcontent-left-img').index(next);

        if(index == 0){
            $('#thirdcontent-left-number > strong').text("1");
        }else if(index == 1){
            $('#thirdcontent-left-number > strong').text("2");
        }else if(index == 2){
            $('#thirdcontent-left-number > strong').text("3");
        }
        current.hide();
        next.show();
    });
});
//오른쪽 이전 , 다음 버튼
$(function(){
    $('.thirdcontent-right-prev').click(function(){
        var current = $('.thirdcontent-right-box:visible');
        var prev = current.prev('.thirdcontent-right-box');
        if (prev.length === 0) {
            prev = $('.thirdcontent-right-box:last');
        }
        var index = $('.thirdcontent-right-box').index(prev);

        if(index == 0){
            $('#thirdcontent-right-number > strong').text("1");
        }else if(index == 1){
            $('#thirdcontent-right-number > strong').text("2");
        }
        current.hide();
        prev.show();
    });

    $('.thirdcontent-right-next').click(function(){
        var current = $('.thirdcontent-right-box:visible');
        var next = current.next('.thirdcontent-right-box');
        if (next.length === 0) {
            next = $('.thirdcontent-right-box:first');
        }
        var index = $('.thirdcontent-right-box').index(next);

        if(index == 0){
            $('#thirdcontent-right-number > strong').text("1");
        }else if(index == 1){
            $('#thirdcontent-right-number > strong').text("2");
        }
        current.hide();
        next.show();
    });
});
