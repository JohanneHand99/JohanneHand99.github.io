<!-- This function submits the form associated with varField if the Enter key was pressed -->
function submitEnter(varField, varEvent) {
	var keycode;
	if (window.event){
	 	keycode = window.event.keyCode;	 
	}else if (varEvent){
	 	keycode = varEvent.which;	 
	}else{
		 return true;
	}	
	if (keycode == 13) {
	   varField.form.submit();
	} else {
	   return true;
    }
}
function captureKeyCode(varField, varEvent) {
	var keycode;
	if (window.event){
	 	keycode = window.event.keyCode;	 
	}else if (varEvent){
	 	keycode = varEvent.which;	 
	}
	return keycode;
}