fetch("words.txt")
    .then((response) => response.text())
    .then((text) => text.split("\n").random())
    .then((word) => setup(word));
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};
function setup(word) {
    let guess = document.getElementById("guess");
    guess.value = word.slice(0, 2);
    let answer = `<a href="https://www.google.com/search?q=${word}+meaning" id="answer">${word}</a>`;
    let hidden = document.getElementById("hidden");
    hidden.innerHTML += answer;
}
function get_alphabets(word) {
    return [...new Set(word.split(""))];
}
function guess() {
    let guess = document.getElementById("guess").value;
    let answer = document.getElementById("answer");
    let word = answer.innerText;
    let prefix = word.slice(0, 2);
    let table = document.getElementById("results");
    let row = table.insertRow(0);
    let icon = row.insertCell();
    let echo = row.insertCell();
    let response = row.insertCell();
    if (guess == word) {
        icon.innerText = "🐮";
        echo.appendChild(answer.cloneNode(true));
        response.innerHTML = "You got it! Happy! Happy! Happy~";
        let button = document.getElementById("submit");
        button.onclick = refresh;
        return;
    }
    echo.innerHTML = `<i>${guess}</i>`;
    if (!guess.startsWith(prefix)) {
        icon.innerText = "😼";
        response.innerHTML = `The word should start with <b>${prefix}</b>!`;
        return;
    }
    icon.innerText = "🐱";
    let matched = get_alphabets(guess.slice(2))
        .filter((x) => word.includes(x, 2))
        .length;
    response.innerHTML = `You got <b>${matched}</b> alphabet(s)!`;
}
function refresh() {
    location.reload();
}
//# sourceMappingURL=game.js.map