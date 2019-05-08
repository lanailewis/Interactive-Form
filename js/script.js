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


$("#design").change((e)=>{
	
		if ( $(e.target).val() == "js puns" ) { 
			$('#color option[value="tomato"],[value="steelblue"],[value="dimgrey"]').hide();
			$('#color option[value="cornflower blue"],[value="darkslategrey"],[value="gold"]').show();
			$('#color option[value="cornflower blue"]').attr('selected', true);
			$('#color option[value="tomato"]').attr('selected', false);
        }
		if ( $(e.target).val() == "heart js" ) { 
			$('#color option[value="cornflowerblue"],[value="darkslategrey"],[value="gold"]').hide();
			$('#color option[value="tomato"],[value="steelblue"],[value="dimgrey"]').show();
			$('#color option[value="tomato"]').attr('selected', true);
			$('#color option[value="cornflower blue"]').attr('selected', false);
        }
		
		
});

// Some events are at the same day and time as others

// If the user selects a workshop, don't allow selection of a workshop at the same day and time

	// You should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available
	
// When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled

// As a user selects activities, a running total should display below the list of checkboxes

	// For example, if the user selects "Main Conference", then Total: $200 should appear
	
	// If they add 1 workshop, the total should change to Total: $300

const $jsFrameworks = $(".activities input[name='js-frameworks']");
const $jsLibs = $(".activities input[name='js-libs']");
const $express = $(".activities input[name='express']");
const $node = $(".activities input[name='node']");
const $buildTools = $(".activities input[name='build-tools']");
const $npm = $(".activities input[name='npm']");


// create and append element to store the total activity cost - helpful to give it an id for easy targeting and updating of its innerHTML later.

// create variable to store total cost - initially set to 0 - don't use const since you want to update this periodically.

const $activities = $('.activities');
const div = document.createElement('div');
$activities.append(div);
let totalCost = 0;

$($activities).change((e)=>{
	const clicked = e.target;
	const textOfClicked = clicked.parentElement.textContent;
	const indexOfDollar = textOfClicked.indexOf('$');
	const cost = textOfClicked.slice(indexOfDollar+1);
	const number = parseInt(cost);
	
});



// change event listener for activity section - event delegation is helpful here

// variable to store dollar amount of checkbox that was just checked or unchecked - use DOM traversal to target the label parent of the checkbox, and something like regex or indexOf to grab the numbers between the $ and the end of the string.

// variable to store the day and time of checkbox that was just checked or unchecked - similar to above, use DOM traversal and regex or indexOf to target the substring between the em dash and the comma.
  // conditional to see if box was checked or unchecked
  // if box was checked 
    // add cost to total
    // loop over all checkboxes
     // conditional to see if checkboxes[i] matches day and time of checkbox that was checked and if so, disable checkboxes[i]
  
  // if box was unchecked
    // subtract cost from total
    // loop over all checkboxes
     // conditional to see if checkboxes[i] matches day and time of checkbox that was checked and if so, enable checkboxes[i]

  // lastly, inside the event listener, update the innerHTML of the cost element you appended to equal the adjusted cost total  











	



	





