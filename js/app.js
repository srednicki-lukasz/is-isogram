const input_phrase = document.querySelector('.phrase');
const button_check = document.querySelector('.btn');

button_check.addEventListener('click', () => {
    const phrase = input_phrase.value;

    if (phrase === '' || phrase.match(/\d/)) return;

    new Set(phrase.toLowerCase()).size === phrase.length
    ? console.log('Is isogram')
    : console.log('Is not isogram');
})