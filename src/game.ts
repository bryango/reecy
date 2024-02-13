/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable padded-blocks */

const HINT_PREFIX_LENGTH = 2
const THE_BEGINNING = new Date('2021-12-24T00:00:00+10:00').valueOf()

const PRESET_ANSWER = new URL(document.location.href).searchParams.get('answer')

if (PRESET_ANSWER === null || PRESET_ANSWER === '') {
  fetch('./res/wordslist.txt')
    .then(async (response) => await response.text())
    .then((text) => text.split('\n').random())
    .then((word) => { setup(word) })
    .catch((e) => { console.log(e) })
} else {
  window.onload = () => { setup(PRESET_ANSWER) }
}

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

function setup(word: string): void {

  const counter = document.getElementById('counter') as HTMLElement
  counter.innerText =
    Math.floor(
      (Date.now() - THE_BEGINNING) / (1000 * 60 * 60 * 24)
    ).toFixed()

  if (new Date().toDateString().endsWith('Aug 22 2023')) {
    counter.innerText = '七夕 🌠 ' + counter.innerText
  }

  if (new Date().toDateString().endsWith('Feb 14 2024')) {
    counter.innerText = '情人节 💕 ' + counter.innerText
  }

  (document.getElementById('secret') as HTMLDivElement).innerText =
    word;
  (document.getElementById('guess') as HTMLInputElement).value =
    word.slice(0, HINT_PREFIX_LENGTH)

  const answer = document.createElement('a')
  answer.id = 'answer'
  answer.href = `https://www.google.com/search?q=${word}+meaning`
  answer.innerHTML = `<i>${word}</i>`

  const hidden = document.getElementById('hidden') as HTMLParagraphElement
  hidden.append(answer)

  const loading = document.getElementById('loading') as HTMLDivElement
  const loaded = document.getElementById('loaded') as HTMLDivElement
  loading.hidden = true
  loaded.hidden = false;

  (document.getElementById('submit') as HTMLButtonElement).onclick = () => {
    guess(word)
  }
}

function getAlphabets(word: string): string[] {
  return [...new Set(word.split(''))]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function guess(word: string): void {

  const guess = (document.getElementById('guess') as HTMLInputElement).value
  const answer = document.getElementById('answer') as HTMLAnchorElement
  const prefix = word.slice(0, HINT_PREFIX_LENGTH)

  const results = document.getElementById('results') as HTMLTableElement
  const row = results.insertRow(0)

  const icon = row.insertCell()
  const echo = row.insertCell()
  const response = row.insertCell()

  if (guess === word) {
    icon.innerText = '🐮'
    echo.append(answer.cloneNode(true))
    response.innerHTML = 'You got it! Happy! Happy! Happy~';

    (document.getElementById('submit') as HTMLButtonElement).onclick = refresh
    return
  }

  echo.innerHTML = `<i>${guess}</i>`

  if (!guess.startsWith(prefix)) {
    icon.innerText = '😼'
    response.innerHTML = `The word should start with <b>${prefix}</b>!`
    return
  }

  icon.innerText = '🐱'
  const matched = getAlphabets(guess.slice(HINT_PREFIX_LENGTH))
    .filter((x) => word.includes(x, HINT_PREFIX_LENGTH))
    .length
  response.innerHTML = `You hit <b>${matched}</b> alphabet(s)!`
}

function refresh(): void {
  location.reload()
}
