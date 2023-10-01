//두번째 콘텐츠 도서 12개
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"웹소설",size:12 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('second-img-box');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".second-img-box").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".second-text-title > a").eq(i).text(data.documents[i].title);
                
        $(".second-text-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        $(".second-text-price").eq(i).text(data.documents[i].price + '원');
        
    }
        
    });
//두번째 콘텐츠 왼쪽에 마우스를 올리면 이전 , 다음 버튼이 보이고 마우스가 벗어나면 안보인다.
$(function(){

    $('#secondcontent-left').hover(function(){
        $('.secondcontent-prev').stop().show();
        $('.secondcontent-next').stop().show();
    }, function(){
        $('.secondcontent-prev').stop().hide();
        $('.secondcontent-next').stop().hide();
    });
});
//이전 , 다음 버튼을 클릭했을 때 보이는 요소의 이전, 다음 콘텐츠를 변수로 설정해 보이던 요소는 숨기고 이전 , 다음 요소를 보이게 한다.
$(function(){
    $('.secondcontent-prev').click(function(){
        var current = $('.secondcontent-left-img:visible');
        var prev = current.prev('.secondcontent-left-img');
        if (prev.length === 0) {
            prev = $('.secondcontent-left-img:last');
        }
        var index = $('.secondcontent-left-img').index(prev);

        if(index == 0){
            $('#secondcontent-number > strong').text("1");
        }else if(index == 1){
            $('#secondcontent-number > strong').text("2");
        }else if(index == 2){
            $('#secondcontent-number > strong').text("3");
        }
        current.hide();
        prev.show();
    });

    $('.secondcontent-next').click(function(){
        var current = $('.secondcontent-left-img:visible');
        var next = current.next('.secondcontent-left-img');
        if (next.length === 0) {
            next = $('.secondcontent-left-img:first');
        }
        var index = $('.secondcontent-left-img').index(next);

        if(index == 0){
            $('#secondcontent-number > strong').text("1");
        }else if(index == 1){
            $('#secondcontent-number > strong').text("2");
        }else if(index == 2){
            $('#secondcontent-number > strong').text("3");
        }
        current.hide();
        next.show();
    });
});
