$(function(){
	$('.contter-p>a').click(function(){
			console.log(1);
			$('iframe').get(0).src = $(this).get(0).href;
			return false;
		});
});