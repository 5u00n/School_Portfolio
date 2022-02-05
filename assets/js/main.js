"use strict";

$(document).ready(function () {
    $("header").css("height","191px");
    $("footer").css("height","231px");
    hide();
    $("header").load("/include/header.html");
    $(".responsive-menu").load("/include/resposive-menu.html");

    $("footer").load("../../include/footer.html");
    unhide();

    //console.log("button clicked");
   


    var url = window.location.href+"#";

    // passes on every "a" tag
    $("nav a").each(function() {
        
        // checks if its the same on the address bar
        if (url == (this.href)) {
          //  console.log(this.href+" : "+url);
            $(this).closest("a").addClass("active");
            //for making parent of submenu active
           $(this).closest("a").parent().parent().addClass("active");
        }
    });
});



function hide (){
    $(".contaoner").hide();
}
function unhide() {

            $("container").animate( { "opacity": "show",top:"100"} , 5000 );
            $("footer").animate( { "opacity": "show", top:"100"} , 5000 );
}