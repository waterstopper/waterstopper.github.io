---
title: "Visibility scopes"
---

All scopes, sorted from the most visible to the least:

## Global scope

Classes, objects and functions are declared in global scope. Imported file declarations are in
global scope too. Global scope declarations are visible **everywhere**.

## Class instance scope

In class instance scope properties and functions are declared. These declarations are visible
**from a class instance and inside class functions**.

```kotlin
/** this program logs:
changed
in class
in global
**/
fun main() {
    a = A(prop="changed")    
    log(a.logger()) // function called from an instance
}

class A {
    // here prop, this.func and logger are visible
    prop = "prop"
    fun func() { return "in class" }
    fun logger(param = prop) {
        log(param)
        log(this.func())
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
    arg.add(2) // assuming arg is an array
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

## Accessing global declarations with same names

Each file might contain only one function with a particular signature. Same holds for classes and
objects. However, it is okay to have class and function with the same name 
(and no function params) - in this case class will be shadowed by that function.
```kotlin
class same {}
fun same() {return 1}
class difSignature {}
fun difSignature(param) {}
fun main() {
    log(same()) // 1
    log(difSignature()) // class instance
}
```

#### Import priority
If imported
```kotlin {title="data/config.yaml"}
dw
```

#### Using functions with same signature
```yaml {title="data/config.yaml"}
 enableCodeBlockTitle: true  # example from step 1
```
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