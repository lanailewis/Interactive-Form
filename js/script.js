/***************
Opening Section
***************/

$("#name").focus();

/**************
Job Role Section
****************/

$('#other-title').hide();

$("#title").change((e)=>{
	
	if( $(e.target).val() == "other" ) {
		$('#other-title').show();
	} else {
		$('#other-title').hide();
	}
});


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
$(creditCardDiv).show();
$(bitcoinMethod).hide();
$(paypalMethod).hide();
$('#payment option[value="credit card"]').attr("selected",true);

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

	/******************************
	Error Message Variables and CSS
	*******************************/
	
	//Name Field Error Message
	
	const nameErrorMessage = $('<p></p>');
	nameErrorMessage.text('Please enter your name');
	nameErrorMessage.css({'color': 'red', 'margin': '0px', 'fontStyle': 'italic'});
	
	//Email Field Error Message
	
	const emailErrorMessage = $('<p></p>');
	emailErrorMessage.text('Please enter a valid email address');
	emailErrorMessage.css({'color': 'red', 'margin': '0px', 'fontStyle': 'italic'});
	
	//Credit Card Number Field Error Message
	
	const ccErrorMessage = $('<p></p>');
	ccErrorMessage.text('Please enter a valid credit card number');
	ccErrorMessage.css({'color': 'red', 'margin': '0px', 'fontStyle': 'italic'});
	
	//Zip Code Field Error Message
	
	const zipErrorMessage = $('<p></p>');
	zipErrorMessage.text('Please enter your zip code');
	zipErrorMessage.css({'color': 'red', 'margin': '0px', 'fontStyle': 'italic'});
	
	//CVV Code Field Error Message
	
	const cvvErrorMessage = $('<p></p>');
	cvvErrorMessage.text('Please enter the security code from the back of your card');
	cvvErrorMessage.css({'color': 'red', 'margin': '0px', 'fontStyle': 'italic'});
	
	/****************************************************************/

//Form Validation Functions

	//Name Field Validation

	function nameFieldCheck() {
		const nameField = $( '#name' );
		nameErrorMessage.animate({
			paddingTop: '5px',
			paddingBottom: '10px'
		  });
		if ( nameField.val().length > 0 ) {
			nameField.css( 'borderColor','#c1deeb' );
			return true;
		} else if ( nameField.val().length === 0 ){
			nameField.after( nameErrorMessage );
			nameField.css( 'borderColor','red' );
			return false;
		}
	}
	
	//Email Field Validation
	
	function emailFieldCheck() {
		const emailField = $( '#mail' );
		const mailFormat = /^[^@]+@[^@.]+\.[a-z]+$/
		emailErrorMessage.animate({
			paddingTop: '5px',
			paddingBottom: '10px'
		  });
		if ( mailFormat.test($(emailField).val()) ) {
			emailField.css( 'border-color','#c1deeb' );
			return true;
		} else {
			emailField.after( emailErrorMessage );
			emailField.css( 'border-color','red' );
			return false;
		}
	}
	
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
	
	//Payment Section Validation
	
	//Credit Card Number Check Function
		
		if ( $('#payment').val() === "credit card" ) {
			function paymentCheck() {
				const ccNumberField = $( '#cc-num' );
				const ccNumberFormat = /[0-9]{13,16}/;
				ccErrorMessage.animate({
					paddingTop: '5px',
					paddingBottom: '10px'
				});
				if ( ccNumberFormat.test($(ccNumberField).val()) ) {
					ccNumberField.css( 'border-color','#c1deeb' );
					return true;
				} else {
					ccNumberField.css( 'border-color','red' );
					ccNumberField.after( ccErrorMessage );
					return false;
				}
			}
		}
		
		//Zip Code Check Function

		function zipCodeCheck() {
				const zipCodeField = $( '#zip' );
				const zipCodeFormat = /[0-9]{4,}/;
				zipErrorMessage.animate({
					paddingTop: '5px',
					paddingBottom: '10px'
				});
				if ( zipCodeFormat.test($(zipCodeField).val()) ) {
					zipCodeField.css( 'border-color','#c1deeb' );
					return true;
				} else {
					zipCodeField.css( 'border-color','red' );
					zipCodeField.after( zipErrorMessage );
					return false;
			}
		}
		
		//CVV Check Function

		function cvvCheck() {
				const cvvField = $( '#cvv' );
				const cvvFormat = /[0-9]{3,}/;
				
				cvvErrorMessage.animate({
					paddingTop: '5px',
					paddingBottom: '10px'
				});
				if ( cvvFormat.test($(cvvField).val()) ) {
					cvvField.css( 'border-color','#c1deeb' );
					return true;
				} else {
					cvvField.css( 'border-color','red' );
					cvvField.after( cvvErrorMessage );
					return false;
			}
		}
		
/**************
Form Validation
**************/
			
	$('form').submit((e)=>{
		
		function formValidator() {
			
			if ( ($('#payment').val() === "credit card" ) ) {
				paymentCheck();
				zipCodeCheck();
				cvvCheck();
			} else {  
				return false;
				}
			}
			
			if (validateActivity && nameFieldCheck && emailFieldCheck){
				return true;
			} else {
				return false;
			}
		
		formValidator()
	});











