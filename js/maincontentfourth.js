//네번째 콘텐츠의 메인 글자를 클릭했을 때 그 하위 콘텐츠가 보이고 메인 글자의 background-color와 글자 색 , border의 css를 바꾼다.
$(function(){
    $('#fourthcontent-main h2 a').click(function(e){
        e.preventDefault();
        $('#fourthcontent-main h2 a').css({'background-color':'#f8f8f8','border-bottom':'1px solid #d8d8d8'});
        $(this).css({"background-color":"#fff","border-bottom":"none"});

        var index = $('#fourthcontent-main h2 a').index(this);
        $('.fourthcontent-main-content').hide().eq(index).show();
    });
});


/* 네번째 도서 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"로맨스판타지",size:15 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('fourth-img-box');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".fourth-img-box").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-title > a").eq(i).text(data.documents[i].title);
                
        $(".fourth-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        $(".fourth-price").eq(i).text(data.documents[i].price + '원(10%+5%P)');
        
    }
        
    });

//도서
$(function(){

    $('#fourthcontent-book-top').hover(function(){
        $('.fourthcontent-prev').stop().show();
        $('.fourthcontent-next').stop().show();
    }, function(){
        $('.fourthcontent-prev').stop().hide();
        $('.fourthcontent-next').stop().hide();
    });
});
//이전 , 다음 버튼 클릭 시 보이는 요소의 이전 , 다음 요소를 변수로 설정하고 인덱스를 변수로 설정해서 strong의 글자를 바꾸는 스크립트
$(function(){
    $('.fourthcontent-prev').click(function(){
        var current = $('#fourthcontent-book-top ul:visible');
        var prev = current.prev('#fourthcontent-book-top ul');
        if (prev.length === 0) {
            prev = $('#fourthcontent-book-top ul:last');
        }
        var index = $('#fourthcontent-book-top ul').index(prev);

        if(index == 0){
            $('#fourthcontent-number > strong').text("1");
            $('#fourthcontent-book-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-book-title li').eq(0).css({"color":"#333","font-weight":"bold"});
        }else if(index == 1){
            $('#fourthcontent-number > strong').text("2");
        }else if(index == 2){
            $('#fourthcontent-number > strong').text("3");
            $('#fourthcontent-book-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-book-title li').eq(1).css({"color":"#333","font-weight":"bold"});
        }else if(index == 3){
            $('#fourthcontent-number > strong').text("4");
            $('#fourthcontent-book-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-book-title li').eq(2).css({"color":"#333","font-weight":"bold"});
        }else if(index == 4){
            $('#fourthcontent-number > strong').text("5");
        }
        current.hide();
        prev.show();
    });

    $('.fourthcontent-next').click(function(){
        var current = $('#fourthcontent-book-top ul:visible');
        var next = current.next('#fourthcontent-book-top ul');
        if (next.length === 0) {
            next = $('#fourthcontent-book-top ul:first');
        }
        var index = $('#fourthcontent-book-top ul').index(next);

        if(index == 0){
            $('#fourthcontent-number > strong').text("1");
            $('#fourthcontent-book-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-book-title li').eq(0).css({"color":"#333","font-weight":"bold"});
        }else if(index == 1){
            $('#fourthcontent-number > strong').text("2");
        }else if(index == 2){
            $('#fourthcontent-number > strong').text("3");
            $('#fourthcontent-book-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-book-title li').eq(1).css({"color":"#333","font-weight":"bold"});
        }else if(index == 3){
            $('#fourthcontent-number > strong').text("4");
            $('#fourthcontent-book-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-book-title li').eq(2).css({"color":"#333","font-weight":"bold"});
        }else if(index == 4){
            $('#fourthcontent-number > strong').text("5");
        }
        
        current.hide();
        next.show();
    });
});
//li를 클릭했을 때 li의 인덱스에 맞는 콘텐츠를 보여주고 li의 css를 바꾸는 스크립트
$(function(){
    $('#fourthcontent-book-title li').click(function(){
        var topindex = $(this).index();
        if(topindex == 0){
            $('#fourthcontent-book-title li').css({"color":"#999","font-weight":"normal"});
            $(this).css({"color":"#333","font-weight":"bold"});
            $('#fourthcontent-book-top > ul').hide();
            $('#fourthcontent-book-top > ul').eq(0).stop().show();
            $('#fourthcontent-number > strong').text("1");
        }else if(topindex == 1){
            $('#fourthcontent-book-title li').css({"color":"#999","font-weight":"normal"});
            $(this).css({"color":"#333","font-weight":"bold"});
            $('#fourthcontent-book-top > ul').hide();
            $('#fourthcontent-book-top > ul').eq(2).stop().show();
            $('#fourthcontent-number > strong').text("3");
        }else if(topindex == 2){
            $('#fourthcontent-book-title li').css({"color":"#999","font-weight":"normal"});
            $(this).css({"color":"#333","font-weight":"bold"});
            $('#fourthcontent-book-top > ul').hide();
            $('#fourthcontent-book-top > ul').eq(3).stop().show();
            $('#fourthcontent-number > strong').text("4");
        }
    });
});

//도서 > 밑 
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"어린이", size:4 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = $('#fourthcontent-book-bottom-img li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $("#fourthcontent-book-bottom-img li").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $("#fourthcontent-book-bottom-img li p > a").eq(i).text(data.documents[i].title);
        
    }
        
    });


/* 네번째 중고샵 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"환경",size:18 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('fourth-shop-img-box');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".fourth-shop-img-box").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-shop-title > a").eq(i).text(data.documents[i].title);

        $(".fourth-shop-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        $(".fourth-shop-price").eq(i).text(data.documents[i].price + "원(새상품 대비 35%할인)");
        
    }
        
    });
//li를 클릭했을 때 li의 인덱스에 맞는 콘텐츠를 보여주고 li의 css를 바꾸는 스크립트
$(function(){
    $('#fourthcontent-shop-title li').click(function(){
        var topindex = $(this).index();
        if(topindex == 0){
            $('#fourthcontent-shop-title li').css({"color":"#999","font-weight":"normal"});
            $(this).css({"color":"#333","font-weight":"bold"});
            $('#fourthcontent-shop-top > ul').hide();
            $('#fourthcontent-shop-top > ul').eq(0).stop().show();
            $('#fourthcontent-shop-number > strong').text("1");
        }else if(topindex == 1){
            $('#fourthcontent-shop-title li').css({"color":"#999","font-weight":"normal"});
            $(this).css({"color":"#333","font-weight":"bold"});
            $('#fourthcontent-shop-top > ul').hide();
            $('#fourthcontent-shop-top > ul').eq(2).stop().show();
            $('#fourthcontent-shop-number > strong').text("3");
        }else if(topindex == 2){
            $('#fourthcontent-shop-title li').css({"color":"#999","font-weight":"normal"});
            $(this).css({"color":"#333","font-weight":"bold"});
            $('#fourthcontent-shop-top > ul').hide();
            $('#fourthcontent-shop-top > ul').eq(4).stop().show();
            $('#fourthcontent-shop-number > strong').text("5");
        }
    });
});

$(function(){

    $('#fourthcontent-shop-top').hover(function(){
        $('.fourthcontent-shop-prev').stop().show();
        $('.fourthcontent-shop-next').stop().show();
    }, function(){
        $('.fourthcontent-shop-prev').stop().hide();
        $('.fourthcontent-shop-next').stop().hide();
    });
});
//이전 , 다음 버튼 클릭 시 보이는 요소의 이전 , 다음 요소를 변수로 설정하고 인덱스를 변수로 설정해서 strong의 글자를 바꾸는 스크립트
$(function(){
    $('.fourthcontent-shop-prev').click(function(){
        var current = $('#fourthcontent-shop-top ul:visible');
        var prev = current.prev('#fourthcontent-shop-top ul');
        if (prev.length === 0) {
            prev = $('#fourthcontent-shop-top ul:last');
        }
        var index = $('#fourthcontent-shop-top ul').index(prev);

        if(index == 0){
            $('#fourthcontent-shop-number > strong').text("1");
            $('#fourthcontent-shop-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-shop-title li').eq(0).css({"color":"#333","font-weight":"bold"});
        }else if(index == 1){
            $('#fourthcontent-shop-number > strong').text("2");
        }else if(index == 2){
            $('#fourthcontent-shop-number > strong').text("3");
            $('#fourthcontent-shop-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-shop-title li').eq(1).css({"color":"#333","font-weight":"bold"});
        }else if(index == 3){
            $('#fourthcontent-shop-number > strong').text("4");
        }else if(index == 4){
            $('#fourthcontent-shop-number > strong').text("5");
            $('#fourthcontent-shop-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-shop-title li').eq(2).css({"color":"#333","font-weight":"bold"});
        }else if(index == 5){
            $('#fourthcontent-shop-number > strong').text("6");
        }
        current.hide();
        prev.show();
    });
    
    $('.fourthcontent-shop-next').click(function(){
        var current = $('#fourthcontent-shop-top ul:visible');
        var next = current.next('#fourthcontent-shop-top ul');
        if (next.length === 0) {
            next = $('#fourthcontent-shop-top ul:first');
        }
        var index = $('#fourthcontent-shop-top ul').index(next);
    
        if(index == 0){
            $('#fourthcontent-shop-number > strong').text("1");
            $('#fourthcontent-shop-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-shop-title li').eq(0).css({"color":"#333","font-weight":"bold"});
        }else if(index == 1){
            $('#fourthcontent-shop-number > strong').text("2");
        }else if(index == 2){
            $('#fourthcontent-shop-number > strong').text("3");
            $('#fourthcontent-shop-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-shop-title li').eq(1).css({"color":"#333","font-weight":"bold"});
        }else if(index == 3){
            $('#fourthcontent-shop-number > strong').text("4");    
        }else if(index == 4){
            $('#fourthcontent-shop-number > strong').text("5");
            $('#fourthcontent-shop-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-shop-title li').eq(2).css({"color":"#333","font-weight":"bold"});
        }else if(index == 5){
            $('#fourthcontent-shop-number > strong').text("6");
        }
            
        current.hide();
        next.show();
    });
});
//중고샵 > 밑 > 왼쪽
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"지구",size:2 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('shop-bottom-box');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".shop-bottom-box").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".shop-bottom-box > p > a").eq(i).text(data.documents[i].title)
        
    }
        
    });


/*              네번째 eBook               */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"판타지",size:30 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('fourth-eBook-img-box');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".fourth-eBook-img-box").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-eBook-title > a").eq(i).text(data.documents[i].title);

        var str = data.documents[i].contents;
        str2 = str.substring(0,20);
        $(".fourth-eBook-contents").eq(i).text(str2);

        $(".fourth-eBook-price").eq(i).text(data.documents[i].price + "원");
        
    }
        
    });
//li를 클릭했을 때 li의 인덱스에 맞는 콘텐츠를 보여주고 li의 css를 바꾸는 스크립트
$(function(){
    $('#fourthcontent-eBook-title li').click(function(){
        var topindex = $(this).index();
        if(topindex == 0){
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $(this).css({"color":"#333","font-weight":"bold"});
            $('#fourthcontent-eBook-top > ul').hide();
            $('#fourthcontent-eBook-top > ul').eq(0).stop().show();
            $('#fourthcontent-eBook-number > strong').text("1");
        }else if(topindex == 1){
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $(this).css({"color":"#333","font-weight":"bold"});
            $('#fourthcontent-eBook-top > ul').hide();
            $('#fourthcontent-eBook-top > ul').eq(2).stop().show();
            $('#fourthcontent-eBook-number > strong').text("3");
        }else if(topindex == 2){
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $(this).css({"color":"#333","font-weight":"bold"});
            $('#fourthcontent-eBook-top > ul').hide();
            $('#fourthcontent-eBook-top > ul').eq(4).stop().show();
            $('#fourthcontent-eBook-number > strong').text("5");
        }else if(topindex == 3){
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $(this).css({"color":"#333","font-weight":"bold"});
            $('#fourthcontent-eBook-top > ul').hide();
            $('#fourthcontent-eBook-top > ul').eq(6).stop().show();
            $('#fourthcontent-eBook-number > strong').text("7");
        }else if(topindex == 4){
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $(this).css({"color":"#333","font-weight":"bold"});
            $('#fourthcontent-eBook-top > ul').hide();
            $('#fourthcontent-eBook-top > ul').eq(8).stop().show();
            $('#fourthcontent-eBook-number > strong').text("9");
        }
    });
});
//콘텐츠에 마우스가 올라가면 이전 , 다음 버튼이 보이고 마우스가 벗어나면 버튼을 숨긴다.
$(function(){

    $('#fourthcontent-eBook-top').hover(function(){
        $('.fourthcontent-eBook-prev').stop().show();
        $('.fourthcontent-eBook-next').stop().show();
    }, function(){
        $('.fourthcontent-eBook-prev').stop().hide();
        $('.fourthcontent-eBook-next').stop().hide();
    });
});
//이전 , 다음 버튼 클릭 시 보이는 요소의 이전 , 다음 요소를 변수로 설정하고 인덱스를 변수로 설정해서 strong의 글자를 바꾸는 스크립트
$(function(){
    $('.fourthcontent-eBook-prev').click(function(){
        var current = $('#fourthcontent-eBook-top ul:visible');
        var prev = current.prev('#fourthcontent-eBook-top ul');
        if (prev.length === 0) {
            prev = $('#fourthcontent-eBook-top ul:last');
        }
        var index = $('#fourthcontent-eBook-top ul').index(prev);

        if(index == 0){
            $('#fourthcontent-eBook-number > strong').text("1");
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-eBook-title li').eq(0).css({"color":"#333","font-weight":"bold"});
        }else if(index == 1){
            $('#fourthcontent-eBook-number > strong').text("2");
        }else if(index == 2){
            $('#fourthcontent-eBook-number > strong').text("3");
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-eBook-title li').eq(1).css({"color":"#333","font-weight":"bold"});
        }else if(index == 3){
            $('#fourthcontent-eBook-number > strong').text("4");
        }else if(index == 4){
            $('#fourthcontent-eBook-number > strong').text("5");
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-eBook-title li').eq(2).css({"color":"#333","font-weight":"bold"});
        }else if(index == 5){
            $('#fourthcontent-eBook-number > strong').text("6");
        }else if(index == 6){
            $('#fourthcontent-eBook-number > strong').text("7");
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-eBook-title li').eq(3).css({"color":"#333","font-weight":"bold"});
        }else if(index == 7){
            $('#fourthcontent-eBook-number > strong').text("8");
        }else if(index == 8){
            $('#fourthcontent-eBook-number > strong').text("9");
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-eBook-title li').eq(4).css({"color":"#333","font-weight":"bold"});
        }else if(index == 9){
            $('#fourthcontent-eBook-number > strong').text("10");
        }
        current.hide();
        prev.show();
    });
    
    $('.fourthcontent-eBook-next').click(function(){
        var current = $('#fourthcontent-eBook-top ul:visible');
        var next = current.next('#fourthcontent-eBook-top ul');
        if (next.length === 0) {
            next = $('#fourthcontent-eBook-top ul:first');
        }
        var index = $('#fourthcontent-eBook-top ul').index(next);
    
        if(index == 0){
            $('#fourthcontent-eBook-number > strong').text("1");
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-eBook-title li').eq(0).css({"color":"#333","font-weight":"bold"});
        }else if(index == 1){
            $('#fourthcontent-eBook-number > strong').text("2");
        }else if(index == 2){
            $('#fourthcontent-eBook-number > strong').text("3");
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-eBook-title li').eq(1).css({"color":"#333","font-weight":"bold"});
        }else if(index == 3){
            $('#fourthcontent-eBook-number > strong').text("4");    
        }else if(index == 4){
            $('#fourthcontent-eBook-number > strong').text("5");
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-eBook-title li').eq(2).css({"color":"#333","font-weight":"bold"});
        }else if(index == 5){
            $('#fourthcontent-eBook-number > strong').text("6");
        }else if(index == 6){
            $('#fourthcontent-eBook-number > strong').text("7");
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-eBook-title li').eq(3).css({"color":"#333","font-weight":"bold"});
        }else if(index == 7){
            $('#fourthcontent-eBook-number > strong').text("8");
        }else if(index == 8){
            $('#fourthcontent-eBook-number > strong').text("9");
            $('#fourthcontent-eBook-title li').css({"color":"#999","font-weight":"normal"});
            $('#fourthcontent-eBook-title li').eq(4).css({"color":"#333","font-weight":"bold"});
        }else if(index == 9){
            $('#fourthcontent-eBook-number > strong').text("10");
        }
            
        current.hide();
        next.show();
    });
});
/*              네번째 eBook   Bottom       */

//   네번째 eBook   Bottom > right
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"로맨스판타지",size:1 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('fourthcontent-eBook-bottom-right');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".fourthcontent-eBook-bottom-right").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-eBook-bottom-title > a").eq(i).text(data.documents[i].title);

        var str = data.documents[i].contents;
        str2 = str.substring(0,57);
        $(".fourth-eBook-bottom-contents").eq(i).text(str2 + "...");

        $(".fourth-eBook-bottom-price").eq(i).text(data.documents[i].price + "원(10%할인+3%P)");
        
    }
        
    });
/*      네번째 eBook    Bottom    왼쪽 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"만화",size:9 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = $('.eBook-bottom-box li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".eBook-bottom-box li").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-eBook-bottom-left-title > a").eq(i).text(data.documents[i].title);

        $(".fourth-eBook-bottom-left-price").eq(i).text(data.documents[i].price + "원");
        
    }
        
    });

    $(function(){
        $('.eBook-bottom-box').not(":first").hide();
    
        $('#fourthcontent-eBook-bottom-left-ul > li').hover(function(){
            $('#fourthcontent-eBook-bottom-left-ul > li').css({"background-color":"#f8f8f8","border":"1px solid #d8d8d8"});
            $('#fourthcontent-eBook-bottom-left-ul > li em').hide();
            $(this).css({"background-color":"#fff","border-right":"none"}).children("em").stop().show();
            var index = $(this).index();
            $('.eBook-bottom-box').hide().eq(index).stop().show();
        }, function(){
            $(this).css({"background-color":"#fff","border-right":"none"}).children("em").show();
        });
        
        $('.eBook-bottom-box').hover(function() {
            $(this).stop().show();
        }, function() {
            $(this).stop().show();
        });
    });


/*  네번째 웹소설/코믹 */
$(function(){
    $('.comik-top-left-box').not(":first").hide();

    $('#fourthcontent-comik-top-left').hover(function(){
        $('.fourthcontent-comik-top-left-prev').stop().show();
        $('.fourthcontent-comik-top-left-next').stop().show();
    }, function(){
        $('.fourthcontent-comik-top-left-prev').stop().hide();
        $('.fourthcontent-comik-top-left-next').stop().hide();
    });
});

/* 네번째 웹소설/코믹 top > left > box */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"학교",size:3 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('comik-top-left-box');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".comik-top-left-box").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-comik-top-left-title > a").eq(i).text(data.documents[i].title);

        $(".fourth-comik-top-left-author").eq(i).text(data.documents[i].authors + ' | ' + data.documents[i].publisher);

        $('.fourth-comik-top-left-talk').eq(i).text(data.documents[i].status);

        var str = data.documents[i].contents;
        str2 = str.substring(0,40);
        $(".fourth-comik-top-left-explanation").eq(i).text(str2);
        
    }
        
    });

//이전 , 다음 버튼 클릭 시 보이는 요소의 이전 , 다음 요소를 변수로 설정하고 인덱스를 변수로 설정해서 strong의 글자를 바꾸는 스크립트
    $(function(){
        $('.fourthcontent-comik-top-left-prev').click(function(){
            var current = $('.comik-top-left-box:visible');
            var prev = current.prev('.comik-top-left-box');
            if (prev.length === 0) {
                prev = $('.comik-top-left-box:last');
            }
            var index = $('.comik-top-left-box').index(prev);
    
            if(index == 0){
                $('#fourthcontent-comik-top-left-number > strong').text("1");
            }else if(index == 1){
                $('#fourthcontent-comik-top-left-number > strong').text("2");
            }else if(index == 2){
                $('#fourthcontent-comik-top-left-number > strong').text("3");
            }
            current.hide();
            prev.show();
        });
        
        $('.fourthcontent-comik-top-left-next').click(function(){
            var current = $('.comik-top-left-box:visible');
            var next = current.next('.comik-top-left-box');
            if (next.length === 0) {
                next = $('.comik-top-left-box:first');
            }
            var index = $('.comik-top-left-box').index(next);
        
            if(index == 0){
                $('#fourthcontent-comik-top-left-number > strong').text("1");
            }else if(index == 1){
                $('#fourthcontent-comik-top-left-number > strong').text("2");
            }else if(index == 2){
                $('#fourthcontent-comik-top-left-number > strong').text("3");
            }
                
            current.hide();
            next.show();
        });
    });

//네번째 웹소설/코믹 top > center > box
$(function(){
    $('.comik-top-center-box-wrap').not(":first").hide();
});
//콘텐츠에 마우스가 올라가면 이전 , 다음 버튼이 보여지고 마우스가 벗어나면 버튼이 숨겨진다.
$(function(){
    $('#fourthcontent-comik-top-center').hover(function(){
        $('.fourthcontent-comik-top-center-prev').stop().show();
        $('.fourthcontent-comik-top-center-next').stop().show();
    }, function(){
        $('.fourthcontent-comik-top-center-prev').stop().hide();
        $('.fourthcontent-comik-top-center-next').stop().hide();
    });
});
//이전 , 다음 버튼 클릭 시 보이는 요소의 이전 , 다음 요소를 변수로 설정하고 인덱스를 변수로 설정해서 strong의 글자를 바꾸는 스크립트
$(function(){
    $('.fourthcontent-comik-top-center-prev').click(function(){
        var current = $('.comik-top-center-box-wrap:visible');
        var prev = current.prev('.comik-top-center-box-wrap');
        if (prev.length === 0) {
            prev = $('.comik-top-center-box-wrap:last');
        }
        var index = $('.comik-top-center-box-wrap').index(prev);

        if(index == 0){
            $('#fourthcontent-comik-top-center-number > strong').text("1");
        }else if(index == 1){
            $('#fourthcontent-comik-top-center-number > strong').text("2");
        }
        current.hide();
        prev.show();
    });
    
    $('.fourthcontent-comik-top-center-next').click(function(){
        var current = $('.comik-top-center-box-wrap:visible');
        var next = current.next('.comik-top-center-box-wrap');
        if (next.length === 0) {
            next = $('.comik-top-center-box-wrap:first');
        }
        var index = $('.comik-top-center-box-wrap').index(next);
    
        if(index == 0){
            $('#fourthcontent-comik-top-center-number > strong').text("1");
        }else if(index == 1){
            $('#fourthcontent-comik-top-center-number > strong').text("2");
        }
            
        current.hide();
        next.show();
    });
});
//웹소설/코믹 > 가운데 
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"의학",size:4 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('comik-top-center-box');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".comik-top-center-box").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-comik-top-center-title > a").eq(i).text(data.documents[i].title);

        $(".fourth-comik-top-center-author").eq(i).text(data.documents[i].authors + ' | ' + data.documents[i].publisher);

        $('.fourth-comik-top-center-talk').eq(i).text(data.documents[i].status);

        var str = data.documents[i].contents;
        str2 = str.substring(0,40);
        $(".fourth-comik-top-center-explanation").eq(i).text(str2);
        
    }
        
    });

// 네번째 웹소설/코믹 bottom > box
$(function(){
    $('.comik-bottom-right-box').not(":first").hide();
});
// 네번째 웹소설/코믹 bottom
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"코난",size:8 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('comik-bottom-right-content');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".comik-bottom-right-content").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".comik-bottom-right-title > a").eq(i).text(data.documents[i].title);

        $('.comik-bottom-right-price').eq(i).text(data.documents[i].price + "원");

        
    }
        
    });
//이전 , 다음 버튼 클릭 시 보이는 요소의 이전 , 다음 요소를 변수로 설정하고 인덱스를 변수로 설정해서 strong의 글자를 바꾸는 스크립트
    $(function(){
        $('.fourthcontent-comik-top-bottom-prev').click(function(){
            var current = $('.comik-bottom-right-box:visible');
            var prev = current.prev('.comik-bottom-right-box');
            if (prev.length === 0) {
                prev = $('.comik-bottom-right-box:last');
            }
            var index = $('.comik-bottom-right-box').index(prev);
    
            if(index == 0){
                $('#fourthcontent-comik-top-bottom-number > strong').text("1");
            }else if(index == 1){
                $('#fourthcontent-comik-top-bottom-number > strong').text("2");
            }
            current.hide();
            prev.show();
        });
        
        $('.fourthcontent-comik-top-bottom-next').click(function(){
            var current = $('.comik-bottom-right-box:visible');
            var next = current.next('.comik-bottom-right-box');
            if (next.length === 0) {
                next = $('.comik-bottom-right-box:first');
            }
            var index = $('.comik-bottom-right-box').index(next);
        
            if(index == 0){
                $('#fourthcontent-comik-top-bottom-number > strong').text("1");
            }else if(index == 1){
                $('#fourthcontent-comik-top-bottom-number > strong').text("2");
            }
                
            current.hide();
            next.show();
        });
    });
//콘텐츠에 마우스가 올라가면 이전 , 다음 버튼이 보여지고 마우스가 벗어나면 버튼이 숨겨진다.
    $(function(){
        $('#fourthcontent-comik-bottom').hover(function(){
            $('.fourthcontent-comik-top-bottom-prev').stop().show();
            $('.fourthcontent-comik-top-bottom-next').stop().show();
        }, function(){
            $('.fourthcontent-comik-top-bottom-prev').stop().hide();
            $('.fourthcontent-comik-top-bottom-next').stop().hide();
        });
    });

//      네번째 CD/LP
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"자연",size:9 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('fourth-CDLP-img-box');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".fourth-CDLP-img-box").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-CDLP-title > a").eq(i).text(data.documents[i].title);

        $(".fourth-CDLP-author").eq(i).text(data.documents[i].authors + ' | ' + data.documents[i].publisher);

        $('.fourth-CDLP-price').eq(i).text(data.documents[i].price + "원(18%할인 + 1%P)");

        
    }
        
    });
//콘텐츠에 마우스가 올라가면 이전 , 다음 버튼이 보여지고 마우스가 벗어나면 버튼이 숨겨진다.
    $(function(){
        $('#fourthcontent-CDLP-top').hover(function(){
            $('.fourthcontent-CDLP-prev').stop().show();
            $('.fourthcontent-CDLP-next').stop().show();
        }, function(){
            $('.fourthcontent-CDLP-prev').stop().hide();
            $('.fourthcontent-CDLP-next').stop().hide();
        });
    });
//이전 , 다음 버튼 클릭 시 보이는 요소의 이전 , 다음 요소를 변수로 설정하고 인덱스를 변수로 설정해서 strong의 글자를 바꾸는 스크립트
    $(function(){
        $('.fourthcontent-CDLP-prev').click(function(){
            var current = $('.fourth-CDLP-box-wrap:visible');
            var prev = current.prev('.fourth-CDLP-box-wrap');
            if (prev.length === 0) {
                prev = $('.fourth-CDLP-box-wrap:last');
            }
            var index = $('.fourth-CDLP-box-wrap').index(prev);
    
            if(index == 0){
                $('#fourthcontent-CDLP-number > strong').text("1");
            }else if(index == 1){
                $('#fourthcontent-CDLP-number > strong').text("2");
            }else if(index == 2){
                $('#fourthcontent-CDLP-number > strong').text("3");
            }
            current.hide();
            prev.show();
        });
        
        $('.fourthcontent-CDLP-next').click(function(){
            var current = $('.fourth-CDLP-box-wrap:visible');
            var next = current.next('.fourth-CDLP-box-wrap');
            if (next.length === 0) {
                next = $('.fourth-CDLP-box-wrap:first');
            }
            var index = $('.fourth-CDLP-box-wrap').index(next);
        
            if(index == 0){
                $('#fourthcontent-CDLP-number > strong').text("1");
            }else if(index == 1){
                $('#fourthcontent-CDLP-number > strong').text("2");
            }else if(index == 2){
                $('#fourthcontent-CDLP-number > strong').text("3");
            }
                
            current.hide();
            next.show();
        });
    });

//   네번째 CD/LP     바텀

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"여행",size:20 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = $('.CDLP-bottom-box li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".CDLP-bottom-box li").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-CDLP-bottom-title > a").eq(i).text(data.documents[i].title);

        $(".fourth-CDLP-bottom-price").eq(i).text(data.documents[i].price + "원");
        
    }
        
    });
    //li에 마우스를 올렸을 때 올려진 li의 인덱스를 변수에 담아서 변수를 box의 eq번째에 인덱스로 담아서 li의 인덱스번째의 box가 보여지는 스크립트
    $(function(){
        $('.CDLP-bottom-box').not(":first").hide();
    
        $('#fourthcontent-CDLP-bottom-ul > li').hover(function(){
            $('#fourthcontent-CDLP-bottom-ul > li').css({"background-color":"#f8f8f8","border":"1px solid #d8d8d8"});
            $('#fourthcontent-CDLP-bottom-ul > li em').hide();
            $(this).css({"background-color":"#fff","border-right":"none"}).children("em").stop().show();
            var index = $(this).index();
            $('.CDLP-bottom-box').hide().eq(index).stop().show();
        }, function(){
            $(this).css({"background-color":"#fff","border-right":"none"}).children("em").show();
        });
        
        $('.CDLP-bottom-box').hover(function() {
            $(this).stop().show();
        }, function() {
            $(this).stop().show();
        });
    });

//      네번째 DVDBD    top  >  left

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"인문",size:1 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = $('#fourthcontent-DVDBD-top-left');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $("#fourthcontent-DVDBD-top-left").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-DVDBD-left-title > a").eq(i).text(data.documents[i].title);

        $(".fourth-DVDBD-left-price").eq(i).text("33000원 > " + data.documents[i].price + "원(15%할인)");
        
        $(".fourth-DVDBD-left-author").eq(i).text(data.documents[i].authors + ' | ' + data.documents[i].publisher);
    }
        
    });
//    네번째 DVDBD   top > center 
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"스포츠",size:4 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('DVDBD-top-center-box');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".DVDBD-top-center-box").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-DVDBD-top-center-title > a").eq(i).text(data.documents[i].title);

        $(".fourth-DVDBD-top-center-author").eq(i).text(data.documents[i].authors + ' | ' + data.documents[i].publisher);

        $('.fourth-DVDBD-top-center-talk').eq(i).text(data.documents[i].status);

        var str = data.documents[i].contents;
        str2 = str.substring(0,40);
        $(".fourth-DVDBD-top-center-explanation").eq(i).text(str2);
        
    }
        
    });

    $(function(){
        $('.DVDBD-top-center-box-wrap').not(":first").hide();
    });
    //콘텐츠에 마우스가 올라가면 이전 , 다음 버튼이 보여지고 마우스가 벗어나면 버튼이 숨겨진다.
    $(function(){
        $('#fourthcontent-DVDBD-top-center').hover(function(){
            $('.fourthcontent-DVDBD-top-center-prev').stop().show();
            $('.fourthcontent-DVDBD-top-center-next').stop().show();
        }, function(){
            $('.fourthcontent-DVDBD-top-center-prev').stop().hide();
            $('.fourthcontent-DVDBD-top-center-next').stop().hide();
        });
    });
    //이전 , 다음 버튼 클릭 시 보이는 요소의 이전 , 다음 요소를 변수로 설정하고 인덱스를 변수로 설정해서 strong의 글자를 바꾸는 스크립트
    $(function(){
        $('.fourthcontent-DVDBD-top-center-prev').click(function(){
            var current = $('.DVDBD-top-center-box-wrap:visible');
            var prev = current.prev('.DVDBD-top-center-box-wrap');
            if (prev.length === 0) {
                prev = $('.DVDBD-top-center-box-wrap:last');
            }
            var index = $('.DVDBD-top-center-box-wrap').index(prev);
    
            if(index == 0){
                $('#fourthcontent-DVDBD-top-center-number > strong').text("1");
            }else if(index == 1){
                $('#fourthcontent-DVDBD-top-center-number > strong').text("2");
            }
           current.hide();
            prev.show();
        });
            
        $('.fourthcontent-DVDBD-top-center-next').click(function(){
            var current = $('.DVDBD-top-center-box-wrap:visible');
            var next = current.next('.DVDBD-top-center-box-wrap');
            if (next.length === 0) {
                next = $('.DVDBD-top-center-box-wrap:first');
            }
            var index = $('.DVDBD-top-center-box-wrap').index(next);
            
            if(index == 0){
                $('#fourthcontent-DVDBD-top-center-number > strong').text("1");
            }else if(index == 1){
                $('#fourthcontent-DVDBD-top-center-number > strong').text("2");
            }
                    
            current.hide();
            next.show();
        });
    });
//DVD/BD  > 밑 
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"경영",size:20 },
        headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
        })
            .done(function( data ) {
            
            
    
        var boxs = $('.DVDBD-bottom-box li');
            
            
        for(var i=0; i<boxs.length; i++){
            
            $(".DVDBD-bottom-box li").eq(i).find("img").attr("src", data.documents[i].thumbnail);
            
            $(".fourth-DVDBD-bottom-title > a").eq(i).text(data.documents[i].title);
    
            $(".fourth-DVDBD-bottom-price").eq(i).text(data.documents[i].price + "원");
            
        }
            
        });
    //li에 마우스를 올렸을 때 올려진 li의 인덱스를 변수에 담아서 변수를 box의 eq번째에 인덱스로 담아서 li의 인덱스번째의 box가 보여지는 스크립트
    $(function(){
        $('.DVDBD-bottom-box').not(":first").hide();
        
        $('#fourthcontent-DVDBD-bottom-ul > li').hover(function(){
            $('#fourthcontent-DVDBD-bottom-ul > li').css({"background-color":"#f8f8f8","border":"1px solid #d8d8d8"});
            $('#fourthcontent-DVDBD-bottom-ul > li em').hide();
            $(this).css({"background-color":"#fff","border-right":"none"}).children("em").stop().show();
            var index = $(this).index();
            $('.DVDBD-bottom-box').hide().eq(index).stop().show();
        }, function(){
            $(this).css({"background-color":"#fff","border-right":"none"}).children("em").show();
        });
            
        $('.DVDBD-bottom-box').hover(function() {
            $(this).stop().show();
        }, function() {
            $(this).stop().show();
        });
    });

    
//          네번째 문구/GIFT   >     Bottom
$(function(){
    $('.mungu-bottom-box').not(":first").hide();

    $('#fourthcontent-mungu-bottom-ul > li').hover(function(){
        $('#fourthcontent-mungu-bottom-ul > li').css({"background-color":"#f8f8f8","border":"1px solid #d8d8d8"});
        $('#fourthcontent-mungu-bottom-ul > li em').hide();
        $(this).css({"background-color":"#fff","border-right":"none"}).children("em").stop().show();
        var index = $(this).index();
        $('.mungu-bottom-box').hide().eq(index).stop().show();
    }, function(){
        $(this).css({"background-color":"#fff","border-right":"none"}).children("em").show();
    });
    
    $('.mungu-bottom-box').hover(function() {
        $(this).stop().show();
    }, function() {
        $(this).stop().show();
    });
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"비즈니스",size:14 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = $('.mungu-bottom-box li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".mungu-bottom-box li").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-mungu-bottom-title > a").eq(i).text(data.documents[i].title);

        $(".fourth-mungu-bottom-price").eq(i).text(data.documents[i].price + "원");
        
    }
        
    });

//         네번째     티켓
$(function(){
    $('.fourthcontent-ticket-top-left-box').not(":first").hide();
});

$(function(){
    $('#fourthcontent-ticket-top-left').hover(function(){
        $('.fourthcontent-ticket-top-left-prev').stop().show();
        $('.fourthcontent-ticket-top-left-next').stop().show();
    }, function(){
        $('.fourthcontent-ticket-top-left-prev').stop().hide();
        $('.fourthcontent-ticket-top-left-next').stop().hide();
    });
});

$(function(){
    $('.fourthcontent-ticket-top-left-prev').click(function(){
        var current = $('.fourthcontent-ticket-top-left-box:visible');
        var prev = current.prev('.fourthcontent-ticket-top-left-box');
        if (prev.length === 0) {
            prev = $('.fourthcontent-ticket-top-left-box:last');
        }
        var index = $('.fourthcontent-ticket-top-left-box').index(prev);

        if(index == 0){
            $('#fourthcontent-ticket-top-left-number > strong').text("1");
        }else if(index == 1){
            $('#fourthcontent-ticket-top-left-number > strong').text("2");
        }else if(index == 2){
            $('#fourthcontent-ticket-top-left-number > strong').text("3");
        }
        current.hide();
        prev.show();
    });
    
    $('.fourthcontent-ticket-top-left-next').click(function(){
        var current = $('.fourthcontent-ticket-top-left-box:visible');
        var next = current.next('.fourthcontent-ticket-top-left-box');
        if (next.length === 0) {
            next = $('.fourthcontent-ticket-top-left-box:first');
        }
        var index = $('.fourthcontent-ticket-top-left-box').index(next);
    
        if(index == 0){
            $('#fourthcontent-ticket-top-left-number > strong').text("1");
        }else if(index == 1){
            $('#fourthcontent-ticket-top-left-number > strong').text("2");
        }else if(index == 2){
            $('#fourthcontent-ticket-top-left-number > strong').text("3");
        }
            
        current.hide();
        next.show();
    });
});

//      네번째 티켓    Bottom > left
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"잡지",size:9 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
        .done(function( data ) {
        
        

    var boxs = $('.ticket-bottom-box li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".ticket-bottom-box li").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fourth-ticket-bottom-left-title > a").eq(i).text(data.documents[i].title);

        $(".fourth-ticket-bottom-left-price").eq(i).text(data.documents[i].price + "원");
        
    }
        
    });

    $(function(){
        $('.ticket-bottom-box').not(":first").hide();
    
        $('#fourthcontent-ticket-bottom-left-ul > li').hover(function(){
            $('#fourthcontent-ticket-bottom-left-ul > li').css({"background-color":"#f8f8f8","border":"1px solid #d8d8d8"});
            $('#fourthcontent-ticket-bottom-left-ul > li em').hide();
            $(this).css({"background-color":"#fff","border-right":"none"}).children("em").stop().show();
            var index = $(this).index();
            $('.ticket-bottom-box').hide().eq(index).stop().show();
        }, function(){
            $(this).css({"background-color":"#fff","border-right":"none"}).children("em").show();
        });
        
        $('.ticket-bottom-box').hover(function() {
            $(this).stop().show();
        }, function() {
            $(this).stop().show();
        });
    });