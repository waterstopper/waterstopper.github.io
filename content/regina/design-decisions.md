---
title: "Design decisions"
---

## ~~Why null is 0?~~ *now it is not*

First, let's provide some context.

I do not find void type useful. Therefore, void == null.

Now, let's state all cases when null appears:

1. function call with no return
2. parent property[^1]
3. `?.` operator.

Not many cases to consider, only last one is the meaningful one. It is important to throw
exceptions for not found properties, because it might be a typo. Typos are hard to find. `?.`
operator exists if user intentionally wants to ignore non-existing property. This is very useful to
write concise code. Without `?.` we have to write something like this:

```kotlin
// Say, want to check if svgArgs in a exist. 
// Then do some operations with them.
if(a.properties.has("svgArgs")) {...} // without ?.
if(a?.svgArgs != 0) {...} // with ?.
...
// Better example:
class A {
    iter = if(parent == 0) 1 else parent.iter + 1 // without ?.
    iter = parent?.iter + 1 // with ?.
}
```

First example has a problem: when using `?.` we can't really differentiate whether `a` has a
property `svgArgs` which value is 0, or `a` does not have such property. However, I think it is an
issue only in a language where null as a no-reference exists.

**The answer to this question is:**

1. I find 0 to be more useful than no-reference object, when null appears.
2. and for now I don't see many disadvantages of such design decision

## Defining functions in language

Embedded functions are functions that are translated from kotlin. All global functions and
type functions are embedded.
[Here is an implementation of global functions (GitHub).](https://github.com/llesha/Regina/blob/ab48513b0a11ed21e710eec94660b7951137eafb/src/commonMain/kotlin/evaluation/FunctionFactory.kt#L49)

It seems natural for me to shorten embedded functions quantity as much as possible (and write them
in created language[^2]). I had three reasons to add many:

1. **Historical reason.** I was writing my own all-in-one parser-interpreter which was primitive (
   yet usable) and adding
   function parsing and evaluation was overwhelming.
2. **Logical reason.** I cannot embed all the functions in the world. `log`, `write` and `read`
   functions access lower-level APIs that are impossible to define in
   a language itself (at least not in mine).
3. **Even more logical reason**. If Regina's Array is just a MutableList from kotlin, why not use
   existing implementations?

[^1]: Probably I will remove `parent` property for non-class instances. I don't remember why this
feature exists. Nevertheless, it is too early to remove without giving it proper thought.

[^2]: At least to see how well language works.

## Symbol Table

Symbol table is a common idea in language processing, it goes hand in hand
with [scopes](../docs/Scopes.md).

Symbol table is a solution to three concerns:

1. Minding scopes,
2. Handling imports,
3. Recording variable names.

It is organized as three tables:

1. [FileTable](https://github.com/llesha/Regina/blob/master/src/commonMain/kotlin/table/FileTable.kt)
    - for storing all declarations in class (imports are references to other FileTables)
2. VariableTable - contains all declarations for type instance (properties and functions).
   VariableTable is a variable itself (class or a primitive).
3. [ScopeTable](https://github.com/llesha/Regina/blob/master/src/commonMain/kotlin/table/ScopeTable.kt)
    - contains all assigned variables inside a function body.

SymbolTable is a [God-manager](https://en.wikipedia.org/wiki/God_object), but it is needed to
handle all get requests (get function, get variable, etc).

## Variable names

Strings are keys for each map. Each string is a name for corresponding variable/type/function. It
solves third problem
and makes sharing reference-type values between variables straightforward, unlike storing name in
a variable class[^1] (how to store multiple names? When to
remove a name? etc.)
.

[^1]: at first I implemented this design. Then I created SymbolTable and had many refactorings
before finally decomposing it into three different classes-tables.