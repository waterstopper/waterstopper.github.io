---
title: "Types"
tags:

- regina-docs

---
{{< table_of_contents >}}

There are three value types and three reference types.

### Value types

1. Int
2. Double
3. String

### Reference types

1. List
2. Dictionary
3. Class instance

Assigning another variable a variable of a reference type will pass it by reference. Same holds for
passing function arguments

```kotlin
fun main() {
    arr = []
    change(arr)
    // here arr == [1]
    other = arr
    other.removeAt(0)
    // here arr == []
}

fun change() {
    arr.add(1)
}
```

## Null

Null is same as in kotlin or onter languages.

## Number

An abstract class, has Int and Double as inheritants. `Number` can be encountered in type check:

```kotlin
0.1 is Number // true
2 is Number // true
"3" is Number // false
```

### Documentation

```kotlin
class Number {
fun abs(): Number {
    // absolute value
}

fun min(other:Number): Number {
    // minimum of `this` and `other`
}

fun max(other:Number): Number {
    // maximum of `this` and `other`
}

fun pow(deg: Number): Double {
    // `this` to power of `deg`
}

fun round(digits: Number = 0): Double {
    // number rounded to `digits` number of digits
    // after point. Rounds away from zero: `(-0.5).round() == -1`
}

fun floor(digits: Number = 0): Int {
    // return biggest integer smaller or equal than target
}

fun ceil(digits: Number = 0): Int {
    // return smallest integer greater or equal than target
}

fun intDiv(divisor: Number): Int {
    // result of an integer division
}

fun sqrt(): Double {
    // square root
}

// Trigonometry
    fun sin(): Double {}
    fun cos(): Double {}
    fun asin(): Double {}
    fun acos(): Double {}
    fun tan(): Double {}
    fun atan(): Double {}
    fun atan2(x: Number): Double {} // `this` is considered as `y` of atan2
}

```

### Boolean

Numeric values are interpreted as boolean values in conditions (e.g. `if(condition)`
, `while(condition)`). 0 is considered to be false, everything else is true.
[Boolean operators](), return 1 and 0 respectfully.

### Int

#### Documentation

```kotlin
class Int: Number {
    Int.MIN_VALUE // returns -2147483648
    Int.MAX_VALUE // returns 2147483647
}
```

### Double

Currently, NaN, positive infinity and negative infinity are not supported (expect a behaviour
similar to kotlin, however working with these constants might give unexpected results).

```kotlin
// do not use following expressions:
 0 / 0 // NaN
 1 / 0 // Infinity
-1 / 0 // -Infinity
```

#### Documentation

```kotlin
class Double: Number {
    Double.MAX_VALUE // returns 1.7976931348623157E308
    Double.MIN_VALUE // returns 4.9E-324
}
```

## String

### Documentation

```kotlin
class  String {
    size // get number of characters in string
    
    // These functions do not change the initial string
    fun has(found: String): Bool {
        // returns found's existence
    }
    
    fun index(found: String): Int {
        // first index of found else -1
    }
    
    fun substring(start: Int, end: Int = this.size): String {
        // string from start (inclusive) to end (non-inclusive)
    }
    
    fun replace(oldString: String, newString: String): String {
        // returns string with all occurrences
        // of `oldString` changed to `newString`
    }
    
    fun reversed(): String {
        // reversed string
    }
    
    fun lowercase(): String {
        // initial string with lowercase letters
    }
    
    fun uppercase(): String {
        // initial string with uppercase letters
    }
}
```

## List

### Documentation

```kotlin
class List {
    size // number of list elements
    fun add(element, index: Int = this.size)
    {
        //inserts element to list at `index`
    }
    
    fun remove(element): Int
    {
        // remove element, get index of removed element (or -1, if not found)
    }
    
    fun removeAt(index: Int): Any
    {
        // returns removed element from `index`
    }
    
    fun has(element): Bool
    {
        // returns element's existence
    }
    
    fun index(found): Int
    {
        // returns first index of `found` or -1 if not found
    }
    
    fun joinToString(separator: String = ", "): String
    {
        // creates a string from list elements, separated by `separator`
    }
    
    fun clear(): Null
    {
        // removes all elements from List
    }
    fun sort(desc: Bool = false): Null
    {
        // sorts target list in place
    }
    
    fun sorted(desc: Bool = false): List
    {
        // does not sort target, returns sorted list.
    }
}
```

## Dictionary

## Documentation

```kotlin
class Dictionary {
    size // number of entries in dictionary
    keys // list of all keys
    values // list of all values
    entries // list of dictionaries for all entries. For example,

    fun remove(key): Any {
        // remove key and get associated value
    }

    fun has(key): Bool {
        // check if key exists
    }
}
```

### Examples

```kotlin
{1:2, "3":"4"}.entries 
// == [{"key":1, "value":2}, {"key":"3", "value":"4"}]
```

## Type

### properties

Properties that each instance has:

`parent` - null or parent of this instance

`properties` - dictionary of all properties

### Constructor

Class `A` instance is created with `A()` call. In parentheses properties are overridden and added.
Constructor properties are the first ones to resolve
during [dynamic instantiation](regina/dynamic-instantiation).

```kotlin
fun main() {
    defaultA = A() // instance with property p == 2
    changedA = A(t = 1, p = 3) // instance with properties t == 1 and p == 3
}

class A {
    p = 2
}
```

### Inheritance

Subclass takes all properties and functions of a superclass. Although they are overridable:

```kotlin
class Base {
    baseProp = "base"
    unchanged = "same"

    fun fn() { return "in base" }
}

class Inherited: Base {
    baseProp = "overridden"
    
    fun fn() {return "inherited"}
}

fun main() {
    i = Inherited()
    // i.unchanged == "same"
    // i.baseProp == "overridden"
    // i.fn() == "inherited"
}
```

> [!note] Note
>
> In future each class might have a `super` keyword to access parent functions. Parent properties
> aren't going to be accessible due to [dynamic instantiation](regina/dynamic-instantiation)

## Object

Object is a singleton type. It does not have a constructor and is closed for inheritance.
Everything else is similar to class.