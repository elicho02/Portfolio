$(document).ready(function(){
  //모바일 vh값 구하기
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  //로딩페이지
  $(function () {
    var loading = $('.intro');
    loading.on('scroll touchmove mousewheel', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
    setTimeout(function () {
      loading.fadeOut();
      function scroll_off() {
        loading.off('scroll touchmove mousewheel');
      }
    }, 4000);
  });

  //퀵메뉴
  $(window).scroll(function () {
    let docuTop = $(document).scrollTop();
    if (docuTop > 1) {
      $('.rightMenu').css({ bottom: '45px' });
    } else {
      $('.rightMenu').css({ bottom: '-100%' });
    }
  });

  //스크롤
  $(window).scroll(function () {
    let docuTop = $(document).scrollTop();
    if (docuTop > 1219 && docuTop < 2451) {
      $('.skill li:nth-child(1) div span').css({ width: '85%' });
      $('.skill li:nth-child(2) div span').css({ width: '80%' });
      $('.skill li:nth-child(3) div span').css({ width: '55%' });
      $('.skill li:nth-child(4) div span').css({ width: '70%' });
      $('.skill li:nth-child(5) div span').css({ width: '60%' });
      $('.skill li:nth-child(6) div span').css({ width: '80%' });
      $('.skill li:nth-child(7) div span').css({ width: '90%' });
      $('.skill li:nth-child(8) div span').css({ width: '85%' });
      $('.skill li:nth-child(9) div span').css({ width: '65%' });
    } else {
      $('.skill li div span').css({ width: '0%' });
    }
  });

  //uxui디자인 슬라이드
  var swiperTopNum = $('.uxui .gallery-top').find('.swiper-slide');
  var swiperSubNum = $('.uxuiText .gallery-thumbs').find('.gallery-thumbs');

  var galleryTop = new Swiper('.uxui .gallery-top', {
    slidesPerView: 1.2,
    spaceBetween: 50,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      dynamicBullets: true,
    },
    loop: false,
    loopedSlides: swiperTopNum.length,
  });

  var galleryThumbs = new Swiper('.uxuiText .gallery-thumbs', {
    effect: 'fade',
    spaceBetween: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: false,
    loopedSlides: swiperSubNum.length,
  });

  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;

  //퍼블리싱 swiper 연결
  var swiperTopNum = $('.backImg .gallery-top').find('.swiper-slide');
  var swiperSubNum = $('.pub .gallery-thumbs').find('.gallery-thumbs');

  var galleryTop = new Swiper('.backImg .gallery-top', {
    effect: 'fade',
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      dynamicBullets: true,
    },
    loop: false,
    loopedSlides: swiperTopNum.length,
  });

  var galleryThumbs = new Swiper('.pub .gallery-thumbs', {
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: false,
    loopedSlides: swiperSubNum.length,
  });

  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;

  //반응형 클릭이벤트
  let mobile = $('#mobileView');
  let mobileImg = $('#mImg');
  let tablet = $('#tabletView');
  let tabletImg = $('#tImg');
  let mpop = $('.pMobile');
  let tpop = $('.pTablet');
  let back1 = $('.popBack1');
  let back2 = $('.popBack2');

  $(mobile, mobileImg).click(function () {
    mpop.fadeIn();
    back1.fadeIn();
    back1.on('scroll touchmove mousewheel', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });
  back1.click(function () {
    back1.fadeOut();
    mpop.fadeOut();
  });
  $(tablet, tabletImg).click(function () {
    tpop.fadeIn();
    back2.fadeIn();
    back2.on('scroll touchmove mousewheel', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });
  back2.click(function () {
    back2.fadeOut();
    tpop.fadeOut();
  });

  //모바일 클릭이벤트
  let mWeb_btn = $('#mobileWebBtn');
  let back3 = $('.popBack3');
  let mWeb_img = $('.MobileWeb');

  mWeb_btn.click(function () {
    mWeb_img.fadeIn();
    back3.fadeIn();
    back3.on('scroll touchmove mousewheel', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });
  back3.click(function () {
    back3.fadeOut();
    mWeb_img.fadeOut();
  });

  //plan슬라이드
  var swiper = new Swiper('.planPopup', {
    slidesPerView: 2.6,
    spaceBetween: 25,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var swiper = new Swiper('.planPopupMo', {
    slidesPerView: 1.1,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  //plan클릭이벤트
  $('.p01').click(function () {
    $(this).find('.pimg01').toggleClass('active');
    $(this).find('.pt01').toggleClass('active');
    $('.pp01').stop().slideToggle();
    $('.pp02,.pp03').stop().slideUp();
    $('.pimg02,.pimg03,.pt02,.pt03').removeClass('active');
  });
  $('.btn01').click(function () {
    $(this).toggleClass('active');
    $('.btn02').removeClass('active');
    $('.btn1').stop().fadeIn();
    $('.btn2').stop().fadeOut();
  });
  $('.btn02').click(function () {
    $(this).toggleClass('active');
    $('.btn01').removeClass('active');
    $('.btn2').stop().fadeIn();
    $('.btn1').stop().fadeOut();
  });
  $('.btn03').click(function () {
    $(this).toggleClass('active');
    $('.btn04,.btn05').removeClass('active');
    $('.btn3').stop().fadeIn();
    $('.btn4,.btn5').stop().fadeOut();
  });
  $('.btn04').click(function () {
    $(this).toggleClass('active');
    $('.btn03,.btn05').removeClass('active');
    $('.btn4').stop().fadeIn();
    $('.btn3,.btn5').stop().fadeOut();
  });
  $('.btn05').click(function () {
    $(this).toggleClass('active');
    $('.btn03,.btn04').removeClass('active');
    $('.btn5').stop().fadeIn();
    $('.btn3,.btn4').stop().fadeOut();
  });
  $('.p02').click(function () {
    $(this).find('.pimg02').toggleClass('active');
    $(this).find('.pt02').toggleClass('active');
    $('.pp02').stop().slideToggle();
    $('.pp01,.pp03').stop().slideUp();
    $('.pimg01,.pimg03,.pt01,.pt03').removeClass('active');
  });
  $('.p03, .planbtn').click(function () {
    $('.p03').find('.pimg03').toggleClass('active');
    $('.p03').find('.pt03').toggleClass('active');
    $('.pp03').stop().slideToggle();
    $('.pp01,.pp02').stop().slideUp();
    $('.pimg01,.pimg02,.pt01,.pt02').removeClass('active');
  });

  //모바일 메뉴
  $('.menuClick').click(function () {
    $('.menuView').css({ top: '0' });
  });
  $('.close').click(function () {
    $('.menuView').css({ top: '-100%' });
  });
  $('.mobileMenu li').click(function () {
    $('.menuView').css({ top: '-100%' });
  });

  //footer topBtn
  $('.topBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });


  setInterval(() =>{
  // 현재 날짜 time에 할당
  const time = new Date()

  // time에서 시간만 추출 (시, 분, 초)
  const hour = time.getHours(); //0~23
  const min = time.getMinutes();//0~59
  const sec = time.getSeconds();//0~59

  // 화면상의 객체 선택
  const hh = document.getElementById('hour')
  const mm = document.getElementById('min')
  const ss = document.getElementById('sec')

  // 각도 선택
  if (hour >= 12){
  const DegHour = (hour - 12) * 30 + min * (360 / 12 / 60) // 분을 고려해서 시침이 한번에 움직이지 않게 하기 위함 
  const DegMin = min * 6
  const DegSec = sec * 6

  hh.style.transform = `rotate(${DegHour}deg)`;
  mm.style.transform = `rotate(${DegMin}deg)`;
  ss.style.transform = `rotate(${DegSec}deg)`;
  }
  else{
  const DegHour = (hour - 12) * 30 + min * (360 / 12 / 60) // 0.5를 곱해 60분기준 30도를 추가 ex) 30분이라면 15도의 각도 추가
  const DegMin = min * 6
  const DegSec = sec * 6

  hh.style.transform = `rotate(${DegHour}deg)`;
  mm.style.transform = `rotate(${DegMin}deg)`;
  ss.style.transform = `rotate(${DegSec}deg)`;
  }
  },1000)


/* console.log(document.querySelector('.intro-logo').getTotalLength()); */

});