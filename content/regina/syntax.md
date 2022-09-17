---
title: "Syntax"
tags:

- regina-docs

---

{{< table_of_contents >}}

ReGIna's syntax is an amalgamation of kotlin and python.

## Declarations

### Class

Class declaration should satisfy following format:

```kotlin 
class ClassName : SuperClassName {
    ...
}
```

where `: SuperClassName` is optional.

Class contains properties and functions.

### Object

Similar syntax to type, although it cannot be inherited.

```kotlin
object ObjectName {
    ...
}
```

Object is a singleton that is lazily initialized (when a property is called, it is initialized and
everything needed for its initialization).

```kotlin
object Lazy {
    a = b
    b = 1
    c = 2
}

fun main() {
    // here nothing in Lazy is initialized
    log(Lazy.a)
    // here Lazy.a and Lazy.b are initialized, c is not
}

```

### Function
Function has parameters and default parameters.
```kotlin
fun functionName(param0, param1, ..., default_param0 = defaultValue, ...) {
    ...
}
```

### Imports
*Do not use following file names: Global.rgn, this.rgn*

## Operators

`+`

### Boolean operators

`==`

### Property/variable assignment

```kotlin
variableName = ...
className.PropertyName = ...
```

Variables and properties are dynamic, meaning they are type independent. `a` can be String and in
the next line it can
be Int or class instance.

## References

References are expressions of form `a.b.c`. They serve 3 purposes:

1. accessing class/object properties
2. accessing primitive/class/object and functions
3. specifying package declarations
4. reducing expressions

## Cycles

### while

while is a cycle which body executes until the condition is false.

```
condition = 1
while(condition) {
    
}
```

### foreach

foreach has:

1. an iterator name
2. an iterable (Array, String or range)
3. body

Foreach will run the body for all the elements of collection

#### Foreach in array

```
arr = [1, [], 3, [], 5]
foreach(i in arr) {
    if(i is Array)
        i.add("a")
    else i = i + 1
}
// arr == [1, ["a"], 3, ["a"], 5]
foreach(i in arr) {
    arr.remove(i)
}
// arr == [["a"], ["a"]]
// this happens because foreach internally 
// iterates over a collection by an index.
// t
// it is very unadvisable to modify collection's size inside foreach.
```

#### Foreach in String

#### Foreach in range

### 1. Accessing properties

# Code conventions

Camel case is used.

Names of [class](Syntax.md/###Class), [object](Syntax.md/###Object) start with capital.

Variables, functions start with lowercase letter.

## Accessing and assigning collection elements

### Array

```
empty = [] // create empty array
filled = [1, "2", [3, 4], {5:6}] // create array with elements

```

### Dictionary

```
dict = {1:2} // dict key value pair is created with a colon
dict[1] // accessing value by dict key
dict["key"] = "value" // assigning value to key
dict["not found"]
```

### Global functions