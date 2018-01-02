$(document).ready(function(){

  $('#feedback-popup').popup({
    transition: 'all 0.3s'
  });

  $('#feedback').click(function() {
    $('#feedback-popup').popup('show');
  });

  $('#sign-up-popup').popup({
      transition: 'all 0.3s'
  });

  $('#sign-up').click(function() {
      $('#sign-up-popup').popup('show');
  });
  
});
