function inputSubmit() {
	let txtValue = text.value;
	let keyValue = validation(txtValue, keySub);;

	let result = '';

	if (radioCheked(submitRadio) === 0) {
		result = encode(txtValue, keyValue);
	} else {
		result = decode(txtValue, keyValue);
	}
	// вывод в textArea
	
	textArea.value = result;
}
