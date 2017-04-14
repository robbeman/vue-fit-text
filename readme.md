# Vue fit text

A simple component to fit text inside a container.

## Installation

TODO add npm and stuffs
TODO make compiled version for use without build tools

## Browser support

Chrome OSX (57.0.2987.133)

TODO test other browsers


## Usage

You can register this component globally or just import it when you need it in one of your own custom components.

### Globally

Install the component with Vue.use()

```js
import FitText from 'vue-fit-text/index.js';
Vue.use(FitText);

```

From now on you can use the `<fit-text>` component anywhere in your Vue app.

### Locally

Example usage in single file component

```
<template>
  <div>
    <h1>
      <fit-text>This text should always fit one line.</fit-text>
    </h1>
  </div>
</template>

<script>
  import fitText from 'vue-fit-text/fitText.vue';
  
  export default {
    components: {
      fitText,
    },
  }
</script>
```

## Options

The component has a few properties that can be passed through for a little customisation

### targetLineCount
Default: 1

The maximum amount of lines the text should occupy.


### unit
Default: 'em'

What unit to use for the "font-size" property.


### min
Default: 0.5

The minimum font size to use.


### max
Default: 1

The maximum font size. The script will start there and gradually scale down the text until it fits the target line count.




## Examples

TODO
