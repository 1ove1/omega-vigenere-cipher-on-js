function validation(txtValue, keyObject) {
	let txtKey = keyObject.value;

	// проверка введёных данных
	try{
		if (txtValue === undefined || txtKey === undefined) {
			throw SyntaxError(': поля ввода пусты: остановка программы')
		}

		const lowerValid = /^[a-z\s\.,]+(?!\d)$/gm;
		const higherValid = /^[A-Z\s\.,]+(?!\d)$/gm;

		if (!((txtValue.match(lowerValid) && txtKey.match(lowerValid)) || (txtValue.match(higherValid) && txtKey.match(higherValid)))) {
			throw SyntaxError(': неверный формат введённых данных: остановка программы')
		} 

		if (txtValue.length !== txtKey.length) {
			throw RangeError(': ключ не равной длины: значение ключа будет изменено')
		}

	} catch (e) {
		
		if (e instanceof SyntaxError) {
			alert(e.name + e.message);
			return;
		}
		if (e instanceof RangeError) {
			console.log(e.name + e.message);
			while(txtValue.length > txtKey.length) {
				txtKey += txtKey;
			}
			txtKey = txtKey.substring(0, txtValue.length);
			keyObject.value = txtKey;
		}
	}

	return txtKey;
}