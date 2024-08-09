---
title: "Table of operator precedence"
tags:
date: 2022-09-18
---

<table>
    <thead>
    <tr>
        <th colspan="2">Table of operator precedence</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><b>Operator</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr>
        <td rowspan="3"><strong>postfix:</strong> (), [], . </td>
        <td>change operators' precedence with parentheses</td>
    </tr>
    <tr>
        <td>takes element from array or string</td>
    </tr>
    <tr>
        <td>gets property of class</td>
    </tr>
    <tr>
        <td><strong>prefix:</strong> !, -</td>
        <td>not, unary minus</td>
    </tr>
    <tr>
        <td rowspan="3">*, /, %</td>
        <td>multiplication</td>
    </tr>
    <tr>
        <td>division</td>
    </tr>
    <tr>
        <td>modulus</td>
    </tr>
    <tr>
        <td rowspan="2">+,-</td>
        <td>adds two numbers or element to array or concatenates two strings</td>
    </tr>
    <tr>
        <td>arithmetic minus</td>
    </tr>
    <tr>
        <td>==, !=, >, <, >=, <=</td>
        <td>comparison operators, return 1 if true, 0 if false</td>
    </tr>
    <tr>
        <td>&&</td>
        <td>logic "and"</td>
    </tr>
    <tr>
        <td>&#124;&#124;</td>
        <td>logic "or"</td>
    </tr>
    <tr>
        <td rowspan="2">is, !is</td>
        <td>checks whether left operand is of right operand's type</td>
    </tr>
    <tr>
        <td>checks if left operand is not right operand's type</td>
    </tr>
    <tr>
        <td>if(..) .. else ..</td>
        <td>ternary operator</td>
    </tr>
    <tr>
        <td>=</td>
        <td>assigns right operand to the left operand. <strong>the only one with right to left
            associativity</strong></td>
    </tr>
    </tbody>
</table>