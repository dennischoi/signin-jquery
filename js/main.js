$(document).on('ready', function() {

  $('.signin').on('click', function() {
    $('.modal').fadeIn();
  });

  $('.close').on('click', function() {
    $('.modal').fadeOut();
  });

  $('.submit').on('click', function() {
    $("input").addClass("error");
    // $('.error').error(function() {
      alert("ERROR... Calling the popo...")
    // });
  });

  $('input').on('mouseenter', function() {
    $("input").removeClass("error");
  });

  $()



});
