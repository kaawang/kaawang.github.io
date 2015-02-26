$(document).ready(function(){


  // NAV SMOOTH SCROLL

  $("#nav a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash);
  });

  // END NAV SMOOTH SCROLL

  // SCREEN RESIZING

  // $(window).resize(function(){
  //   $(".section").text("hello")
  // });

  // END SCREEN RESIZING



}); // end doc