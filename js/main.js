$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        } 
      
    });
});
//メニュー内を閉じておく
$(function() {
    $('.globalMenuSp a[href]').click(function() {
        $('.globalMenuSp').removeClass('active');
       $('.hamburger').removeClass('active');

    });
  });


$(function() {
 
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > -100) {
            $(".float-button").fadeIn(0);
            } else {
            $(".float-button").fadeOut(300);
        }
 
        const scrollHeight = $(document).height();/*ページ全体の高さ*/
        const scrollPosition = $(window).height() + $(window).scrollTop();/*ページの一番上からスクロールされた距離*/
        const footHeight = $("footer").height();/*フッターの高さ*/
 
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $(".float-button").css({
                "position":"absolute",
                "bottom": 10  + footHeight,
            });
        } else {
            $(".float-button").css({
                "position":"fixed",
                "bottom": "15px",
            });
        }
    });
 
});