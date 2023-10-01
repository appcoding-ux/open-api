$(function(){
    $('.main-front-img').click(function(){
        $(this).css({'transform':'rotateY( 180deg )'});

        $(this).stop().hide('fast');

        $('.main-back-img').show(550);
    });

    $('.main-back-img').click(function(){
        $(this).css({'transform':'none'});

        $(this).stop().hide('fast');

        $('.main-front-img').show(550).css('transform','none');
    });

});

//상품 태그 ajax
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"봄",size:5 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = $('.TagBook li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".TagBook li > img").eq(i).attr("src", data.documents[i].thumbnail);
        
        $(".TagBook-text-title").eq(i).text(data.documents[i].title);
                
        $(".TagBook-text-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        $(".TagBook-text-price").eq(i).text(data.documents[i].price + "원(10%할인)");
    }
        
    });
//펼쳐보기 & 접어보기 클릭 시 스크립트(책 소개)
$(function(){

    $('.toggle-open').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.toggle-close').stop().show();

        $('#main-product-event-wrap').height(854);

        $('#main-product-event-wrap ul').height(854);

        $('.event-toggle-img').css('transform','rotate(180deg)');
    });

    $('.toggle-close').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.toggle-open').stop().show();

        $('#main-product-event-wrap').height(227);

        $('#main-product-event-wrap ul').height(227);

        $('.event-toggle-img').css('transform','none');
    });
});


//텍스트 뿌리기(책 소개)
$(function(){

    $.get("./sub-txt/book-introduct.txt", function(data) {

      $(".introduction-book").html(data);

    });
});

//텍스트 뿌리기(목차)
$(function(){

    $.get("./sub-txt/table-of-content.txt", function(data) {

      $("#table-of-content-wrap").html(data);

    });
});

//펼쳐보기 & 접어보기 클릭 시 스크립트(목차)
$(function(){

    $('.content-toggle-open').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.content-toggle-close').stop().show();

        $('#main-table-of-content').height(1990).css('padding-bottom','40px');

        $('#table-of-content-wrap').height(1904);

        $('.content-toggle-img').css('transform','rotate(180deg)');

        $('.table-of-content-toggle > a').css({"padding":"10px 0 9px 0","background":"none"});
    });

    $('.content-toggle-close').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.content-toggle-open').stop().show();

        $('#main-table-of-content').height(354).css('padding-bottom','0');

        $('#table-of-content-wrap').height(346).css('overflow','none');

        $('.content-toggle-img').css('transform','none');

        $('.table-of-content-toggle > a').css({"padding":"55px 0 9px 0","background":"url('./img/sub/table-content/background.png')"});
    });
});

//텍스트 뿌리기(저자소개)
$(function(){

    $.get("./sub-txt/author-introduction.txt", function(data) {

      $(".author-introduction-text").append(data);

    });
});
//펼쳐보기 & 접어보기 클릭 시 스크립트(저자소개)
$(function(){

    $('.author-toggle-open').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.author-toggle-close').stop().show();

        $('.author-introduction-text').height(321).css('overflow','none');

        $('.author-toggle-img').css('transform','rotate(180deg)');

    });

    $('.author-toggle-close').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.author-toggle-open').stop().show();

        $('.author-introduction-text').height(70).css('overflow','hidden');

        $('.author-toggle-img').css('transform','none');
    });
});

//텍스트 뿌리기(책 속으로)
$(function(){

    $.get("./sub-txt/book-in.txt", function(data) {

      $("#main-book-in-wrap").html(data);

    });
});

//펼쳐보기 & 접어보기 클릭 시 스크립트(책 속으로)
$(function(){

    $('.book-in-toggle-open').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.book-in-toggle-close').stop().show();

        $('#main-book-in').height(1825).css('padding-bottom','40px');

        $('#main-book-in-wrap').height(1738);

        $('.content-toggle-img').css('transform','rotate(180deg)');

        $('.book-in-toggle > a').css({"padding":"10px 0 9px 0","background":"none"});
    });

    $('.book-in-toggle-close').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.book-in-toggle-open').stop().show();

        $('#main-book-in').height(356).css('padding-bottom','none');

        $('#main-book-in-wrap').height(346).css('overflow','none');

        $('.content-toggle-img').css('transform','none');

        $('.book-in-toggle > a').css({"padding":"55px 0 9px 0","background":"url('./img/sub/table-content/background.png')"});
    });
});

//텍스트 뿌리기(출판사 리뷰)
$(function(){

    $.get("./sub-txt/publisher-review.txt", function(data) {

      $("#main-publisher-review-wrap").html(data);

    });
});

//펼쳐보기 & 접어보기 클릭 시 스크립트(출판사 리뷰)
$(function(){

    $('.publisher-review-toggle-open').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.publisher-review-toggle-close').stop().show();

        $('#main-publisher-review').height(1104).css('padding-bottom','40px');

        $('#main-publisher-review-wrap').height(1017);

        $('.publisher-review-toggle-img').css('transform','rotate(180deg)');

        $('.publisher-review-toggle > a').css({"padding":"10px 0 9px 0","background":"none"});
    });

    $('.publisher-review-toggle-close').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.publisher-review-toggle-open').stop().show();

        $('#main-publisher-review').height(356).css('padding-bottom','none');

        $('#main-publisher-review-wrap').height(346).css('overflow','none');

        $('.publisher-review-toggle-img').css('transform','none');

        $('.publisher-review-toggle > a').css({"padding":"55px 0 9px 0","background":"url('./img/sub/table-content/background.png')"});
    });
});

//텍스트 뿌리기(추천평)
$(function(){

    $.get("./sub-txt/recommendation-review.txt", function(data) {

      $("#main-recommendation-review-wrap").html(data);

    });
});

//펼쳐보기 & 접어보기 클릭 시 스크립트(추천평)
$(function(){

    $('.recommendation-review-toggle-open').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.recommendation-review-toggle-close').stop().show();

        $('#main-recommendation-review').height(827).css('padding-bottom','40px');

        $('#main-recommendation-review-wrap').height(740);

        $('.recommendation-review-toggle-img').css('transform','rotate(180deg)');

        $('.recommendation-review-toggle > a').css({"padding":"10px 0 9px 0","background":"none"});
    });

    $('.recommendation-review-toggle-close').click(function(e){
        e.preventDefault();

        $(this).stop().hide();

        $('.recommendation-review-toggle-open').stop().show();

        $('#main-recommendation-review').height(356).css('padding-bottom','none');

        $('#main-recommendation-review-wrap').height(346).css('overflow','none');

        $('.recommendation-review-toggle-img').css('transform','none');

        $('.recommendation-review-toggle > a').css({"padding":"55px 0 9px 0","background":"url('./img/sub/table-content/background.png')"});
    });
});

//star-bot-left-bar > 가로 길이 조정

$(function(){
    $('.star-bot-left-bar').eq(0).width('87%');
    $('.star-bot-left-bar').eq(0).find('em').css({'right':'0','color':'#fff'})    

    $('.star-bot-left-bar').eq(1).width('13%');
    $('.star-bot-left-bar').eq(1).find('em').css('right','-40px')

    $('.star-bot-left-bar').eq(2).width('0%');

    $('.star-bot-left-bar').eq(3).width('0%');

    $('.star-bot-left-bar').eq(4).width('0%');

});

//star-bot-right-bar > 가로 길이 조정

$(function(){
    $('.star-bot-right-bar').eq(0).height('0%'); 
    $('.star-bot-right-bar').eq(0).find('em').css({'color':'#333','top':'-20px'}) 

    $('.star-bot-right-bar').eq(1).height('90%');

    $('.star-bot-right-bar').eq(2).height('90%').css('background-color','#66cc99');

    $('.star-bot-right-bar').eq(3).height('90%').css('background-color','#0099cc');

    $('.star-bot-right-bar').eq(4).height('80%').css('background-color','#003366');

});


//텍스트 뿌리기(우수작 리뷰 글)
$(function(){

    $.get("./sub-txt/week-best.txt", function(data) {

      $(".review-week-middle-wrap").html(data);

    });
});

// 모든 리뷰 스크립트 시작
$(function(){
    $('.all-review-box').not(":first").hide();

//리뷰 별로 클릭했을 때 box 바뀌는 스크립트

$('#main-all-review li > a').click(function(e) {
    e.preventDefault();
    var index = $(this).parent().index();
    $('.all-review-box').hide().eq(index).stop().show();

    $('#main-all-review li a').css({"background-color": "#f8f8f8", "border-bottom": "1px solid #d8d8d8"});
    $(this).css({"background-color": "#fff", "border-bottom": "none"});

});
//텍스트 뿌리기 시작
const txtFiles = [
    "./sub-txt/all-review-box-wrap-middle-wrap1.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap2.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap3.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap4.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap5.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap6.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap7.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap10.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap9.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap8.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap11.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap12.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap13.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap14.txt",
    "./sub-txt/all-review-box-wrap-middle-wrap15.txt"
  ];
  
  txtFiles.forEach((file, index) => {
    $.get(file, function(data) {
      $(".all-review-box-wrap-middle-wrap").eq(index).html(data);
    });
  });
});

//키 눌렀을 때 글자 수 카운팅
$(document).on('keyup', '#textarea', function(e){
    var textarea = $(this).val();
    var characterCount = textarea.length;
    $('.online-review-input-key > strong').text(characterCount);    
});

//분야 연관 책 ajax
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"날씨",size:16 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = $('.relation-box li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".relation-box li > a > img").eq(i).attr("src", data.documents[i].thumbnail);
        
        $(".relation-text-title").eq(i).text(data.documents[i].title);
                
        $(".relation-text-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        $(".relation-text-price").eq(i).text(data.documents[i].price + "원(10%할인)");
    }
        
    });

$(function(){
    $('.relation-box').not(":first").hide();

//hover 함수
    $('#main-relation').hover(function(){
        $('.relation-prev').stop().show();
        $('.relation-next').stop().show();
    }, function(){
        $('.relation-prev').stop().hide();
        $('.relation-next').stop().hide();
    });

//클릭 함수 <다음버큰 클릭 했을 때 다음요소로 넘어가고 다음요소가 없으면 처음으로 돌아간다.>
//<이전버큰 클릭 했을 때 이전요소로 넘어가고 이전요소가 없으면 마지막요소로 간다.>
    $('.relation-prev').click(function(){
        var current = $('.relation-box:visible');
        var prev = current.prev('.relation-box');
        if (prev.length === 0) {
            prev = $('.relation-box:last');
        }
        var index = $('.relation-box').index(prev);

        if(index == 0){
            $('.relation-content-number > strong').text("1");
        }else if(index == 1){
            $('.relation-content-number > strong').text("2");
        }else if(index == 2){
            $('.relation-content-number > strong').text("3");

        }else if(index == 3){
            $('.relation-content-number > strong').text("4");

        }
        current.hide();
        prev.show();
    });

    $('.relation-next').click(function(){
        var current = $('.relation-box:visible');
        var next = current.next('.relation-box');
        if (next.length === 0) {
            next = $('.relation-box:first');
        }
        var index = $('.relation-box').index(next);

        if(index == 0){
            $('.relation-content-number > strong').text("1");
        }else if(index == 1){
            $('.relation-content-number > strong').text("2");
        }else if(index == 2){
            $('.relation-content-number > strong').text("3");
        }else if(index == 3){
            $('.relation-content-number > strong').text("4");
        }
        
        current.hide();
        next.show();
    });
});

//텍스트 뿌리기(맨 밑에 table)
$(function(){

    $.get("./sub-txt/table.txt", function(data) {

      $(".main-return-wrap-content2").html(data);

    });
});



//오른쪽 메인 콘텐츠 (이 분야 베스트 셀러)
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"행복",size:5 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = $('.content-right-top-wrap li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".content-right-top-wrap li > img").eq(i).attr("src", data.documents[i].thumbnail);
        
        $(".top-best-title").eq(i).text(data.documents[i].title);
                
        $(".top-best-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        $(".top-best-price").eq(i).text(data.documents[i].price + "원(10%할인)");
    }
        
    });

//오른쪽 메인 콘텐츠 (이 분야 신상품)
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"감동",size:5 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = $('.content-right-mid-wrap li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".content-right-mid-wrap li > img").eq(i).attr("src", data.documents[i].thumbnail);
        
        $(".mid-best-title").eq(i).text(data.documents[i].title);
                
        $(".mid-best-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        $(".mid-best-price").eq(i).text(data.documents[i].price + "원(10%할인)");
    }
        
    });

//오른쪽 메인 콘텐츠 (이 책이 담긴 리스트)
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"지식",size:9 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = $('.content-right-bot li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".content-right-bot img").eq(i).attr("src", data.documents[i].thumbnail);

        $(".right-list-book-title").eq(i).text(data.documents[i].title);
                
        $(".right-list-book-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        $(".right-list-book-price").eq(i).text(data.documents[i].price + '원');
        
    }
        
    });
//이 책이 담긴 리스트 li hover하면 책의 상세 정보 표시
$(function(){
    $('.content-right-bot li').hover(function(){
        $(this).find('.right-list-book').css('display','block');

        $(this).css('border','1px solid #196ab3');
    }, function(){
        $('.right-list-book').stop().hide();

        $(this).css('border','none');
    });
});