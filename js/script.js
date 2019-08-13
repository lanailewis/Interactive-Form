// When the page first loads, the first text field should be in focus by default

$("#name").focus();

// Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu

$('#other-title').hide();

// For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu

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

// Grab the text (day and time) of each activity, plus its cost, and disable conflicting activities when one is clicked

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
	if (clicked.checked){
		totalCost += number;
	} else {
		totalCost = totalCost - cost;
	}
	
	div.textContent = 'Total: $' + totalCost;
	
	const indexOfDash = textOfClicked.indexOf('—');
	const indexOfComma = textOfClicked.indexOf(',');
	const dayAndTime = textOfClicked.slice(indexOfDash, indexOfComma);
	const activityElements = $('.activities input');
	
	for ( i = 0; i < activityElements.length; i++) {
		const activity = $(activityElements[i]).parent().text();
		if ( activity.includes(dayAndTime) && activity !== textOfClicked ){
			if ( $(clicked).prop('checked') === false ) {
				activityElements[i].disabled = false;
			} else {
				activityElements[i].disabled = true;
			}
		}
	}
});

// Payment section - hide 'select payment method', and credit card payment input fields

const selectMethod = $('#payment option[value="select_method"]');
const creditCardDiv = $('#credit-card');
const paymentMethod = $('#payment');
const bitcoinMethod = $('#Bitcoin');
const paypalMethod = $('#Paypal');

$(selectMethod).hide();
$(creditCardDiv).hide();
$(bitcoinMethod).hide();
$(paypalMethod).hide();

// Set the 'credit card' option to show appropriate fields, hide when either two other options are selected

$(paymentMethod).change((e)=>{
	console.log(paymentMethod[0].value);
	if ( $(e.target).val() === "credit card" ) {
		$(creditCardDiv).show();
		$(bitcoinMethod).hide();
		$(paypalMethod).hide();
	} else if ( $(e.target).val() === "bitcoin" ) {
		$(bitcoinMethod).show();
		$(creditCardDiv).hide();
		$(paypalMethod).hide();
	} else {
		$(paypalMethod).show();
		$(creditCardDiv).hide();
		$(bitcoinMethod).hide();
	}
});

//Form Validation - create a function for each form field to check for correct inputs

	//Name Field - check that the input is more than 0 characters in length

function nameFieldCheck() {
	const nameField = $( '#name' );
	if (nameField.val().length > 0 ) {
		nameField.css( 'borderColor','#c1deeb' );
		return true;
	} else {
		nameField.css( 'borderColor','red' );
		return false;
	}
}

nameFieldCheck()










