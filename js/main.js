$(document).on('ready', function() {

  $('.signin').on('click', function() {
    $('.modal').fadeIn();
  });

  $('.close').on('click', function(event) {
    $('.modal').fadeOut();
    event.stopPropagation();
  });
// BONUS

  $('.modal').on('click', function() {
    $('.modal').fadeOut();
    // event.stopPropagation();
  });


  $('.submit').on('click', function(event) {
    $("input").addClass("error");
    // .stopPropagation has to be after the event since it reads top down
    event.stopPropagation();
    // $('.error').error(function() {
      alert("ERROR... Calling the popo...")
    // });
  });

  // $('input').on('mouseenter', function() {
  //   $("input").removeClass("error");
  // });

  $('input').on('click', function(event) {
    $('input').removeClass("error");
    event.stopPropagation();
  });




});
