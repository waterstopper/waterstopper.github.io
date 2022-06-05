---
title: "ReGIna"
---

is a [dynamically typed](notes/typization.md) language with [syntax](syntax.md) similar to Kotlin
and Python.

## Core idea

Difference between other languages and ReGIna is [dynamic instantiation](regina/notes/dynamic-instantiation.md). In
short, properties in classes will be assigned only after their dependencies are assigned, allowing recursive properties
of same class `A` inside class `A`.

## Advantages

* **Can be embedded into web**. Regina is written in Kotlin and compiled into Javascript.
* **Rapid generator development**. Look at [examples](#Examples) to see what can be done and how much code is required.
* **Customizable export**.

## Drawbacks

* **It's slow**. It's definitely slower than Python. Yet it's designed to be fast and concise in creating generators.
    * **There is no community**. At least not yet. Mail me at kononal@gmail.com if you created something about Regina.

## Examples
