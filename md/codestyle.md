---
title: "Code style"
date: 2022-11-24
---

Some tips about code style, applicable to many languages but written in kotlin:

1. Naming:
  If there exists a class with a similar purpose in Java SDK, then try to follow their naming style. e.g. if you write a formatter of some kind,
look up [DecimalFormat](https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/text/DecimalFormat.html)
or [DateFormat](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/text/DateFormat.html). These classes have key methods
 `parse` and `format`. Try to name your formatter similarly and include the same methods.
   Additional tips in [Java naming conventions](https://www.oracle.com/java/technologies/javase/codeconventions-namingconventions.html)
   
   On the other hand, do not the name class if it resembles a common pattern that is not present in your code. For instance, a class
   should not be named `SomeBuilder` if it doesn't follow the [Builder pattern](https://en.wikipedia.org/wiki/Builder_pattern) and sequentially doesn't contain `build` method in it.

2. Naming methods:
   There are 4 things that make the description of the method:
   1. ~~Name of the returned variable~~ (I don't agree with that one, because it's not visible in the callee),
   2. Name of the caller variable (the one that calls the method)
   3. Names of method params
   4. The method name itself. **It should not include any of the previous things**.

3. Refactoring conditional expressions:
Conditional expressions should be on the same level of identation for better readibility:
```kt
// this; if-else on the same level
fun getCondition(condition: Boolean) =
  if(conditional)
    true
  else
    false
// over this; not clear at the first sight where is the corresponding if
fun getCondition(condition: Boolean) = if(conditional)
  true
else
  false

```
