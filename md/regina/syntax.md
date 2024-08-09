---
title: "Syntax"
date: 2022-11-11
---

{{< table_of_contents >}}

ReGIna's syntax is an amalgamation of kotlin and python.

## Top level declarations

Essentially, file is a set of classes, objects, functions and imports. Executable and importable
files have `.rgn` format.

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

Function has non-default parameters and default parameters. Default parameters go after other ones.

```kotlin
fun functionName(param0, param1, ..., default_param0 = defaultValue, ...) {
    functionBody
}
```

{{< refer "regina/scopes/#using-functions-with-same-signature"
"Accessing functions with same signature" >}}.

### Imports

> [!warning] Warning
>
> Do not use following file names: Global.rgn, this.rgn

Imports are declarations that allow to use objects, classes and functions from an imported file.

## Operators

*Take a look at a [table of operator precedence](/writings/regina/operator-precedence)*

`+` non commutative addition with implicit type conversion. All use cases:

```kotlin
// List + Any <=> List.add(Any)
[1, 2] + 3 // == [1,2,3]
// String + Any <=> String + Any.toString()
"Hello, " + "Alex" // == "Hello, Alex"
// Int + Double or Double + Int <=> double(Int) + Double
1 + 3.2 = 4.2
```

`if(...) .. else ..` - ternary operator is kotlin-like.

### Boolean operators

Boolean operators return 0 and 1 respectively
(non-)equality: `==`, `!=`

Comparison: `>`, `<`, `>=`, `<=`

Logical operators: `&&`, `||`. As in other languages, if left operand is enough to resolve an
operator, right operator is not evaluated

`!`: not prefix operator. Inverts expression.

#### Boolean values

`true` is 1, `false` is 0. {{< refer "regina/types/#boolean"
"Boolean is Int." >}}

Examples:

```kotlin
// true and false are 1 and 0 respectfully. 
// There is no boolean type, only keywords,
// that are changed to numbers during runtime 
true // == 1
false // == 0
!true // == 0
```

> [!note] Notes
>
> In the future, `&` and `|` operators might be added.

### Arithmetic operators

### Ternary operator


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

```kotlin
condition = 1
while(condition) {
    
}
```

### foreach

foreach has:

1. an iterator name
2. an iterable (List, String or range)
3. body

Foreach will run the body for all the elements of collection.

#### Foreach in list

```kotlin
arr = [1, [], 3, [], 5]
foreach(i in arr) {
    if(i is List)
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

Similar to list, but all iterable elements are not changeable

#### Foreach in range

```kotlin
// range is a unique function used only inside foreach
// it has 3 arguments, where third is optional: step
li = []
foreach(i in range(0, 10, 2))
    li.add(i)
// li == [0, 2, 4, 6, 8, 10]
// if step is not specified, it equals to 1 or -1,
// depending on start and end
foreach(i in range(1, 3))
    li.add(i + 10)
// li == [0, 2, 4, 6, 8, 10, 11, 12, 13]
foreach(i in range(3, 0)) {
    li.removeAt(i)
}
// li == [8, 10, 11, 12, 13]
```

### 1. Accessing properties

# Code conventions

* Camel case is used.

* Names of [class](/writings/regina/syntax###Class), [object](/writings/regina/syntax###Object) start with a capital.

* Variables, functions start with a lowercase letter.

## Accessing and assigning collection elements

### List

```kotlin
empty = [] // create empty list
filled = [1, "2", [3, 4], {5:6}] // create list with elements

```

### Dictionary

```kotlin
dict = {1:2} // dict key value pair is created with a colon
dict[1] // accessing value by dict key
dict["key"] = "value" // assigning value to key
dict["not found"]
```

[^1]: `in` is not a keyword and a class, object, function or variable can be named `in`. On the
other hand, `as` is a keyword.