/***************
Opening Section
***************/

$("#name").focus();

// Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu

$('#other-title').hide();

/***************
T-Shirt Section
***************/

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

/*****************
Activity Section
*****************/

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

/******************* 
Payment Section
*******************/

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

/***************
Form Validation
***************/

//Form Validation Function containing all field validations

$('form').submit((e)=>{

	e.preventDefault();
	
	//Name Field Validation

	function nameFieldCheck() {
		const nameField = $( '#name' );
		const errorMessage = $('<p></p>');
		errorMessage.text('Please enter your name');
		errorMessage.css({'color': 'red', 'margin': '0px', 'fontStyle': 'italic'});
		errorMessage.animate({
			paddingTop: '5px',
			paddingBottom: '10px'
		  });
		if ( nameField.val().length > 0 ) {
			nameField.css( 'borderColor','#c1deeb' );
			return true;
		} else if ( nameField.val().length === 0 ){
			nameField.after( errorMessage );
			nameField.css( 'borderColor','red' );
			return false;
		}
	}
	nameFieldCheck()
	
	//Email Field Validation
	
	function emailFieldCheck() {
		const emailField = $( '#mail' );
		const mailFormat = /^\^@]+@[^@.]+\.[a-z]+$/i;
		const errorMessage = $('<p></p>');
		errorMessage.text('Please enter a valid email address');
		errorMessage.css({'color': 'red', 'margin': '0px', 'fontStyle': 'italic'});
		errorMessage.animate({
			paddingTop: '5px',
			paddingBottom: '10px'
		  });
		if ( mailFormat.test($('emailField').val()) ) {
			emailField.css( 'border-color','#c1deeb' );
			return true;
		} else {
			emailField.after( errorMessage );
			emailField.css( 'border-color','red' );
			return false;
		}
	}
	emailFieldCheck()
	
	//Activity Section Validation

	function validateActivity() {
		const activities = $('.activities');
		activities.css( 'border','none' );
		if ($('input[type="checkbox"]').is(':checked')) {
			$('.activities legend span').remove();
			$('.activities legend').css('color', '#000');
			return true;
		} else {
			$('.activities legend span').remove();
			$('.activities legend').append('<span>. Please select at least one activity.</span>').css({'color': 'red', 'fontStyle': 'italic'});
			return false;
		}
	}
	
	validateActivity()

	//$('.activities').on('click', function() {
	//		validateActivity();
	//	});
	
	
	//Payment Section Validation

	function paymentCheck() {
			const ccNumberField = $( '#cc-num' );
			const ccNumberFormat = /[0-9]{16,}/;
			const errorMessage = $('<p></p>');
			errorMessage.text('Please enter a valid 16-digit credit card number');
			errorMessage.css({'color': 'red', 'margin': '0px', 'fontStyle': 'italic'});
			errorMessage.animate({
				paddingTop: '5px',
				paddingBottom: '10px'
			  });
			if ( ccNumberFormat.test($('ccNumberField').val()) ) {
				ccNumberField.css( 'border-color','#c1deeb' );
				return true;
			} else {
				ccNumberField.css( 'border-color','red' );
				ccNumberField.after(errorMessage);
				return false;
		}
		paymentCheck()
	};
});

	






	












