---
title: "C#: Boxing, unboxing and equality operator"
date: 2022-07-01
---

# Boxing / unboxing

Boxing/unboxing has to do with reference and value types. Value types store their values on
stack (usually primitives). Reference types store value in heap and reference to that value on
stack.

Boxing is process of converting value type to reference type, unboxing is
the opposite. These procedures are computationally expensive, because:

* to box a value, a new object should be created.
* to unbox a value, it should be cast to a particular type, which is time-consuming (albeit to a
  lesser extent than boxing). To avoid boxing, one
  should use generics.

# Equality

There are two types of equality: reference and value.
Reference equality is applicable only to reference types.
It checks that two objects point to the same value in heap.
Value equality checks that two variables contain the same value.

*Note: `==` operator will call `ReferenceEquals` for reference types and is not applicable for two
variables of different type.*

### Examples

```C#
  int a = 3;
  object pA = a; // implicit boxing
  object explicitPA = (object)a; // explicit boxing
  int b = (int)pA; // explicit unboxing - cast an object to type (the only possible way)
  int implicitUnboxing = pA; // Error: Cannot implicitly convert type 'object' to 'int'

  Console.WriteLine(ReferenceEquals(a, pA)); // False
  Console.WriteLine(Equals(a, pA)); // True
  Console.WriteLine(ReferenceEquals((object)a, pA)); // False
  Console.WriteLine(a == b); // True, calls Equals()
  Console.WriteLine((object)a == (object)b); // False, calls ReferenceEquals()
  Console.WriteLine(a == pA); // Error: Operator '==' cannot be applied to operands if type 'int' and 'object'
```