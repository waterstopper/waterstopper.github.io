---
title: "Multithreading. Primitive tools, definitions"
---

First, let's clarify some definitions (I won't go too deep into that):

### Process

**Process** is a running program, that has its own address space in memory (most of it is heap).
**Multithreading** is running multiple programs in OS simultaneously (like browser, messenger, IDE,
task
manager...)

### Thread

**Thread** is an execution unit of a process, it uses process heap but has its own stack.

**Parallelism** or **multithreading** is multiple threads running at once.

**Concurrency** means managing multiple threads of execution, not necessarily at the same time.
Parallelism is a method of concurrency (I'm not sure about that one, I took it from
[here](https://stackoverflow.com/questions/4844637/what-is-the-difference-between-concurrency-parallelism-and-asynchronous-methods#comment5379841_4844774))
.

### Asynchronous and synchronous

Synchronous blocks of code execute after each other, **next one cannot be executed before previous
is not finished**. Imperative language statements are synchronous (code runs line by line).
Asynchronous blocks of code, which are also called **tasks** might run simultaneously, their run
independently[^1] form each other.

### Basic multithreading tools in Java

Java has a `Thread` class and a `Runnable` interface. Both of them have a `run()` method, which
body
is executed asynchronously to the main thread[^2], when `start()` is invoked. Example of starting
Runnable and Thread asynchronously:

```java
public static void main(String[] args) {
    Runnable ir = ImplementedRunnable();
    Thread t = Thread(ir); // to run a runnable, instantiate a wrapper-thread
    Thread dt = DerivedThread();
    t.start();
    dt.start();
    // result of this code might be "thread runnable " or "runnable thread ", it is not determined.
}

class DerivedThread extends Thread {
    public void run() {
        System.out.print("thread ");
    }
}

class ImplementedRunnable implements Runnable {
    public void run() {
        System.out.print("runnable ");
    }
}
```

#### Useful thread methods

Thread's execution might be interrupted with `Thread.interrupt()`.

`Thread.join()` will make a current thread wait until a joined thread instance finished its
execution.

```java

void joinExample() {
  Thread dt = DerivedThread();
  dt.start();
  dt.join();
  System.out.print("2");
  // calling joinExample() always prints "thread 2"
}
```

### Synchronized block/method

Synchronized blocks can be run only by one thread at a time. This is done by creating a **
monitor** (aka **lock**), which is some object that a running thread takes. Only a thread with a
monitor A can access a synchronized block, that is synchronized on monitor A.

Synchronized method is implicitly locked on the instance that its being invoked on. Static
synchronized methods lock on the class itself.

### Atomic

Atomic actions are performed momentarily and cannot be interrupted. They either complete or not run
at all. Atomic operations:

* read/write references and primitive values, excluding `long` and `double`
* read/write variables with `volatile` keyword.
  There are special classes, like `AtomicInteger` that make all its main operations (addition,
  multiplication...) atomic.

[^1]: well, if they use synchronous methods, then some of their runtime is dependent.
[^2]: when a program is started, a main thread is created. It is a user thread. Main difference
between daemon and user threads is that a program won't finish until there is a running user
thread. Daemon threads are service threads, for instance garbage collection is a daemon thread.