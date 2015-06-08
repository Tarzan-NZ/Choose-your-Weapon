// Set up PageValue to store player path progress
var pageValue = document.getElementsByTagName('title');

// Set up char_name to store char name
// so the player can remember different saves to different names
// var charName = document.getElementById('name').value;


// function saveGame(){
// 	// Save the Name the player entered
// 	localStorage.SetItem('Name', charName );
// 	// Save the title of the page as our progress to load later
// 	localStorage.SetItem('Progress', pageValue );
// 	alert('Saved');
// }

if (localStorage.getItem('Progress') == null) {

};

$(document).ready(function(){
	// Before we save
	// We check if there is anything already saved
	if (localStorage.getItem('Progress') == null) {
		alert('No save game data found, please start a new game');
	} else {
		$('#new-save').click(function(){
		var charName = document.getElementById('name').value;
		// Save the Name the player entered
		localStorage.setItem('Name', charName );
		// Save the title of the page as our progress to load later
		localStorage.setItem('Progress', pageValue );
		alert(charName+' Character Saved');
		});
	};
});

$(document).ready(function(){
	$('.save-game').click(function(){
	// Save the title of the page as our progress to load later
	localStorage.setItem('Progress', pageValue );
	alert('Progress Saved');
	});
});


// Store charName and PageValue in local storage to begin with
// $(document).ready(function saveGame() {
// 	// Save the Name the player entered
// 	localStorage.SetItem('Name', charName );
// 	// Save the title of the page as our progress to load later
// 	localStorage.SetItem('Progress', pageValue )
// });
