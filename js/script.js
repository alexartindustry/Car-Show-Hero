/*
$(document).ready(function(){
   $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  $('#opennav').on('click', function(e) {
      document.getElementById("mySidenav").style.top = "0";
      document.getElementById("mySidenav").style.opacity = "1";
  });

   $('#closenav').on('click', function(e) {
     document.getElementById("mySidenav").style.top = "-100%";
     document.getElementById("mySidenav").style.opacity = "0";
  });
});
*/

document.addEventListener('DOMContentLoaded', function(){ //document.ready

  document.getElementById('opennav').onclick = function(e){
      e.preventDefault();
      document.getElementById("mySidenav").style.top = "0";
      document.getElementById("mySidenav").style.opacity = "1";
  }

  document.getElementById('closenav').onclick = function(e){
      e.preventDefault();
      document.getElementById("mySidenav").style.top = "-500%";
      document.getElementById("mySidenav").style.opacity = "0";
  }

});


