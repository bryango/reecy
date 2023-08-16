/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable padded-blocks */
const HINT_PREFIX_LENGTH = 2;
fetch('words.txt')
    .then(async (response) => await response.text())
    .then((text) => text.split('\n').random())
    .then((word) => { setup(word); })
    .catch((e) => { console.log(e); });
// eslint-disable-next-line no-extend-native
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};
function setup(word) {
    document.getElementById('secret').innerText =
        word;
    document.getElementById('guess').value =
        word.slice(0, HINT_PREFIX_LENGTH);
    const answer = document.createElement('a');
    answer.id = 'answer';
    answer.href = `https://www.google.com/search?q=${word}+meaning`;
    answer.innerHTML = `<i>${word}</i>`;
    const hidden = document.getElementById('hidden');
    hidden.append(answer);
    const loading = document.getElementById('loading');
    const loaded = document.getElementById('loaded');
    loading.hidden = true;
    loaded.hidden = false;
    document.getElementById('submit').onclick = () => {
        guess(word);
    };
}
function getAlphabets(word) {
    return [...new Set(word.split(''))];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function guess(word) {
    const guess = document.getElementById('guess').value;
    const answer = document.getElementById('answer');
    const prefix = word.slice(0, HINT_PREFIX_LENGTH);
    const results = document.getElementById('results');
    const row = results.insertRow(0);
    const icon = row.insertCell();
    const echo = row.insertCell();
    const response = row.insertCell();
    if (guess === word) {
        icon.innerText = '🐮';
        echo.append(answer.cloneNode(true));
        response.innerHTML = 'You got it! Happy! Happy! Happy~';
        document.getElementById('submit').onclick = refresh;
        return;
    }
    echo.innerHTML = `<i>${guess}</i>`;
    if (!guess.startsWith(prefix)) {
        icon.innerText = '😼';
        response.innerHTML = `The word should start with <b>${prefix}</b>!`;
        return;
    }
    icon.innerText = '🐱';
    const matched = getAlphabets(guess.slice(HINT_PREFIX_LENGTH))
        .filter((x) => word.includes(x, HINT_PREFIX_LENGTH))
        .length;
    response.innerHTML = `You hit <b>${matched}</b> alphabet(s)!`;
}
function refresh() {
    location.reload();
}
//# sourceMappingURL=game.js.map