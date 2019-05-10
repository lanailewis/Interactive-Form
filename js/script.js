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

const $jsFrameworks = $(".activities input[name='js-frameworks']");
const $jsLibs = $(".activities input[name='js-libs']");
const $express = $(".activities input[name='express']");
const $node = $(".activities input[name='node']");
const $buildTools = $(".activities input[name='build-tools']");
const $npm = $(".activities input[name='npm']");


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
		totalCost = totalCost + cost;
	} else {
		totalCost = totalCost - cost;
	}
	totalCost.textContent = 'Total: $' + totalCost;
	const indexOfDash = textOfClicked.indexOf('—');
	const indexOfComma = textOfClicked.indexOf(',');
	const dayAndTime = textOfClicked.slice(indexOfDash, indexOfComma);
	const activityElements = $('.activities input');
	for ( i = 0; i < activityElements.length; i++) {
		const activity = $(activityElements[i]).parent().text();
		if ( dayAndTime && activityElements !== clicked ){
			if ( $(activityElements[i]).prop('checked') === true ) {
				$(activityElements[i]).prop('disabled', true);
			} else {
				$(activityElements[i]).prop('enabled', true);
			}
		}
	}
});

//$('form input[type="submit"]').prop("disabled", true);

//if($(this).prop("checked") == true){

//You want a condition like `(variable && otherVar !== oldVar)` this that //variable and otherVar are both not equal to the oldVar

//day and time variable above && if the current label text variable does not
//equal the variable you created earlier with the label text of the element //that was just
//clicked












	



	





