$(document).ready(function(){

  AOS.init({duration: 1000});

  /* swiper */
  var swiper = new Swiper(".photoSlideS", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    freeMode: true,
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

  var swiperTopNum = $('.gallery-top').find('.swiper-slide');
	var swiperSubNum = $('.gallery-thumbs').find('.gallery-thumbs');

	var galleryTop = new Swiper('.gallery-top', {
    	spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
			  clickable: true,
			  type : 'bullets',
        dynamicBullets: true,
		  },
		loop: true,
		loopedSlides: swiperTopNum.length
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
    	spaceBetween: 0,
    	navigation: {
    		nextEl: '.swiper-button-next',
        	prevEl: '.swiper-button-prev',
    	},
    	centeredSlides: true,
    	slidesPerView: 'auto',
    	touchRatio: 0.2,
    	slideToClickedSlide: true,
		  loop: true,
		  loopedSlides: swiperSubNum.length
    });

    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;


    var swiper = new Swiper(".searchSlide", {
      slidesPerView: 2.5,
      spaceBetween: 20,
      freeMode: true,
    });

});