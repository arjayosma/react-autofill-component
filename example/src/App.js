import React, { useEffect, useState } from 'react'

import { AutofillInput } from 'react-autofill-component'
import 'react-autofill-component/dist/index.css'

export default () => {
  const [text, setText] = useState('')
  const [autofill, setAutofill] = useState('')
  const words = ['test', 'react', 'component', 'sample']

  useEffect(() => {
    const [result] = words.filter((word) => word.indexOf(text) === 0)
    setAutofill(
      text.length > 0 && result && result.indexOf(text) === 0 ? result : ''
    )
  }, [text, words])

  return (
    <AutofillInput
      autofillValue={autofill}
      onChange={setText}
      placeholder='This is a placeholder'
      value={text}
    />
  )
}
