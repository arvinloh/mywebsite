---
sidebar_position: 1
---

# Variable and types

Variable and types are important concepts in programming. In this article, we will learn about variables and types in Python.

## Data Types

In programming, data type is an important concept.

Variables can store data of different types, and different types can do different things.

Python has the following data types built-in by default, in these categories:

- Text Type: str
- Numeric Types: int, float
- Sequence Types: list, tuple
- Mapping Type: dict
- Set Types: set
- Boolean Type: bool

## Setting the Data Type

In Python, the data type is set when you assign a value to a variable:

<h3>Example</h3>

```python
x = "Hello World"	# str
x = 20	# int
x = 20.5	# float
x = ["apple", "banana", "cherry"]	# list
x = ("apple", "banana", "cherry")	# tuple
x = {"name" : "John", "age" : 36}	# dict
x = {"apple", "banana", "cherry"}	# set
x = True	# bool
```

## Setting the Specific Data Type

If you want to specify the data type, you can use the following constructor functions:

<h3>Example</h3>

```python
x = str("Hello World")	# str
x = int(20)	# int
x = float(20.5)	# float
x = list(("apple", "banana", "cherry"))	# list
x = tuple(("apple", "banana", "cherry"))	# tuple
x = dict(name="John", age=36)	# dict
x = set(("apple", "banana", "cherry"))	# set
```

## Getting the Data Type

You can get the data type of any object by using the type() function:

<h3>Example</h3>

```python
x = 5
print(type(x))
```

<h3>Output</h3>

```plaintext
<class 'int'>
```

<h3>Example</h3>

```python
x = 5
y = "John"
print(x)
print(y)
```

<h3>Output</h3>

```plaintext
5
John
```

## Variable names

A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume). Rules for Python variables:

- A variable name must start with a letter or the underscore character
- A variable name cannot start with a number
- A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and \_ )
- Variable names are case-sensitive (age, Age and AGE are three different variables)

We can differentiate the two as CamelCase and snake_case. CamelCase is used for class names and snake_case is used for function and variable names.

<h3>Example</h3>

```python
myVariableName = "John"
my_variable_name = "John"
```

## Assign Value to Multiple Variables

Python allows you to assign values to multiple variables in one line:

<h3>Example</h3>

```python
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)
```

<h3>Output</h3>

```plaintext
Orange
Banana
Cherry
```

And you can assign the same value to multiple variables in one line:

<h3>Example</h3>

```python
x = y = z = "Orange"
print(x)
print(y)
print(z)
```

<h3>Output</h3>

```plaintext
Orange
Orange
Orange
```

<h3>Output</h3> Variables

The Python print statement is often used to output variables.

To combine both text and a variable, Python uses the + character:

<h3>Example</h3>

```python
x = "awesome"
print("Python is " + x)
```

<h3>Output</h3>

```plaintext
Python is awesome
```

You can also use the + character to add a variable to another variable:

<h3>Example</h3>

```python
x = "Python is "
y = "awesome"
z =  x + y
print(z)
```

<h3>Output</h3>

```plaintext
Python is awesome
```

This is known as concatenation.

You can also use the + character for mathematical operations:

<h3>Example</h3>

```python
x = 5
y = 10
print(x + y)
```

<h3>Output</h3>

```plaintext
15
```

If you try to combine a string and a number, Python will give you an error:

<h3>Example</h3>

```python
x = 5
y = "John"
print(x + y)
```

<h3>Output</h3>

```plaintext
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

## Global Variables

Variables that are created outside of a function (as in all of the examples above) are known as global variables.

Global variables can be used by everyone, both inside of functions and outside.

<h3>Example</h3>

```python
x = "awesome"

def myfunc():
  print("Python is " + x)

myfunc()
```

<h3>Output</h3>

```plaintext
Python is awesome
```

If you create a variable with the same name inside a function, this variable will be local, and can only be used inside the function. The global variable with the same name will remain as it was, global and with the original value.

<h3>Example</h3>

```python
x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()

print("Python is " + x)
```

<h3>Output</h3>

```plaintext
Python is fantastic
Python is awesome
```

## The global Keyword

Normally, when you create a variable inside a function, that variable is local, and can only be used inside that function.

To create a global variable inside a function, you can use the global keyword.

<h3>Example</h3>

```python
def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)
```

<h3>Output</h3>

```plaintext
Python is fantastic
```

Also, use the global keyword if you want to change a global variable inside a function.

<h3>Example</h3>

```python
x = "awesome"

def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)
```

<h3>Output</h3>

```plaintext
Python is fantastic
```

<!-- You have just learned the **basics of Docusaurus** and made some changes to the **initial template**.

Docusaurus has **much more to offer**!

Have **5 more minutes**? Take a look at and.

Anything **unclear** or **buggy** in this tutorial? [Please report it!](https://github.com/facebook/docusaurus/discussions/4610)

## What's next?

- Read the [official documentation](https://docusaurus.io/)
- Modify your site configuration with [`docusaurus.config.js`](https://docusaurus.io/docs/api/docusaurus-config)
- Add navbar and footer items with [`themeConfig`](https://docusaurus.io/docs/api/themes/configuration)
- Add a custom [Design and Layout](https://docusaurus.io/docs/styling-layout)
- Add a [search bar](https://docusaurus.io/docs/search)
- Find inspirations in the [Docusaurus showcase](https://docusaurus.io/showcase)
- Get involved in the [Docusaurus Community](https://docusaurus.io/community/support) -->
