---
title: "How languages are run?"
---

People in the programing languages field use fancy buzzwords like **translator, transpiler,
compiler, interpreter**, **JIT** (just in time) compiler. Let's figure out what they mean. But
before let's create some sort of programming language hierarchy:

1. High level programming language
2. Assembly language (low-level language that is still programmable by humans)
3. Machine code (runs on processor, no reason to write it, because it is undecipherable without
   helper tools and is processor-specific)

### Translator

**Translator** is a general word for transpilers, compilers and interpreters. It's a tool
converting one code to another one (low-level or high level).

### Compiler

**Compilers** create machine code before runtime, which they save into binary files. Each
processor[^1] requires a special compiler. Plus, compiler depends on a platform. Say, there is
a compiler for C++ targeted for the Linux OS and a particular processor.

Benefits of compilers are:

1. Run once to create executable files. Afterwards, run execs each time a program is started.
2. Compilation is a form of program analysis, which will detect errors (called compilation errors)
   before running a program, with, for instance, heavy calculations (thus, speeding the refactoring
   process).

But there is a considerable drawback for a compiled language. Every little change in the program
requires recompilation of the whole module.

Languages that are compiled: C, C++, Haskell, Rust, Go

### Interpreter

**Interpreters**, on the other hand, can stumble upon such error that compiler could remove,
because
they translate a program line by line, during runtime. Due to this translation thing going, a
transpiler is initially slower than an already compiled code. But there is a catch, when running a
program line by line, there is more information that can be extracted, because interpreter will see
variable values that are impossible to analyse statically, before a program is run[^2]. That
is where JIT compiler comes into play. It finds runtime optimizations and identifies parts of code
which are faster to compile and execute rather than execute line by line (a default way of
interpreter).

Briefly, interpreters:

1. Translate code during runtime, line by line
   (that is why most of the debuggers are interpreters).
2. Do not create executable files.

Interpreted languages: Python, Perl, Ruby

### Transpiler

It is a tool that converts source code of one language to source code of the other language.
Usually referred to as translators between two high level languages. Transpiler is called source to
source compiler sometimes.

### Assembler

Also, there is a less frequently used term. **Assemblers**. Essentially, they are compilers for
assembly language. Assemblers convert assembly code into machine code before runtime. I think it
is a part of a compiler (compilation is a two-step process: translate language into assembly
language, then translate assembly into machine language).

### Is Java compiled or interpreted?

Java's source code is compiled into a binary byte code.
This code runs on JVM (technically not a
processor), that usually is a blazingly fast interpreter (and
often with a JIT compiler), that maps byte-code commands to processor
commands. Java can be considered both compiled and
interpreted language, similarly to Kotlin and Scala (JVM languages). Oftentimes though, Java is
thought to be compiled.

But I think it is easy to write an interpreter for any compiled language and hard to
write a compiler for an interpreted language. Therefore, any compiled language can be interpreted.

[^1]: I'm not sure that compiler cannot target multiple processors at once. ISA (Instruction set
architecture) of processor is an important thing. Different processors with similar ISAs might be
targeted by one compiler.

[^2]: And this cannot be fixed by compiling a program twice: first to run it and find optimizations
during runtime, and second to create optimized binary executables. This is because optimizations do
depend on the input arguments, which may vary vastly.