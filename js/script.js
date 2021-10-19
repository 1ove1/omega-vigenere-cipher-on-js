const text = document.getElementById('input-area__text');
const key = document.getElementById('input-area__key');
const textArea = document.getElementById('input-area__result');



function do_some_work() {
	let txtValue = text.value;
	let keyValue = key.value;

	// проверка введёных данных
	try{
		if (txtValue === undefined || keyValue === undefined) {
			throw SyntaxError('поля ввода пусты: остановка программы')
		}

		const valid = /^[A-Za-z]+(?!\d)$/gm;

		if (!(txtValue.match(valid) && keyValue.match(valid))) {
			throw SyntaxError('неверный формат введённых данных: остановка программы')
		}

		if (txtValue.length !== keyValue.length) {
			throw RangeError('ключ не равной длины: значение ключа будет изменено')
		}

	} catch (e) {
		console.log(e.name + e.message);

		if (e instanceof SyntaxError) {
			return;
		}
		if (e instanceof RangeError) {
			while(txtValue.length > keyValue.length) {
				keyValue += keyValue;
			}
			keyValue = keyValue.substring(0, txtValue.length);
			key.value = keyValue;
		}
	}

	// основная часть программы

	const lowerCasePredict = 97;	
	const upperCasePredict = 65;
	let result = '';

	for(let index = 0; index < txtValue.length; ++index) {
		let currSymbol = txtValue.charCodeAt([index]);
		let currKeyValue = keyValue.charCodeAt(index);
		let prefix = (currSymbol < lowerCasePredict) ? upperCasePredict: lowerCasePredict;

		console.log('%d + %d...', currSymbol, currKeyValue);
		
		currSymbol = (currSymbol + currKeyValue - prefix * 2) % 26 + prefix;

		console.log('...%d', currSymbol);
		
		result += String.fromCharCode(currSymbol);
	}
	
	textArea.value = result;
}




function deb() {
	console.log(text.value.length);
	console.log(key.value);
	console.log(textArea.value);
}