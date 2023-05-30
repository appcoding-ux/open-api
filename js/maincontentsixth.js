$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"자기계발",size:3 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = $('.sixthcontent-box-book-img');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".sixthcontent-box-book-img").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".sixthcontent-box-book-img-title > a ").eq(i).text(data.documents[i].title);
                
        $(".sixthcontent-box-book-img-author").eq(i).text(data.documents[i].authors + ' | ' + data.documents[i].publisher);

        var str = data.documents[i].contents;
        str2 = str.substring(0,60);
        $('.sixthcontent-box-book-img-explanation').eq(i).text(str2);
        
    }
        
});
//첫번째 박스 제외하고 나머지 박스는 hide
//콘텐츠에 마우스가 올라가면 이전&다음 버튼 노출 , 마우스가 벗어나면 버튼 숨김
$(function(){
    $('.sixthcontent-box').not(":first").hide();


    $('#sixthcontent').hover(function(){
        $('.sixthcontent-prev').stop().show();
        $('.sixthcontent-next').stop().show();
    }, function(){
        $('.sixthcontent-prev').stop().hide();
        $('.sixthcontent-next').stop().hide();
    });
});

// 이전&다음 버튼을 클릭했을 때 이전&다음 요소가 보이게 하고 밑에 있는 li의 썸네일의 border css 적용
$(function(){
    $('.sixthcontent-prev').click(function(){
        var current = $('.sixthcontent-box:visible');
        var prev = current.prev('.sixthcontent-box');
        if (prev.length === 0) {
            prev = $('.sixthcontent-box:last');
        }
        current.hide();
        prev.show();

        var index = prev.index();
        if (index === $('.sixthcontent-box').length) {
            index = 0;
        }
        $('#sixthcontent-mouse li a .sixthcontent-somenail').css("border","none");
        $('#sixthcontent-mouse li a:eq(' + (index-1) + ') .sixthcontent-somenail').css("border","4px solid #196ab3");
    });

    $('.sixthcontent-next').click(function(){
        var current = $('.sixthcontent-box:visible');
        var next = current.next('.sixthcontent-box');
        if (next.length === 0) {
            next = $('.sixthcontent-box:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        if (index === $('.sixthcontent-box').length) {
            index = 0;
        }
        $('#sixthcontent-mouse li a .sixthcontent-somenail').css("border","none");
        $('#sixthcontent-mouse li a:eq(' + (index-1) + ') .sixthcontent-somenail').css("border","4px solid #196ab3");
    });
});
// li의 마우스가 올라갔을 때 li의 부모의 인덱스를 변수에 담고 변수를 이용해 콘텐츠의 인덱스번호로 노출시킨다.
$(function(){
    $('#sixthcontent-mouse li a').mouseover(function() {
        var index = $(this).parent().index();
        $('.sixthcontent-box').stop().hide();
        $('.sixthcontent-box:eq(' + index + ')').stop().show();
        $('#sixthcontent-mouse li a .sixthcontent-somenail').css("border","none");
        $(this).find('.sixthcontent-somenail').css("border","4px solid #196ab3");
    });
});