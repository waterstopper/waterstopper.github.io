---
title: "SQL"
date: 2022-09-30
---

*created from [this free course](https://www.codecademy.com/courses/learn-sql)*

## Definitions

**Table** a.k.a relation

**Column** - set of data values of particular type

**Row** - a single record in a table

**Statement** - is a command for database

**Query** - command to retrieve information from database in a table form

## Statements

### Create

```SQL
CREATE TABLE celebs
(
    id   INTEGER,
    name TEXT,
    age  INTEGER
);
```

### Select

```SQL
SELECT *
FROM celebs;
```

Select returns a new table called **result set**. It is a multiset, meaning there might be
duplicates.

`AS` - keyword to change a name of the result set (or column): `SELECT name AS 'new name'`. Columns
are not renamed in the original table, only in the resulting one.

`DISTINCT` - returns a **set** of unique values in column: `SELECT DISTINCT tools FROM inventory`.

### Insert into

```SQL
INSERT INTO celebs (id, name, age)
VALUES (1, 'Celeb name', 22);
```

### Alter table

```SQL
ALTER TABLE celebs
    ADD COLUMN twitter_handle TEXT;
SELECT *
FROM celebs;
```

### Update

Edits rows in a table by changing column values

```SQL
UPDATE celebs
SET twitter_handle = '@taylorswift13'
WHERE id = 4;
```

[leetcode swap example](https://leetcode.com/problems/swap-salary/)

```SQL
UPDATE Salary
SET sex = CASE
              WHEN sex = 'f' THEN 'm'
              ELSE 'f'
    END;
```

### Delete from

```SQL
DELETE
FROM celebs
WHERE twitter_handle IS NULL
```

### Order by

add `DESC` at the end to receive reverse order or `ASC` to get the
opposite. <strong style="color:var(--primary)">Order by always goes after WHERE (if WHERE present)</strong>
.

```SQL
SELECT name, year, imdb_rating
FROM movies
ORDER BY imdb_rating DESC;
```

### Limit

Specify maximum number of rows in the result set. `LIMIT` always goes at the very end of the query.
Also, it is not supported in all SQL databases.

```SQL
-- get top 3 rated movies in descending order
SELECT *
FROM movies
ORDER BY imdb_rating DESC LIMIT 3;
```

### Case

Similar to `switch` in languages to select column.

```SQL
SELECT name,
       CASE
           WHEN imdb_rating > 8 THEN 'Fantastic'
           WHEN imdb_rating > 6 THEN 'Poorly Received'
           ELSE 'Avoid at All Costs'
           END AS 'Review'
FROM movies;
```

### Group by

Arrange elements into groups by same values. The `GROUP BY` statement comes after any `WHERE`
statements, but before `ORDER BY` or `LIMIT`.

```SQL
-- get number of apps wth more than 20000 downloads
-- in each category
SELECT category, COUNT(*)
FROM apps
WHERE downloads > 20000
GROUP BY category;
```

`ORDER BY` can use references to columns with index of column in select:

```SQL
SELECT category,
       price,
       AVG(downloads)
FROM apps
GROUP BY 1, 2;
-- same as: GROUP BY category, price
```

### Having

For filtering groups, not rows. All types of `WHERE` clauses are usable with `HAVING`. `HAVING`
statement always comes after `GROUP BY`, but before `ORDER BY` and `LIMIT`.

Use `WHERE` when:
you want to limit results based on values of individual rows
Use `HAVING` when:
you want to limit results based on an aggregate property.

```SQL
SELECT price,
       ROUND(AVG(downloads)),
       COUNT(*)
FROM apps
GROUP BY price
HAVING COUNT(*) > 10;
```

## Constraints

Database reject data (*constraint violation*) if it's not applicable to set constraints:
`PRIMARY_KEY` - a column marked with it uniquely identifies a row (a record). **Only one column
with `PRIMARY_KEY` is allowed.**
`UNIQUE` - similar to primary key, but there might be many `UNIQUE` columns.
`NOT NULL` - must have a defined value.
`DEFAULT` - takes additional argument that if not defined in an `insert`, will take its value.

## Data types

`INTEGER` - positive or negative
`TEXT` - string
`DATE` - YYYY-MM-DD
`REAL` - decimal

## `WHERE` operators

Comparison: `=`, `!=` or `<>`, `>`, `<`, `>=`, `<=`

`LIKE` - to compare similar values `WHERE name LIKE 'bea_'` - if name contains `beat` and `Bear`,
it will return both of them. <strong style="color:var(--primary)">Is not case sensitive</strong>.

`IS (NOT) NULL` - It is not possible to test for null with `=` and `!=`.

`BETWEEN ... AND ...` - similar to Kotlin's `in`. But has a strange
behavior: `WHERE name BETWEEN 'A' AND 'J'` - selects all movies starting with 'A', 'B', 'C',... '
F', but not 'J'. However, Movie named 'J' will be selected. For numbers range is inclusive on both
sides.

#### Wildcards

1. `_` is a single wildcard character, can be substituted by any other individual character.
2. `%` - similar to `*` in regex. Matches zero or more missing letters.

## Aggregates

### Count

```SQL
-- get quantity of free apps
SELECT COUNT(*)
FROM apps
WHERE price = 0;
```

### Sum

Calculate sum of particular column values. For non-numeric returns 0.0

```SQL
SELECT SUM(downloads)
FROM apps;
```

### Max, min, avg

The highest, lowest and average value in column. For text uses lexicographical order. `AVG` for
text returns 0.0

#### Round

For rounding value. Syntax: `ROUND(value)` or `ROUND(value, digits after dot)`.

## Multiple tables

Are combined with

### Join

```SQL
SELECT orders.order_id,
       customers.customer_name
FROM orders
         JOIN customers
              ON orders.customer_id = customers.customer_id;
-- customer.id will be merged
```

Result includes only rows matched on condition. Every other row is dropped. This is called an **
inner join**.

#### Foreign key

When a primary key of another table appears in a table, it is called a **foreign key**.

### Left join

Keeps all rows from the left table.

### Cross join

Cross join has m\*n rows, where n is number of rows in the first table, m in the second.

### Union

Appends one column to another. Restriction: second table should have the same column data types in
the same order as the first one.

```SQL
select *
from newspaper
union
select *
from online;
```

**Note:** unlike join, we have to specify selected columns on union (I think it is for the
flexibility).

### With

```SQL
WITH TABLE_NAME AS (...)
SELECT *
FROM TABLE NAME
```

`WITH` allows naming a query. Here `TABLE_NAME` is a query name and query is `...` in parentheses.

## Other keywords

#### IFNULL

#### OFFSET

used with limit to shift taken values.

### IN

Solution to [this leetcode problem](https://leetcode.com/problems/duplicate-emails/)

```SQL
select DISTINCT email as Email
from Person
where email in (select email
                from Person
                group by email
                having Count(*) > 1)
```

Same as multiple `OR`'s:

```SQL
-- an example with NOT IN
SELECT *
FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');
```

## Functions

### DATE_ADD

syntax: `DATE_ADD(date, INTERVAL value unit)`

```SQL
-- add 1 day to current date
SELECT DATE_ADD(CURDATE(), INTERVAL 1 DAY)
-- remove 2 months from constant date
SELECT DATE_ADD("2022-30-09", INTERVAL -2 MONTH);
```