---
title: "Quality of life"
---

Recently I started working on a new project, that also requires creating a custom programming
language. I noticed a significant difference with changing my approach: now I use python
and [Lark](https://github.com/lark-parser/lark) for parsing EBNF.

### Lark vs writing your own lexer and parser

I regret not spending more time researching kotlin EBNF parsers. I tried ANTLR, but it had many
incompatible versions, therefore I didn't use it. Additionally, antlr generated java code that
won't work with javascript. Plus, I found some others parsers, all of them generated parsers during
runtime. I thought it was bad. However, Lark generates parsers during runtime too.

Writing EBNF grammar is faster and less error-prone. Moreover, it is faster to change existing
grammar, compared to programmatically written lexer and parser. I
rewrote [this](https://github.com/cristiandima/tdop) Go code into Kotlin and customized it for my
language. That took a lot of time, even without considering bug fixes.

### Python vs Kotlin

It might not be as important for others, but I prefer interpreted languages because after a small
change in code it starts as fast, compared to compiled language. Compilation is a slow process that
hinders development for me.

### Working in a group vs alone

This time we work together with my friend, and I have to say, it is much better than working alone.
When you are on your own, it is easy to miss some obvious mistakes. Discussing solutions leads to
better ones. Maybe, that way it's not always going to be the way I want, but who said that my
vision is correct? Besides, we both have a similar goal.

### Conclusions

1. Spend more time researching ready solutions. It will pay off during development, more time will
   be saved overall
2. If working alone, find likeminded people to share ideas and discuss design decisions. Get
   feedback from them.
3. ~~Use interpreted languages~~