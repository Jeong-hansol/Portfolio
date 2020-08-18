$(window).on('load', function () {
     $("#load").hide();
}); // loading 되면 이미지 숨기기

// Mobile Menu
$("#menu-media").hide();
$("#menu-btn").click(function(){
$("#menu-media").slideToggle();
});


$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 800);  // 화면 스크롤 수치만큼 화살표 흐려짐(1-스크롤 된 만큼 / 800)
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
