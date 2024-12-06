window.onload = function () {
  var elm = ".section";
  $(elm).each(function (index) {
    if (index > 1) return;

      $(this).on("mousewheel DOMMouseScroll", function (e) {
          e.preventDefault();
          var delta = 0;
          if (!event) event = window.event;
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } 
          else if (event.detail)
              delta = -event.detail / 3;
          var moveTop = $(window).scrollTop();
          var elmSelecter = $(elm).eq(index);

          if (delta < 0) {
              if ($(elmSelecter).next() != undefined) {
                  try{
                      moveTop = $(elmSelecter).next().offset().top;
                  }catch(e){}
              }

          } else {
              if ($(elmSelecter).prev() != undefined) {
                  try{
                      moveTop = $(elmSelecter).prev().offset().top;
                  }catch(e){}
              }
          }
           
          $("html,body").stop().animate({
              scrollTop: moveTop + 'px'
          }, {
              duration: 800, complete: function () {
              }
          });
      });
  });
}


$(document).ready(function(){

  AOS.init({duration: 1000});

  /* swiper */
  var swiper = new Swiper(".photoSlideS", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
  });
  
  var swiper = new Swiper(".photoSlideL", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1.5,
      slideShadows: false,
    }
  });

  var bullet = ['WOMEN', 'MEN', 'GIFT'];
  var swiper = new Swiper(".col", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (bullet[index]) + "</span>";
      },
    },
  });


  $(window).scroll(function(){
    let docuTop = $(document).scrollTop();
    if(docuTop > 1000){
      $('.logo a').addClass('active');
      $('nav ul').css({'color':'#363432'});
    }else{
      $('.logo a').removeClass('active');
      $('nav ul').css({'color':'#fff'});
    }
  });

  $('.menuIcon').click(function(){
    $('.menu').stop().fadeIn();
  });
  $('.close').click(function(){
    $('.menu').stop().fadeOut();
  });

  $('.shop').click(function(){
    $('.shopMenu').stop().slideToggle();
  });

});