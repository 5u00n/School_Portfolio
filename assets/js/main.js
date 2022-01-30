$(document).ready(function () {
    $("header").css("height","191px");
    $("footer").css("height","231px");
    hide();
    $("header").load("/include/header.html");
    $(".reposive-menu").load("/include/resposive-menu.htmll");

    $("footer").load("../../include/footer.html");
    unhide();
})



function hide (){
    $(".contaoner").hide();
}
function unhide() {

            $("container").animate( { "opacity": "show",top:"100"} , 5000 );
            $("footer").animate( { "opacity": "show", top:"100"} , 5000 );
}