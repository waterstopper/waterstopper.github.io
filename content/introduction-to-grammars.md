---
title: "Introduction to grammars"
date: 2022-07-02
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
grammars (CFG). Because no context is required for replacing a non-terminal.

#### Regular grammar (type 3)

Subset of content free grammars is regular grammars.
It puts a restriction on the right-hand side of
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

This grammar defines a language $L(gR) = \\{(ab)^n|n\geqslant0\\}$

Context free grammar is a pushdown automata, regular grammar is a finite state machine.
{{< resources/finite_state_regular >}}

#### Context-sensitive grammar (type 1)

Context-sensitive grammars allow left-hand side to contain context, which must be similar in the
right-hand side. Formally speaking, each rule of context-sensitive grammar is:
$$c_0Ac_1 \rightarrow c_0bc_1$$ where:

* $c_0,\\; c_1$ are sequences of terminals and non-terminals
  (sequence might be empty),
* $A$ is a non-terminal
* $b$ is a non-empty sequence of terminals and non-terminals.

#### Unrestricted grammar (type 0)

Unrestricted grammars are grammars without any restrictions to their rules.

### BNF, EBNF

There is a special Backus-Naur form and Extended Backus-Naur form (BNF, EBNF) to
describe a context free grammar. This notation is used most commonly. Here is
a [python grammar defined with EBNF and PEG](https://docs.python.org/3/reference/grammar.html).

# Non formal grammars

Before going any further, let's bring in some clarifications.

### Grammar notation

Previously we used capitals for non-terminals and lowercase for terminals. But in real grammars
identifiers are used. We consider every identifier that appears on the left hand-side a
non-terminal (we work with grammars having only a non-terminal on the left-hand side),
other identifiers are terminals.

Introduce new symbols:

* `|` - choice operator (or). Grammar rule that contains `|` is actually multiple grammar rules:
  `S -> a | b | ... | n` is

```
S -> a
S -> b
...
S -> n
```

If the rule is more complicated, containing nested choice operators, it is rewritten in a similar
manner:

```
S -> (a | b) '+' d | c
// rewritten to
S -> a '+' d 
S -> b '+' d
S -> c
```

* `:` in EBNF colon replaces arrow to divide two sides of a rule. I'll stick to the arrow for
  the time, to keep the style consistent and justify the use of code blocks
  (I use FiraCode with ligatures in code blocks to make arrow a continuous symbol)

All grammars discussed before are formal grammars. Formal grammars have terminals and non-terminals
in their rules and no other operators of special symbols.

### Parsing expression grammars or PEGs

PEGs are very similar to CFGs, but they are not **ambiguous**,
meaning that for any input only one AST can be generated. It is achieved by selecting the first
match in a choice operator. For CFG[^1] each variant in a choice operator is equal in terms of
precedence (and because of that two ASTs may be generated from one input).

### Recursive grammars

if there is a rule with a non-terminal on the left side, which can be derived again by applying
some rules to the resulting expression.

```
grammar rG
A -> aBC
B -> Db
C -> c
D -> Ad
```

rG is recursive, because:

1. starting with `A -> aBC`
2. apply `B -> Db` to `aBC`, get `aDbC`
3. apply `D -> Ad` to `aDbC` get `aAddC`. Non-terminal `A` is derived again.
   Proved, that rG is recursive.

Almost all non-trivial grammars are recursive.

#### Left recursion

Left recursive grammar is a grammar that contains a recursive rule, deriving form which will
eventually create the same non-terminal as the first symbol.

```
grammar lrG
A -> BC
B -> Db
C -> c
D -> Ad
```

lrG is left recursive, because same sequence of rules as in rG will produce AddC. A is the first
symbol, therefore lrG is left recursive.

Some parsers are unable to parse left recursive grammars, descending into infinite recursion.
For that reason, a grammar is rewritten, making it less humanly readable.
Any sensible left-recursive grammar can be rewritten, I think.
This grammar is not reasonable: `A -> A`.

[^1]: When introducing CFG, I stated that it is a part of a Chomsky hierarchy, hence it is a formal
grammar. Consequently, only terminals and non-terminals are allowed in the rules.
But CFG can be mentioned outside the formal grammar set, keeping its distinctive characteristic of
one
non-terminal on the left-hand side. Therefore, CFG right-hand side can contain other special
symbols. From now on, if not explicitly specified, I'll use CFG term implying that **it is not a
formal grammar**.