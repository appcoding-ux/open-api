$(function () {
  var isRotated = false;

  $(".book").click(function () {
    if (isRotated) {
      $(this).css("transform", "rotateY(35deg)");
      isRotated = false;
    } else {
      $(this).css("transform", "rotateY(180deg)");
      isRotated = true;
    }
  });

  $(".book").hover(
    function () {
      if (!isRotated) {
        $(this).css("transform", "rotateY(35deg)");
      }
    },
    function () {
      if (!isRotated) {
        $(this).css("transform", "rotateY(0deg)");
      }
    }
  );
});

$(function () {
  var result = $(".onclickbox").length;
  var random = Math.floor(Math.random() * result);

  $(".onclickbox").hide().eq(random).stop().show();

  $(".onclickbox-button").click(function () {
    $(this).parent().stop().hide();

    $("#Slidewrap").height(656);

    $("#Slide-Center").height(656);

    $("#Slide-Center-text").height(656);

    $("#text-info-bot").height(515);

    $("#text-info-bot-right").css("min-height", "523px");
  });
});

$(function () {
  var i = 1;
  $(".minus-button").click(function () {
    --i;
    if (i < 1) {
      i = 1;
      alert("1개 이상 구매 가능합니다");
    } else {
      $("#quantity").val(i);
    }
  });
  $(".plus-button").click(function () {
    ++i;
    if (i > 1000) {
      i = 1000;
      alert(
        "[내가 가진 것을 세상이 원하게 하라]은 최대허용 주문수량 1,000을 초과하였습니다."
      );
    } else {
      $("#quantity").val(i);
    }
  });
});
//스크롤 fixed
