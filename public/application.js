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

}); // END DOC