---
title: "C++ Memory model"
date: 2022-09-30
---

Memory is a two column table. First row contains **addresses**, second row contains **values**.

```C++
int x = 4;
```

When variable is assigned, an empty memory row cell is chosen. Variable's value is written to
second column of the row.

|Address|Value|Assigned variable (not part of a memory, just a showcase example)|
|------|------|------|
|0x1000|     4|     x|
|0x1004|0x1000|    pX|
|0x1008|4     |     y|

# Pointer

```C++
int* pX = &x;
```

Variable declaration with a `*` after type states that it is a pointer to that type. In this
case, **pX is an integer pointer**. Instead of storing value, pointer variable store memory address
in their value column (second column of a memory row).

`&` is for extracting address from a variable. `&x` means **address of variable named x**

# Dereference

```C++
int y = *pX;
```

Variable with a preceding asterisk (`*`) referred to as a **dereference**. When used before a
pointer variable, this expression will return a value in a row, to which such variable points to.