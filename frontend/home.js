var home = function() {
	if($('.login-fail').text() === '') {
		$('.login-fail').hide();
	};
	if($('.signup-fail').text() === '') {
		$('.signup-fail').hide();
	};
};

$(document).ready(home);