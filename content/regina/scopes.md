---
title: "Visibility scopes"
---

{{ <ref .PAGE> }}

{{< title_reference "https://alex5041.github.io/regina/scopes/#using-functions-with-same-signature" "abc" >}}

[About]({{< ref "/regina/scopes" >}})

[A](regina/scopes/#global-scope)

All scopes, sorted from the most visible to the least:

## Global scope

In global scope classes, objects and functions are declared. Imported files are in global scope
too. Global scope declarations are visible **everywhere**.

## Class instance scope

In class scope properties and functions are declared. These declarations are visible **from a class
instance and inside class functions**

```kotlin
/** this program logs:
changed
in class
in global
**/
fun main() {
    a = A(prop="changed")    
    log(a.called())
}

class A {
    prop = "prop"
    fun func() { return "in class" }
    fun called(param = prop) {
        log(param)
        log(this.func())
        return func()
    }
}

fun func() { return "in global"}
```

Classes cannot be reassigned. ```ClassName = something``` will create a variable or property with
same name and it will
shadow that class for its scope, making it impossible to use ```class ClassName``` in scope.

## Function scope

Functions can have variable assignments and blocks. Functions change its reference arguments. All
global scope declarations: other global functions, class constructors, object variables are
visible.

```kotlin
object Colors {
    BLACK = "000000"
}

fun changeClassProperties(arg) {
    arg = 5 // arg is now 5
    Colors.BLACK = "111111" // Colors.BLACK is changed
    arg.parent.property = 3 // property will change outside of function scope
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

#### Using functions with same signature

Function signature consists of:

1. function name
2. number of parameters
3.

Priority:

1. [Global](regina/syntax) function
2. [Global](https://alex5041.github.io/regina/scopes/#using-functions-with-same-signature) function
3. Class instance function
4. [About]({{< ref "regina/syntax.md" >}})
5. {{< relref "#global-scope" >}}

This is due to the fact that class instance function can be called with `this.` prefix. Current
class function does not have a prefix to be called with.