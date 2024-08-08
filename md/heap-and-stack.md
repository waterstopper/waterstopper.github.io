---
title: "Basic memory management"
date: 2022-06-28
---

*Last fall, I had an interview.
They asked me about differences between heap and stack, how
references and variables are stored.
I was confident that I knew all this stuff.
Apparently, I was wrong.*

# Commonalities

Both stack and heap use RAM.

# Stack

Stack is a LIFO static[^1] storage that contains:

* Local primitive variables
* References to non-primitive variables
* Method parameters
* Sequence of method calls (hence, each thread has its own stack. Also, this is the reason why
  infinite recursion will result in stack overflow error)

When the method finishes its execution, a stack is emptied with one assembly command - moving
the pointer to stack head. Therefore, a stack returns to the state before that method's call.

### Primitive variables

Local primitive variables are stored in stack. Primitive fields of an object instance are stored in
heap.

# Heap

Heap is a dynamic memory structure that stores non-primitive variables. References (pointers to
variable address in the heap) to these variables are in the stack.

Unlike stack, heap is commonly shared between threads. Consequently, one object shouldn't be
modified simultaneously from different threads.

Out of memory error is possible for the heap too.

### Garbage collector and C/C++ features

Some languages (Java, C#) handle memory automatically. A component responsible for it is called
garbage collector. Fallback of this approach is unexpected runtime slowdowns due to garbage
collector managing memory.

Other languages (C/C++) pass this responsibility on to programmer. In C++ every `new` keyword
should
be followed by `delete` to prevent memory leak. Additionally, it is possible to store object
instance on stack in C++, if variable is declared without `new`. Such local variable will
be popped from stack after method
execution. [A little more about C++ memory model](programming/cpp-pointers).

### Heap fragmentation

Heap is a single block of memory. When some memory from heap is released, a chunk of unused memory
is formed. After many iterations heap becomes a bunch of alternating fragments of used and unused
memory.

Essentially this is an inefficient memory utilization, because overall there might be $n$
bytes of free memory, however not all bytes can be allocated. It is possible to allocate no more
bytes than there are in the biggest consecutive chunk of free memory.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.199 50.241"><path d="M33.262 39.876h18.521v46.302H33.262z" style="fill:var(--main-color);fill-opacity:1;stroke:#000;stroke-width:2.616;stroke-linecap:round;stroke-opacity:0" transform="translate(-12.3 -38.002)"/><path d="M68.708 40.454h28.138v45.714H68.708z" style="fill:var(--main-color);fill-opacity:1;stroke:#000;stroke-width:3.20392;stroke-linecap:round;stroke-opacity:0" transform="translate(-12.3 -38.002)"/><path d="M127.509 39.951h7.633v45.714h-7.633z" style="fill:var(--main-color);fill-opacity:1;stroke:#000;stroke-width:1.66872;stroke-linecap:round;stroke-opacity:0" transform="translate(-12.3 -38.002)"/><path d="M136.79 40.371h9.225v45.552h-9.225z" style="fill:var(--main-color);fill-opacity:1;stroke:#000;stroke-width:1.83125;stroke-linecap:round;stroke-opacity:0" transform="translate(-12.3 -38.002)"/><path d="M108.78 40.475h12.521v45.256H108.78z" style="fill:var(--main-color);fill-opacity:1;stroke:var(--middle-color);stroke-width:2.12649;stroke-linecap:round;stroke-opacity:0" transform="translate(-12.3 -38.002)"/><path fill="none" d="M13.607 39.31H151.19v47.625H13.607z" style="fill:#253092;fill-opacity:0;stroke:var(--gray);stroke-width:2.616;stroke-linecap:round;stroke-opacity:1" transform="translate(-12.3 -38.002)"/></svg>

*After some time heap looks like a barcode (white is free memory, black is unused memory)*

[^1]: some languages allow stack reallocation