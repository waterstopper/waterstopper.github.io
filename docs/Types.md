# Types

There are three value types and three reference types.

## Value types

1. Int
2. Double
3. String

**Note: Numeric system is similar to javascript. If floating part is 0, then number is Int,
otherwise it is Double**

## Reference types

1. Array
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

`floor(digits: Number = 0): Int` -

`ceil(digits: Number = 0): Int` -

`intDiv(divisor: Number): Int` - return result of an integer division

### Null

Null equals to 0. [Why is that?]()

### Boolean

Numeric values are interpreted as boolean values in conditions (like `if(condition)`
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

## Numbers and their operations

```
// true and false are 1 and 0 respectfully. 
// There is no boolean type, only keywords,
// that are changed to numbers during runtime 
true // == 1
false // == 0
!true // == 0
```

## Array
### properties

### functions
`add(arr, x)` // adds x to the end of array
    fun add(arr, i, x) // inserts x at index i
    fun remove(arr, a) // removes element x if found and returns 1 if removed successfully, 0 if not
    fun removeAt(arr, i) // removes element by index
    fun has(arr, x) // returns 1 if array contains x, else returns 0