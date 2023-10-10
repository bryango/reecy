# Wordie
A word game created by Reecy 💖 realized by Bryan ⭐ and fit to Telegram Mini App by Youran 🌙 

## How to play

You are given a hint of the first two letters of a word.
Try to guess the word!

After each guess, the game will respond with the number of matching _alphabets._
For example, if the answer is `banana`, and you've guessed the word `bank`, then you hit 1 matching alphabet.

Keep guessing until you reach the correct word!

## Deployment
### How to boot your first Mini App

1. You should host a webpage. The easiest way is to host a page on GitHub. For that, you should

    a. create a new repository and add a new file `index.html`

    b. add the following content to `index.html` and save.

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8"/>
            <script src="https://telegram.org/js/telegram-web-app.js?1"></script>
        </head>
        <body>
            Hello World!
            <script>
                Telegram.WebApp.ready();
            </script>
        </body>
        </html>

    c. on GitHub, go to Settings --> Pages --> Build and deployment --> select Branch and then Save, to deploy it

3. Find [@BotFather](https://t.me/BotFather) on Telegram, create a new bot, select your bot --> Bot Settings --> Menu Button --> add the url of the `index.html` you hold. Then, you should be able to launch the Mini App using the Bot's menu button.

### Resources

resources follow their respective license:

- [`wordslist.txt`](res/wordslist.txt) is retrieved from https://github.com/first20hours/google-10000-english via:
```bash
curl https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-usa-no-swears.txt \
  | grep -E ".{3,100}$" > wordslist.txt
```
- [`wordssorted.txt`](res/wordssorted.txt) is generated from `sort -h wordslist.txt > wordssorted.txt`
- [`cats.jpg`](res/cats.jpg) from [@ngupakarti](https://pngtree.com/freebackground/cute-cat-seamless-pattern-kawaii_1163683.html)
- [`favicon.ico`](res/favicon.ico) from [emoji 💐](https://emojipedia.org/bouquet/)
- [`better.css`](res/better.css) adapted from [this thing](http://bettermotherfuckingwebsite.com)

the rest of the code is licensed under **GNU GPLv3**.

### Helpful Resources

* [Offical Docs](https://core.telegram.org/bots/webapps)
