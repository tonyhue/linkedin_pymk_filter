(function(){
	console.log('it works!');
	removeNonMembers();
	$(window).on('scrollDown', function(){
		removeNonMembers();
		console.log('execute!');
	});
	// memberIntervalHandler = setInterval(removeNonMembers, 5000);
})();

function removeNonMembers(){
	var peopleCards = $('#pymk-people-card').find('li');
	var tmp = '';
	peopleCards.each(function(index){
		var $this = $(this);
		console.log(index);

		var checkMemberId = $this.data('member-id');
		if (typeof checkMemberId == 'string') {
			var memberFirstName = $this.data('first-name');
			var memberLastName  = $this.data('last-name');
			console.log(memberFirstName + ' ' + memberLastName + ' (' + checkMemberId + ') is a non-LinkedIn member.');
			$this.slideUp(2500, function(){
				$this.remove();
			});
		}
	});
}