---
title: "Global"
tags:
- regina-docs
---
Global is a file that's imported by default.

## Functions

If you defined a function with the same signature, these functions are called with `Global.`
prefix, [similar to other imports]().

`log(x): null`

`except(x)` throws exception

`input(input): Any` *not working in [IDE]()*. Receives console input and returns it.

`write(content: String, path: String)` -

`read(path: String): String` -

`exists(path: String): Bool` - checks if file by that path exists.

`delete(path: String): Bool` -

`test(x: Number)`

`rnd(isInt = false): Number` - random Double value (or Int value, if `isInt == true`). 

Use {{<refer "regina/std/math/#functions" "std.math.rndInt and std.math.rndDouble" >}}  instead.

`seed(x)` -

`str(x)` -

`int(x)` -

`double(x)` -

`array(x)` -

`type(x)` -

`floatEquals(first: Number, second: Number, epsilon: Number = 0.0000000000000000000000000001, absTh: Number = 0.0000001): Bool`

`range(start: Int, end: Int, step: Int = 1)`