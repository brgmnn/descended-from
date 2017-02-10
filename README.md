# Descended From

[![npm](https://img.shields.io/npm/v/descended-from.svg)](https://www.npmjs.com/package/descended-from)
[![Build Status](https://travis-ci.org/brgmnn/descended-from.svg?branch=master)](https://travis-ci.org/brgmnn/descended-from)
[![Coverage Status](https://coveralls.io/repos/github/brgmnn/descended-from/badge.svg?branch=master)](https://coveralls.io/github/brgmnn/descended-from?branch=master)
[![npm](https://img.shields.io/npm/dm/descended-from.svg)](https://www.npmjs.com/package/descended-from)
[![GitHub license](https://img.shields.io/npm/l/descended-from.svg)](https://raw.githubusercontent.com/brgmnn/descended-from/master/LICENSE)

Check if a DOM node is descended from another node or selector.

## Installation

```
npm install descended-from
```

## Usage

```
var descendedFrom = require('descended-from');

var child = document.getElementById('child');
var parent = document.getElementById('parent');

descendedFrom(child, parent) // -> true
```

given this DOM

```
<div id="parent">
  <div>
    <div id="child"></div>
  </div>
</div>
```

This is equivalent running `parent.contains(child)`. However you can do more with `descended-from`.

### Check if descended from an element with a class

```
var child = document.getElementById('child');

descendedFrom(child, '.parent') // -> true
```

given this DOM

```
<div class="parent">
  <div>
    <div id="child"></div>
  </div>
</div>
```

### Check if descended from an element with an ID

```
var child = document.getElementById('child');

descendedFrom(child, '#parent') // -> true
```

given this DOM

```
<div id="parent">
  <div>
    <div id="child"></div>
  </div>
</div>
```

## Browser support

Chrome 1+, Firefox 3.5+, IE 9+, Opera 10.5+, Safari 5+

Browser functions depended on so far are:
- `element.classList()`
- `element.contains()`
- `string.trim()`
- `string.charAt()`
- `string.replace()` (accepting string parameters)

## License

MIT
