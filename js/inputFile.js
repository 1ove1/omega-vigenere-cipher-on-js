function inputFile(input) {
	let file = input.files[0];
	const fileName = file.name;

	let reader = new FileReader();

	reader.readAsText(file);

	reader.onload = function() {
		let txtValue = String(reader.result);
		let keyValue = validation(txtValue, keyFile);

		let result = '';

		if (radioChecked(fileRadio) === 0) {
			result = encode(txtValue, keyValue);
		} else {
			result = decode(txtValue, keyValue);
		}

		let file = new File([result], "file.txt", {
			type: "text/plain",
		});
		
		let link = document.createElement('a');
		link.download = file.name;
		
		link.href = URL.createObjectURL(file);
		link.click();
		URL.revokeObjectURL(link.href);
	

	};

	reader.onerror = function() {
		alert(reader.error);
	};
}