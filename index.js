$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background", "#000");
      $('.navbar-brand img').attr('src', 'images/title-logo5.png');
    } else {
      $(".navbar").css("background", "#0a2254");
      $('.navbar-brand img').attr('src', 'images/title-logo5.png');
    }
  })
})
