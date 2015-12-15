$(document).ready( function() {

$('.lightbox-link').on("click", function(e) {
	e.preventDefault();
	var $image = $('#this-image');
	$image.attr("src", $(this).attr("src"));
	$("#outer_lightbox").slideToggle();

})
$('#this-image').on("click", function() {
	$('#outer_lightbox').hide();	
})

$('.previous').click(function(){
        var nextImageLocation = $(this).next.attr('href');
        $nextLightboxImage.attr('src', nextImageLocation);
        $lightbox.detach($lightboxImage);
        $lightbox.append($nextLightboxImage);
    });
});