# Wordie
a word game created by Reecy 💖

## resources

resources follow their respective license:

- [`wordslist.txt`](res/wordslist.txt) is retrieved from https://github.com/first20hours/google-10000-english via:
```bash
curl https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-usa-no-swears.txt \
  | grep -E ".{3,100}$" > wordslist.txt
```
- [`wordssorted.txt`](res/wordssorted.txt) is generated from `sort -h wordslist.txt > wordssorted.txt`
- [`cats.jpg`](res/cats.jpg) from [@ngupakarti](https://pngtree.com/freebackground/cute-cat-seamless-pattern-kawaii_1163683.html)
- [`cat-love.avif`](res/cat-love.avif) from [@zeneria29](https://www.freepik.com/premium-vector/seamless-pattern-background-character-cute-cat-with-heart-pattern-pink-heart-text-love_5339776.htm)
- [`favicon.ico`](res/favicon.ico) from [emoji 💐](https://emojipedia.org/bouquet/)
- [`better.css`](res/better.css) adapted from [this thing](http://bettermotherfuckingwebsite.com)

the rest of the code is licensed under **GNU GPLv3**.
