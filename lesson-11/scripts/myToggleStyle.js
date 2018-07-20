$(function(){
    // myToggleStyle() flips background color of form field on button press
    // also puts default value in field
    var nameVal = $('input[name="nameVal"]');
    if( nameVal.val() == '' ){
        nameVal.val( 'Porter Rockwell' );
    }

    var toggleStyle = function(){
        var logo = $('input[type="text"]');	
        if(logo.css('background-color') === 'rgb(255, 0, 0)'){
            logo.css('background-color', 'rgb(255, 255, 255)');
        } else {
            logo.css('background-color', 'rgb(255, 0, 0)');
        }
    }
    $('#ReqAQuoteBtn').click(toggleStyle);
})