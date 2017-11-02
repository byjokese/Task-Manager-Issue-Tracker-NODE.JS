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

/*Modal add item to subtasks */

var ul_subTaskList = document.getElementById("card-subTaks");

var addSubTaskButtonModal = document.getElementById("addItemToSubtaskModal");
var removeSubTaskButtonModal = document.getElementById("removeItemToSubtaskModal");

addSubTaskButtonModal.onclick = function (event) {
	var li_newSubTask = document.createElement("li");
	li_newSubTask.appendChild(document.createTextNode("Four"));
	//	li_newSubTask.setAttribute("id", "TaskID_SubTaskID");
	li_newSubTask.setAttribute("class", "subtask_li");
	ul_subTaskList.appendChild(li_newSubTask);
	updateVal(li_newSubTask, " ");
}

removeSubTaskButtonModal.onclick = function (event) {
	$('#card-subTaks li.activeSubTask').remove()
}

$("#card-subTaks").on("click", ".subtask_li", function () {
	if ($(this).hasClass('activeSubTask'))
		$(this).removeClass('activeSubTask');
	else {
		$(".subtask_li").removeClass('activeSubTask');
		$(this).addClass('activeSubTask');
	}
});

function updateVal(currentEle, value) {
	$(currentEle).html('<input class="subTaskNewVal" type="text" value="' + value + '" />');
	$(".subTaskNewVal").focus();
	$(".subTaskNewVal").keyup(function (event) {
		if (event.keyCode == 13) {
			$(currentEle).html($(".subTaskNewVal").val().trim());
		}
	});

	/*$(document).click(function () {
		$(currentEle).html($(".thVal").val().trim());
	});*/
}
$("#card-subTaks").on("dblclick", ".subtask_li", function (event) {
	event.stopPropagation();
	var currentEle = $(this);
	var value = $(this).html();
	updateVal(currentEle, value);
});