$(function(){
    // Traverse the DOM and use the slideToggle function

	$(function(){
		// All jQuery code goes here
		
		$('.dropdownMenu > li').hover(function(){
			$(this).children("ul").slideToggle(200);
		});


	})

})