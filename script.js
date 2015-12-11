$(document).ready( function() {

$('.lightbox-link').on("click", function() {
	$("#outer_lightbox").slideToggle();

})
$('#this-image').on("click", function() {
	$('#outer_lightbox').hide();	
})
});