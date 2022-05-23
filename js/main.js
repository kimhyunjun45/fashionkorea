$(function(){
    // swipe-slide
    window.mySwipe = $('#mySwipe').Swipe({
        startSlide:0,                           // 초기 첫 배너 노출
        auto:5000,                               // 0.3초 후에 이동
        stopPropagation:true,                   // 하위 요소에 이벤트 전달 차단
        disableScroll:true,                     // 슬라이드 배너에 스크롤바 생성 차단
        callback:function(index,element){},     // 이벤트 완료시 콜백함수 실행
        transitionEnd:function(index,element){} // 화면 전환시 익명함수 실행
    }).data('Swipe');

    // swipe-service
    new Swiper('.service_slider .swiper-container', {
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true,
        paginationClickable: true,
        slidesPerView: 6,
        grabCursor: true,
        // 이전,다음 버튼 실행
        nextButton: '.nextBtn',
		prevButton: '.prevBtn'
    });

    // notice 공지사항~채용공고
    $(".notice .notice_inner .left .title ul li").on("click",function(){
        $(this).addClass('on').siblings().removeClass('on');

        var x = $(this).index();
        $(".notice .notice_inner .left .contents>ul>li").eq(x).removeClass('off').siblings().addClass('off');
        if((x+1)==1){
            $(".more>a").attr("href","sub_notice.html")
        }
    });
    
});