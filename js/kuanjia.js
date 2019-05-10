$(function () {
	$('.contter-p>a').click(function () {
		$('iframe').get(0).src = $(this).get(0).href;
		return false;
	});
});
