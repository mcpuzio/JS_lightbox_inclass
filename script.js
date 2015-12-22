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
        $nextLightboxImage.attr('src', $(this).attr("src"));
        $lightbox.detach($lightboxImage);
        $lightbox.append($nextLightboxImage);
    });

$(".").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
	});
});