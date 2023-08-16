
fetch("words.txt")
    .then((response) => response.text())
    .then((text) => text.split("\n").random())
    .then((word) => setup(word))


interface Array<T> {
    random(): T
}

Array.prototype.random = function () {
    return this[
        Math.floor(Math.random() * this.length)
    ]
}

function setup(word: string) {
    let guess = document.getElementById("guess") as HTMLInputElement
    guess.value = word.slice(0, 2)

    let secret = document.getElementById("secret") as HTMLDivElement
    secret.innerText = word

    let answer = `<a href="https://www.google.com/search?q=${word}+meaning" id="answer">${word}</a>`
    let hidden = document.getElementById("hidden") as HTMLParagraphElement
    hidden.innerHTML += answer
    console.log(hidden)
}

function get_alphabets(word: string) {
    return [...new Set(word.split(""))]
}

function guess() {

    let guess = (document.getElementById("guess") as HTMLInputElement).value
    let word = (document.getElementById("secret") as HTMLLinkElement).innerText
    let answer = document.getElementById("answer") as HTMLLinkElement
    let prefix = word.slice(0, 2)

    let table = document.getElementById("results") as HTMLTableElement;
    let row = table.insertRow(0);

    let icon = row.insertCell();
    let echo = row.insertCell();
    let response = row.insertCell();

    if (guess == word) {
        icon.innerText = "🐮"
        echo.appendChild(answer.cloneNode(true))
        response.innerHTML = "You got it! Happy! Happy! Happy~"

        let button = document.getElementById("submit") as HTMLButtonElement
        button.onclick = refresh
        return
    }

    echo.innerHTML = `<i>${guess}</i>`

    if (!guess.startsWith(prefix)) {
        icon.innerText = "😼"
        response.innerHTML = `The word should start with <b>${prefix}</b>!`
        return
    }

    icon.innerText = "🐱";
    let matched = get_alphabets(guess.slice(2))
        .filter((x) => word.includes(x, 2))
        .length
    response.innerHTML = `You got <b>${matched}</b> alphabet(s)!`;
}

function refresh () {
    location.reload()
}
