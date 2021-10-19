const text = document.getElementById('input-area__text');
const key = document.getElementById('input-area__key');
const result = document.getElementById('input-area__result');
const valid = /^[A-Za-z]+(?!\d)$/gm;

function do_some_work() {
	let txtValue = text.value;
	let keyValue = key.value;

	// проверка введёных данных
	try{
		if (txtValue === undefined || keyValue === undefined) {
			throw SyntaxError('поля ввода пусты: остановка программы')
		}
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
	console.log(txtValue.charCodeAt(0));	
}




function deb() {
	console.log(text.value.length);
	console.log(key.value);
	console.log(result.value);
}