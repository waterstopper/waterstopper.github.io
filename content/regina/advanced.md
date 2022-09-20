---
title: "Things that hopefully you will never encounter"
---
But are good to know anyway.

## Dictionary mutable key

```kotlin
fun main() {
    a = [1]
    t = {a: "value"}
    log(t)
    log(t[[1]])
    a.add(2)
    log(t)
    log(t.entries[0]["key"])
    log(t[t.entries[0]["key"]])
    log(t[[1, 2]])
}
```

```kotlin
fun main() {
    val a = mutableListOf("a")
	val m = mutableMapOf(a to "b")
    println(m[mutableListOf("a")]) // b
    a.add("b")
    println(m) // {[a, b]=b}
    println(m[mutableListOf("a", "b")]) // null
}
```

```python
# frozenset
# tuple
```