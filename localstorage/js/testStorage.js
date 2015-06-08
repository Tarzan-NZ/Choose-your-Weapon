// Set up PageValue to store player path progress
var pageValue = document.getElementsByTagName('title');

// Set up char_name to store char name
// so the player can remember different saves to different names
var charName = document.getElementById('#name');

function saveGame(){
	// Save the Name the player entered
	localStorage.SetItem('Name', charName );
	// Save the title of the page as our progress to load later
	localStorage.SetItem('Progress', pageValue );
}

$('.save-game').click(saveGame(){
	// Save the Name the player entered
	localStorage.SetItem('Name', charName );
	// Save the title of the page as our progress to load later
	localStorage.SetItem('Progress', pageValue );
});

// Store charName and PageValue in local storage to begin with
// $(document).ready(function saveGame() {
// 	// Save the Name the player entered
// 	localStorage.SetItem('Name', charName );
// 	// Save the title of the page as our progress to load later
// 	localStorage.SetItem('Progress', pageValue )
// });
