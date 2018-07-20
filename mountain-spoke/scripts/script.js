$('.menu-toggle').click(function() {
    alert( "Handler for .click() called." );
    $('ul').toggleClass('opening');
    $(this).toggleClass('open');
})