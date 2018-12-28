//added for email form validation
// check Email field.
function isEmail()
{
	if (document.contactUsForm.FromEmailAddress.value=="")
	{
		showErrorMessage(document.contactUsForm.FromEmailAddressErrorMessage.value);
		document.contactUsForm.FromEmailAddress.focus();
		return false;
	}
	else if (!checkCorrectEmail(document.contactUsForm.FromEmailAddress.value))
	{
		alert(document.contactUsForm.invalidEmailErrorMessage.value);
		document.contactUsForm.FromEmailAddress.focus();
		return false;
	}
	else
	{
		return true;
	}
}

// check Firstname field.
function isFirstName()
{
	var firstName = document.contactUsForm.FirstName.value;
	if (document.contactUsForm.FirstName.value=="")
	{
		showErrorMessage(document.contactUsForm.FirstNameErrorMessage.value);
		document.contactUsForm.FirstName.focus();
		return false;
	}
	else
	{
		
		regex=/^[a-zA-Z_][a-zA-Z0-9]*$/;
		if(firstName.match(regex) != null){
		  	return true;
		}else{
			var locale = document.contactUsForm.langLocale.value;
			if(locale != null && locale=="fr_CA"){
				alert("Le prénom saisi doit être un prénom valide.");
			}else{
				
				alert("The First Name entered should be a valid first name.");
			}
			document.contactUsForm.FirstName.focus();
			return false;
			
		}
	}
}

// check Lastname field.
function isLastName()
{
	var lastName = document.contactUsForm.LastName.value;
	if (document.contactUsForm.LastName.value=="")
	{
		showErrorMessage(document.contactUsForm.LastNameErrorMessage.value);
		document.contactUsForm.LastName.focus();
		return false;
	}
	else
	{
		
		regex=/^[a-zA-Z_][a-zA-Z0-9]*$/;
		if(lastName.match(regex) != null){
		  	return true;
		}else{
			var locale = document.contactUsForm.langLocale.value;
			if(locale != null && locale=="fr_CA"){
				alert("Le dernier nom entré doit être un nom valide.");
			}else{
				alert("The Last Name entered should be a valid last name");
			}
			document.contactUsForm.LastName.focus();
			return false;
			
		}
	}
}

// check Bank name field.
function isBankName()
{
	var bankName = document.contactUsForm.BankName.value;
	if (document.contactUsForm.BankName.value=="")
	{
		showErrorMessage(document.contactUsForm.BankNameErrorMessage.value);
		document.contactUsForm.BankName.focus();
		return false;
	}
	else
	{
		
		regex=/^[a-zA-Z_][a-zA-Z0-9'-_]*$/;
		if(bankName.match(regex) != null){
		  	return true;
		}else{
			var locale = document.contactUsForm.langLocale.value;
			if(locale != null && locale=="fr_CA"){
				alert("Le nom de la banque est entré doit être un nom valide de la Banque.");
			}else{
				alert("The Bank Name entered should be a valid bank name.");
			}
			document.contactUsForm.BankName.focus();
			return false;
			
		}
		return true;
	}
}

// check Address1 field.
function isAddress1()
{
	if (document.contactUsForm.Address1.value=="")
	{
		showErrorMessage(document.contactUsForm.Address1ErrorMessage.value);
		document.contactUsForm.Address1.focus();
		return false;
	}
	else
	{
		return true;
	}
}

// check City field.
function isCity()
{
	if (document.contactUsForm.City.value=="")
	{
		showErrorMessage(document.contactUsForm.CityErrorMessage.value);
		document.contactUsForm.City.focus();
		return false;
	}
	else
	{
		return true;
	}
}

// check Phone field.
function isPhone()
{
	if (document.contactUsForm.Phone.value=="")
	{
		showErrorMessage(document.contactUsForm.PhoneErrorMessage.value);
		document.contactUsForm.Phone.focus();
		return false;
	}
	else
	{
		return true;
	}
}

// check Fax field.
function isFax()
{
	if (document.contactUsForm.Fax.value=="")
	{
		showErrorMessage(document.contactUsForm.FaxErrorMessage.value);
		document.contactUsForm.Fax.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function validateEMailForm()
{
	/* Here is the script for validating the fields */
	if (isFirstName() && isLastName() && isEmail() && isBankName() && isAddress1() && isCity() && isPhone() && isFax())
	{
		return true;
	} else{
		return false;
	}
}

function submitEMailForm()
{	if (validateEMailForm())
	{
		encodeEmailForm();
		document.contactUsForm.submit();
		}
	
}
function encodeEmailForm() 
{
		var fieldValue = "";
		fieldValue = document.contactUsForm.FirstName.value
		fieldValue = replaceAll(fieldValue, '<', '');
		fieldValue = replaceAll(fieldValue, '>', '')
		fieldValue = replaceAll(fieldValue, '"', '')
		document.contactUsForm.FirstName.value = fieldValue;
	
		
		fieldValue = document.contactUsForm.LastName.value
		fieldValue = replaceAll(fieldValue, '<', '');
		fieldValue = replaceAll(fieldValue, '>', '')
		fieldValue = replaceAll(fieldValue, '"', '&quot;')
		document.contactUsForm.LastName.value = fieldValue;
		
		fieldValue = document.contactUsForm.BankName.value
		fieldValue = replaceAll(fieldValue, '<', '');
		fieldValue = replaceAll(fieldValue, '>', '')
		fieldValue = replaceAll(fieldValue, '"', '&quot;')
		document.contactUsForm.BankName.value = fieldValue;
		
		fieldValue = document.contactUsForm.Address1.value
		fieldValue = replaceAll(fieldValue, '<', '');
		fieldValue = replaceAll(fieldValue, '>', '')
		fieldValue = replaceAll(fieldValue, '"', '&quot;')
		document.contactUsForm.Address1.value = fieldValue;
		
		fieldValue = document.contactUsForm.City.value
		fieldValue = replaceAll(fieldValue, '<', '');
		fieldValue = replaceAll(fieldValue, '>', '')
		fieldValue = replaceAll(fieldValue, '"', '&quot;')
		document.contactUsForm.City.value = fieldValue;
		
		fieldValue = document.contactUsForm.Phone.value
		fieldValue = replaceAll(fieldValue, '<', '');
		fieldValue = replaceAll(fieldValue, '>', '')
		fieldValue = replaceAll(fieldValue, '"', '&quot;')
		document.contactUsForm.Phone.value = fieldValue;
		
		fieldValue = document.contactUsForm.Fax.value
		fieldValue = replaceAll(fieldValue, '<', '');
		fieldValue = replaceAll(fieldValue, '>', '')
		fieldValue = replaceAll(fieldValue, '"', '&quot;')
		document.contactUsForm.Fax.value = fieldValue;
		
		fieldValue = document.contactUsForm.MiddleName.value
		fieldValue = replaceAll(fieldValue, '<', '');
		fieldValue = replaceAll(fieldValue, '>', '')
		fieldValue = replaceAll(fieldValue, '"', '&quot;')
		document.contactUsForm.MiddleName.value = fieldValue;
		
		fieldValue = document.contactUsForm.MiddleName.value
		fieldValue = replaceAll(fieldValue, '<', '');
		fieldValue = replaceAll(fieldValue, '>', '')
		fieldValue = replaceAll(fieldValue, '"', '&quot;')
		document.contactUsForm.MiddleName.value = fieldValue;
		
		
		if (document.contactUsForm.MiddleName.value!="")
		{
			fieldValue = document.contactUsForm.MiddleName.value
			fieldValue = replaceAll(fieldValue, '<', '');
			fieldValue = replaceAll(fieldValue, '>', '')
			fieldValue = replaceAll(fieldValue, '"', '&quot;')
			document.contactUsForm.MiddleName.value = fieldValue;
		}
		
		if (document.contactUsForm.FromEmailAddress.value!="")
		{
			fieldValue = document.contactUsForm.FromEmailAddress.value
			fieldValue = replaceAll(fieldValue, '<', '');
			fieldValue = replaceAll(fieldValue, '>', '')
			fieldValue = replaceAll(fieldValue, '"', '&quot;')
			document.contactUsForm.FromEmailAddress.value = fieldValue;
		}
		
		if (document.contactUsForm.Title.value!="")
		{
			fieldValue = document.contactUsForm.Title.value
			fieldValue = replaceAll(fieldValue, '<', '');
			fieldValue = replaceAll(fieldValue, '>', '')
			fieldValue = replaceAll(fieldValue, '"', '&quot;')
			document.contactUsForm.Title.value = fieldValue;
		}
		
		if (document.contactUsForm.Address2.value!="")
		{
			fieldValue = document.contactUsForm.Address2.value
			fieldValue = replaceAll(fieldValue, '<', '');
			fieldValue = replaceAll(fieldValue, '>', '')
			fieldValue = replaceAll(fieldValue, '"', '&quot;')
			document.contactUsForm.Address2.value = fieldValue;
		}
		
		if (document.contactUsForm.State.value!="")
		{
			fieldValue = document.contactUsForm.State.value
			fieldValue = replaceAll(fieldValue, '<', '');
			fieldValue = replaceAll(fieldValue, '>', '')
			fieldValue = replaceAll(fieldValue, '"', '&quot;')
			document.contactUsForm.State.value = fieldValue;
		}
		
		if (document.contactUsForm.Country.value!="")
		{
			fieldValue = document.contactUsForm.Country.value
			fieldValue = replaceAll(fieldValue, '<', '');
			fieldValue = replaceAll(fieldValue, '>', '')
			fieldValue = replaceAll(fieldValue, '"', '&quot;')
			document.contactUsForm.Country.value = fieldValue;
		}
		
		if (document.contactUsForm.ZipCode.value!="")
		{
			fieldValue = document.contactUsForm.ZipCode.value
			fieldValue = replaceAll(fieldValue, '<', '');
			fieldValue = replaceAll(fieldValue, '>', '')
			fieldValue = replaceAll(fieldValue, '"', '&quot;')
			document.contactUsForm.ZipCode.value = fieldValue;
		}
		
		
		if (document.contactUsForm.BankInCanada.value!="")
		{
			fieldValue = document.contactUsForm.BankInCanada.value
			fieldValue = replaceAll(fieldValue, '<', '');
			fieldValue = replaceAll(fieldValue, '>', '')
			fieldValue = replaceAll(fieldValue, '"', '&quot;')
			document.contactUsForm.BankInCanada.value = fieldValue;
		}
		
		if (document.contactUsForm.Headquarters.value!="")
		{
			fieldValue = document.contactUsForm.Headquarters.value
			fieldValue = replaceAll(fieldValue, '<', '');
			fieldValue = replaceAll(fieldValue, '>', '')
			fieldValue = replaceAll(fieldValue, '"', '&quot;')
			document.contactUsForm.Headquarters.value = fieldValue;
		}
		
		if (document.contactUsForm.Comments.value!="")
		{
			fieldValue = document.contactUsForm.Comments.value
			fieldValue = replaceAll(fieldValue, '<', '');
			fieldValue = replaceAll(fieldValue, '>', '')
			fieldValue = replaceAll(fieldValue, '"', '&quot;')
			document.contactUsForm.Comments.value = fieldValue;
			
		}
		
}

function replaceAll(str, search, replacement) {
	var temp;
   while(str.indexOf(search) >= 0) {	
      temp = str;
      str = temp.replace(search, replacement);	
   }
   return str;
}

function submitEMailFormEnter(varField, varEvent)
{
	
	var keycode;
	keycode = captureKeyCode(varField, varEvent);

	if (keycode == 13 ) {
		if(validateEMailForm()){
		encodeEmailForm();
		varField.form.submit();
		}
		else{
		return false;
		}
	   
	} else {
		return true;	
    }
}


function resetEMailForm()
{
	document.contactUsForm.reset();
	document.contactUsForm.FirstName.focus();
}

function showErrorMessage(fieldName)
{
	fieldName = fieldName.replace(":","");
	fieldName = fieldName.replace("?","");
	errorMessage = document.contactUsForm.errorMessage.value;
	errorMessage = errorMessage.replace("#FIELDNAME#", fieldName);
	alert(errorMessage);
}