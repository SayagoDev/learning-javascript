# Learn JavaScript <!-- omit in toc -->

## Table of Contents: <!-- omit in toc -->

- [JavaScript Fundamentals #1](#javascript-fundamentals-1)
  - [The 7 Primitive Data Types](#the-7-primitive-data-types)
- [JavaScript Fundamentals #2](#javascript-fundamentals-2)
  - [Functions](#functions)
- [JavaScript In The Browser (DOM)](#javascript-in-the-browser-dom)

# JavaScript Fundamentals #1

## The 7 Primitive Data Types

1. **Number:** Floating point numbers 👉 Used for decimals and integers `let age = 23;`
2. **String:** Sequence of characters 👉 Used for text `let firstName = 'Jonas';`
3. **Boolean:** Logical type that can only be _**true**_ or _**false**_ 👉 Used for taking decisions `let fullAge = true;`
4. **Undefined:** Value taken by a variable that is not yet defined ('_empty value_') `let children;`
5. **Null:** Also means _empty value_
6. **Symbol (ES2015):** Value that is unique and cannot be changed [Not useful for now]
7. **BigInt (ES2020):** Larger integers than the Number type can hold

**NOTE:**
**JavaScript has dynamic typing:** We do _**not**_ have to manually define the data type of the value stored in a variable. Instead, data types are determined **automatically.**

# JavaScript Fundamentals #2

## Functions

**👉 Function Declaration:**
Function that can be used before it's declared

```js
function calcAge(birthYear) {
  return 2037 - birthYear
}
```

**👉 Function Expression:**
Essentially a function _value_ stored in a variable

```js
const calcAge = function (birthYear) {
  return 2037 - birthYear
}
```

**👉 Arrow Function:**
Great for a quick one-line functions

```js
const calcAge = birthYear => return 2037 - birthYear
```

👆 Three different ways of writting functions, but they all work
in a similar way receive **input** data, **transform** data, and then
**output** data.

# JavaScript In The Browser (DOM)

**What is the DOM?**
**DOCUMENT OBJECT MODEL:** Structured representation of HTML documents.
Allows JavaScript to access HTML elements and styles to manipulate them.
