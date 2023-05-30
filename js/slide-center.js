/* 페이지가 로드 되었을 때 */
$(function(){
    $('#SlideWrapMain > li > a:first').show();
});
//li의 첫번째 요소만 css 적용
$(function(){
    $('#SlideWrapMain > li > a:first').css({'background-color':'#0080ff', 'color':'#fff'});
});
//on이벤트 핸들러로 li > a에 마우스를 올렸을 때 올린 li > a의 css를 변경하는 스크립트
$(function(){
    $('#SlideWrapMain > li > a').on('mouseover', function() {
        $('#SlideWrapMain > li > a').css({'background-color':'#fff', 'color':'#333'});
        $(this).css({'background-color':'#0080ff', 'color':'#fff'});
    }).on('mouseout', function(){
        $('#SlideWrapMain > li > a:first').css({'background-color':'#fff', 'color':'#333'});
    });
});
//마우스가 벗어났을 때 li > a 첫번째 요소만 css 적용
$(function(){
    $('#Slidewrap').mouseleave(function(){
        $('#SlideWrapMain > li > a:first').css({'background-color':'#0080ff', 'color':'#fff'});
    });
});


/*슬라이더 - 메인 - YES NOW */
$(function(){
    $('#yesnow').mouseenter(function(){
        $(this).stop().show();
        $(this).parent().find('>a').css({'background-color':'#0080ff','color':'#fff'})
    }).mouseleave(function(){
        $(this).stop().show();
        $(this).parent().find('>a').css({'background-color':'#0080ff','color':'#fff'})
    });
});
/* YES NOW 화살표 버튼 */
$(function(){
    $('.yesnow-img').hover(function(){
        $('.slide-prev').stop().show();
        $('.slide-next').stop().show();
    },function(){
        $('.slide-prev').stop().show();
        $('.slide-next').stop().show();
    });
});

/* 이전 , 다음 버튼을 클릭했을 때 >  다음 이미지& 이전 이미지 */
$(function(){
    $('.slide-prev').click(function(){
        var current = $('.yesnow-img:visible');
        var prev = current.prev('.yesnow-img');
        if (prev.length === 0) {
            prev = $('.yesnow-img:last');
        }
        current.hide();
        prev.show();

        var index = prev.index();
        $('#YesNowUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#YesNowUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });

    $('.slide-next').click(function(){
        var current = $('.yesnow-img:visible');
        var next = current.next('.yesnow-img');
        if (next.length === 0) {
            next = $('.yesnow-img:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        $('#YesNowUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#YesNowUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });
});

/* li > a를 마우스 오버 했을 때 이미지의 index 번호에 따라 show */
$(function(){
    $('#YesNowUl > ul > li > a').mouseover(function() {
        var index = $(this).parent().index();
        $('.yesnow-img').stop().hide();
        $('.yesnow-img:eq(' + index + ')').stop().show();
        $('#YesNowUl > ul > li > a').css({'background-color':'#fff', 'color':'#333'});
        $(this).css({'background-color':'#333', 'color':'#fff'});
    });
});

/* YES NOW 슬라이더 SETINTERVAL  */
function YesNowslide(){
    var current = $('.yesnow-img:visible');
    var next = current.next('.yesnow-img');
    if(next.length === 0){
        next = $('.yesnow-img:first');
    }
    current.hide();
    next.show();

    var index = next.index();
    $('#YesNowUl a').css({'background-color':'#fff', 'color':'#333'});
    $('#YesNowUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
}

setInterval(YesNowslide,3000);




/* 슬라이더 - 메인 > 국내도서*/
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).parent().find('#Slide-koreabook').stop().show();
    }).mouseleave(function(){
        $('#Slide-koreabook').stop().hide();
    }); 
});

/* 국내도서를 마우스엔터 했을 때 하위요소가 보이는 코드 */
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).next('#Slide-koreabook').stop().show();
        $(this).css({'background-color':'#0080ff','color':'#fff'});
    }).mouseleave(function(){
        $(this).next('#Slide-koreabook').stop().hide();
        $(this).css({'background-color':'#fff','color':'#333'});
    });
    $('#Slide-koreabook').mouseenter(function(){
        $(this).stop().show();
        $(this).parent().find('>a').css({'background-color':'#0080ff','color':'#fff'})
    }).mouseleave(function(){
        $(this).stop().hide();
        $(this).parent().find('>a').css({'background-color':'#fff','color':'#333'})
    });
});

/* 이미지를 호버했을 때 이전, 다음 버튼 show */
$(function(){
    $('.slide-koreabook-img').hover(function(){
        $('.slide-korea-prev').stop().show();
        $('.slide-korea-next').stop().show();
        $('#Slide-koreabook').stop().show();
    },function(){
        $('.slide-korea-prev').stop().show();
        $('.slide-korea-next').stop().show();
    });
});

/* 이전 , 다음 버튼을 클릭했을 때 >  다음 이미지&이전 이미지 */
$(function(){
    $('.slide-korea-prev').click(function(){
        var current = $('.slide-korea-center:visible');
        var prev = current.prev('.slide-korea-center');
        if (prev.length === 0) {
            prev = $('.slide-korea-center:last');
        }
        current.hide();
        prev.show();

        var index = prev.index();
        $('#SlideKoreabookUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideKoreabookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });

    $('.slide-korea-next').click(function(){
        var current = $('.slide-korea-center:visible');
        var next = current.next('.slide-korea-center');
        if (next.length === 0) {
            next = $('.slide-korea-center:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        $('#SlideKoreabookUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideKoreabookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });
});
/* 이미지 밑에 li를 마우스오버 했을 떄 index에 따라 이미지 변경 */
$(function(){
    $('#SlideKoreabookUl > ul > li > a').mouseover(function() {
        var index = $(this).parent().index();
        $('.slide-korea-center').hide();
        $('.slide-korea-center:eq(' + index + ')').show();
        $('#SlideKoreabookUl > ul > li > a').css({'background-color':'#fff', 'color':'#333'});
        $(this).css({'background-color':'#333', 'color':'#fff'});
    });
});
/* 국내도서 SetInterval */
function Koreabookslide(){
    var current = $('.slide-korea-center:visible');
    var next = current.next('.slide-korea-center');
    if(next.length === 0){
        next = $('.slide-korea-center:first');
    }
    current.hide();
    next.show();

    var index = next.index();
    $('#SlideKoreabookUl a').css({'background-color':'#fff', 'color':'#333'});
    $('#SlideKoreabookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
}
setInterval(Koreabookslide,3000);


/* 슬라이더 - 메인 > 외국도서*/
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).parent().find('#Slide-foreignbook').stop().show();
    }).mouseleave(function(){
        $('#Slide-foreignbook').stop().hide();
    });
});

/* 외국도서를 마우스엔터 했을 때 하위요소가 보이는 코드 */
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).next('#Slide-foreignbook').stop().show();
        $(this).css({'background-color':'#0080ff','color':'#fff'});
    }).mouseleave(function(){
        $(this).next('#Slide-foreignbook').stop().hide();
        $(this).css({'background-color':'#fff','color':'#333'});
    });
    $('#Slide-foreignbook').mouseenter(function(){
        $(this).stop().show();
        $(this).parent().find('>a').css({'background-color':'#0080ff','color':'#fff'})
    }).mouseleave(function(){
        $(this).stop().hide();
        $(this).parent().find('>a').css({'background-color':'#fff','color':'#333'})
    });
});

/* 이미지를 호버했을 때 이전, 다음 버튼 show */
$(function(){
    $('.slide-foreign-img').hover(function(){
        $('.slide-foreign-prev').stop().show();
        $('.slide-foreign-next').stop().show();
        $('#Slide-foreignbook').stop().show();
    },function(){
        $('.slide-foreign-prev').stop().show();
        $('.slide-foreign-next').stop().show();
    });
});

/* 이전 , 다음 버튼을 클릭했을 때 >  다음 이미지&이전 이미지 */
$(function(){
    $('.slide-foreign-prev').click(function(){
        var current = $('.slide-foreign-center:visible');
        var prev = current.prev('.slide-foreign-center');
        if (prev.length === 0) {
            prev = $('.slide-foreign-center:last');
        }
        current.hide();
        prev.show();

        var index = prev.index();
        $('#SlideForeignbookUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideForeignbookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });

    $('.slide-foreign-next').click(function(){
        var current = $('.slide-foreign-center:visible');
        var next = current.next('.slide-foreign-center');
        if (next.length === 0) {
            next = $('.slide-foreign-center:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        $('#SlideForeignbookUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideForeignbookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });
});
/* 이미지 밑에 li를 마우스오버 했을 떄 index에 따라 이미지 변경 */
$(function(){
    $('#SlideForeignbookUl > ul > li > a').mouseover(function() {
        var index = $(this).parent().index();
        $('.slide-foreign-center').hide();
        $('.slide-foreign-center:eq(' + index + ')').show();
        $('#SlideForeignbookUl > ul > li > a').css({'background-color':'#fff', 'color':'#333'});
        $(this).css({'background-color':'#333', 'color':'#fff'});
    });
});
/* 외국도서 SetInterval */
function Foreignbookslide(){
    var current = $('.slide-foreign-center:visible');
    var next = current.next('.slide-foreign-center');
    if(next.length === 0){
        next = $('.slide-foreign-center:first');
    }
    current.hide();
    next.show();

    var index = next.index();
    $('#SlideForeignbookUl a').css({'background-color':'#fff', 'color':'#333'});
    $('#SlideForeignbookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
}
setInterval(Foreignbookslide,3000);

/* 슬라이더 - 메인 > 중고샵*/
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).parent().find('#Slide-shop').stop().show();
    }).mouseleave(function(){
        $('#Slide-shop').stop().hide();
    });
});
/* 이미지를 호버했을 때 이전, 다음 버튼 show */
$(function(){
    $('.slide-shop-img').hover(function(){
        $('.slide-shop-prev').stop().show();
        $('.slide-shop-next').stop().show();
    },function(){
        $('.slide-shop-prev').stop().show();
        $('.slide-shop-next').stop().show();
    });
});

/* 중고샵를 마우스엔터 했을 때 하위요소가 보이는 코드 */
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).next('#Slide-shop').stop().show();
        $(this).css({'background-color':'#0080ff','color':'#fff'});
    }).mouseleave(function(){
        $(this).next('#Slide-shop').stop().hide();
        $(this).css({'background-color':'#fff','color':'#333'});
    });
    $('#Slide-shop').mouseenter(function(){
        $(this).stop().show();
        $(this).parent().find('>a').css({'background-color':'#0080ff','color':'#fff'})
    }).mouseleave(function(){
        $(this).stop().hide();
        $(this).parent().find('>a').css({'background-color':'#fff','color':'#333'})
    });
});
/* 이전 , 다음 버튼을 클릭했을 때 >  다음 이미지&이전 이미지 */
$(function(){
    $('.slide-shop-prev').click(function(){
        var current = $('.slide-shop-center:visible');
        var prev = current.prev('.slide-shop-center');
        if (prev.length === 0) {
            prev = $('.slide-shop-center:last');
        }
        current.hide();
        prev.show();

        var index = prev.index();
        $('#SlideShopbookUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideShopbookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });

    $('.slide-shop-next').click(function(){
        var current = $('.slide-shop-center:visible');
        var next = current.next('.slide-shop-center');
        if (next.length === 0) {
            next = $('.slide-shop-center:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        $('#SlideShopbookUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideShopbookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });
});
/* 이미지 밑에 li를 마우스오버 했을 떄 index에 따라 이미지 변경 */
$(function(){
    $('#SlideShopbookUl > ul > li > a').mouseover(function() {
        var index = $(this).parent().index();
        $('.slide-shop-center').hide();
        $('.slide-shop-center:eq(' + index + ')').show();
        $('#SlideShopbookUl > ul > li > a').css({'background-color':'#fff', 'color':'#333'});
        $(this).css({'background-color':'#333', 'color':'#fff'});
    });
});

/* 중고샵 SetInterval */
function Shopbookslide(){
    var current = $('.slide-shop-center:visible');
    var next = current.next('.slide-shop-center');
    if(next.length === 0){
        next = $('.slide-shop-center:first');
    }
    current.hide();
    next.show();

    var index = next.index();
    $('#SlideShopbookUl a').css({'background-color':'#fff', 'color':'#333'});
    $('#SlideShopbookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
}
setInterval(Shopbookslide,3000);

/* 슬라이더 - 메인 > eBook*/
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).parent().find('#Slide-eBook').stop().show();
    }).mouseleave(function(){
        $('#Slide-eBook').stop().hide();
    });
});
/* 이미지를 호버했을 때 이전, 다음 버튼 show */
$(function(){
    $('.slide-eBook-img').hover(function(){
        $('.slide-eBook-prev').stop().show();
        $('.slide-eBook-next').stop().show();
    },function(){
        $('.slide-eBook-prev').stop().show();
        $('.slide-eBook-next').stop().show();
    });
});

/* eBook를 마우스엔터 했을 때 하위요소가 보이는 코드 */
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).next('#Slide-eBook').stop().show();
        $(this).css({'background-color':'#0080ff','color':'#fff'});
    }).mouseleave(function(){
        $(this).next('#Slide-eBook').stop().hide();
        $(this).css({'background-color':'#fff','color':'#333'});
    });
    $('#Slide-eBook').mouseenter(function(){
        $(this).stop().show();
        $(this).parent().find('>a').css({'background-color':'#0080ff','color':'#fff'})
    }).mouseleave(function(){
        $(this).stop().hide();
        $(this).parent().find('>a').css({'background-color':'#fff','color':'#333'})
    });
});
/* 이전 , 다음 버튼을 클릭했을 때 >  다음 이미지&이전 이미지 */
$(function(){
    $('.slide-eBook-prev').click(function(){
        var current = $('.slide-eBook-center:visible');
        var prev = current.prev('.slide-eBook-center');
        if (prev.length === 0) {
            prev = $('.slide-eBook-center:last');
        }
        current.hide();
        prev.show();

        var index = prev.index();
        $('#SlideeBookUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideeBookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });

    $('.slide-eBook-next').click(function(){
        var current = $('.slide-eBook-center:visible');
        var next = current.next('.slide-eBook-center');
        if (next.length === 0) {
            next = $('.slide-eBook-center:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        $('#SlideeBookUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideeBookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });
});
/* 이미지 밑에 li를 마우스오버 했을 떄 index에 따라 이미지 변경 */
$(function(){
    $('#SlideeBookUl > ul > li > a').mouseover(function() {
        var index = $(this).parent().index();
        $('.slide-eBook-center').hide();
        $('.slide-eBook-center:eq(' + index + ')').show();
        $('#SlideeBookUl > ul > li > a').css({'background-color':'#fff', 'color':'#333'});
        $(this).css({'background-color':'#333', 'color':'#fff'});
    });
});

/* eBook SetInterval */
function eBookslide(){
    var current = $('.slide-eBook-center:visible');
    var next = current.next('.slide-eBook-center');
    if(next.length === 0){
        next = $('.slide-eBook-center:first');
    }
    current.hide();
    next.show();

    var index = next.index();
    $('#SlideeBookUl a').css({'background-color':'#fff', 'color':'#333'});
    $('#SlideeBookUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
}
setInterval(eBookslide,3000);

/* 슬라이더 - 메인 > 크레마클럽*/
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).parent().find('#Slide-cremaclub').stop().show();
    }).mouseleave(function(){
        $('#Slide-cremaclub').stop().hide();
    });
});
/* 이미지를 호버했을 때 이전, 다음 버튼 show */
$(function(){
    $('.slide-cremaclub-img').hover(function(){
        $('.slide-cremaclub-prev').stop().show();
        $('.slide-cremaclub-next').stop().show();
    },function(){
        $('.slide-cremaclub-prev').stop().show();
        $('.slide-cremaclub-next').stop().show();
    });
});

/* 크레마클럽을 마우스엔터 했을 때 하위요소가 보이는 코드 */
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).next('#Slide-cremaclub').stop().show();
        $(this).css({'background-color':'#0080ff','color':'#fff'});
    }).mouseleave(function(){
        $(this).next('#Slide-cremaclub').stop().hide();
        $(this).css({'background-color':'#fff','color':'#333'});
    });
    $('#Slide-cremaclub').mouseenter(function(){
        $(this).stop().show();
        $(this).parent().find('>a').css({'background-color':'#0080ff','color':'#fff'})
    }).mouseleave(function(){
        $(this).stop().hide();
        $(this).parent().find('>a').css({'background-color':'#fff','color':'#333'})
    });
});
/* 이전 , 다음 버튼을 클릭했을 때 >  다음 이미지&이전 이미지 */
$(function(){
    $('.slide-cremaclub-prev').click(function(){
        var current = $('.slide-cremaclub-center:visible');
        var prev = current.prev('.slide-cremaclub-center');
        if (prev.length === 0) {
            prev = $('.slide-cremaclub-center:last');
        }
        current.hide();
        prev.show();

        var index = prev.index();
        $('#SlideCremaclubUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideCremaclubUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });

    $('.slide-cremaclub-next').click(function(){
        var current = $('.slide-cremaclub-center:visible');
        var next = current.next('.slide-cremaclub-center');
        if (next.length === 0) {
            next = $('.slide-cremaclub-center:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        $('#SlideCremaclubUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideCremaclubUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });
});
/* 이미지 밑에 li를 마우스오버 했을 떄 index에 따라 이미지 변경 */
$(function(){
    $('#SlideCremaclubbookUl > ul > li > a').mouseover(function() {
        var index = $(this).parent().index();
        $('.slide-cremaclub-center').hide();
        $('.slide-cremaclub-center:eq(' + index + ')').show();
        $('#SlideCremaclubUl > ul > li > a').css({'background-color':'#fff', 'color':'#333'});
        $(this).css({'background-color':'#333', 'color':'#fff'});
    });
});

/* 크레마클럽 SetInterval */
function cremaclubslide(){
    var current = $('.slide-cremaclub-center:visible');
    var next = current.next('.slide-cremaclub-center');
    if(next.length === 0){
        next = $('.slide-cremaclub-center:first');
    }
    current.hide();
    next.show();

    var index = next.index();
    $('#SlideCremaclubUl a').css({'background-color':'#fff', 'color':'#333'});
    $('#SlideCremaclubUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
}
setInterval(cremaclubslide,3000);

/* 슬라이더 - 메인 > CD/LP*/
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).parent().find('#Slide-CDLP').stop().show();
    }).mouseleave(function(){
        $('#Slide-CDLP').stop().hide();
    });
});
/* 이미지를 호버했을 때 이전, 다음 버튼 show */
$(function(){
    $('.slide-CDLP-img').hover(function(){
        $('.slide-CDLP-prev').stop().show();
        $('.slide-CDLP-next').stop().show();
    },function(){
        $('.slide-CDLP-prev').stop().show();
        $('.slide-CDLP-next').stop().show();
    });
});

/* 크레마클럽을 마우스엔터 했을 때 하위요소가 보이는 코드 */
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).next('#Slide-CDLP').stop().show();
        $(this).css({'background-color':'#0080ff','color':'#fff'});
    }).mouseleave(function(){
        $(this).next('#Slide-CDLP').stop().hide();
        $(this).css({'background-color':'#fff','color':'#333'});
    });
    $('#Slide-CDLP').mouseenter(function(){
        $(this).stop().show();
        $(this).parent().find('>a').css({'background-color':'#0080ff','color':'#fff'})
    }).mouseleave(function(){
        $(this).stop().hide();
        $(this).parent().find('>a').css({'background-color':'#fff','color':'#333'})
    });
});
/* 이전 , 다음 버튼을 클릭했을 때 >  다음 이미지&이전 이미지 */
$(function(){
    $('.slide-CDLP-prev').click(function(){
        var current = $('.slide-CDLP-center:visible');
        var prev = current.prev('.slide-CDLP-center');
        if (prev.length === 0) {
            prev = $('.slide-CDLP-center:last');
        }
        current.hide();
        prev.show();

        var index = prev.index();
        $('#SlideCDLPUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideCDLPUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });

    $('.slide-CDLP-next').click(function(){
        var current = $('.slide-CDLP-center:visible');
        var next = current.next('.slide-CDLP-center');
        if (next.length === 0) {
            next = $('.slide-CDLP-center:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        $('#SlideCDLPUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideCDLPUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });
});
/* 이미지 밑에 li를 마우스오버 했을 떄 index에 따라 이미지 변경 */
$(function(){
    $('#SlideCDLPUl > ul > li > a').mouseover(function() {
        var index = $(this).parent().index();
        $('.slide-CDLP-center').hide();
        $('.slide-CDLP-center:eq(' + index + ')').show();
        $('#SlideCDLPUl > ul > li > a').css({'background-color':'#fff', 'color':'#333'});
        $(this).css({'background-color':'#333', 'color':'#fff'});
    });
});

/* 크레마클럽 SetInterval */
function CDLPslide(){
    var current = $('.slide-CDLP-center:visible');
    var next = current.next('.slide-CDLP-center');
    if(next.length === 0){
        next = $('.slide-CDLP-center:first');
    }
    current.hide();
    next.show();

    var index = next.index();
    $('#SlideCDLPUl a').css({'background-color':'#fff', 'color':'#333'});
    $('#SlideCDLPUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
}
setInterval(CDLPslide,3000);

/* 슬라이더 - 메인 > DVD/BD*/
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).parent().find('#Slide-DVDBD').stop().show();
    }).mouseleave(function(){
        $('#Slide-DVDBD').stop().hide();
    });
});
/* 이미지를 호버했을 때 이전, 다음 버튼 show */
$(function(){
    $('.slide-DVDBD-img').hover(function(){
        $('.slide-DVDBD-prev').stop().show();
        $('.slide-DVDBD-next').stop().show();
    },function(){
        $('.slide-DVDBD-prev').stop().show();
        $('.slide-DVDBD-next').stop().show();
    });
});

/* 크레마클럽을 마우스엔터 했을 때 하위요소가 보이는 코드 */
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).next('#Slide-DVDBD').stop().show();
        $(this).css({'background-color':'#0080ff','color':'#fff'});
    }).mouseleave(function(){
        $(this).next('#Slide-DVDBD').stop().hide();
        $(this).css({'background-color':'#fff','color':'#333'});
    });
    $('#Slide-DVDBD').mouseenter(function(){
        $(this).stop().show();
        $(this).parent().find('>a').css({'background-color':'#0080ff','color':'#fff'})
    }).mouseleave(function(){
        $(this).stop().hide();
        $(this).parent().find('>a').css({'background-color':'#fff','color':'#333'})
    });
});
/* 이전 , 다음 버튼을 클릭했을 때 >  다음 이미지&이전 이미지 */
$(function(){
    $('.slide-DVDBD-prev').click(function(){
        var current = $('.slide-DVDBD-center:visible');
        var prev = current.prev('.slide-DVDBD-center');
        if (prev.length === 0) {
            prev = $('.slide-DVDBD-center:last');
        }
        current.hide();
        prev.show();

        var index = prev.index();
        $('#SlideDVDBDUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideDVDBDUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });

    $('.slide-DVDBD-next').click(function(){
        var current = $('.slide-DVDBD-center:visible');
        var next = current.next('.slide-DVDBD-center');
        if (next.length === 0) {
            next = $('.slide-DVDBD-center:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        $('#SlideDVDBDUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideDVDBDUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });
});
/* 이미지 밑에 li를 마우스오버 했을 떄 index에 따라 이미지 변경 */
$(function(){
    $('#SlideDVDBDUl > ul > li > a').mouseover(function() {
        var index = $(this).parent().index();
        $('.slide-DVDBD-center').hide();
        $('.slide-DVDBD-center:eq(' + index + ')').show();
        $('#SlideDVDBDUl > ul > li > a').css({'background-color':'#fff', 'color':'#333'});
        $(this).css({'background-color':'#333', 'color':'#fff'});
    });
});

/* 크레마클럽 SetInterval */
function DVDBDslide(){
    var current = $('.slide-DVDBD-center:visible');
    var next = current.next('.slide-DVDBD-center');
    if(next.length === 0){
        next = $('.slide-DVDBD-center:first');
    }
    current.hide();
    next.show();

    var index = next.index();
    $('#SlideDVDBDUl a').css({'background-color':'#fff', 'color':'#333'});
    $('#SlideDVDBDUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
}
setInterval(DVDBDslide,3000);

/* 슬라이더 - 메인 > 문구/GIFT*/
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).parent().find('#Slide-mungu').stop().show();
    }).mouseleave(function(){
        $('#Slide-mungu').stop().hide();
    });
});
/* 이미지를 호버했을 때 이전, 다음 버튼 show */
$(function(){
    $('.slide-mungu-img').hover(function(){
        $('.slide-mungu-prev').stop().show();
        $('.slide-mungu-next').stop().show();
    },function(){
        $('.slide-mungu-prev').stop().show();
        $('.slide-mungu-next').stop().show();
    });
});

/* mungu를 마우스엔터 했을 때 하위요소가 보이는 코드 */
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).next('#Slide-mungu').stop().show();
        $(this).css({'background-color':'#0080ff','color':'#fff'});
    }).mouseleave(function(){
        $(this).next('#Slide-mungu').stop().hide();
        $(this).css({'background-color':'#fff','color':'#333'});
    });
    $('#Slide-mungu').mouseenter(function(){
        $(this).stop().show();
        $(this).parent().find('>a').css({'background-color':'#0080ff','color':'#fff'})
    }).mouseleave(function(){
        $(this).stop().hide();
        $(this).parent().find('>a').css({'background-color':'#fff','color':'#333'})
    });
});
/* 이전 , 다음 버튼을 클릭했을 때 >  다음 이미지&이전 이미지 */
$(function(){
    $('.slide-mungu-prev').click(function(){
        var current = $('.slide-mungu-center:visible');
        var prev = current.prev('.slide-mungu-center');
        if (prev.length === 0) {
            prev = $('.slide-mungu-center:last');
        }
        current.hide();
        prev.show();

        var index = prev.index();
        $('#SlidemunguUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlidemunguUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });

    $('.slide-mungu-next').click(function(){
        var current = $('.slide-mungu-center:visible');
        var next = current.next('.slide-mungu-center');
        if (next.length === 0) {
            next = $('.slide-mungu-center:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        $('#SlidemunguUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlidemunguUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });
});
/* 이미지 밑에 li를 마우스오버 했을 떄 index에 따라 이미지 변경 */
$(function(){
    $('#SlidemunguUl > ul > li > a').mouseover(function() {
        var index = $(this).parent().index();
        $('.slide-mungu-center').hide();
        $('.slide-mungu-center:eq(' + index + ')').show();
        $('#SlidemunguUl > ul > li > a').css({'background-color':'#fff', 'color':'#333'});
        $(this).css({'background-color':'#333', 'color':'#fff'});
    });
});

/* mungu SetInterval */
function munguslide(){
    var current = $('.slide-mungu-center:visible');
    var next = current.next('.slide-mungu-center');
    if(next.length === 0){
        next = $('.slide-mungu-center:first');
    }
    current.hide();
    next.show();

    var index = next.index();
    $('#SlidemunguUl a').css({'background-color':'#fff', 'color':'#333'});
    $('#SlidemunguUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
}
setInterval(munguslide,3000);

/* 슬라이더 - 메인 > 티켓*/
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).parent().find('#Slide-ticket').stop().show();
    }).mouseleave(function(){
        $('#Slide-ticket').stop().hide();
    });
});
/* 이미지를 호버했을 때 이전, 다음 버튼 show */
$(function(){
    $('.slide-ticket-img').hover(function(){
        $('.slide-ticket-prev').stop().show();
        $('.slide-ticket-next').stop().show();
    },function(){
        $('.slide-ticket-prev').stop().show();
        $('.slide-ticket-next').stop().show();
    });
});

/* ticket를 마우스엔터 했을 때 하위요소가 보이는 코드 */
$(function(){
    $('#SlideWrapMain > li > a').mouseenter(function(){
        $(this).next('#Slide-ticket').stop().show();
        $(this).css({'background-color':'#0080ff','color':'#fff'});
    }).mouseleave(function(){
        $(this).next('#Slide-ticket').stop().hide();
        $(this).css({'background-color':'#fff','color':'#333'});
    });
    $('#Slide-ticket').mouseenter(function(){
        $(this).stop().show();
        $(this).parent().find('>a').css({'background-color':'#0080ff','color':'#fff'})
    }).mouseleave(function(){
        $(this).stop().hide();
        $(this).parent().find('>a').css({'background-color':'#fff','color':'#333'})
    });
});
/* 이전 , 다음 버튼을 클릭했을 때 >  다음 이미지&이전 이미지 */
$(function(){
    $('.slide-ticket-prev').click(function(){
        var current = $('.slide-ticket-center:visible');
        var prev = current.prev('.slide-ticket-center');
        if (prev.length === 0) {
            prev = $('.slide-ticket-center:last');
        }
        current.hide();
        prev.show();

        var index = prev.index();
        $('#SlideticketUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideticketUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });

    $('.slide-ticket-next').click(function(){
        var current = $('.slide-ticket-center:visible');
        var next = current.next('.slide-ticket-center');
        if (next.length === 0) {
            next = $('.slide-ticket-center:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        $('#SlideticketUl a').css({'background-color':'#fff', 'color':'#333'});
        $('#SlideticketUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
    });
});
/* 이미지 밑에 li를 마우스오버 했을 떄 index에 따라 이미지 변경 */
$(function(){
    $('#SlideticketUl > ul > li > a').mouseover(function() {
        var index = $(this).parent().index();
        $('.slide-ticket-center').hide();
        $('.slide-ticket-center:eq(' + index + ')').show();
        $('#SlideticketUl > ul > li > a').css({'background-color':'#fff', 'color':'#333'});
        $(this).css({'background-color':'#333', 'color':'#fff'});
    });
});

/* ticket SetInterval */
function ticketslide(){
    var current = $('.slide-ticket-center:visible');
    var next = current.next('.slide-ticket-center');
    if(next.length === 0){
        next = $('.slide-ticket-center:first');
    }
    current.hide();
    next.show();

    var index = next.index();
    $('#SlideticketUl a').css({'background-color':'#fff', 'color':'#333'});
    $('#SlideticketUl a:eq(' + index + ')').css({'background-color':'#333', 'color':'#fff'});
}
setInterval(ticketslide,3000);
