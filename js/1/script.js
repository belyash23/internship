"use strict"

function randomIndex(length) {
	return Math.floor(Math.random() * length);
}

function deleteSymbols(str) {
	const strArr = str.split('');
	const length = str.length;

	for (let i = 0; i < 2; i++) {
		const index = randomIndex(length-i);
		strArr.splice(index, 1);
	}

	return strArr.join('');
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
	return strArr.join('');
}

function deleteCommands(str) {
	window.strArr = str.split('\n');
	const length = strArr.length;
	let j = 0;
	for (let i = 0; i < 2; i++) {
		j++;
		if(j == 100) {
			console.log('fff');
			break;

		}
		const index = randomIndex(length-i);
		if (strArr[index].slice(-2, -1) === ';' || strArr[index].slice(-1) === ';') {
			strArr.splice(index, 1);
		}
		else {
			i--;
		}
	}

	return strArr.join('\n');
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
			case 'deleteCommands':
				newText = deleteCommands(text);
				break;
		}
		textarea.value = newText;
	};
});