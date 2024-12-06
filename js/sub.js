$(document).ready(function(){


  //카운트
  var count= 100;
  
   $({ val : 0 }).animate({ val : count }, {
    duration: 3000,
     step: function() {
       var num = numberWithCommas(Math.floor(this.val));
       $(".loadingCount").text(num);
     },
     complete: function() {
       var num = numberWithCommas(Math.floor(this.val));
       $(".loadingCount").text(num);
     }
   });

  //3자리마다 , 찍기
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  //가로스크롤
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });


  //uxui디테일
  $('.main').click(function(){
    $('.deBack,.detail').stop().fadeIn();
    $('.detail').css({overflowY: 'hidden'})
  });
  $('.sub').click(function(){
    $('.deBackSub,.detailSub').stop().fadeIn();
    $('.detailSub').css({overflowY: 'hidden'})
  });
  $('.closeDetail,.deBack,.deBackSub').click(function(){
    $('.deBack,.detail,.deBackSub,.detailSub').stop().fadeOut();
  });


  //모바일 클릭이벤트
  let mWeb_btn = $('#mobileWebBtn')
  let back3 = $('.popBack3')
  let mWeb_img = $('.MobileWeb')

  mWeb_btn.click(function(){
    mWeb_img.fadeIn();
    back3.fadeIn();
    back3.on('scroll touchmove mousewheel', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });
  back3.click(function(){
    back3.fadeOut();
    mWeb_img.fadeOut();
  });


});