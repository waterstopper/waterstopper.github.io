---
title: "Parsers"
date: 2022-07-03
---
*As with the first article, I wrote this one on a computer, because the topic is hard to tackle. I
knew I would have to make a lot of edits and rearrangements. So technically I'm two days behind my
schedule, but we're just going to ignore that.*

# Parser traits

These traits are not exactly definitive features for a parser. However, these definitions are often
mentioned, so it's good to know what they mean.

### Recursive descent

Recursive descent parser is a program, where each [grammar](programming/introduction-to-grammars) rule is implemented as a separate method.
Sometimes all rules describing one terminal are combined into a single method.

![](/resources/writings/recursive_parser.svg)

### Back-tracking and non back-tracking

Back-tracking parser looks some tokens behind to define a position of current token in a tree. Non
back-tracking parsers do not use previous tokens.

# Most  common parser classification

LL and LR are the most often mentioned parsers in this context. And their distinct features are
being top-down and bottom-up respectfully.

### Top-down parser.

This parser creates a tree from root to leaves.

##### LL(k) parser

Left-to-right, leftmost derivation. Parses tokens from left to right, looking k
tokens ahead. Uses context free grammar.

Can be implemented either as a recursive descent or a pushdown automata.

*Note: a subset of languages that can be parsed with LL(k) parser is
called LL(k) languages.*

### Bottom-up parser.

Unlike top-down, creates tree starting from leaves and finishing at root.

##### LR(k) parser

Left-to-right, rightmost derivation. Uses CFG. Starts with tokens of higher priority, eventually
building its way from leaves to root (the higher the node, the less priority it has. Look
at [AST arithmetic example](programming/ast)).

Implementation uses pushdown automata or deterministic finite automation. Works in linear time.

# Other parsers

### Operator precedence parser

Is a parser for, you guessed it, operator precedence grammars. OP is a CFG with no empty right-hand
side rules and no rules with adjacent non-terminals.

##### Operator precedence implementation

Pratt parser is a top-down operator precedence parser. This parser is rarely mentioned. It is based
on the idea of led, nud and std functions. Each token has (or has not) led, nud and std functions.
These functions basically tell how this token is related to ones around it. All parsing is embedded
into these functions, with some additional ones: expression and statement functions.

* Nud is null denotation, used for primary tokens like numbers and
  identifiers and prefix operators
* Led is left denotation, describe how a token relates to its left neighbor. Used for infix
* Std is statement denotation, is for statements: assignment, return keyword

#### PEG parser

Parser parsing expression grammar.

##### PEG parser implementation

Packrat parser implements recursive descent with infinite lookahead. Requires more memory than LL
parser, but supports left recursion.

*I don't think this is an exhaustive list of parsers, and it's shallow. However, it's in sync with
grammar post, one can be read after another*