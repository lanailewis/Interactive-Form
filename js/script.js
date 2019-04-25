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
	
const $activities = $('.activities');
const $jsFrameworks = $(".activities input[name='js-frameworks']");
const $jsLibs = $(".activities input[name='js-libs']");
const $express = $(".activities input[name='express']");
const $node = $(".activities input[name='node']");
const $buildTools = $(".activities input[name='build-tools']");
const $npm = $(".activities input[name='npm']");

/* if ($( $jsFrameworks ).prop( 'checked' )){
	$($express).attr('disabled', true);
}
 */
 
$('.activities').change ((e)=>{
    if(($jsFrameworks).prop( 'checked')) {
		$($express).attr('disabled', true); 
		$($buildTools).attr('disabled', true); 
    } else {
		$($express).attr('disabled', false); 
		$($buildTools).attr('disabled', false); 
	}
	if(($jsLibs).prop( 'checked')) {
		$($node).attr('disabled', true); 
		$($npm).attr('disabled', true); 
    } else {
		$($node).attr('disabled', false); 
		$($npm).attr('disabled', false); 
	}
	if(($express).prop( 'checked')) {
		$($jsFrameworks).attr('disabled', true); 
		$($buildTools).attr('disabled', true); 
    } else {
		$($jsFrameworks).attr('disabled', false); 
		$($buildTools).attr('disabled', false); 
	}
	if(($buildTools).prop( 'checked')) {
		$($jsFrameworks).attr('disabled', true); 
		$($express).attr('disabled', true); 
    } else {
		$($jsFrameworks).attr('disabled', false); 
		$($express).attr('disabled', false);  
	}
	if(($node).prop( 'checked')) {
		$($jsLibs).attr('disabled', true); 
		$($npm).attr('disabled', true); 
    } else {
		$($jsLibs).attr('disabled', false); 
		$($npm).attr('disabled', false);  
	}
	if(($npm).prop( 'checked')) {
		$($node).attr('disabled', true); 
		$($jsLibs).attr('disabled', true); 
    }  else {
		$($node).attr('disabled', false); 
		$($jsLibs).attr('disabled', false);   
	}
});











	



	





