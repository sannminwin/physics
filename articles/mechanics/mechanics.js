$(document).ready(function(){
    $(".navbar-toggler").on("click",function(){
        $("#navbarPhy").slideToggle();
        if( $("a.nav-link").on("click",function(){
            $("#navbarPhy").slideUp();
        }));
    });
});