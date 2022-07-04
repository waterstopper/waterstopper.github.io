---
title: "Devlog 1. Bad globals"
---

### What is a symbol table?

Symbol table stores current program state. I separated it into three levels,
turning `SymbolTable` into a kind of manager-facade:

1. **FileTable**. Contains classes, objects and functions in current file.
2. **variableTable**. Contains functions and properties of current
   instance (if `ClassA.someClassFunction()` is resolved, instance of ClassA is a variableTable in
   current `SymbolTable`). Variable table is not a special class, it's either a primitive or a
   class instance.
3. **ScopeTable**. Contains all variables and arguments for current function.

### Introduction

I created global SymbolTable `globalTable` and global `imports`. It was convenient at the time.
All classes, functions and objects are added to the `globalTable` during semantic analysis.
Superclasses are defined, imports too. Semantic analysis is performed for initial file and all
its dependencies (they are files). It is handy to write imports and file contents to global
variables. But when I started writing tests, it backfired.

### Running tests

When running a program once, evaluation is done once. However, when running tests, evaluation runs
many times. It lead to all kinds of issues:

1. Functions appeared twice, especially mains, because main in current file and main from previous
   failed session were saved.
2. Phantom functions were called from unclean imports

To fix that, I added `clear()` function to make global Table a blank table and delete all imports.
It is called at the end of `evaluate()` and `eval()` (which is a light version of `evaluate()`).
But it was treating a symptom, not dealing with a problem. I plan to make it possible to run
multiple threads in parallel. So I need to remove these globals. Probably I can create an array of
global tables, each thread will write to a separate table, although
I would like to make stateless code, not add another crutch.

Then I discovered same problems with tests that check failure behavior. Particularly check whether
exceptions are thrown correctly. It appeared they
did, however a clean program state wasn't restored after. Exception was thrown, but `globalTable` and
`imports` weren't cleared after. I added `clear()` on `PositionalException` initialization.

### Future work

Add `imports` to `FileTable` as a property. Remove `globalTable` and pass it as an argument.
