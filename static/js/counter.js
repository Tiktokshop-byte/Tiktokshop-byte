$(function () {
  $(window).on("load scroll", function () {
    $(".js-count").each(function () {
      var txtPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > txtPos - windowHeight + windowHeight / 5) {
        if ($(".js-num", this).attr("data-num").indexOf(".") > -1) {
          var rounding = 1;
        } else {
          var rounding = 0;
        }
        $(".js-num", this).numerator({
          easing: "linear", //カウントアップの動き
          duration: 1000, //カウントアップの時間
          toValue: $(".js-num", this).attr("data-num"), //カウントアップする数値
          rounding: rounding, //小数点以下の桁数（初期値：0）
        });
      }
    });
  });
  setTimeout(function () {
    $(".motion").removeClass("ready");
  }, 900);
});
