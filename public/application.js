$(document).ready(function(){

  // NAV SMOOTH SCROLL
  $("#nav a").click(function(e){
    e.preventDefault();

    // NAV HIGHLIGHT
    var linkList = $(".link");
    for (var i = linkList.length - 1; i >= 0; i--) {
      linkList[i].style.backgroundColor = "#000000";
    };
    this.style.backgroundColor = "#87CEEB";
    // END NAV HIGHLIGHT

    $('html,body').scrollTo(this.hash,this.hash);
  });
  // END NAV SMOOTH SCROLL

// KEY TO SECTION // need to use bind function to retain this value of DOM
  // document.addEventListener("keydown", scrollToNextSection, false)

  // function scrollToNextSection(event) {
  //     // $('html,body').scrollTo(this.hash, this.hash);
  //   if (event.keyCode === 37) {
  //     console.log("left");
  //   } else if (event.keyCode === 38) {
  //     console.log("up");
  //     console.log(this)
  //   } else if (event.keyCode === 39) {
  //     console.log("right");
  //   } else if (event.keyCode === 40) {
  //     console.log("down");
  //     console.log(this)
  //   } else {
  //     console.log("not a directional key");
  //   }
  // }

// END KEY TO SECTION

}); // END DOC