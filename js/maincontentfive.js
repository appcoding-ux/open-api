$(function(){
    $('.fivecontent-left-box').not(":first").hide();
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"재태크",size:3 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('fivecontent-left-box');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".fivecontent-left-box > img").eq(i).attr("src", data.documents[i].thumbnail);
        
        $(".fivecontent-left-box-title").eq(i).text(data.documents[i].title);
                
        $(".fivecontent-left-box-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        var str = data.documents[i].contents;
        str2 = str.substring(0,15);
        $(".fivecontent-left-box-content").eq(i).text(str2);
        
    }
        
    });

    $(function(){

        $('#fivecontent-left').hover(function(){
            $(this).css('border','1px solid #000');
            $('.fivecontent-left-prev').stop().show();
            $('.fivecontent-left-next').stop().show();
        }, function(){
            $(this).css('border','1px solid #d8d8d8');
            $('.fivecontent-left-prev').stop().hide();
            $('.fivecontent-left-next').stop().hide();
        });
    });
    
    $(function(){
        $('.fivecontent-left-prev').click(function(){
            var current = $('.fivecontent-left-box:visible');
            var prev = current.prev('.fivecontent-left-box');
            if (prev.length === 0) {
                prev = $('.fivecontent-left-box:last');
            }
            var index = $('.fivecontent-left-box').index(prev);
    
            if(index == 0){
                $('#fivecontent-left-number > strong').text("1");
            }else if(index == 1){
                $('#fivecontent-left-number > strong').text("2");
            }else if(index == 2){
                $('#fivecontent-left-number > strong').text("3");
            }
            current.hide();
            prev.show();
        });
    
        $('.fivecontent-left-next').click(function(){
            var current = $('.fivecontent-left-box:visible');
            var next = current.next('.fivecontent-left-box');
            if (next.length === 0) {
                next = $('.fivecontent-left-box:first');
            }
            var index = $('.fivecontent-left-box').index(next);
    
            if(index == 0){
                $('#fivecontent-left-number > strong').text("1");
            }else if(index == 1){
                $('#fivecontent-left-number > strong').text("2");
            }else if(index == 2){
                $('#fivecontent-left-number > strong').text("3");
            }
            
            current.hide();
            next.show();
        });
    });

//  이미지 이전&다음

//1
$(function(){
    $('.fivecontent-left-img1').not(":first").hide();

    $('.fivecontent-left-box-img').hover(function(){
        $('#fivecontent-left').css('border','1px solid #d8d8d8');
        $('.fivecontent-left-prev').stop().hide();
        $('.fivecontent-left-next').stop().hide();
        $('.fivecontent-left-img1-prev').stop().show();
        $('.fivecontent-left-img1-next').stop().show();
    }, function(){
        $('#fivecontent-left').css('border','1px solid #000');
        $('.fivecontent-left-prev').stop().show();
        $('.fivecontent-left-next').stop().show();
        $('.fivecontent-left-img1-prev').stop().hide();
        $('.fivecontent-left-img1-next').stop().hide();
    });
});

$(function(){
    $('.fivecontent-left-img1-prev').click(function(){
        var current = $('.fivecontent-left-img1:visible');
        var prev = current.prev('.fivecontent-left-img1');
        if (prev.length === 0) {
            prev = $('.fivecontent-left-img1:last');
        }

        current.hide();
        prev.show();
        
        // 첫 번째 요소인 경우 이전 버튼 숨기기
        if (prev.is(':first')) {
            $('.fivecontent-left-img1-prev').stop().hide();
        }

        $('.fivecontent-left-img1-next').stop().show();
    });

    $('.fivecontent-left-img1-next').click(function(){
        var current = $('.fivecontent-left-img1:visible');
        var next = current.next('.fivecontent-left-img1');
        if (next.length === 0) {
            next = $('.fivecontent-left-img1:first');
        }

        current.hide();
        next.show();
        
        // 마지막 요소인 경우 다음 버튼 숨기기
        if (next.is(':last')) {
            $('.fivecontent-left-img1-next').stop().hide();
        }

        $('.fivecontent-left-img1-prev').stop().show();
    });
});
//2
$(function(){
    $('.fivecontent-left-img2').not(":first").hide();

    $('.fivecontent-left-box-img').hover(function(){
        $('#fivecontent-left').css('border','1px solid #d8d8d8');
        $('.fivecontent-left-prev').stop().hide();
        $('.fivecontent-left-next').stop().hide();
        $('.fivecontent-left-img2-prev').stop().show();
        $('.fivecontent-left-img2-next').stop().show();
    }, function(){
        $('#fivecontent-left').css('border','1px solid #000');
        $('.fivecontent-left-prev').stop().show();
        $('.fivecontent-left-next').stop().show();
        $('.fivecontent-left-img2-prev').stop().hide();
        $('.fivecontent-left-img2-next').stop().hide();
    });
});

$(function(){
    $('.fivecontent-left-img2-prev').click(function(){
        var current = $('.fivecontent-left-img2:visible');
        var prev = current.prev('.fivecontent-left-img2');
        if (prev.length === 0) {
            prev = $('.fivecontent-left-img2:last');
        }

        current.hide();
        prev.show();
    });

    $('.fivecontent-left-img2-next').click(function(){
        var current = $('.fivecontent-left-img2:visible');
        var next = current.next('.fivecontent-left-img2');
        if (next.length === 0) {
            next = $('.fivecontent-left-img2:first');
        }

        current.hide();
        next.show();
    });
});
//3
$(function(){
    $('.fivecontent-left-img3').not(":first").hide();

    $('.fivecontent-left-box-img').hover(function(){
        $('#fivecontent-left').css('border','1px solid #d8d8d8');
        $('.fivecontent-left-prev').stop().hide();
        $('.fivecontent-left-next').stop().hide();
        $('.fivecontent-left-img3-prev').stop().show();
        $('.fivecontent-left-img3-next').stop().show();
    }, function(){
        $('#fivecontent-left').css('border','1px solid #000');
        $('.fivecontent-left-prev').stop().show();
        $('.fivecontent-left-next').stop().show();
        $('.fivecontent-left-img3-prev').stop().hide();
        $('.fivecontent-left-img3-next').stop().hide();
    });
});

$(function(){
    $('.fivecontent-left-img3-prev').click(function(){
        var current = $('.fivecontent-left-img3:visible');
        var prev = current.prev('.fivecontent-left-img3');
        if (prev.length === 0) {
            prev = $('.fivecontent-left-img3:last');
        }

        current.hide();
        prev.show();
    });

    $('.fivecontent-left-img3-next').click(function(){
        var current = $('.fivecontent-left-img3:visible');
        var next = current.next('.fivecontent-left-img3');
        if (next.length === 0) {
            next = $('.fivecontent-left-img3:first');
        }

        current.hide();
        next.show();
    });
});

//오른쪽 위
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"닌텐도",size:6 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = $('.fivecontent-right-top-box-img li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".fivecontent-right-top-box-img li").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fivecontent-right-top-box-title > a ").eq(i).text(data.documents[i].title);
                
        $(".fivecontent-right-top-box-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);
        
    }
        
    });

$(function(){

    $('#fivecontent-right-top').hover(function(){
        $('.fivecontent-right-top-prev').stop().show();
        $('.fivecontent-right-top-next').stop().show();
    }, function(){
        $('.fivecontent-right-top-prev').stop().hide();
        $('.fivecontent-right-top-next').stop().hide();
    });
});

$(function(){
    $('.fivecontent-right-top-box').not(":first").hide();

});

$(function(){
    $('.fivecontent-right-top-prev').click(function(){
        var current = $('.fivecontent-right-top-box:visible');
        var prev = current.prev('.fivecontent-right-top-box');
        if (prev.length === 0) {
            prev = $('.fivecontent-right-top-box:last');
        }
        var index = $('.fivecontent-right-top-box').index(prev);

        if(index == 0){
            $('#fivecontent-right-top-number > strong').text("1");
        }else if(index == 1){
            $('#fivecontent-right-top-number > strong').text("2");
        }

        current.hide();
        prev.show();
    });

    $('.fivecontent-right-top-next').click(function(){
        var current = $('.fivecontent-right-top-box:visible');
        var next = current.next('.fivecontent-right-top-box');
        if (next.length === 0) {
            next = $('.fivecontent-right-top-box:first');
        }
        var index = $('.fivecontent-right-top-box').index(next);

        if(index == 0){
            $('#fivecontent-right-top-number > strong').text("1");
        }else if(index == 1){
            $('#fivecontent-right-top-number > strong').text("2");
        }

        current.hide();
        next.show();
    });
});

//오른쪽 아래
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"뮤지컬",size:6 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = $('.fivecontent-right-bottom-box-img li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".fivecontent-right-bottom-box-img li").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".fivecontent-right-bottom-box-title > a ").eq(i).text(data.documents[i].title);
                
        $(".fivecontent-right-bottom-box-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);
        
    }
        
    });

$(function(){

    $('#fivecontent-right-bottom').hover(function(){
        $('.fivecontent-right-bottom-prev').stop().show();
        $('.fivecontent-right-bottom-next').stop().show();
    }, function(){
        $('.fivecontent-right-bottom-prev').stop().hide();
        $('.fivecontent-right-bottom-next').stop().hide();
    });
});

$(function(){
    $('.fivecontent-right-bottom-box').not(":first").hide();

});

$(function(){
    $('.fivecontent-right-bottom-prev').click(function(){
        var current = $('.fivecontent-right-bottom-box:visible');
        var prev = current.prev('.fivecontent-right-bottom-box');
        if (prev.length === 0) {
            prev = $('.fivecontent-right-bottom-box:last');
        }
        var index = $('.fivecontent-right-bottom-box').index(prev);

        if(index == 0){
            $('#fivecontent-right-bottom-number > strong').text("1");
        }else if(index == 1){
            $('#fivecontent-right-bottom-number > strong').text("2");
        }

        current.hide();
        prev.show();
    });

    $('.fivecontent-right-bottom-next').click(function(){
        var current = $('.fivecontent-right-bottom-box:visible');
        var next = current.next('.fivecontent-right-bottom-box');
        if (next.length === 0) {
            next = $('.fivecontent-right-bottom-box:first');
        }
        var index = $('.fivecontent-right-bottom-box').index(next);

        if(index == 0){
            $('#fivecontent-right-bottom-number > strong').text("1");
        }else if(index == 1){
            $('#fivecontent-right-bottom-number > strong').text("2");
        }

        current.hide();
        next.show();
    });
});