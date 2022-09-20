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

**Note: Numeric system is similar to javascript. If floating part is 0, then number is Int,
otherwise it is Double**

### Reference types

1. List
2. Dictionary
3. Class instance

Assigning another variable a variable of a reference type will pass it by reference. Same holds for
passing function arguments

```
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

## Number

An abstract class, has Int and Double as inheritants. `Number` can be encountered in type check:

```
0.1 is Number // true
2 is Number // true
"3" is Number // false
```

### Functions

`abs(): Number` - absolute value

`min(other:Number): Number` - minimum of `this` and `other`

`max(other:Number): Number` - maximum of `this` and `other`

`pow(deg: Number): Double` - `this` to power of `deg`

`round(digits: Number = 0): Double` - number rounded to `digits` number of digits
after point. Rounds away from zero: `(-0.5).round() == -1`

`floor(digits: Number = 0): Int` - return biggest integer smaller or equal than target

`ceil(digits: Number = 0): Int` - return smallest integer greater or equal than target

`intDiv(divisor: Number): Int` - result of an integer division

`sqrt(): Double` - square root

Trigonometry: `sin(): Double`
`cos(): Double`
`asin(): Double`
`acos(): Double`

### Null

Null is number, and it equals to 0.
{{<refer "regina/design-decisions/#Why-null-is-0?" "Why null is 0?" >}}

### Boolean

Numeric values are interpreted as boolean values in conditions (e.g. `if(condition)`
, `while(condition)`). 0 is considered to be false, everything else is true.
[Boolean operators](), return 1 and 0 respectfully.

### Int

#### Properties

* `Int.MIN_VALUE` - returns -2147483648
* `Int.MAX_VALUE` - returns 2147483647

### Double

Currently, NaN, positive infinity and negative infinity are not supported (expect a behaviour
similar to kotlin, however working with these constants might give unexpected results).

```
// do not use following expressions:
 0 / 0 // NaN
 1 / 0 // Infinity
-1 / 0 // -Infinity
```

#### Properties

* `Double.MIN_VALUE` - returns 4.9E-324
* `DOuble.MAX_VALUE` - returns 1.7976931348623157E308

## String

### properties

`size` - get number of characters in string

### functions

`substring(start: Int, end: Int = this.size): String` -

`replace(oldString: String, newString: String): String` -

`reversed(): String` -

`lowercase(): String` -

`uppercase(): String` -

## List

### properties

`size` -

### functions

`add(element, index: Int = this.size)`

`remove(element): Int` - remove element, get index of removed element (or -1, if not found)

`removeAt(index: Int): Any` -

`has(element): Bool`

`joinToString(separator: String = ", ")` -

`clear()`

`sort(desc: Bool = false)` - sorts target list in place, returns null.

`sorted(desc: Bool = false)` - does not sort target, returns sorted list.
``

// adds x to the end of list
fun add(arr, i, x) // inserts x at index i
fun remove(arr, a) // removes element x if found and returns 1 if removed successfully, 0 if not
fun removeAt(arr, i) // removes element by index
fun has(arr, x) // returns 1 if list contains x, else returns 0

## Dictionary

### properties

`size` - number of entries in dictionary

`keys` - list of all keys

`values` - list of all values

`entries` - list of dictionaries for all entries. For example,

```kotlin
{1:2, "3":"4"}.entries 
// == [{"key":1, "value":2}, {"key":"3", "value":"4"}]
```

### functions

`remove(key): Any` - remove key

`has(key): Bool` - check if key exists

## Type

### properties

Properties that each instance has:

`parent` - null or parent

`properties` -

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