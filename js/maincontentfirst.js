/*     베스트셀러 국내도서     */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"자바스크립트",size:5 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
  })
  .done(function( data ) {


        // for문 (8개)
        var boxs = document.getElementsByClassName('bestsellerkoreaboximg');


        for(var i=0; i<boxs.length; i++){

          $(".bestsellerkoreaboximg").eq(i).find("img").attr("src", data.documents[i].thumbnail);

          $(".bestsellerkoreaboximg").eq(i).find("p").text(data.documents[i].title);

          $(".bestsellerkoreaboximg").eq(i).find("span").text(data.documents[i].authors);

        }

    });
/*     베스트셀러 외국도서     */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"고양이",size:5 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
    
    
        // for문 (8개)
        var boxs = document.getElementsByClassName('bestsellerforeignboximg');
    
    
        for(var i=0; i<boxs.length; i++){
    
            $(".bestsellerforeignboximg").eq(i).find("img").attr("src", data.documents[i].thumbnail);
    
            $(".bestsellerforeignboximg").eq(i).find("p").text(data.documents[i].title);
    
            $(".bestsellerforeignboximg").eq(i).find("span").text(data.documents[i].authors);
    
        }
    
    });
    /*     베스트셀러 중고샵     */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"강아지",size:5 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
    
    
       // for문 (8개)
        var boxs = document.getElementsByClassName('bestsellershopboximg');
    

        for(var i=0; i<boxs.length; i++){
    
          $(".bestsellershopboximg").eq(i).find("img").attr("src", data.documents[i].thumbnail);

          $(".bestsellershopboximg").eq(i).find("p").text(data.documents[i].title);

          $(".bestsellershopboximg").eq(i).find("span").text(data.documents[i].authors);
    
        }
    
    });
/*     베스트셀러 eBook     */
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"요리",size:5 },
        headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
        })
        .done(function( data ) {
        
        
            // for문 (8개)
            var boxs = document.getElementsByClassName('bestsellereBookboximg');
        
    
            for(var i=0; i<boxs.length; i++){
        
              $(".bestsellereBookboximg").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
              $(".bestsellereBookboximg").eq(i).find("p").text(data.documents[i].title);
        
              $(".bestsellereBookboximg").eq(i).find("span").text(data.documents[i].authors);
        
            }
        
        });
/*     베스트셀러 웹소설/코믹     */
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"장편소설",size:5 },
            headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
            })
            .done(function( data ) {
            
            
                var boxs = document.getElementsByClassName('bestsellercomikboximg');
            
            
                for(var i=0; i<boxs.length; i++){
            
                  $(".bestsellercomikboximg").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
                  $(".bestsellercomikboximg").eq(i).find("p").text(data.documents[i].title);
            
                  $(".bestsellercomikboximg").eq(i).find("span").text(data.documents[i].authors);
            
                }
            
            });
/*     베스트셀러 CD/LP     */
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"시집",size:5 },
            headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
            })
            .done(function( data ) {
                
                

            var boxs = document.getElementsByClassName('bestsellerCDLPboximg');
                
                
            for(var i=0; i<boxs.length; i++){
                
                $(".bestsellerCDLPboximg").eq(i).find("img").attr("src", data.documents[i].thumbnail);
                
                 $(".bestsellerCDLPboximg").eq(i).find("p").text(data.documents[i].title);
                
                 $(".bestsellerCDLPboximg").eq(i).find("span").text(data.documents[i].authors);
                
            }
                
            });
/*     베스트셀러 DVD/BD     */
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"CSS",size:5 },
            headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
            })
            .done(function( data ) {
                
                

            var boxs = document.getElementsByClassName('bestsellerDVDBDboximg');
                
                
            for(var i=0; i<boxs.length; i++){
                
                $(".bestsellerDVDBDboximg").eq(i).find("img").attr("src", data.documents[i].thumbnail);
                
                 $(".bestsellerDVDBDboximg").eq(i).find("p").text(data.documents[i].title);
                
                 $(".bestsellerDVDBDboximg").eq(i).find("span").text(data.documents[i].authors);
                
            }
                
            });

/*     베스트셀러 문구/GIFT     */
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"경제",size:5 },
            headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
            })
            .done(function( data ) {
                
                

            var boxs = document.getElementsByClassName('bestsellermunguboximg');
                
                
            for(var i=0; i<boxs.length; i++){
                
                $(".bestsellermunguboximg").eq(i).find("img").attr("src", data.documents[i].thumbnail);
                
                 $(".bestsellermunguboximg").eq(i).find("p").text(data.documents[i].title);
                
                 $(".bestsellermunguboximg").eq(i).find("span").text(data.documents[i].authors);
                
            }
                
            });
/*     베스트셀러 티켓     */
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"주식",size:5 },
            headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
            })
            .done(function( data ) {
                
                

            var boxs = document.getElementsByClassName('bestsellerticketboximg');
                
                
            for(var i=0; i<boxs.length; i++){
                
                $(".bestsellerticketboximg").eq(i).find("img").attr("src", data.documents[i].thumbnail);
                
                 $(".bestsellerticketboximg").eq(i).find("p").text(data.documents[i].title);
                
                 $(".bestsellerticketboximg").eq(i).find("span").text(data.documents[i].authors);
                
            }
                
            });
//베스트셀러 , 인기검색어를 눌렀을 때 하위 콘텐츠가 보이고 링크는 이동하지 않으며 css 조정
$(function(){
    $('#bestsellerh2').click(function(e){
        e.preventDefault();
        $('#bestsellercontent').show();
        $('#popularcontent').hide();
        $('#bestsellerh2 > a').css({'color':'#333','border-bottom':'none'});
        $('#popularsearchh2 > a').css({'color':'#999','border-bottom':'1px solid #d8d8d8'});
    });
            
    $('#popularsearchh2').click(function(e){
        e.preventDefault();
        $('#bestsellercontent').hide();
        $('#popularcontent').show();
        $('#popularsearchh2 > a').css({'color':'#333','border-bottom':'none'});
        $('#bestsellerh2 > a').css({'color':'#999','border-bottom':'1px solid #d8d8d8'});
    });
});

            
//  (베스트셀러) 셀렉에서 벨류값이 맞으면 하위 콘텐츠가 보이고 나머지는 안보인다.
$(function(){
    $('#bestsellerselect').on('change', function(){

        var selectedOption = $(this).val();

        if(selectedOption == "국내도서"){
            $('.bestsellerkorea').show();
            $('.bestsellerforeign').hide();
            $('.bestsellershop').hide();
            $('.bestsellereBook').hide();
            $('.bestsellercomik').hide();
            $('.bestsellerCDLP').hide();
            $('.bestsellerDVDBD').hide();
            $('.bestsellermungu').hide();
            $('.bestsellerticket').hide();
        }else if(selectedOption == "해외도서"){
            $('.bestsellerkorea').hide();
            $('.bestsellerforeign').show();
            $('.bestsellershop').hide();
            $('.bestsellereBook').hide();
            $('.bestsellercomik').hide();
            $('.bestsellerCDLP').hide();
            $('.bestsellerDVDBD').hide();
            $('.bestsellermungu').hide();
            $('.bestsellerticket').hide();
        }else if(selectedOption == "중고샵"){
            $('.bestsellerkorea').hide();
            $('.bestsellerforeign').hide();
            $('.bestsellershop').show();
            $('.bestsellereBook').hide();
            $('.bestsellercomik').hide();
            $('.bestsellerCDLP').hide();
            $('.bestsellerDVDBD').hide();
            $('.bestsellermungu').hide();
            $('.bestsellerticket').hide();
        }else if(selectedOption == "eBook"){
            $('.bestsellerkorea').hide();
            $('.bestsellerforeign').hide();
            $('.bestsellershop').hide();
            $('.bestsellereBook').show();
            $('.bestsellercomik').hide();
            $('.bestsellerCDLP').hide();
            $('.bestsellerDVDBD').hide();
            $('.bestsellermungu').hide();
            $('.bestsellerticket').hide();
        }else if(selectedOption == "웹소설코믹"){
            $('.bestsellerkorea').hide();
            $('.bestsellerforeign').hide();
            $('.bestsellershop').hide();
            $('.bestsellereBook').hide();
            $('.bestsellercomik').show();
            $('.bestsellerCDLP').hide();
            $('.bestsellerDVDBD').hide();
            $('.bestsellermungu').hide();
            $('.bestsellerticket').hide();
        }else if(selectedOption == "CDLP"){
            $('.bestsellerkorea').hide();
            $('.bestsellerforeign').hide();
            $('.bestsellershop').hide();
            $('.bestsellereBook').hide();
            $('.bestsellercomik').hide();
            $('.bestsellerCDLP').show();
            $('.bestsellerDVDBD').hide();
            $('.bestsellermungu').hide();
            $('.bestsellerticket').hide();
        }else if(selectedOption == "DVDBD"){
            $('.bestsellerkorea').hide();
            $('.bestsellerforeign').hide();
            $('.bestsellershop').hide();
            $('.bestsellereBook').hide();
            $('.bestsellercomik').hide();
            $('.bestsellerCDLP').hide();
            $('.bestsellerDVDBD').show();
            $('.bestsellermungu').hide();
            $('.bestsellerticket').hide();
        }else if(selectedOption == "문구"){
            $('.bestsellerkorea').hide();
            $('.bestsellerforeign').hide();
            $('.bestsellershop').hide();
            $('.bestsellereBook').hide();
            $('.bestsellercomik').hide();
            $('.bestsellerCDLP').hide();
            $('.bestsellerDVDBD').hide();
            $('.bestsellermungu').show();
            $('.bestsellerticket').hide();
        }else if(selectedOption == "티켓"){
            $('.bestsellerkorea').hide();
            $('.bestsellerforeign').hide();
            $('.bestsellershop').hide();
            $('.bestsellereBook').hide();
            $('.bestsellercomik').hide();
            $('.bestsellerCDLP').hide();
            $('.bestsellerDVDBD').hide();
            $('.bestsellermungu').hide();
            $('.bestsellerticket').show();
        }
    })
});
//  (인기검색어)셀렉에서 벨류값이 맞으면 하위 콘텐츠가 보이고 나머지는 안보인다.
$(function(){
    $('#popularselect').on('change', function(){
        var selectedOption = $(this).val();

        if(selectedOption == "통합"){
            $('.popularsearchbox:nth-child(2)').show();
            $('.popularsearchbox:nth-child(3)').hide();
            $('.popularsearchbox:nth-child(4)').hide();
            $('.popularsearchbox:nth-child(5)').hide();
            $('.popularsearchbox:nth-child(6)').hide();
            $('.popularsearchbox:nth-child(7)').hide();
            $('.popularsearchbox:nth-child(8)').hide();
            $('.popularsearchbox:nth-child(9)').hide();
            $('.popularsearchbox:last-child').hide();   
        }else if(selectedOption == "국내도서"){
            $('.popularsearchbox:nth-child(2)').hide();
            $('.popularsearchbox:nth-child(3)').show();
            $('.popularsearchbox:nth-child(4)').hide();
            $('.popularsearchbox:nth-child(5)').hide();
            $('.popularsearchbox:nth-child(6)').hide();
            $('.popularsearchbox:nth-child(7)').hide();
            $('.popularsearchbox:nth-child(8)').hide();
            $('.popularsearchbox:nth-child(9)').hide();
            $('.popularsearchbox:last-child').hide();
        }else if(selectedOption == "해외도서"){
            $('.popularsearchbox:nth-child(2)').hide();
            $('.popularsearchbox:nth-child(3)').hide();
            $('.popularsearchbox:nth-child(4)').show();
            $('.popularsearchbox:nth-child(5)').hide();
            $('.popularsearchbox:nth-child(6)').hide();
            $('.popularsearchbox:nth-child(7)').hide();
            $('.popularsearchbox:nth-child(8)').hide();
            $('.popularsearchbox:nth-child(9)').hide();
            $('.popularsearchbox:last-child').hide();
        }else if(selectedOption == "중고샵"){
            $('.popularsearchbox:nth-child(2)').hide();
            $('.popularsearchbox:nth-child(3)').hide();
            $('.popularsearchbox:nth-child(4)').hide();
            $('.popularsearchbox:nth-child(5)').show();
            $('.popularsearchbox:nth-child(6)').hide();
            $('.popularsearchbox:nth-child(7)').hide();
            $('.popularsearchbox:nth-child(8)').hide();
            $('.popularsearchbox:nth-child(9)').hide();
            $('.popularsearchbox:last-child').hide();
        }else if(selectedOption == "eBook"){
            $('.popularsearchbox:nth-child(2)').hide();
            $('.popularsearchbox:nth-child(3)').hide();
            $('.popularsearchbox:nth-child(4)').hide();
            $('.popularsearchbox:nth-child(5)').hide();
            $('.popularsearchbox:nth-child(6)').show();
            $('.popularsearchbox:nth-child(7)').hide();
            $('.popularsearchbox:nth-child(8)').hide();
            $('.popularsearchbox:nth-child(9)').hide();
            $('.popularsearchbox:last-child').hide();
        }else if(selectedOption == "CDLP"){
            $('.popularsearchbox:nth-child(2)').hide();
            $('.popularsearchbox:nth-child(3)').hide();
            $('.popularsearchbox:nth-child(4)').hide();
            $('.popularsearchbox:nth-child(5)').hide();
            $('.popularsearchbox:nth-child(6)').hide();
            $('.popularsearchbox:nth-child(7)').show();
            $('.popularsearchbox:nth-child(8)').hide();
            $('.popularsearchbox:nth-child(9)').hide();
            $('.popularsearchbox:last-child').hide();
        }else if(selectedOption == "DVDBD"){
            $('.popularsearchbox:nth-child(2)').hide();
            $('.popularsearchbox:nth-child(3)').hide();
            $('.popularsearchbox:nth-child(4)').hide();
            $('.popularsearchbox:nth-child(5)').hide();
            $('.popularsearchbox:nth-child(6)').hide();
            $('.popularsearchbox:nth-child(7)').hide();
            $('.popularsearchbox:nth-child(8)').show();
            $('.popularsearchbox:nth-child(9)').hide();
            $('.popularsearchbox:last-child').hide();
        }else if(selectedOption == "문구"){
            $('.popularsearchbox:nth-child(2)').hide();
            $('.popularsearchbox:nth-child(3)').hide();
            $('.popularsearchbox:nth-child(4)').hide();
            $('.popularsearchbox:nth-child(5)').hide();
            $('.popularsearchbox:nth-child(6)').hide();
            $('.popularsearchbox:nth-child(7)').hide();
            $('.popularsearchbox:nth-child(8)').hide();
            $('.popularsearchbox:nth-child(9)').show();
            $('.popularsearchbox:last-child').hide();
        }else if(selectedOption == "티켓"){
            $('.popularsearchbox:nth-child(2)').hide();
            $('.popularsearchbox:nth-child(3)').hide();
            $('.popularsearchbox:nth-child(4)').hide();
            $('.popularsearchbox:nth-child(5)').hide();
            $('.popularsearchbox:nth-child(6)').hide();
            $('.popularsearchbox:nth-child(7)').hide();
            $('.popularsearchbox:nth-child(8)').hide();
            $('.popularsearchbox:nth-child(9)').hide();
            $('.popularsearchbox:last').show();
        }
    });
});

$(function(){
    $('.popularsearchbox').not(":first").hide();
});


/*              첫번째 content 가운데          */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"오늘의 도서",size:4 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
        

    var boxs = document.getElementsByClassName('firstcentercontent');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".firstcentercontent-main-img").eq(i).find("img").attr("src", data.documents[i].thumbnail);
        
        $(".content-text-title > a").eq(i).text(data.documents[i].title);
                
        $(".content-text-author").eq(i).text(data.documents[i].authors + " | " + data.documents[i].publisher);

        $(".content-text-price").eq(i).text(data.documents[i].price + '원(10% 할인)');

        var str1 = data.documents[0].contents;
        var str2 = str1.substring(0,154);
        $(".content-text-explanation > a").eq(0).text(str2);

        var str3 = data.documents[1].contents;
        var str4 = str3.substring(0,140);
        $(".content-text-explanation > a").eq(1).text(str4 + '...');

        var str5 = data.documents[2].contents;
        var str6 = str5.substring(0,160);
        $(".content-text-explanation > a").eq(2).text(str6 +'...');

        var str7 = data.documents[3].contents;
        var str8 = str7.substring(0,185);
        $(".content-text-explanation > a").eq(3).text(str8);
        
    }
        
    });
//이전 , 다음 버튼을 콘텐츠에 마우스를 올렸을 때만 보이게 하고 마우스가 벗어나면 이전 , 다음 버튼이 안보인다.
$(function(){

    $('#firstcontent-center').hover(function(){
        $('.firstcontentcenter-prev').stop().show();
        $('.firstcontentcenter-next').stop().show();
    }, function(){
        $('.firstcontentcenter-prev').stop().hide();
        $('.firstcontentcenter-next').stop().hide();
    });
});
// 이전 , 다음 버튼을 클릭했을 때 보이는 요소의 이전 , 다음 요소를 변수로 담아서 버튼에 맞게 콘텐츠가 보인다.
$(function(){
    $('.firstcontentcenter-prev').click(function(){
        var current = $('.firstcentercontent:visible');
        var prev = current.prev('.firstcentercontent');
        var index = prev.index();
        $('.firstcontentbottom-img').css('border', '1px solid #d8d8d8');
        $('.firstcontentbottom-img').eq(index).css('border','4px solid #3698fa');
        if (prev.length === 0) {
            prev = $('.firstcentercontent:last');
        }
        current.hide();
        prev.show();
    });

    $('.firstcontentcenter-next').click(function(){
        var current = $('.firstcentercontent:visible');
        var next = current.next('.firstcentercontent');
        if (next.length === 0) {
            next = $('.firstcentercontent:first');
        }
        var index = next.index();
        $('.firstcontentbottom-img').css('border', '1px solid #d8d8d8');
        $('.firstcontentbottom-img').eq(index).css('border', '4px solid #3698fa');
        current.hide();
        next.show();
    });
});
//  콘텐츠에 맞는 이미지 4개
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"오늘의 도서",size:4 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
            
            
    
    var imgs = document.getElementsByClassName('firstcontentbottom-img');
            
            
    for(var i=0; i<imgs.length; i++){
            
        $(".firstcontentbottom-img").eq(i).attr("src", data.documents[i].thumbnail);
            
    }
            
});
//  이미지에 마우스를 올렸을 때 그에 맞는 콘텐츠가 보이게 하는 스크립트
$(function(){
    $('.firstcontentbottom-img').hover(function(){
        var index = $(this).index();
        $('.firstcentercontent').eq(index).stop().show();
        $('.firstcentercontent').not(":eq("+index+")").hide();
        $('.firstcontentbottom-img').eq(index).css('border','4px solid #3698fa');
        $('.firstcontentbottom-img').not(':eq(' + index + ')').css('border', '1px solid #d8d8d8');
    }, function(){
        $('.firstcentercontent').eq(index).stop().hide();
    });
});
