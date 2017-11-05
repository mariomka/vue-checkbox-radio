# vue-checkbox-radio
> A Vue component to easily styling checkbox and radio inputs.

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Latest Version on NPM](https://img.shields.io/npm/v/vue-checkbox-radio.svg?style=flat-square)](https://npmjs.com/package/vue-checkbox-radio)
[![npm](https://img.shields.io/npm/dt/vue-checkbox-radio.svg?style=flat-square)](https://www.npmjs.com/package/vue-checkbox-radio)

## Example

[![demo](https://raw.githubusercontent.com/mariomka/vue-checkbox-radio/master/docs/demo.gif)](http://mariomka.github.io/vue-checkbox-radio)

[![demo](https://raw.githubusercontent.com/mariomka/vue-checkbox-radio/master/docs/demo-switcher.gif)](http://mariomka.github.io/vue-checkbox-radio)

Check out **[demo and styling examples](http://mariomka.github.io/vue-checkbox-radio)**.

## Usage

**Checkbox**

```html
<checkbox name="terms" value="1">
	I agree to the <a href="#">terms of service</a>
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

Register the plugin.

```js
import CheckboxRadio from 'vue-checkbox-radio';

Vue.use(CheckboxRadio);
```

Or register components manually.

```js
import {Checkbox, Radio} from 'vue-checkbox-radio';

Vue.component('checkbox', Checkbox);
Vue.component('radio', Radio);
```

## Params

### Checkbox

Parameter | Type | Default
--------- | ---- | ------
id | `string` | checkbox-id-(element uid)
class-name | `string` | `null`
name | `string` | `null`
v-model | `string`, `boolean` or `array` | `undefined`
value | `string` or `boolean` | `null`
checked | `boolean` | `false`
required | `boolean` | `false`
disabled | `boolean` | `false`

### Radio

Parameter | Type | Default
--------- | ---- | ------
id | `string` | radio-id-(element uid)
class-name | `string` | `null`
name | `string` | `null`
v-model | `string` or `boolean` | `undefined`
value | `string` or `boolean` | `null`
checked | `boolean` | `false`
required | `boolean` | `false`
disabled | `boolean` | `false`

## Events

Both components emit the `input` event to work with `v-model`.

## Full example

```html
<checkbox
    id="input-terms"
    class-name="terms"
    name="terms"
    value="1"
    v-model="model"
    checked
    required>
    I agree to the <a href="#">terms of service</a>
</checkbox>
```

## Slots

Slot ``input-box`` allow overwriting ``input-box`` for specific customizations.

```html
<checkbox>
    <span class="input-box" slot="input-box">
        [...]
    </span>
    Test
</checkbox>
```

## License

MIT © [Mario Juárez](https://github.com/mariomka)
