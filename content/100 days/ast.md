---
title: "Abstract Syntax free"
---

Abstract Syntax Tree (AST) is key concept in program evaluation. It is a tree with
tokens as its nodes. Tree is a better structure than sequence. Here is why:

1. Operator precedence.
2. Hierarchy

### Operator precedence

Consider a following expression : $5 + 7 \cdot 2 + 3$. It is obvious to us humans which arithmetic
operator. we should calculate first. But it is not that simple for a machine.
Hence, we introduce a tree structure:

{{< svg "static/ast_arithmetic.svg" >}}

Now we need to recursively evaluate each child before calculating the result of the overall
expression.

### Hierarchy

Let's look at the following python code:

```python
def some_method():
    return 1


class SomeClass:
    field = 1
    other = "other"

    def class_method(self):
        return self

    def other_one(self):
        return "not classMethod"
```

Here is a sketch of AST representation:

```
some_method:
    type: function
    children:
        params: ...
        body: ...
SomeClass:
    type: class
    children:
        field:
            type: variable
            children:
                value: ...
        other:
            type: variable
            children:
                value: ...
        class_method:
            type: function
            children:
                params: ...
                body: ...
         other_one:
            type: function
            children:
                params: ...
                body: ...
        
```

Notice how all the functions of class are on the same level. We could even add `fields` and
`functions` and `classes` nodes to separate statements of different kinds:

```
functions:
    some_method:
        ...
classes:
    SomeClass:
        type: class
        children:
            fields:
                field:
                    ...
                other:
                   ...
            functions:
                class_method:
                    ...
                 other_one:
                    ...
```

This hierarchical structure is predictable and manageable.

### Node structure

AST trees do not have a commonly accepted structure. It's content varies depending on
usage. But I found some general structure of AST node. Nodes usually include.

* node type (declaration of class, method, variable, infix operator, block etc)
* node value: e.g. name of a particular identifier
* children: nodes that a re children of the current one
* meta information: position in the initial file, path to initial file...

# Creating AST

A pipeline consists of two steps:

`Code (text) -> Tokens -> AST`

To create tokens from code, a tokenizer (aka Lexer) is used. Usually it's pretty straightforward:
read until next whitespace, identify obtained token.

To create AST from tokens, we need a parser. I won't go into much detail here, because parsers are
complicated enough for a separate post. Classification of parsers:

* Top-down parser. This parser creates a tree from root to leaves.
    * Back-tracking. The one which looks some tokens behind to define a position of current token
      in a
      tree.
    * Non back-tracking. These parsers do not use previous tokens.
        * LL$(k)$ parser. Parser from left to right, looking $k$ tokens ahead. Basically is a
          pushdown automata. Note: a subset of languages that can be parsed with LL$(k)$ parser is
          called LL$(k)$ languages. These terms parsed go beyond ASTs.
* Bottom-up parser. Unlike top-down, creates tree starting from leaves and finishing at root.
