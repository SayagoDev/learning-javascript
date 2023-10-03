# Learning JavaScript <!-- omit in toc -->

## Table of Contents: <!-- omit in toc -->

- [JavaScript Fundamentals #1](#javascript-fundamentals-1)
  - [The 7 Primitive Data Types](#the-7-primitive-data-types)
- [JavaScript Fundamentals #2](#javascript-fundamentals-2)
  - [Functions](#functions)
- [How JavaScript Works Behind the Scenes](#how-javascript-works-behind-the-scenes)
  - [The JavaScript Engine and Runtime](#the-javascript-engine-and-runtime)

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
**JavaScript has dynamic typing:** We do _**not**_ have to manually define the data type of the value stored in a variable.
Instead, data types are determined **automatically.**

# JavaScript Fundamentals #2

## Functions

**👉 Function Declaration:**
Function that can be used before it's declared

```javascript
function calcAge(birthYear) {
  return 2037 - birthYear
}
```

**👉 Function Expression:**
Essentially a function _value_ stored in a variable

```javascript
const calcAge = function (birthYear) {
  return 2037 - birthYear
}
```

**👉 Arrow Function:**
Great for a quick one-line functions

```javascript
const calcAge = birthYear => return 2037 - birthYear
```

👆 Three different ways of writting functions, but they all work
in a similar way receive **input** data, **transform** data, and then
**output** data.

# How JavaScript Works Behind the Scenes

## The JavaScript Engine and Runtime

# Data Structures, Modern Operators and String

## Short Circuiting (&& and __)

## Summary: Which data structure to use?

**Source of data:** 
1. **From the program itself:** Data written directly in source code (e.g.
   status messages)
2. **From the UI:** Data input from the user or data written in the DOM (e.g.
   tasks in todo app)
3. **From external sources:** Data fetched for example from web API (e.g. recipe
   objects)

### Arrays vs. Sets and Objects vs. Maps

| Arrays | Sets |
|-|-|
| 👉 Use when you need **ordered** list of values (might contain duplicates) | 👉 Use when you need to work with **uinque** values |
| 👉 Use when you need to **manipulated** data | 👉 Use when **high-performance** is *really* important |
| | 👉 Use to **remove duplicates** from arrays |

| Objects | Maps |
|-|-|
| 👉 More "traditional" key/value store ("abused" objects) | 👉 Better performance |
| 👉 Easier to write and access values with . and [] | 👉 Keys can have **any** data type |
| 👉 Use when you need to include **functions** (methods) | 👉 Easy to iterate |
| 👉 Use when working with JSON (can conver to map) | 👉 Easy to compute size |
| | 👉 Use when you simply need to map key to values |
| | 👉 use when you need keys that are **not** strings |
