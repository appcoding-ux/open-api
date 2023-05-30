//빠른분야찾기를 마우스엔터하면 그 하위 요소인 <카테고리 헤더> 슬라이드다운
$(function(){
    $('#header-Bottom > h2').mouseenter(function(){
        $(this).find('#Category-header').stop().slideDown(400);
    }).mouseleave(function(){
        $('#Category-header').stop().slideUp(400);
    });
});
//국내도서
$(function(){
    $('#Category-header > li').mouseenter(function(){
        $(this).find('#KoreaBook').stop().show();
    }).mouseleave(function(){
        $('#KoreaBook').stop().hide();
    });
});
//외국도서
$(function(){
    $('#Category-header > li').mouseenter(function(){
        $(this).find('#foreigncountry-Book').stop().show();
    }).mouseleave(function(){
        $('#foreigncountry-Book').stop().hide();
    });
});
//중고샵
$(function(){
    $('#Category-header > li').mouseenter(function(){
        $(this).find('#Shop').stop().show();
    }).mouseleave(function(){
        $('#Shop').stop().hide();
    });
});
//eBook
$(function(){
    $('#Category-header > li').mouseenter(function(){
        $(this).find('#eBook').stop().show();
    }).mouseleave(function(){
        $('#eBook').stop().hide();
    });
});
//크레마클럽
$(function(){
    $('#Category-header > li').mouseenter(function(){
        $(this).find('#CremaClub').stop().show();
    }).mouseleave(function(){
        $('#CremaClub').stop().hide();
    });
});
//CD/LP
$(function(){
    $('#Category-header > li').mouseenter(function(){
        $(this).find('#CDLP').stop().show();
    }).mouseleave(function(){
        $('#CDLP').stop().hide();
    });
});
//DVD/BD
$(function(){
    $('#Category-header > li').mouseenter(function(){
        $(this).find('#DVDBD').stop().show();
    }).mouseleave(function(){
        $('#DVDBD').stop().hide();
    });
});
//문구/GIFT
$(function(){
    $('#Category-header > li').mouseenter(function(){
        $(this).find('#Mungu').stop().show();
    }).mouseleave(function(){
        $('#Mungu').stop().hide();
    });
});
//티켓
$(function(){
    $('#Category-header > li').mouseenter(function(){
        $(this).find('#Ticket').stop().show();
    }).mouseleave(function(){
        $('#Ticket').stop().hide();
    });
});
//카테고리의 하위 콘텐츠를 마우스엔터하면 부모요소 li의 background-color와 글자색 변경
$(function(){
    $('#Category-header > li > div').mouseenter(function(){
        $(this).parent().css('background-color','#0080ff','color','#fff');
    }).mouseleave(function(){
        $(this).parent().css('background-color','#fff' , 'color','#666');
    });
});