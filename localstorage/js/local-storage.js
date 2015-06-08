var jake = {
	name: "jake",
	age: 26,
	location: "wellington",
	interests: ["code","games"]
}

// turn the object jake into a string
var stringified = JSON.stringify( jake );

localStorage.setItem('jake', stringified);

console.log( JSON.parse(localStorage.getItem('jake'))   );
console.log( jake );




$('document').ready( function(){

	// if the user has support for local storage
	if( Modernizr.localstorage) {

		//find the advanced-form-functions element and insert new buttons
		$('#advanced-form-functions').append('<button id="save">save<button');

		// listen to the save button for clicks
		$('#save').click( saveForm );

		//listen to the add button for clicks
		$('#add').click( addNewDiv);
		

		// if the user has information stored in the browser
		// display that information in the form (on request)
		if( localStorage.getItem('fullname') || localStorage.getItem('email') ) {

			// prompt the user to populate their form
			var response = confirm('Do you want to use your saved form data?');

			// if the user said yes populate the form with their saved data
			if( response ) {

				populateForm();

			} else {

				//user does not want to run their old data should we delete it
				response = confirm(' do you want to delete your saved data');

				//if yes
				if( response ) {

					// delete everything inlocal storage
					localStorage.clear();

				}

			}

		} 
	
	} 

});

function saveForm() {

	//find the user input elements
	if( $.trim( $('#fullname').val() ) !=''); {
		
		// save the name into the browser using local storage
		localStorage.setItem( 'fullname', $('#fullname').val() );
	}

	if ( $.trim( $('#email').val() ) !=''); {

		//save the email into the browser using local storage
		localStorage.setItem( 'email', $('#email').val() );
		
	}

	var divs =  $('.div') ;
	localStorage.setItem( 'divs', divs);
	
	// alert(localStorage.getItem('email'));
}

function populateForm() {
	
	//selct the fullname into and insert the old fullname
	$('#fullname').val( localStorage.getItem('fullname') );
	

	//selct the fullname into and insert the old email
	$('#email').val( localStorage.getItem('email') );


	// select the form and insert the old divs
	$('#registration').html( JSON.parse(localStorage.getItem('divs')) );
	console.log('------');
	console.log(localStorage.getItem('divs'));

}

//add new div
function addNewDiv() {

	//insert a new div if the add button is clicked
	$('<div class="div"><label for="fullname">Full Name: </label><input type="text" id="fullname"></div>').insertAfter('#registration div:first-child');
}

console.log(localStorage);








































