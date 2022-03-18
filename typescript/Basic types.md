### Basic types

 There are several types of typescript, some of them are familiar with javascript like `Boolean` `Number` `String` `Array`  `null` `undefined` just all typed.

#### New types

#### Tuple

Tuple is a array that with it's quantity and type already defined, you should strictly comply it's statement.

#### Enum

`enum Color {Red, Green, Blue}` 

It's like a Object type width default value from zero, also you can define a start value, like this

`enum Color {Red = 1, Green, Blue}` In this case, Green = 2 and Blue = 3

You can use value to find it's key, like this

`Color[2] === 'Green'`

#### Unknown

When we cannot figure out variable's type, we can use Unknown.

One diffrence between Unknown and Any is that Unknown can infer its type with `typeof` , compare or other type check method.

#### Any

 Famous note: anyscript.

#### Void 

When function has no return value.

#### Never
never reach
```javascript
function error(message: string): never {
    throw new Error(message);
}
```
refer to never
```javascript
function fail() {
    return error("Something failed");
}
```
cannot to the end
```javascript
function infiniteLoop(): never {
    while (true) {
    }
}
```








