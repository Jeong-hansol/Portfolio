$(window).on('load', function () {
     $("#load").hide();
}); // loading 되면 이미지 숨기기

// Mobile Menu
$("#menu-media").hide();
$("#menu-btn").click(function(){
$("#menu-media").slideToggle();
});
$("#menu-media").click(function(){
  $("#menu-media").hide();
});


$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 800);  // 화면 스크롤 수치만큼 화살표 흐려짐(1-스크롤 된 만큼 / 800)
  });


// Top Button 동작
  var $backToTop = $(".back-top");
  $backToTop.hide();

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 150) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });

  $backToTop.on('click', function(e) {
    $("html, body").animate({scrollTop: 0}, 500);
  });



var bannerOffset = $('.menu').offset();
  $(window).scroll( function() {  // window에 스크롤링이 발생하면
    if($(document).scrollTop() > bannerOffset.top ) {   // 위치 및 사이즈를 파악하여 미리 정한 css class를 add 또는 remove 한다.
      $('.menu').addClass('menuFixed');
    }
    else {
      $('.menu').removeClass('menuFixed');
    }
  });

  // 페이지 스크롤되면 프로그레스바 실행
  $(window).on("scroll",function(){
    if($(this).scrollTop()<$("#can_contents").offset().top-$(this).height()){
        $(".progress-bar").fadeOut();
    } else {
      $(".progress-bar").fadeIn();
    }
  });

  // footer - Current Date & Time
  setInterval(function () {
    $(".date").text(moment().tz("Asia/seoul").format("MMM Do"));
    $(".clock").text(moment().tz("Asia/seoul").format("HH:mm:ss"));
  }, 0);

  // niceScroll(페이지 자동 스크롤)
  jQuery.fn.niceScroll = function() {
  	$(this).click(function(e) {
  		var h = $(this).attr('href'),
  		target;

  		if (h.charAt(0) == '#' && h.length > 1 && (target = $(h)).length > 0){
  			var pos = Math.max(target.offset().top, 0);
  			e.preventDefault();
  			$('body,html').animate({
  				scrollTop : pos
  			}, 'slow', 'swing');
  		}
  	});
  };
  $('.scroll').niceScroll();

  // 포트폴리오 view more 페이지
  $(".pfbtn1.btn1 a").click(function (evt) {
      evt.preventDefault();
      $(".morepage01").fadeIn();
  });

  $(".pfbtn2.btn2 a").click(function (evt) {
      evt.preventDefault();
      $(".morepage02").fadeIn();
  });

  $(".pfbtn3.btn3 a").click(function (evt) {
      evt.preventDefault();
      $(".morepage03").fadeIn();
  });

  $(".pfbtn4.btn4 a").click(function (evt) {
      evt.preventDefault();
      $(".morepage04").fadeIn();
  });

  $(".close,.morepage").click(function () {
      $(".morepage").fadeOut();
  });

  $(document).keyup(function (evt) {
      if (evt.which == 27) { $(".morepage").hide(); };
  }); // ESC 키로 닫기

  $(".morepage .more_cont").on({
      "click": function (evt) {
          evt.stopPropagation();
      }
  }); // 창 밖 클릭 시에만 화면 닫기
