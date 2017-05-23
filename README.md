# A Vue component to easily style checkbox and radio inputs


[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Latest Version on NPM](https://img.shields.io/npm/v/vue-checkbox-radio.svg?style=flat-square)](https://npmjs.com/package/vue-checkbox-radio)

**This package is still working in progress.**

## Usage

**Checkbox**

```html
<checkbox name="robot" value="1">
I'm a robot
</checkbox>
```


**Radio**

```html
<radio name="robot" value="1">
I'm a robot
</radio>
<radio name="robot" value="0">
I'm not a robot
</radio>
```

## Install

yarn

```bash
yarn add vue-checkbox-radio
```

npm


```bash
npm install vue-checkbox-radio --save
```

## Setup

Register the components.

```js
import {Checkbox, Radio} from 'vue-checkbox-radio';

Vue.component('checkbox', Checkbox);
Vue.component('radio', Radio);
```
