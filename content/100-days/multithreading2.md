---
title: "Multithreading. Problems, Object methods"
---

### Thread problems

Thread problems have names. Here are the most popular ones.

#### Deadlock

N locks locked forever, waiting for each other. For instance, two monitors are required to move
further, and two threads have one monitor taken. They both will be waiting until another monitor is
freed, which won't happen. In Java there are no tools to identify deadlock.

#### Livelock

Threads interact with each other not performing any useful work.

#### Starvation

Thread waits for monitor access for too long, while other threads access that monitor multiple
times.

### Useful synchronization Object methods

All following methods require a thread to have a monitor. Hence, these methods can be used only
in `synchronized` block/method.

**wait()**. When reaching this command, thread frees a monitor and is put into a waiting
list, pausing its execution. Usually `wait()` is surrounded in a `while` cycle.

**notify()**. Frees one random thread waiting for a particular monitor and gives them a monitor.

**notifyAll()**. Empties a waiting list of threads waiting. A random thread gets a monitor, while
all other threads go back to waiting list. The only difference that I found out with `notify()` is
that with `notify()` JVM selects a thread, with `notifyAll()` the system thread scheduler does it.
Probably system thread scheduler guarantees that all waiting threads will, in some time, acquire
lock, while JVM does not (it might accidentally pick a subset of waiting threads all the time,
putting other threads to starvation).

#### Spurious wakeups

Sometimes waiting threads can get out of a waiting list. This happens due to specific thread
implementations in different OS. Also thread can be woken from an `interrupt()` call. That is one
reason why `wait()` should be surrounded in a `while` block - to put spontaneously woken thread
back into waiting.