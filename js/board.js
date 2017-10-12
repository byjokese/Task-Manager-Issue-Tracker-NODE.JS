// On Card Click Event Handler
$(".board-card").click(function () {
	if ($(this).hasClass('board-card-active'))
		$(this).removeClass('board-card-active');
	else {
		$(".board-card").removeClass('board-card-active');
		$(this).addClass('board-card-active');
	}
});

/*
$(".board-card").contextmenu(function () {
	alert("Handler for .contextmenu() called.");
});*/

// =============================================================================
// MODALS
// =============================================================================

// Get the modal
var modal = document.getElementById('editCardModal');

// Get the button that opens the modal
var btn = document.getElementById("editMenuButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}