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
var modalAdd = document.getElementById('addCardModal');
var modalEdit = document.getElementById('editCardModal');

// Get the button that opens the modal
var btnAdd = document.getElementById("addMenuButton");
var btnEdit = document.getElementById("editMenuButton");

// Get the <span> element that closes the modal
var closeModal = document.getElementsByClassName("closeModal")[0];

// When the user clicks on the button, open the modal
btnAdd.onclick = function () {
	modalAdd.style.display = "block";
}

btnEdit.onclick = function () {
	modalEdit.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function (event) {
	modalEdit.style.display = "none";
	modalAdd.style.display = "none";
	console.log(event)
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modalEdit) {
		modalEdit.style.display = "none";
	}
	if (event.target == modalAdd) {
		modalAdd.style.display = "none";
	}
}