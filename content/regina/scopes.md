---
title: "Visibility scopes"
date: 2022-11-05 
---
{{< table_of_contents >}}

All scopes, sorted from the most visible to the least:

## Global scope

Classes, objects and functions[^1] are declared in global scope. Imported file declarations are in
global scope too. Global scope declarations are visible **everywhere**.

## Class instance scope

In class instance scope properties and functions are declared. These declarations are visible
**from a class instance and inside class functions**.

```kotlin
/** this program prints:
changed
in class
in global
**/
fun main() {
    a = A(prop="changed")    
    print(a.logger()) // function called from an instance
}

class A {
    // here prop, this.func and logger are visible
    prop = "prop"
    fun func() { return "in class" }
    fun logger(param = prop) {
        print(param)
        print(this.func())
        return func()
    }
}

fun func() { return "in global"}
```

## Function scope

Functions can have variable assignments and blocks. Functions change its reference arguments. All
global scope declarations: other global functions, class constructors, object variables are
visible inside a function body.

```kotlin
object Colors {
    BLACK = "000000"
}

class A {}

fun change(argArr, argInstance) {
    arg.add(2) // assuming arg is a list
    Colors.BLACK = "111111" // Colors.BLACK is changed
    argInstance.property = 3 // property will change outside of function scope
} 

fun main() {
    arr = []
    a = A()
    change(arr,a )
    // here arr == [2],
    // a.property == 3
}
```

Variables are visible from anywhere below the variable declaration.

```kotlin
fun scope() { 
    i = 0
    while(i < 5) {
        a = 1
        i = i + 1
    }
    return a // here a is visible and equals 1
}
```

*This behaviour differs from most of the languages, consequently it might change in future.*

## Block scope

Blocks change already defined values. Variables defined inside of blocks are visible outside to the
end of the function scope.

Block scope is nonexistent in some sense.

```kotlin
fun someFunction() {
    a = 5
    // a == 5
    while (condition) {
        a = 3
        b = 2
        // a == 3
    }
    // a == 3
    // b == 2
}
```

## Accessing declarations with same names

Each file might contain only one function with a particular signature. Same holds for classes and
objects. However, it is okay to have class and function with the same name
(and no function params) - in this case class will be shadowed by that function.

```kotlin
class same {}
fun same() {return 1}
class difSignature {}
fun difSignature(param) {}
fun main() {
    print(same()) // 1
    print(difSignature()) // class instance
}
```

### Import priority

If imported file contains a declaration with the same name as existing,

```kotlin {title="std.geometry2D.rgn"}
class Point {
...
}
...
```

Current file's declaration is prioritized.

```kotlin {title="main.rgn"}
import std.geometry2D as geom

class Point {}

fun main() {
    p = Point() // main.Point instance
    pGeom = geom.Point() // std.geometry2D.Point instance
}
```

> [!warning]- Same in different imports
>
> If two imports contain two similarly named declarations (say, both of them
> have `object Constants`) and current file does not have such declaration,
> using that declaration without file prefix is prohibited. That's because it is ambiguous which
> declaration to use.

### Using functions with same signature

Function signature consists of:

1. function name
2. number of parameters

Priority:

1. Local function **always** has priority over imported one (second step is not applicable, if
   there is a local function that can be called).
2. Top level function is prioritized over a class function[^2].
3. Then, find a function with the least number of unspecified default parameters[^3] (those which
   are
   not arguments in a call). For instance, if there are functions:

    1. `fun fn(a1, a2) {...}`,
    2. `fun fn(a1, a2, a3 = 1) {...}`,

   and the call is `fn(1,1)`, first function is called.

Keep in mind, that inherited functions are simply added to the current subclass. If current class
defines the same function, superclass function is shadowed. Following example might clear things:

```kotlin
fun main() {
   s = Subclass()
   print(s.fn()) // "base"
   log(s.shadow()) // "this is called"
}

class Superclass {
   fun fn() {return "base"} 
   fun shadow() {return "not called"}
}

class Subclass: Superclass {
   fun fn(a = 1) {"not called, because fn without default parameters has more priority"}
   fun shadow() {return "this is called"}
}
```

[^1]: Functions can be declared in classes too.

[^2]: This is due to the fact that class instance function can be called with `this.` prefix.
Current class function does not have a prefix to be called with.
[^3]: Currently if there are two functions in **different** imports that both can be called,
program will throw an error saying that it cannot pick needed function.