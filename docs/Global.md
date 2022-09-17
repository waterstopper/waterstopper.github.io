---
title: "Global"
---
Global is a file that's imported by default.

## Functions

If you defined a function with the same signature, these functions are called with `Global.`
prefix, [similar to other imports]().

`log(x): null`

`except(x)` throws exception

`input(input): Any` *not working in [IDE]()*. Receives console input and returns it.

`write(content: String, path: String): null` - 

`read(path: String): String` -

`exists(path: String): Bool` - checks if file by that path exists.

`delete(path: String)` -

`test(x: Number): Number`

`rnd(isInt = false): Number` - random Double value (or Int value, if `isInt == true`). Use `rndInt`
and `rndDouble` instead.

`seed(x)`