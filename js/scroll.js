
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
          $("#gallery_8").fadeOut();
          $("#gallery_7").fadeOut();
          $("#gallery_6").fadeOut();
          $("#gallery_5").fadeOut();
          $("#gallery_4").fadeOut();
          $("#gallery_3").fadeOut();
          $("#gallery_2").fadeOut();
          $("#gallery_1").fadeIn(1000);
          setTimeout(function(){
            $('html, body').animate({
                scrollTop: $(gallery_1).offset().top
            }, 800);
          }, 500);
        });

        $("#btn_2").click(function(){
            $("#gallery_8").fadeOut();
            $("#gallery_7").fadeOut();
            $("#gallery_6").fadeOut();
            $("#gallery_5").fadeOut();
            $("#gallery_4").fadeOut();
            $("#gallery_3").fadeOut();
            $("#gallery_1").fadeOut();
            $("#gallery_2").fadeIn(1000);
            setTimeout(function(){
              $('html, body').animate({
                  scrollTop: $(gallery_2).offset().top
              }, 800);
            }, 500);
          });

          $("#btn_3").click(function(){
              $("#gallery_8").fadeOut();
              $("#gallery_7").fadeOut();
              $("#gallery_6").fadeOut();
              $("#gallery_5").fadeOut();
              $("#gallery_4").fadeOut();
              $("#gallery_2").fadeOut();
              $("#gallery_1").fadeOut();
              $("#gallery_3").fadeIn(1000);
              setTimeout(function(){
                $('html, body').animate({
                    scrollTop: $(gallery_3).offset().top
                }, 800);
              }, 500);
            });

            $("#btn_4").click(function(){
                $("#gallery_8").fadeOut();
                $("#gallery_7").fadeOut();
                $("#gallery_6").fadeOut();
                $("#gallery_5").fadeOut();
                $("#gallery_3").fadeOut();
                $("#gallery_2").fadeOut();
                $("#gallery_1").fadeOut();
                $("#gallery_4").fadeIn(1000);
                setTimeout(function(){
                  $('html, body').animate({
                      scrollTop: $(gallery_4).offset().top
                  }, 800);
                }, 500);
              });

              $("#btn_5").click(function(){
                  $("#gallery_8").fadeOut();
                  $("#gallery_7").fadeOut();
                  $("#gallery_6").fadeOut();
                  $("#gallery_4").fadeOut();
                  $("#gallery_3").fadeOut();
                  $("#gallery_2").fadeOut();
                  $("#gallery_1").fadeOut();
                  $("#gallery_5").fadeIn(1000);
                  setTimeout(function(){
                    $('html, body').animate({
                        scrollTop: $(gallery_5).offset().top
                    }, 800);
                  }, 500);
                });

                $("#btn_6").click(function(){
                    $("#gallery_8").fadeOut();
                    $("#gallery_7").fadeOut();
                    $("#gallery_5").fadeOut();
                    $("#gallery_4").fadeOut();
                    $("#gallery_3").fadeOut();
                    $("#gallery_2").fadeOut();
                    $("#gallery_1").fadeOut();
                    $("#gallery_6").fadeIn(1000);
                    setTimeout(function(){
                      $('html, body').animate({
                          scrollTop: $(gallery_6).offset().top
                      }, 800);
                    }, 500);
                  });

                  $("#btn_7").click(function(){
                      $("#gallery_8").fadeOut();
                      $("#gallery_6").fadeOut();
                      $("#gallery_5").fadeOut();
                      $("#gallery_4").fadeOut();
                      $("#gallery_3").fadeOut();
                      $("#gallery_2").fadeOut();
                      $("#gallery_1").fadeOut();
                      $("#gallery_7").fadeIn(1000);
                      setTimeout(function(){
                        $('html, body').animate({
                            scrollTop: $(gallery_7).offset().top
                        }, 800);
                      }, 500);
                    });

                  $("#btn_8").click(function(){
                      $("#gallery_7").fadeOut();
                      $("#gallery_6").fadeOut();
                      $("#gallery_5").fadeOut();
                      $("#gallery_4").fadeOut();
                      $("#gallery_3").fadeOut();
                      $("#gallery_2").fadeOut();
                      $("#gallery_1").fadeOut();
                      $("#gallery_8").fadeIn(1000);
                      setTimeout(function(){
                        $('html, body').animate({
                            scrollTop: $(gallery_8).offset().top
                        }, 800);
                      }, 500);
                    });
