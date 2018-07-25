$(document).ready(function() {    
    $(".menu-toggle").click(function() {
        $('ul').toggleClass('opening');
        $(this).toggleClass('open');
        $(".header-text").toggle();
    })
})