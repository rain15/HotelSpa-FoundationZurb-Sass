$(function() {
	$('#gallery a').on('click', function() {
		var image = $(this).find('img').attr('src');
		var fullPath = image.replace('thumbnail', 'fullsize');
		$('#galleryModal #imageContainer').attr('src', fullPath);
	});
});

$(document).foundation();
