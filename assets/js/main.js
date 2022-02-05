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
   
});



function hide (){
    $(".contaoner").hide();
}
function unhide() {

            $("container").animate( { "opacity": "show",top:"100"} , 5000 );
            $("footer").animate( { "opacity": "show", top:"100"} , 5000 );
}