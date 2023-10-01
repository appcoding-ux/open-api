//Slide의 content 및 content안에 들어가는 img 첫번째 요소만 제외하고 
$(function () {
    $('.SlideMainContent').not(":first").hide();

    // SlideCenterUl li 길이 맞추기 for문
    for (var i = 1; i < 3; i++) {
        $(".SlideCenterUl:eq(" + i + ")").find("li").css({ width: "159.7px" });
        $(".SlideCenterUl:eq(" + i + ")").find("a").css({ width: "159.7px" });
    }
    for (var i = 4; i < 6; i++) {
        $(".SlideCenterUl:eq(" + i + ")").find("li").css({ width: "159.7px" });
        $(".SlideCenterUl:eq(" + i + ")").find("a").css({ width: "159.7px" });
    }
    // 이거까지 li길이 맞추기
    $(".SlideCenterUl:eq(6)").find("li").css({ width: "191.7px" });
    $(".SlideCenterUl:eq(6)").find("a").css({ width: "191.7px" });

    // 모든 SlideImg의 SlideImgChild 첫번째 제외하고 모든 숨기기
    $(".SlideImg").each(function() {
        $(this).find(".SlideImgChild").not(":first").hide();
    });

    // 모든 SlideUl의 첫번째 a태크 css적용
    $(".SlideUl a").not(":first").css({backgroundColor:"#fff",color:"#666"});
    $(".SlideUl a:fisrt").css({backgroundColor:"#333",color:"#fff"});
});

$(function () {
    $("#SlideWrapMain > li").mouseenter(function () {
        // 해당 li 요소에 마우스가 진입하면 .SlideMainContent 보이기
        $(this).find('.SlideMainContent').stop().show();

        // 해당 li 요소 안의 a 요소의 스타일 변경
        $(this).find('>a').css({ backgroundColor: "#0080ff", color: "#fff" });

        // 다른 li 요소의 .SlideMainContent 감추기
        $("#SlideWrapMain > li").not(this).find('.SlideMainContent').stop().hide();

        // 다른 li 요소 안의 a 요소의 스타일 변경
        $("#SlideWrapMain > li").not(this).find('>a').css({ backgroundColor: "#fff", color: "#000" });
    });
});

/* Slide Content 모든 화살표 버튼 */
$(function () {
    $('.SlideImg').hover(function () {
        $('.slide-prev').stop().show();
        $('.slide-next').stop().show();
    }, function () {
        $('.slide-prev').stop().hide();
        $('.slide-next').stop().hide();
    });
});

/* 모든 SlideContent 이전 , 다음 버튼을 클릭했을 때 >  다음 이미지& 이전 이미지 */
$(function () {
    $('.slide-prev').click(function () {
        var current = $(this).siblings('.SlideImgChild:visible');
        var prev = current.prev('.SlideImgChild');
        if (prev.length === 0) {
            prev = $(this).siblings('.SlideImgChild:last');
        }
        current.stop().hide();
        prev.stop().show();

        var index = prev.index();
        $(this).closest('.SlideMainContent').find('.SlideUl a').css({ 'background-color': '#fff', 'color': '#333' });
        $(this).closest('.SlideMainContent').find('.SlideUl a:eq(' + index + ')').css({ 'background-color': '#333', 'color': '#fff' });
    });
    setInterval(Mainslide, 3000);

    $('.slide-next').click(function () {
        var current = $(this).siblings('.SlideImgChild:visible');
        var next = current.next('.SlideImgChild');
        if (next.length === 0) {
            next = $(this).siblings('.SlideImgChild:first');
        }
        current.stop().hide();
        next.stop().show();

        var index = next.index();
        $(this).closest('.SlideMainContent').find('.SlideUl a').css({ 'background-color': '#fff', 'color': '#333' });
        $(this).closest('.SlideMainContent').find('.SlideUl a:eq(' + index + ')').css({ 'background-color': '#333', 'color': '#fff' });
    });
    setInterval(Mainslide, 3000);
});


/* 이미지 밑에 li > a를 마우스 오버 했을 때 이미지의 index 번호에 따라 show */
$(function () {
    $(".SlideUl a").mouseover(function () {
        var index = $(this).parent("li").index();
        var $slideImg = $(this).closest(".SlideMainContent").find(".SlideImg");
        var $slideImgChildren = $slideImg.find(".SlideImgChild");

        $slideImgChildren.stop().hide();
        $slideImgChildren.eq(index).stop().show();

        $(this).css({ backgroundColor: "#333", color: "#fff" });
        $(".SlideUl a").not(this).css({ backgroundColor: "#fff", color: "#333" });
    });
});



/* 슬라이더 SETINTERVAL  */
$(document).ready(function() {
    // 각각의 SlideImg에 대해 setInterval 적용
    $('.SlideImg').each(function() {
        var intervalId = setInterval(Mainslide.bind(this), 2000); // 2초마다 실행 (원하는 시간으로 조정)
        
        // 슬라이드를 클릭했을 때 setInterval 중지
        $(this).click(function() {
            clearInterval(intervalId);
        });
    });
});

function Mainslide() {
    var current = $(this).find('.SlideImgChild:visible');
    var next = current.next('.SlideImgChild');
    if (next.length === 0) {
        next = $(this).find('.SlideImgChild:first');
    }
    current.stop().hide();
    next.stop().show();

    var index = next.index();
    $(this).siblings('.SlideUl').find('a').css({ 'background-color': '#fff', 'color': '#333' });
    $(this).siblings('.SlideUl').find('a:eq(' + index + ')').css({ 'background-color': '#333', 'color': '#fff' });
}

setInterval(Mainslide, 3000);