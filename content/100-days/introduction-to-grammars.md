---
title: "Introduction to grammars"
---

Grammar defines a set of strings (words), which is called a **language**.
Essentially grammar is a `Dictionary <String, String>`, where each dictionary entry is a
**grammar rule**.

Other two important definitions are terminal and non-terminal symbols.
Terminal is a string that cannot be resolved into something else,
unlike non-terminal. Consequently, a result of grammar resolve should always be a sequence
of terminals.

For terminals a lowercase letter is assigned, for non-terminal a capital one. Also, there is a
special starting non-terminal marked `S`
(we assume that we start creating words starting with `S`).

### Creating a grammatically correct word

Starting with `S`, on each step we choose a non-terminal symbol and a rule with the same symbol on
the left-hand side. Then such non-terminal is replaced with the right-hand side of the rule. Until
there is a non-terminal, a process is continued.

Consider a following example of a grammar:

```
grammar gA
S -> a
S -> aS
```

To create a word `aaa`:

1. Have `S`, use `S -> aS`, now have `aS`
2. Use `S -> aS`, result is `aaS`
3. Use `S -> a`, end with `aaa`. All non-terminals are removed.

Generally this grammar describes a language of words, containing any number of `a`s:
$L(gA) = \\{a^n|n>0\\}$

### The Chomsky hierarchy

Grammar with a smaller type number contains all grammars with a bigger type number.

#### Context free grammar (type 2)

Grammars with a single non-terminal symbol on the left of each rule are called context free
grammars. Because no context is required for replacing a non-terminal.

#### Regular grammar (type 3)

Subset of content free grammars is regular grammars. It puts a restriction on right-hand side of
its rules, three types of expressions are allowed:

* empty string
* single terminal
* terminal followed by non-terminal.

Example of a regular grammar:

```
grammar gR
S -> aX
S -> EOW // (end of word)
X -> bS
```

This grammar defines a language $L(gR) = \\{a^nb^n|n\geqslant0\\}$

Context free grammar is a pushdown automata, regular grammar is a finite state machine.
{{< svg "static/finite_state_regular.svg" >}}

#### Context-sensitive grammar (type 1)

Context-sensitive grammars allow left-hand side to contain context, which must be similar in the
right-hand side. Formally speaking, each rule of context-sensitive grammar is:
$$c_0Ac_1 \rightarrow c_0bc_1$$ where:

* $c_0,\\; c_1$ are sequences of terminals and non-terminals
  (sequence might be empty),
* $A$ is non-terminal
* $b$ is a non-empty sequence of terminals and non-terminals.

#### Unrestricted grammar (type 0)

Unrestricted grammars are grammars without any restrictions to their rules.

### BNF, EBNF

There is a special Backus-Nour form and Extended Backus-Nour form (BNF, EBNF) to
describe a context free grammar. this notation is used most commonly. Here is
a [python grammar defined with EBNF](https://docs.python.org/3/reference/grammar.html). 
