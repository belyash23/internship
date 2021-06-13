"use strict"

function randomIndex(length) {
	return Math.floor(Math.random() * length);
}

function deleteSymbols(str) {
	const strArr = str.split('');
	const strLen = str.length;

	for (let i = 0; i < 2; i++) {
		const index = randomIndex(length-i);
		strArr.splice(index, 1);
	}

	const newStr = strArr.join('');
	return newStr;
}

function deleteLetters(str) {
	const letters = 'qwertyuiopasdfghjklzxcvbnmёйцукенгшщзхъфывапролджэячсмитьбю';
	const strArr = str.split('');
	const lettersInStr = [];

	strArr.forEach((symbol, index) => {

		if (letters.includes(symbol)) {
			lettersInStr.push({
				letter: symbol,
				index: index
			});
		}
	});	
	for (let i = 0; i < 2; i++) {
		const letterInStrIndex = randomIndex(lettersInStr.length);
		const letter = lettersInStr[letterInStrIndex]
		if (!letter) {
			i -= 1;
			continue;
		}
		delete lettersInStr[letterInStrIndex];
		delete strArr[letter.index];
	}
	const newStr = strArr.join('');
	return newStr;
}

document.addEventListener('DOMContentLoaded', () => {
	const deleteButton = document.querySelector('.delete__button');
	const textarea = document.querySelector('.delete__text')
	const error = document.querySelector('.delete__error');
	const form = document.querySelector('.delete');

	form.onsubmit = e => {
		e.preventDefault();
	}

	deleteButton.onclick = () => {
		const data = new FormData(form);
		const text = data.get('text');
		const type = data.get('type');
		let newText = '';

		switch (type) {
			case 'deleteAll':
				newText = deleteSymbols(text);
				break;
			case 'deleteLetters':
				newText = deleteLetters(text);
				break;
		}
		textarea.value = newText;
	};
});