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

  $('.fe_btn li').click(function () {
    // 현재 클릭한 탭에 'active' 클래스 추가
    $('.fe_btn li').removeClass('active');
    $(this).addClass('active');

    // 해당 탭의 텍스트 콘텐츠만 보여주기
    var tabId = $(this).data('alt');
    $('.item_info li').removeClass('active');
    $('#' + tabId).addClass('active');

    // desk_only 이미지도 해당 탭에 맞는 이미지만 활성화
    $('.desk_only li').removeClass('active');
    $('.desk_only li#' + tabId).addClass('active');
  });


    $('.count').each(function () {
      //각각의 요소들을 반복적으로 순회
      let crt = $(this);
      let countTo = crt.attr('data-count');
      //console.log(countTo);

      $({
        countNum: crt.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 3000,
          easing: 'linear',
          step: function () {
            crt.text(Math.floor(this.countNum));
          },
          complete: function () {
            crt.text(this.countNum);
          },
        }
      );
    });
    

/* console.log(document.querySelector('.intro-logo').getTotalLength()); */

});
 //스크롤 애니메이션 효과
    (function () {
    let funcObj = {
        f_0: function () {
        const tl = gsap.timeline();
        tl.from('header .title h1', {
            opacity: 0,
            y: -100,
        });
        tl.from('header .title p', {
            opacity: 0,
            y: 30,
            stagger: 0.3,
        });
        },
        f_1: function () {
        const tl = gsap.timeline();
        tl.from('.content1 .aboutTitle', {
            opacity: 0,
            y: -100,
        });
        tl.from('.content1 .aboutLeft', {
            opacity: 0,
            y: -30,
        });
        tl.from('.content1 .aboutRight', {
            opacity: 0,
            x: 500,
            stagger: {
            amount: 0.3,
            from: 'random',
            },
        });
        },
        f_3: function () {
        const tl = gsap.timeline();
        tl.from('.contentFront .title', {
            opacity: 0,
            y: -100,
            stagger: 0.3,
        });
        tl.from('.contentFront .fe_btn', {
            opacity: 0,
            y: -30,
            stagger: {
            amount: 0.5,
            from: 'random',
            },
            y: 100,
            invalidateOnRefresh: true,
        });
        },
        f_4: function () {
        const tl = gsap.timeline();
        tl.from('.content3 .pulishing .title', {
            opacity: 0,
            y: -100,
        });
        tl.from('.content3 .pulishing .swiper-wrapper', {
          opacity: 0,
          y: -30,
          stagger: {
            amount: 0.5,
            from: 'random',
            },
            invalidateOnRefresh: true,
        });
        },
        f_5: function () {
        const tl = gsap.timeline();
        tl.from('.content4 .responsive .title', {
            opacity: 0,
            y: -100,
        });
        tl.from('.content4 .responsive .page', {
          opacity: 0,
          y: 30,
          stagger: 0.3,
        });
        },
    };

    let section = document.querySelectorAll('section');

    funcObj['f_0'](); //스크롤과 상관없이 첫번째는 먼저 실행이 되게 함

    window.addEventListener('scroll', function () {
        let scroll = document.scrollingElement.scrollTop;

        for (let i = 0; i < section.length; i++) {
        //스크롤이 되었을때 섹션이 뷰포트에 들어왔으면 그때 섹션함수를 실행함
        //console.log('높이',section[i].offsetTop)
        //console.log('스크롤높이',scroll)

        if (scroll == section[i].offsetTop) {
            funcObj['f_' + i]();
            //console.log(i)
        }
        }
    });
    })();

    
  



