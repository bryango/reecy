/* eslint-disable padded-blocks */

fetch('words.txt')
  .then(async (response) => await response.text())
  .then((text) => text.split('\n').random())
  .then((word) => { setup(word) })
  .catch((e) => { console.log(e) })

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Array<T> {
  random: () => T
}

// eslint-disable-next-line no-extend-native
Array.prototype.random = function () {
  return this[
    Math.floor(Math.random() * this.length)
  ]
}

function setup (word: string): void {
  const guess = document.getElementById('guess') as HTMLInputElement
  guess.value = word.slice(0, 2)

  const secret = document.getElementById('secret') as HTMLDivElement
  secret.innerText = word

  const answer = `<a href="https://www.google.com/search?q=${word}+meaning" id="answer">${word}</a>`
  const hidden = document.getElementById('hidden') as HTMLParagraphElement
  hidden.innerHTML += answer
  console.log(hidden)
}

function getAlphabets (word: string): string[] {
  return [...new Set(word.split(''))]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function guess (): void {

  const guess = (document.getElementById('guess') as HTMLInputElement).value
  const word = (document.getElementById('secret') as HTMLLinkElement).innerText
  const answer = document.getElementById('answer') as HTMLLinkElement
  const prefix = word.slice(0, 2)

  const table = document.getElementById('results') as HTMLTableElement
  const row = table.insertRow(0)

  const icon = row.insertCell()
  const echo = row.insertCell()
  const response = row.insertCell()

  if (guess === word) {
    icon.innerText = '🐮'
    echo.appendChild(answer.cloneNode(true))
    response.innerHTML = 'You got it! Happy! Happy! Happy~'

    const button = document.getElementById('submit') as HTMLButtonElement
    button.onclick = refresh
    return
  }

  echo.innerHTML = `<i>${guess}</i>`

  if (!guess.startsWith(prefix)) {
    icon.innerText = '😼'
    response.innerHTML = `The word should start with <b>${prefix}</b>!`
    return
  }

  icon.innerText = '🐱'
  const matched = getAlphabets(guess.slice(2))
    .filter((x) => word.includes(x, 2))
    .length
  response.innerHTML = `You got <b>${matched}</b> alphabet(s)!`
}

function refresh (): void {
  location.reload()
}
