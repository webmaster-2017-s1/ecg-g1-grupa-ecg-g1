
  $(document).ready(function(){
    // show/hide scroll buttnon
    $(window).scroll(function(){
      if($(this).scrollTop() > 200) {
        $('.scrollToTop').fadeIn();
      } else {
          $('.scrollToTop').fadeOut();
      }
    });

        //smooth scrolling to top
          $('.scrollToTop').click(function(){
            $('html,body').animate({scrollTop: 0}, 1000); // 1000 - aniamtion time
          });
  });

// show gallery
      $("#btn_1").click(function(){
            $('html, body').animate({
                scrollTop: $(gallery_1).offset().top
          }, 1000);
        });
