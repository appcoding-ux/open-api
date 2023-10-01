$(function(){
    $('.location-sub').hide();

    $('#location-content > ul li').click(function(e){
        e.preventDefault();
        var $locationSub = $(this).find('.location-sub');
        $('.location-sub').not($locationSub).hide();
        $locationSub.stop().toggle();

        var $img = $(this).find("img");
        if ($locationSub.is(':visible')) {
            $img.css('transform','rotate(180deg)');
        } else {
            $img.css('transform', 'none');
        }
    });

    $('#location-content > ul li').click(function(e){
        e.preventDefault();
        if ($(this).find('.location-sub').is(':hidden')) {
            $('.location-sub:visible').hide();
            $('img[style*="rotate(180deg)"]').css('transform', 'none');
        }
    });
});