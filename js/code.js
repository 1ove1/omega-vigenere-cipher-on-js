function encode(strInput, strKey) {
	const lowerCasePredict = 97;	
	const upperCasePredict = 65;
	let result = '';

	for (let index = 0; index < strInput.length; ++index) {
		if (strInput[index] === ' ' || strInput[index] === ',' || strInput[index] === '.' ) {
			result += strInput[index];
			continue;
		}
		const currSymbol = strInput.charCodeAt([index]);
		const currKeyValue = strKey.charCodeAt(index);
		const prefix = (currSymbol < lowerCasePredict) ? upperCasePredict: lowerCasePredict;
		
		const sumSymbols = (currSymbol + currKeyValue - prefix * 2) % 26 + prefix;
		
		result += String.fromCharCode(sumSymbols);
	}

	return result;
}

function decode(strInput, strKey) {
	const lowerCasePredict = 97;	
	const upperCasePredict = 65;
	let result = '';

	for (let index = 0; index < strInput.length; ++index) {
		if (strInput[index] === ' ' || strInput[index] === ',' || strInput[index] === '.' ) {
			result += strInput[index];
			continue;
		}
		const currSymbol = strInput.charCodeAt([index]);
		const currKeyValue = strKey.charCodeAt(index);
		const prefix = (currSymbol < lowerCasePredict) ? upperCasePredict: lowerCasePredict;
		
		let diffSymbols = currSymbol - currKeyValue;

    diffSymbols = (diffSymbols >= 0) ? diffSymbols: diffSymbols + 26;

		diffSymbols += prefix;
		
		result += String.fromCharCode(diffSymbols);
	}

	return result;
}
