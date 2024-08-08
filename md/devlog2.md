---
title: "Devlog 2. Link class. Removing state"
date: 2022-07-05
---

Link class is for evaluating links. A link is a statement in form of `a.b.c`, where all expressions
after dots (in this case `b` and `c`) are either identifiers[^1], indexes[^2] or invocations[^3].
Expression before the dot is anything, even the ternary operator.
These expressions are link children.

### Link evaluation

Links are resolved iteratively, starting from the first expression. Every evaluated expression
returns a property (a type or a primitive). But the first child might be a name of an imported
file, therefore it is resolved differently from all the next children.

During dynamic creation of a class it is important to know what parts of the link are
assigned. For example:

```kotlin
class Start {
    a = mid.end.endProperty // a is not assigned until mid, end and endProperty are
    mid = Middle()
    mid.end.addedEndProperty = "anotherEndValue" /** it is applicable for
        left hand-side of assignment too. mid and end need to be assigned first
        **/
}
class Middle {
    end = End()
}
class End {
    endProperty = "endValue"
}
```

### Adding state, encountering problems

For convenience, I added these properties to the link instance:

* `index`: index of currently resolved child
* `currentVariable`: value of currently resolved child
* `currentParent`: previously resolved child
* `table`: symbolTable with `currentVariable` as `variableTable`
* `initialTable`: symbolTable before link
  evaluation, used to resolve function arguments. It is useful in the following code:

```kotlin
class A {
    a = 0
    b = B()
    fun aFunction() {
        b.bFun(a, b) /** here table will change variableTable to B instance, therefore a and b
            properties will not be found for bFun call. That's why invocation arguments are resolved
            using initialTable
            **/
    }
}
class B {
    fun bFun(arg1,arg2) {
        // do something
    }
}
```

These variables are cleared after the end of the evaluation. However, I didn't think about
recursive functions:

```kotlin
class A {
    a = if(iter < 5) A() else Nothing()
    iter = if(parent == 0) 0 else parent.iter /** parent is a special property.
        It returns an instance from which this instance is created or 0 **/
    fun str() {return "iter, " + a.str()}
}

class Nothing() {
    fun str() { return "end" }
}
```

In that case, when calling `str()`, variable values weren't cleared. I might've come up with some
hack, but again, I knew that was bad
solution. Link represents a token, it is not a place to store evaluation values. So I moved state
to function arguments. Link is still a poorly written class that has bugs. I work on fixing them
and refactoring Link.

[^1]: Identifier is a word, starting with a letter. All other symbols are letters, underscores or
numbers
[^2]: Index is a token for getting a value from string, array or dictionary. It is an identifier
with square brackets. Square brackets contain index (or a key, if identifier is a name of a
dictionary). `arrayName[2]`, `dictionaryName["key"]`
[^3]: Invocation is a function call or a class constructor. `call(a+b, someArgument=value)`
, `ClassA(propertyName=value)`