const text = document.getElementById('input-area__text');
const keySub = document.getElementById('input-area__key');
const keyFile = document.getElementById('input-area__key--file');
const textArea = document.getElementById('input-area__result');
const submitRadio = [
	document.getElementById('input-area__submit-radio-encode'), 
	document.getElementById('input-area__submit-radio-decode'),
]
const fileRadio = [
	document.getElementById('input-area__file-radio-encode'), 
	document.getElementById('input-area__file-radio-decode'),
]

<<<<<<< HEAD
function radioChecked(group) {
=======
function radioCheked(group) {
>>>>>>> 1b522aab72b479a681314febad53aa59b87a7ddd
	for (let i = 0; i < group.length; ++i) {
		if (group[i].checked) {
			return i;
		}
	}
}