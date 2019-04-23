// When the page first loads, the first text field should be in focus by default

$("#name").focus();

// Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu

// Give the field an id of “other-title,” and add the placeholder text of "Your Job Role"

$('#other-title').hide();

// For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu

//if js puns is selected
//hide tomato, steel blue, dim grey

//if heart js is selected
//hide cornflower blue, dark slate grey, gold

const cornflowerBlue = $('#color option[value="cornflowerblue"]').addClass('cornflower-color');
const tomato = $('#color option[value="tomato"]').addClass('tomato-color');

$("#design").change((e)=>{
	
		if ( $(e.target).val() == "js puns" ) { 
			document.getElementsByClassName('cornflower-blue').selected = true;
			$('#color option[value="tomato"],[value="steelblue"],[value="dimgrey"]').hide();
			$('#color option[value="cornflower blue"],[value="darkslategrey"],[value="gold"]').show();
			document.getElementsByClassName('cornflower-blue').selected = true;
        }
		if ( $(e.target).val() == "heart js" ) { 
			document.getElementsByClassName('tomato').selected = true;
			$('#color option[value="cornflowerblue"],[value="darkslategrey"],[value="gold"]').hide();
			$('#color option[value="tomato"],[value="steelblue"],[value="dimgrey"]').show();
			document.getElementsByClassName('tomato-color').selected = true;
        }
		
		
});



// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."

// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."

// When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.


	



	





