/*
    jQuery for MaterializeCSS initialization  
*/

$(document).ready(function(){
    $('.slider').slider();
  });

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $(document).ready(function() {
    M.updateTextFields();
  });

  $('#textarea1').val('');
  M.textareaAutoResize($('#textarea1'));

  