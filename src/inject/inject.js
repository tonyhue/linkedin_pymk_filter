(function(){
	disableNonMembers();

	// activate when user scrolls down page
	var lastScrollTop = 0;
	$(window).on('scroll', function(){
		// check if scrolling down page
		var st = $(this).scrollTop();
		if ( st > lastScrollTop ) {
			// reached 3/4 of the way down the page?
			if ( st > executePoint(0.6) ) {
				console.log('execute!');
				disableNonMembers();
			}
		}
		// reset scroll position
		lastScrollTop = st;
	});
})();

/**
 * Detects the non-members listed but button class
 */
 function disableNonMembers(){
	// searches removes button for non-members to connect
	// removes hover styles on contact card
	var nonMemberCards = $('#pymk-people-card')
		.find('.bt-invite')
		.slideUp(1800, function(){
			$(this).remove();
		})
		.closest('li.card')
		.css({
			'box-shadow': 'none',
			'margin-top': '0',
			'margin-bottom': '10px'
		});
 }

/**
* Calculate scroll position for executing disableNonMembers()
*/
 function executePoint(distance){
	// var contentBottom = $('#bt-pymk-showmore').offset().top;
	var contentBottom = $(document).height() * distance;
	console.log(contentBottom);
	return contentBottom;
 }