$(function(){


    // @언어선택
    // 새창으로 이동

    $('#langBtn').click(function(){
        url=$('#langList').val();
        window.open(url);
    })

    // @메인슬라이드

    mainSlide = new Swiper('.sc-visual .swiper',{
        loop: true,
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
        pagination: {
            el:".fraction",
            type:"fraction"
        },
        navigation: {
            nextEl:".next",
            prevEl:".prev"
        },
        on:{
            "slideChange":function(){
                if (this.realIndex >= 2) {
                    $('.sc-visual .btn-nav.citizen').addClass('on').siblings().removeClass('on');
                } else {
                    $('.sc-visual .btn-nav.news').addClass('on').siblings().removeClass('on');
                    
                }
            }
        }
    })

    $('.sc-visual .autoplay').click(function(){
        if ($(this).hasClass('on')) {
            mainSlide.autoplay.start()
        } else {
            mainSlide.autoplay.pause()
        }

        $(this).toggleClass('on');
    })

    $('.sc-visual .group-nav .btn-nav').click(function(){
        idx=$(this).data('idx');
        $(this).addClass('on').siblings().removeClass('on');
        mainSlide.slideToLoop(idx)
    })
    //스크롤이벤트

    $(window).scroll(function(){
        curr = $(this).scrollTop();
        if(curr > 0){
            $('.top-btn').addClass('show')
        }else{
            $('.top-btn').removeClass('show')
        }
    })
    $(window).trigger('scroll');

    //배너슬라이드

    var bannerSlide =  new Swiper(".sc-bannerslide .swiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        slidesPerView:3,
         spaceBetween:43,
        autoplay: {
            delay:2500,
            disableOnInteraction: false,
        },
        loop: true,
    })
    
    $('.sc-bannerslide .autoplay').click(function(){
        if ($(this).hasClass('on')) {
            bannerSlide.autoplay.start()
        } else {
            bannerSlide.autoplay.pause()
        }

        $(this).toggleClass('on');
    })

    $('.btn-related').click(function(e){
        e.preventDefault();
        if($(this).hasClass('on')){
            $('.btn-related').removeClass('on').siblings('.sub-menu').slideUp()
        }else{
            $('.btn-related').removeClass('on').siblings('.sub-menu').slideUp()
            $(this).addClass('on').siblings('.sub-menu').slideDown()
        }
    }) 

    $(document).click(function(e){
        if($('.sc-related').has(e.target).length === 0) {
            $('.btn-related').removeClass('on').siblings('.sub-menu').slideUp()
        }
    })

    $('.sc-related .sub-menu li:first-child').keydown(function(e){
        if(e.keyCode === 9 && e.shiftKey) {
            $('.btn-related').removeClass('on').siblings('.sub-menu').slideUp()
        }
    })
    $('.sc-related .sub-menu li:last-child').keydown(function(e){
        if(e.keyCode === 9 && !e.shiftKey) {
            $('.btn-related').removeClass('on').siblings('.sub-menu').slideUp()
        }
    })

    })



