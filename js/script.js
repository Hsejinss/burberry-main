$(document).ready(function(){

  //AOS 호출
  AOS.init();
  // AOS 플러그인 연결, CDN 연결, HTML에 AOS 선언 해줬는데도 불구하고 출력이 안 됨
  // -> 왜냐면 스크롤 값에 대한 영향을 받는데 풀페이지를 적용했을 때 스크롤 값을 받아오지 못해서 출력을 못 함
  // ->  그렇기 때문에 scollBar를 생성해줘야함

  // 베너 스와이퍼
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
        delay:2500
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var ww = $(window).width();
  media(); //media 함수 호출
  
  function media(){
    if(ww >= 1200){
      // 풀페이지 플러그인
      new fullpage('#wrap', {

        // 새로고침시 페이지 고정된 상태로 새로고침됨
        anchors: ['firstPage','secondPage','3rdPage','4rdPage','5rdPage','6rdPage'],

        // 스크롤바 생성
        scrollBar: true
      });


      // 서브메뉴박스 
      // 서브메뉴박스에 mouseenter했을 때 메뉴가 나옴 
      $('.menu li').mouseenter(function(){
        // $(this).addClass('active');
        // $(this).siblings().removeClass('active');

        // 속성불러오기 attr
        var result = $(this).attr('data-alt');
        $('.sub-menu').removeClass('active');

        $(`#${result}`).addClass('active');

        $('.sub-menu-box').stop().slideDown().addClass('active');
        // 메서드 기능이긴 하지만 메서드 기능만 사용할 경우에는 오류가 발생할 수 있음 -> .addClass('active');를 함께 써줌

      });

      // 서브메뉴박스에서 mouseleave되야 메뉴가 없어짐
      $('.sub-menu-box').mouseleave(function(){
        $(this).stop().slideUp().removeClass('active');
      });


      // sec-4 fadegallery
      //mouseenter
      $('.inner-gallery').mouseenter(function(){
        var ch = $(this).attr('data-image');
        $('.fade-gallery-photo').css({
          'background-image':`url(${ch})`
        });
      });

      //mouseleave
      $('.inner-gallery').mouseleave(function(){
        var ch = $(this).attr('data-image');
        $('.fade-gallery-photo').css({
          'background-image':``
        });
      });

    }else{
      // 스크롤 이벤트
      // scrollTop 값이 300px 초과면 header-area영역 header-logo의 active 추가, 그 밖의 경우 제거
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
          $('.header-area').addClass('active');
          $('.header-logo').addClass('active');
        }else{
          $('.header-area').removeClass('active');
          $('.header-logo').removeClass('active');
        }
      });

      // 햄버거버튼 메뉴설정
      $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
      });
    }

    // 윈도우 리사이즈
    $(window).resize(function(){
      ww = $(window).width();
      media();
    });
  


} //미디어쿼리 함수 안에 담아줌

});





// GITHUB REPOSITORY 생성후 URL 만들기
// 1. 기존 파일에 있는 파일 용량이 큰 동영상은 제거해줌
// 2. Recent repository에 있는 new 선택
// 3. repository name 지정
// 4. public으로 체크
// 5. add a redame file 
// 6. create repository 선택 (기존에 하던대로 repository 파서 업로드)

// 7. add file -> upload file 
// 8. file drag & drop (html, css, js, img, font)
// 9. 하단에 있는 commit change
// 10. settings에 들어가서 왼쪽 탭 general -> pages
// 11. source 탭에서 branch main

// 무조건 html 파일은 index.html로 저장해줘야함
