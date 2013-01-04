$(document).ready(function() {
    $('#menu a').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2500,'easeInOutExpo');
        event.preventDefault();
    
});
            $(function() {                   
  $('#web').waypoint(              
    function() {
      $('#skill1').addClass('activebar1');
      $('#skill2').addClass('activebar2');
      $('#skill3').addClass('activebar3');
      $('#skill4').addClass('activebar4');
    }
  )
});
      $(function() {                     
      $('#menu').waypoint(              
        function() {
          $('#menu').addClass('activenav').removeClass('nav');
          }
        
      )});
            
    $("#login").hover(function () {
          $('#login').hide('slow')
          $('#circlecontent').show()  
    });
  

       
});