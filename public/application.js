$(document).ready(function(){


  // NAV SMOOTH SCROLL

  $("#nav a").click(function(e){
    e.preventDefault();
    console.log("this is e");
    console.log(e);
    $('html,body').scrollTo(this.hash,this.hash)
    console.log("this is this");
    console.log(this);
    console.log("this is hash");
    console.log(this.hash);
  });

  // END NAV SMOOTH SCROLL

  // SCREEN RESIZING

  // window.addEventListener('resize', draw, false);

  // function draw(){
  //   var width = $(document).width();
  //   var height = $(document).height();
  //   console.log("Width: " + width);
  //   console.log("Height: " + height);
  //   $("body").width(width).height(height);
  // }
  // $(document).resize(draw);


  // END SCREEN RESIZING

// function resize(){
//     // do all your stuff here

// }

// $(document).ready(function(){
//     resize();
//     $(window).resize(resize);
// });


}); // end doc