Dynamically typed languages check variable type during runtime, meaning it is more **error-prone**.On the contrary,
statically typed languages check variable type during compilation.

Often dynamically typed languages can reassign the same variable with a different type. Also, variable declaration and
assignment are similar for dynamic languages.

```Python
# Python
a = 2
a = "2" # not an error
```

One of the clues of static typing is in variable declaration:
usually variables have a type before a name in declaration:

```C
 // C
 int a = 2;
 a = 3;
```

However, it is not always the case:

```Kotlin
// Kotlin
val a = 2
```

In Kotlin variable declaration prefix determines its mutability and type is derived from the expression on the right.
