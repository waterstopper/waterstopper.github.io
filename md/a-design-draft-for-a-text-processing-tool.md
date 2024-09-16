---
title: "A design draft for a text processing language-tool"
date: 2024-09-15
---

# Problem scope
The idea is to create a tool (a "programming" language) for people who have to do **repetitive** text processing tasks **often**. The program will automate any text processing a user did manually. If a task is not repetitive and is done in a reasonable amount of time, then there is no need to automate it.

Inputs and outputs are mostly xlsx and docx files.

Program will be an almost natural-like language. Also I want to create GUI where user can select parts of text and process text with those selections (e.g. select name from one table, then spread the selection for the whole column, find these names in the other files and increment some corresponding column value in the file). This GUI won't be described in detail here, only the language.  All actions in GUI should have a counterpart in the language.

# Use cases

## Weekly excel documents processing
We have a table "clients" with columns `name` (string), `visit` (integer).
Each week we get a table "week N" with columns `name` (string) and `organization` (string).

For each client where `organization` in "week N" isn't equal to `our_organization`, we need to increase visit in "clients" by 1.

Here is an SQL-solution:

```PostgreSQL
UPDATE clients c
SET c.visit = c.visit + 1 -- not sure it will work
FROM (
    SELECT name
    FROM weekN
    WHERE organization <> "our_organization"
    ) AS weekly
WHERE c.name = weekly.name
```

Focus is specifically on tasks that involve 2 or more excel tables, that cannot be solved with Excel.

## Parsing newspapers' movie schedules
Having a text with many entries like `"<movieName1>, <movieName2>": <theaterName1>, <theaterName>...` for each date, create a table with three columns `theater`, `movie`, `day count`, where `day count` equals maximum consecutive days that that movie was shown in a particular theater.

My girlfriend had that task, she had to process 2.5 months of such data. So [I wrote a program](https://waterstopper.github.io/NewspaperParser/) that does most of the work (input text for each day, get a table with results).

# Restrictions and insights
1. **It should be a website**. Some companies prohibit third-party software installation, but a browser is installed everywhere.
2. **It shouldn't look like a programming language**. I did some research[^1] for inspiration and didn't find good analogues.
3. **It should be interpreted** for almost zero-startup times. Additionally it should have a kind of "debugging" environment where user can look into intermediate results of execution.
4. Apparently **it's ok to have explicit and terse syntax for same things**, according to [Stroustrup's Rule](https://www.thefeedbackloop.xyz/stroustrups-rule-and-layering-over-time/). There might be features like `expand` and `shorten` to refactor such statmements into their long and short counterparts.

# Raw draft of how I want it to look:
I want to have as few variables as possible, because I think it is a low-level construct that isn't necessary. Most of the time, a solution to a text-processing problem can be described without explicit variables.

## Task 1
Task is described in [weekly documents processing](#weekly-excel-documents-processing)
```
For each row in "weekN" filter row's "organization" <> "our_organization":
    If row's "name" exists in "output": visit add 1. 
```

## Task 2
[Compress strings](https://leetcode.com/problems/string-compression/description/): `avvvdkwwwqm -> av3dkw3qm`
```
replace sequences (seq) of equal symbols with: seq[0] + seq size; here seq is a variable for a sequence
```

## Task3
[Check if number is palindrome](https://leetcode.com/problems/palindrome-number/) (121 -> true, 123 -> false)
```
it reverse equal it
```

# Why AI is not a good solution
AI can solve the text processing problem in one of two ways:

1. Write code that solves text processing. Not a good solution, because such code is hard to edit if you don't know how to program.
2. Do some *blackboxy black magic* and output desired result. This is not a good solution.

Currently I mark AI-solutions as unreliable, but that can change quickly.

# Seeking help
If you can contribute in any way ([kononal@gmail.com](mailto:kononal@gmail.com)):

1. Provide any recurring text processing use-cases.
2. Provide examples of languages/libraries that tackle the problem well.
3. Link any useful resources. What I found: https://proglangdesign.net/ for relevant resources and a list of some languages; [Rosetta code](https://rosettacode.org/wiki/Rosetta_Code) for solutions of tasks in different languages.
   
I'll be very grateful.

[^1]: Recently I skimmed through a [list of programming languages](https://proglangdesign.net/) and was frustrated with how most of them look identical and do identical things (I was checking entries that might be close to what I'm trying to create, not all of them). I was hoping to draw inspiration from these languages. but the only interesting idea I found is in-code comments from [Cognate](https://github.com/cognate-lang/cognate). Also I found [Icon language](https://www2.cs.arizona.edu/icon/index.htm) from Paul Graham's [post](https://paulgraham.com/power.html). I like the generators and condition expressions that return non-bool in Icon.
