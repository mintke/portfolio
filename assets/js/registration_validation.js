/* Validation By Natraj for url -> /registration */
window.onload = function() {

		$('[data-go-to-step]').on('click',function(){
			validateAndGoToNext(this);
		});
};

function validateAndGoToNext(element){

	var proceedStep = true;
	var isFieldValid = false;


	$(element).find('[data-validate-as]').each(function(){

		if($(this).attr('data-validate-as').indexOf("Required") >= 0){
			isFieldValid = validateRequired(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}
		if($(this).attr('data-validate-as').indexOf("Name") >= 0){
			isFieldValid = validateName(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}
		if($(this).attr('data-validate-as').indexOf("Department") >= 0){
			isFieldValid = validateDepartment(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}
		if($(this).attr('data-validate-as').indexOf("Number") >= 0){
			isFieldValid = validateNumber(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}
		if($(this).attr('data-validate-as').indexOf("IndianMobile") >= 0){
			isFieldValid = validateIndianMobile(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}
		if($(this).attr('data-validate-as').indexOf("Email") >= 0){
			isFieldValid = validateEmail(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}
		if($(this).attr('data-validate-as').indexOf("Password") >= 0){
			isFieldValid = validatePassword(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}
		if($(this).attr('data-validate-as').indexOf("MatchWith") >= 0){
			isFieldValid = validateMatchWith(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}
		if($(this).attr('data-validate-as').indexOf("CheckAtleast") >= 0){
			isFieldValid = validateCheckAtleast(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}
		if($(this).attr('data-validate-as').indexOf("RegisteredUser") >= 0){
			isFieldValid = validateRegisteredEmail(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}
		if($(this).attr('data-validate-as').indexOf("Date") >= 0){
			isFieldValid = validateDateRequired(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}
		if($(this).attr('data-validate-as').indexOf("Percentage") >= 0){
			isFieldValid = validatePercentage(this);
			if ( proceedStep && !isFieldValid )
				proceedStep = false;
		}

		console.log($(this).attr('name')+' gives '+proceedStep);

	});
	/*
	if(proceedStep){
		$(element).parent('.block').hide();
		$(element).parent('.block').next('.block').show();
	} */
	return proceedStep;
}

function validateRequired(element){

	var prompt = $(element).closest('div').find('.help-block');
	var parentForm = $(element).closest('.form-group');

	if( $(element).attr('type')== "radio") {

		// check only if its the first element for the radio buttons
		if($('[type="radio"][name="'+$(element).attr('name')+'"]').index( element ) == 0){

			var textinputs = document.querySelectorAll('[type="radio"][name="'+$(element).attr('name')+'"]');
			var empty = [].filter.call( textinputs, function( el ) {
			   return !el.checked
			});

			if (textinputs.length == empty.length) {
				prompt.removeClass('bg-success');
				prompt.addClass('bg-danger');
				prompt.html("is required");
				parentForm.removeClass('has-success');
				parentForm.addClass('has-danger');
				return false;
			}
			else{
				prompt.removeClass('bg-danger');
				prompt.addClass('bg-success');
				prompt.html("is valid");
				parentForm.removeClass('has-danger');
				parentForm.addClass('has-success');
				return true;
			}

		}
		else{
			//  if it not the first element of the radio buttons no need to check again just return true
			return true;
		}
	}
	else{

		if( element.value.trim() != "" ){
			//display success
			//prompt.removeClass('bg-danger');
			//prompt.addClass('bg-success');
			//prompt.html("is valid");

			parentForm.removeClass('has-error');
			parentForm.addClass('has-success');
			return true;
		}
		else{
			//console.log("Error in "+$(element).attr("name"));
			//prompt.removeClass('bg-success');
			//prompt.addClass('bg-danger');
			//prompt.html("is required");

			parentForm.removeClass('has-success');
			parentForm.addClass('has-error');
			return false;
		}
	}
}

function validateDateRequired(element){

	var prompt = $(element).closest('div').find('.help-block');
	var parentForm = $(element).closest('.form-group');

	// check only if its the first element for the radio buttons
	if(parentForm.find('[data-validate-as="Date"]').index( element ) == 0){

		display_as_valid = true;

		parentForm.find('[data-validate-as="Date"]').each(function(){

					if( this.value.trim() != "" && display_as_valid ){
						display_as_valid = true;
					}
					else{
						display_as_valid = false;
					}
		});

			if( display_as_valid ){
				//display success
				//prompt.removeClass('bg-danger');
				//prompt.addClass('bg-success');
				//prompt.html("is valid");

				parentForm.removeClass('has-error');
				parentForm.addClass('has-success');
				return true;
			}
			else{
				//console.log("Error in "+$(element).attr("name"));
				//prompt.removeClass('bg-success');
				//prompt.addClass('bg-danger');
				//prompt.html("is required");

				parentForm.removeClass('has-success');
				parentForm.addClass('has-error');
				return false;
			}

	}
	else{
		//  if it not the first element of date no need to check again just return true
		return true;
	}

}

function validateName(element){

	var prompt = $(element).closest('div').find('.help-block');
	var parentForm = $(element).closest('.form-group');

	if( element.value.trim() == "" ){
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is required");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}

	if( element.value.trim() != "" && element.value.match(/^[a-zA-Z.'~`^ ]+$/) ){
		//display success
		//prompt.removeClass('bg-danger');
		//prompt.addClass('bg-success');
		//prompt.html("is valid");
		parentForm.removeClass('has-error');
		parentForm.addClass('has-success');
		return true;
	}
	else{
		//console.log("Error in "+$(element).attr("name"));
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is not valid, it can contain only alphabets and spaces");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}
}


function validateDepartment(element){

	var prompt = $(element).closest('div').find('.help-block');
	var parentForm = $(element).closest('.form-group');
	if( element.value.trim() == "" ){
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is required");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}

	if( element.value.trim() != "" && element.value.match(/^[a-zA-Z .]+$/) ){
		//display success
		//prompt.removeClass('bg-danger');
		//prompt.addClass('bg-success');
		//prompt.html("is valid");
		parentForm.removeClass('has-error');
		parentForm.addClass('has-success');
		return true;
	}
	else{
		//console.log("Error in "+$(element).attr("name"));
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is not valid, it can contain only alphabets, spaces and dots");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}
}

function validateNumber(element){

	var prompt = $(element).closest('div').find('.help-block');
	var parentForm = $(element).closest('.form-group');
	if( element.value.trim() == "" ){
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is required");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}

	if( element.value.trim() != ""  && element.value.match(/^[0-9]+$/) ){
		//display success
		//prompt.removeClass('bg-danger');
		//prompt.addClass('bg-success');
		//prompt.html("is valid");
		parentForm.removeClass('has-error');
		parentForm.addClass('has-success');
		return true;
	}
	else{
		//console.log("Error in "+$(element).attr("name"));
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is not a valid number");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}
}
function validatePercentage(element){

	var prompt = $(element).closest('div').find('.help-block');
	var parentForm = $(element).closest('.form-group');
	if( element.value.trim() == "" ){
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is required");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}

	if( element.value.trim() != "" && parseInt(element.value)>0 && parseInt(element.value)<100 && element.value.match(/^\d*\.?\d{1,2}$/) ){
		//display success
		//prompt.removeClass('bg-danger');
		//prompt.addClass('bg-success');
		//prompt.html("is valid");
		parentForm.removeClass('has-error');
		parentForm.addClass('has-success');
		return true;
	}
	else{
		//console.log("Error in "+$(element).attr("name"));
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is not a valid number");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}
}

function validateIndianMobile(element){

	var prompt = $(element).closest('div').find('.help-block');
	var parentForm = $(element).closest('.form-group');

	if( element.value.trim() == "" ){
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is required");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}

	if( element.value.trim() != "" && element.value.match(/^[789]\d{9}$/) ){
		//display success
		//prompt.removeClass('bg-danger');
		//prompt.addClass('bg-success');
		//prompt.html("is valid");
		parentForm.removeClass('has-error');
		parentForm.addClass('has-success');
		return true;
	}
	else{
		//console.log("Error in "+$(element).attr("name"));
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is required");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}
}


function validateEmail(element){

	var prompt = $(element).closest('div').find('.help-block');
	var parentForm = $(element).closest('.form-group');

	if( element.value.trim() == "" ){
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is required");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}

	if( element.value.trim() != "" && ( element.value.indexOf("@") > 0 && element.value.indexOf(".")> 0 && ( element.value.indexOf(".") - element.value.indexOf("@") > 2 ) ) && (element.value.length-element.value.indexOf(".")>2) ){
		//display success
		//prompt.removeClass('bg-danger');
		//prompt.addClass('bg-success');
		//prompt.html("is valid");
		parentForm.removeClass('has-error');
		parentForm.addClass('has-success');
		return true;
	}
	else{
		//console.log("Error in "+$(element).attr("name"));
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is not a valid email");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}
}

function validatePassword(element){
	var prompt = $(element).closest('div').find('.help-block');
	var parentForm = $(element).closest('.form-group');

	if( element.value.trim() == "" ){
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is required");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}

	if( element.value.trim().length >= 6 ){
		//display success
		//prompt.removeClass('bg-danger');
		//prompt.addClass('bg-success');
		//prompt.html("is valid");
		parentForm.removeClass('has-error');
		parentForm.addClass('has-success');
		return true;
	}
	else{
		//console.log("Error in "+$(element).attr("name"));
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is not a valid password, provide 6 or more characers");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}
}

function validateMatchWith(element){

	var prompt = $(element).closest('div').find('.help-block');
	var parentForm = $(element).closest('.form-group');

	// donot check if element corresponding to data-match-with is not valid
	if($('[name="'+$(element).attr('data-match-with')+'"]').parent('div').find('.help-block').hasClass('bg-danger'))
		return true;

	if( element.value.trim() == "" ){
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("is required");
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}

	if( element.value == $('[name="'+$(element).attr('data-match-with')+'"]').val()){
		//display success
		//prompt.removeClass('bg-danger');
		//prompt.addClass('bg-success');
		//prompt.html("is valid");
		parentForm.removeClass('has-error');
		parentForm.addClass('has-success');
		return true;
	}
	else{
		//console.log("Error in "+$(element).attr("name"));
		//prompt.removeClass('bg-success');
		//prompt.addClass('bg-danger');
		//prompt.html("does not match with "+$(element).attr('data-match-with'));
		parentForm.removeClass('has-success');
		parentForm.addClass('has-error');
		return false;
	}
}

function validateCheckAtleast(element){

	var prompt = $(element).closest('div').find('.help-block');
	var parentForm = $(element).closest('.form-group');

	// check only if its the first element in group
	var data_validate_group = $(element).attr('data-validate-group');
	if($('[data-validate-as="CheckAtleast"][data-validate-group="'+data_validate_group+'"]').index( element ) == 0)
	{
		var checkInputs = document.querySelectorAll('[data-validate-group="'+data_validate_group+'"][type=checkbox]');
		var uncheckedInputs = [].filter.call( checkInputs, function( el ) {
		   return !el.checked
		});

		var textInputs = document.querySelectorAll('[data-validate-group="'+data_validate_group+'"][type=text]');
		var emptyInputs = [].filter.call( textInputs, function( el ) {
		   return el.value==""
		});

		if ( ( checkInputs.length != uncheckedInputs.length ) || ( textInputs.length != emptyInputs.length ) ){
			//display success
			//prompt.removeClass('bg-danger');
			//prompt.addClass('bg-success');
			//prompt.html("is valid");
			parentForm.removeClass('has-error');
			parentForm.addClass('has-success');
			return true;
		}
		else{
			//console.log("Error in "+$(element).attr("name"));
			//prompt.removeClass('bg-success');
			//prompt.addClass('bg-danger');
			//prompt.html("atleast one has to be choosen");
			parentForm.removeClass('has-success');
			parentForm.addClass('has-error');
			return false;
		}
	}
	// if it not the first element in group no need to check again just return true
	return true;
}


function validateRegisteredEmail(element){

	if(validateEmail(element))

	{
		var prompt = $(element).closest('div').find('.help-block');
		var parentForm = $(element).closest('.form-group');

		$.ajax({
			headers: {'X-CSRF-TOKEN': $('input[name=_token]').val()},
			method: "POST",
			async: false,
			url : application_base_url+"/application/get_user_id",
			data: {email: $('input[name=email]').val()},
			success : function(data){
				if((data != 0))
				{
					//prompt.removeClass('bg-success');
					//prompt.addClass('bg-danger');
					prompt.html("email already exists");
					parentForm.removeClass('has-success');
					parentForm.addClass('has-error');
					return false;
				}
				else
				{
					//prompt.removeClass('bg-danger');
					//prompt.addClass('bg-success');
					prompt.html("");
					parentForm.removeClass('has-error');
					parentForm.addClass('has-success');
					return true;
				}
			},
			error: function(data) {
				//prompt.removeClass('bg-success');
				//prompt.addClass('bg-danger');
				prompt.html("cannot check if email already exists.");
				parentForm.removeClass('has-success');
				parentForm.addClass('has-error');
				return false;
			}
		});
	}
	else
		return false;

}
