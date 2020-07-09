$(window).scroll(function(){

    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 800);  // 화면 스크롤 수치만큼 화살표 흐려짐(1-스크롤 된 만큼 / 800)

  });
