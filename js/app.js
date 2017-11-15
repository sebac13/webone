$(document).ready(function(){
    $("#content").load("galery.html");
});

$('.samePage').click(function(){
    var page = $(this).attr('href');
    $("#content").load(page);
    return false;
});

$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});
