
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
          $("#gallery_2").fadeOut();
          $("#gallery_1").fadeIn(1000);
          setTimeout(function(){
            $('html, body').animate({
                scrollTop: $(gallery_1).offset().top
            }, 800);
          }, 500);
          //move to top of gallery

  });

      $("#btn_2").click(function(){
          $("#gallery_1").fadeOut();
          $("#gallery_2").fadeIn(1000);
          setTimeout(function(){
            //move to top of gallery
            $('html, body').animate({
                scrollTop: $(gallery_2).offset().top
            }, 800);
          }, 500);

  });

      // $("#btn_2").click(function(){
      //   $("#gallery_1").fadeOut();
      //     $("#gallery_2").fadeIn(1000);
      //     $('html, body').animate({
      //         scrollTop: $(gallery_2).offset().top
      //     }, 800);
      // });
