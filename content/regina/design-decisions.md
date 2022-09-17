---
title: "Design decisions"
---

## Why null is 0?
I do not find void type useful. Therefore, void == null.

Now, let's state all cases when null appears:
1. function call with no return
2. parent
3. ?.