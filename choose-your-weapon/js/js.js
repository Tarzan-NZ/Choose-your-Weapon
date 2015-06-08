// record current page as a string
// var pageValue = "1-1-1"
// page value could be title

// Set up our pageValue variable that we will use to save game.
// Leave it blank so we can save player progress to local storage on save game button click
var pageValue = document.getElementById('')
var char_name = document.getElementById('#name'); 

// Listen to the save game button for clicks
// and run the saveGame function

$('.save-game').click(saveGame);

// Listen to the resume button for clicks
// and run the loadGame function
$('.load-game').click(loadGame);

// Listen to the delete button for clicks 
// and run the deleteGame function
// $('.delete-game').click(clearGame);

// Create function to save page title in local storage
if (localStorage.getItem) {};

// var value = $.jstorage.get("key");
// if(!value){
	// if not - load the data from the server 
	// value = load_data_from_server()
	// and save it
	// $.jstorage.set("key" ,value);
//}

$(document).ready(function(){
	$('.save-game').click(function() {
		localStorage.setItem('Name', char_name)
	});

});


// Save Game button will have SaveGame function attached
// that will grab current page title and save it to local storage
// as 'pageValue'

// Load Game button will need to first check
// if there is a value stored in PageValue and if it is false
// alert('No save game found, please start a new game')

// Load page value and go to page
// function attached to all load game buttons
// so .onclick run loadGame function
// which takes you to the page stored in local storage
// as 'pageValue'

// Delete Game button will simply clear
// pageValue 