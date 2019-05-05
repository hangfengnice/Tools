$(function() {
  $(".head_jl").hover(
    function() {
      $(this)
        .stop()
        .animate({ bottom: "6px" }, 600, null);
    },
    function() {
      $(this).animate({ bottom: "-6px" }, 600, null);
    }
  );
});
$(function() {
  var index = 0;
  $(".change_btn .next").click(function() {
    if (index < 3) {
      index++;
    } else {
      index = 0;
    }
    $('.highlight_tip span').eq(index).addClass('current').siblings().removeClass('current');
    $(".v_content_list ul li")
      .eq(index)
      .show().css('opacity',1)
      .siblings().css('opacity',0)
      .hide();
  });
  $(".change_btn .prev").click(function() {
    if (index == 0) {
      index = 3;
    } else {
      index--;
    }
    $('.highlight_tip span').eq(index).addClass('current').siblings().removeClass('current');

    $(".v_content_list ul li")
      .eq(index)
      .show().css('opacity',1)
      .siblings().css('opacity',0)
      .hide();
  });
});
