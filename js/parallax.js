// przesuwanie divów w nagłówku
$(window).scroll(function(){

  var wScroll = $(this).scrollTop(); //podanie informacji o ile pixeli użytkownik przewinął względem góry strony

  $('.logo').css({
    'transform': 'translate(0px, '+ wScroll /2 +'%)' //przesunięcie diva w dół zraz z przesuwaniem strony, /2 - powoduje spowolnienie 0 połowę, + oznaczają że przesuwaja się o wartoś dodatnią
  });

  $('.third-plan').css({
    'transform': 'translate(0px, '+ wScroll /4 +'%)'
  });

  $('.first-plan').css({
    'transform': 'translate(0px, -'+ wScroll /20 +'%)' // - przed '+ wScroll /20 +' powoduje, że przesuwa się o wartoś ujemną
  });

});
