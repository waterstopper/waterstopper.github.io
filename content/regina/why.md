# Why I created a programming language

TLDR: I didn't think about making a library for dynamic instantiation. I should've made a library - that is an optimal path.

## Birth of 'generator or generators'

I liked creating visual generators. But I didn't like spending 2 weeks to flesh out an idea and to implement unuseful
tools like deployment to web or geometry functions.

*Looking back, I realise that I wasted much time due to switching between tools: for plant generator I used C# and .NET,
for House generator I used Godot and for map generator Kotlin with KorGE (there I spend much time figuring out how to
use KorGE and writing my own geometry function).*

I needed a tool to create generators. And I started thinking about it. On this stage, there was no intention on creating
a language, all the more so, I was unqualified at that time. I unofficially called this tool the 'generator of
generators'.

## Generator stages
I had these project specifications (from most to least priority):
1. It should be possible to create generators of any complexity
2. It should be concise
3. Non-programmers should be able to use it
### Web tool

Geometry primitives:

* Segment
* Rectangle
* Polygon/polyline (smooth)
* Ellipse
* Arc (circle)
*

Three types of containers:

1. Variant
2. Recursive
3. Container

![Image](images/firstdesign.jpg)

### Early stages of language development

### Upgrading language