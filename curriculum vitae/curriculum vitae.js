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
  var time = 0;
  $(".change_btn .next").click(function() {
    if (index < 3) {
      index++;
    } else {
      index = 0;
    }
    $(".highlight_tip span")
      .eq(index)
      .addClass("current")
      .siblings()
      .removeClass("current");
    $(".v_content_list ul li")
      .eq(index)
      .show()
      .css("opacity", 1)
      .siblings()
      .css("opacity", 0)
      .hide();
    time = index;
  });
  $(".change_btn .prev").click(function() {
    if (index == 0) {
      index = 3;
    } else {
      index--;
    }
    $(".highlight_tip span")
      .eq(index)
      .addClass("current")
      .siblings()
      .removeClass("current");

    $(".v_content_list ul li")
      .eq(index)
      .show()
      .css("opacity", 1)
      .siblings()
      .css("opacity", 0)
      .hide();
    time = index;
  });
  $(".highlight_tip span").click(function() {
    $(this)
      .addClass("current")
      .siblings()
      .removeClass("current");
    $(".v_content_list ul li")
      .eq($(this).attr("date-index"))
      .show()
      .css("opacity", 1)
      .siblings()
      .css("opacity", 0)
      .hide();
    time = $(this).attr("date-index");
  });

  setInterval(function() {
    $(".highlight_tip span")
      .eq(time)
      .addClass("current")
      .siblings()
      .removeClass("current");
    $(".v_content_list ul li")
      .eq(time)
      .show()
      .css("opacity", 1)
      .siblings()
      .css("opacity", 0)
      .hide();
    time++;
    if (time == 4) {
      time = 0;
    }
  }, 1000);
});
$(function() {
  $(".label").click(function() {
    $(this)
      .addClass("label-style")
      .siblings()
      .removeClass("label-style");
    $("section")
      .eq(
        $(this)
          .addClass("#section")
          .attr("date-item")
      )
      .show()
      .siblings()
      .hide();
  });
});
