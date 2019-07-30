

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("50%", 0.3);

  }
  initParallax();


  /* Back top
  -----------------------------------------------*/
  
  $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })

/*
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block"){
    x.style.display = "none"
  } else {
    x.style.display = "block"
  }
}
*/
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.style.display === "block"){
    x.style.display = "none"
  } else {
    x.style.display = "block"
  }
}