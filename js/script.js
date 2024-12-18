    //스크롤 애니메이션 효과
    (function () {
    let funcObj = {
        f_0: function () {
        const tl = gsap.timeline();
        tl.from('#section0 .greeting >h1', {
            opacity: 0,
            y: -100,
        });
        tl.from('#section0 .greeting >p', {
            opacity: 0,
            y: 30,
        });
        },
        f_1: function () {
        const tl = gsap.timeline();
        tl.from('#section1 .contents> *', {
            opacity: 0,
            y: 100,
        });
        },
        f_2: function () {
        const tl = gsap.timeline();
        tl.from('#section2 .sec-title >h2', {
            opacity: 0,
            y: -100,
        });
        tl.from('#section2 .sec-title >p', {
            opacity: 0,
            y: -30,
        });
        tl.from('#section2 .pub-inner>li', {
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
        tl.from('#section3 .sec-title >h2', {
            opacity: 0,
            y: -100,
        });
        tl.from('#section3 .sec-title .design-btn', {
            opacity: 0,
            y: -30,
        });
        tl.from('#section3 .design-list .d-thumbnail', {
            opacity: 0,
            scale: 1.5,
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
        tl.from('#section4 .sec-title >h2', {
            opacity: 0,
            y: -100,
        });
        tl.from('#section4 .sec-title >p', {
            opacity: 0,
            y: -30,
        });
        tl.from('#section4 .plan-con-list .plan-list-inner', {
            opacity: 0,
            scale: 1.5,
            stagger: {
            amount: 0.5,
            from: 'random',
            },
            invalidateOnRefresh: true,
        });
        },
        f_5: function () {
        const tl = gsap.timeline();
        tl.from('#section5 .greeting >h2', {
            opacity: 0,
            y: -100,
        });
        tl.from('#section5 .greeting >p', {
            opacity: 0,
            y: 30,
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

    //🎈Design-마우스가 돌아다니는 방향대로 스크롤 되기
    let holder = document.querySelector('.design-list'),
    wrapper = document.querySelector('.design-con-inner'),
    designContent = document.querySelector('.contents.design-con'),
    overflowX,
    mapPositionX;

    function onResize(e) {
    overflowX = holder.offsetWidth - window.innerWidth / 1.2;
    mapPositionX = gsap.utils.mapRange(
        0,
        window.innerWidth,
        overflowX / 2,
        overflowX / -2
    );
    }

    function onMouseMove(e) {
    if (overflowX > 0) {
        let x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
        gsap.to(holder, {
        duration: 1,
        overwrite: true,
        ease: 'power3',
        x: mapPositionX(x),
        });
    }
    }

    window.addEventListener('resize', onResize);
    designContent.addEventListener('mousemove', onMouseMove);
    designContent.addEventListener('touchmove', onMouseMove);
    designContent.addEventListener('pointermove', onMouseMove);
    onResize();

    //버튼누르면 바뀌기
    const graphicBtn = document.querySelector('.design-btn button:nth-child(1)');
    const uxuiBtn = document.querySelector('.design-btn button:nth-child(2)');
    const DesignBtn = document.querySelectorAll('.design-btn button');

    DesignBtn.forEach((Btn) => {
    Btn.addEventListener('click', (e) => {
        console.log(e.target);
        if (!e.target.classList.contains('active')) {
        //토글바꿔
        DesignBtn.forEach((BtnEvent) => {
            BtnEvent.classList.remove('active');
        });
        e.target.classList.add('active');
        }
        if (graphicBtn.classList.contains('active')) {
        document.querySelector('.graphic-part').classList.add('active');
        document.querySelector('.UXUI-part').classList.remove('active');
        } else {
        document.querySelector('.UXUI-part').classList.add('active');
        document.querySelector('.graphic-part').classList.remove('active');
        }

        //✨✨active바뀔때마다 애니메이션효과로 등장
        const Dthumbnail = document.querySelectorAll(
        '#design .design-list .d-thumbnail'
        );
        gsap.from(Dthumbnail, {
        opacity: 0,
        scale: 1.5,
        stagger: {
            amount: 0.5,
            from: 'random',
        },
        y: 100,
        //invalidateOnRefresh:true,
        });
    });
});
