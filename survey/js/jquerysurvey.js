$(document).ready(function(){
    // SetTimeout function 
     // Will execute the function 
      // after 3 sec
    setTimeout(function(){
      $('.POPmain').css(
        'display', 'block');
    }, 3000)
    });
    $('.submitId').click(
      function(){
      $('.POPmain').css(
        'display', 'none');
    });