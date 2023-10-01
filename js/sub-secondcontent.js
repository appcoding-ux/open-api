$(function(){
    $('.second-content-box').not(":first").hide();

    $('#sub-second-content > ul > li > a').click(function(e){
        e.preventDefault();

        $('#sub-second-content > ul > li > a').css({"background-color":"#eee","border-bottom":"1px solid #d8d8d8"})

        $(this).css({"background-color":"#fff","border-bottom":"none"});

        var index = $(this).parent().index();
        $('.second-content-box').hide().eq(index).show();
    });
});

$(function(){
    $('.second-content-box-img').not(":first").hide();

    $('.second-content-box-img-many').not(":first").hide();    

    $('.second-content-box').hover(function(){
        $('.second-prev').stop().show();
        $('.second-next').stop().show();
        $('.second-prev-many').stop().show();
        $('.second-next-many').stop().show();
    }, function(){
        $('.second-prev').stop().hide();
        $('.second-next').stop().hide();
        $('.second-prev-many').stop().hide();
        $('.second-next-many').stop().hide();
    });



    $('.second-prev').click(function(){
        var current = $('.second-content-box-img:visible');
        var prev = current.prev('.second-content-box-img');
        if (prev.length === 0) {
            prev = $('.second-content-box-img:last');
        }
        var index = $('.second-content-box-img').index(prev);

        if(index == 0){
            $('.second-content-number > strong').text("1");
        }else if(index == 1){
            $('.second-content-number > strong').text("2");
        }else if(index == 2){
            $('.second-content-number > strong').text("3");

        }else if(index == 3){
            $('.second-content-number > strong').text("4");

        }
        current.hide();
        prev.show();
    });

    $('.second-next').click(function(){
        var current = $('.second-content-box-img:visible');
        var next = current.next('.second-content-box-img');
        if (next.length === 0) {
            next = $('.second-content-box-img:first');
        }
        var index = $('.second-content-box-img').index(next);

        if(index == 0){
            $('.second-content-number > strong').text("1");
        }else if(index == 1){
            $('.second-content-number > strong').text("2");
        }else if(index == 2){
            $('.second-content-number > strong').text("3");
        }else if(index == 3){
            $('.second-content-number > strong').text("4");
        }
        
        current.hide();
        next.show();
    });
//많이 산 책
    $('.second-prev-many').click(function(){
        var current = $('.second-content-box-img-many:visible');
        var prev = current.prev('.second-content-box-img-many');
        if (prev.length === 0) {
            prev = $('.second-content-box-img-many:last');
        }
        var index = $('.second-content-box-img-many').index(prev);

        if(index == 0){
            $('.second-content-number-many > strong').text("1");
        }else if(index == 1){
            $('.second-content-number-many > strong').text("2");
        }else if(index == 2){
            $('.second-content-number-many > strong').text("3");

        }else if(index == 3){
            $('.second-content-number-many > strong').text("4");

        }
        current.hide();
        prev.show();
    });

    $('.second-next-many').click(function(){
        var current = $('.second-content-box-img-many:visible');
        var next = current.next('.second-content-box-img-many');
        if (next.length === 0) {
            next = $('.second-content-box-img-many:first');
        }
        var index = $('.second-content-box-img-many').index(next);

        if(index == 0){
            $('.second-content-number-many > strong').text("1");
        }else if(index == 1){
            $('.second-content-number-many > strong').text("2");
        }else if(index == 2){
            $('.second-content-number-many > strong').text("3");
        }else if(index == 3){
            $('.second-content-number-many > strong').text("4");
        }
        
        current.hide();
        next.show();
    });
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"시간",size:48 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = $('.second-content-box li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".second-content-box li > a > img").eq(i).attr("src", data.documents[i].thumbnail);
        
        $(".second-text-title").eq(i).text(data.documents[i].title);
                
        $(".second-text-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        $(".second-text-price").eq(i).text(data.documents[i].price + "원(10%할인)");
    }
        
    });
