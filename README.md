# react-autofill-component

![React Autofill Component Example](react-autofill-component.gif)

React Autofill Component is a bite-sized React component that provides an autofill or auto-suggestion for every keystroke and can be completed by pressing tab.

[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![package version](https://img.shields.io/npm/v/react-autofill-component.svg?style=flat-square)](https://www.npmjs.com/package/react-autofill-component)
[![package downloads](https://img.shields.io/npm/dm/react-autofill-component.svg?style=flat-square)](https://www.npmjs.com/package/react-autofill-component)
[![package license](https://img.shields.io/npm/l/react-autofill-component.svg?style=flat-square)](https://www.npmjs.com/package/react-autofill-component)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub issues](https://img.shields.io/github/issues/arjayosma/react-autofill-component)](https://github.com/arjayosma/react-autofill-component/issues)
[![GitHub forks](https://img.shields.io/github/forks/arjayosma/react-autofill-component)](https://github.com/arjayosma/react-autofill-component/network)
[![GitHub stars](https://img.shields.io/github/stars/arjayosma/react-autofill-component)](https://github.com/arjayosma/react-autofill-component/stargazers)

## Install

```bash
npm install --save react-autofill-component
```

## Props

| Prop Name       | Default Value | Description                                                                                                                |
| --------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `autofillValue` | `''`          | The autofill placeholder value. When the tab key is pressed (if `completeOnTab` is true) the input will be auto-populated. |
| `completeOnTab` | `true`        | Identifies whether the input text will be completed on pressing the tab key. By default, this is set to true.              |
| `disabled`      | `false`       | Disables the input text.                                                                                                   |
| `onChange`      | -             | Accepts a text string. `onChange(text) => console.log(text);`                                                              |
| `placeholder`   | `''`          | Placeholder value when the autofill value is empty.                                                                        |
| `value`         | `''`          | Text string value.                                                                                                         |

## Styling Props

| Prop Name            | Description                                           |
| -------------------- | ----------------------------------------------------- |
| `className`          | Class name styles for the input text.                 |
| `containerClassName` | Class name styles for the input container.            |
| `inputBgClassName`   | Class name styles for the input background container. |

## Usage

```jsx
import React, { Component, useEffect, useState } from 'react'

import MyComponent from 'react-autofill-component'
import 'react-autofill-component/dist/index.css'

class Example extends Component {
  const [text, setText] = useState('')
  const [autofill, setAutofill] = useState('')
  const words = ['test', 'react', 'component', 'sample']

  useEffect(() => {
    const [result] = words.filter((word) => word.indexOf(text) === 0)
    setAutofill(
      text.length > 0 && result && result.indexOf(text) === 0 ? result : ''
    )
  }, [text, words])

  render() {
    return <MyComponent
      autoFillValue={autofill}
      onChange={setText}
      placeholder="Input value here..."
      value={text}
    />
  }
}
```

## Contribute

If you like this small component, feel free to create a pull request or fork the repository.

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature
4. Submit a pull request

## License

MIT © [arjayosma](https://github.com/arjayosma)
