---
title: "Global"
tags:
- regina-docs
---
Global is a file that's imported by default.
```kotlin {title="Global.rgn"}
    fun print(x): Null {
        // print `x` into console
    }
    
    fun except(x) {
        // throws exception with `x` as message
    }
    
    fun input(input): Any {
        // not working in [IDE]()*. Receives console input and returns it.
    }
    
    fun write(content: String, path: String) {
        // write `content` to `path` file
    }
    
    fun read(path: String): String {
        // read file from `path` and return the result
    }
    
    fun exists(path: String): Bool {
        // checks if file by `path` exists.
    }
    
    fun delete(path: String): Bool {
        // delete file by `path`, return true if file existed
    }
    
    fun test(x: Bool) {
        // throw exception if x is false
    }
    
    fun rnd(isInt = false): Number {
        // random Double value (or Int value, if `isInt == true`).
        // Use {{<refer "regina/std/math/#functions" "std.math.rndInt and std.math.rndDouble" >}}  instead.
    }
    
    fun seed(x) {
        // not working in [IDE]()
        // change random seed for a rnd() and all random functions
    }
    
    fun str(x) {
        // call toString() for `x`
    }
    
    fun int(x) {
        // convert x to Int (x might be String or Double)
    }
    
    fun double(x) {
        // convert x to Double (x might be String or Int)
    }
    
    fun list(x) {
        // convert x to list
    }
    
    fun type(x) {
        // get type of x
    }
    
    fun copy(x) {
    }
    
    fun floatEquals(first: Number,
                    second: Number,
                    epsilon: Number = 0.0000000000000000000000000001,
                    absTh: Number = 0.0000001): Bool {
    }
    
    fun range(start: Int, end: Int, step: Int = 1) {}
```
## Functions

If you defined a function with the same signature, these functions are called with `Global.`
prefix, [similar to other imports]().