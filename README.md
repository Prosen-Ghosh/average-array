# average-array
A JavaScript Package for calculating average from an array. Also it will work for non-number array and it will ignore the non-numbers.

![npm](https://img.shields.io/npm/v/average-array.svg) ![license](https://img.shields.io/npm/l/average-array.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/average-array.svg)  ![Circle CI build status](https://circleci.com/gh/Prosen-Ghosh/average-array.svg?style=svg)

![nodei.co](https://nodei.co/npm/average-array.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/average-array.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/average-array.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/average-array.svg)

## Features


## `npm` Install

`npm install --save average-array`

## Script Tag

#### For Development
```js
<script src=""></script>
```

#### For Production
```js
<script src=""></script>
```

## Usage

```js

const avg = require('average-array');

avg([]);
//=> null

avg([1]);
//=> 1

avg([1,[]]);
//=> 1

avg([1,[],2]);
//=> 1.5

avg([1,2,3,4,5])
//=> 3

avg(); // without parameter this function will throw a type error
//=> TypeError: average() expects an array parameter

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**
