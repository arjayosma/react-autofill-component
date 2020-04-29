import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const AutofillInput = ({
  autofillValue,
  className,
  completeOnTab,
  containerClassName,
  disabled,
  inputBgClassName,
  onChange,
  placeholder,
  value
}) => {
  const handleOnChange = (event) => {
    onChange(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (completeOnTab && event.keyCode === 9 && autofillValue) {
      onChange(autofillValue)
    }
  }

  return (
    <div className={`${styles.autofillContainer} ${containerClassName}`}>
      <input
        className={`${styles.autofillInputBg} ${inputBgClassName}`}
        disabled
        defaultValue={autofillValue}
        type='text'
      />
      <input
        className={`${styles.autofillInput} ${className}`}
        disabled={disabled}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        placeholder={autofillValue ? '' : placeholder}
        type='text'
        value={value}
      />
    </div>
  )
}

AutofillInput.defaultProps = {
  autofillValue: '',
  className: '',
  completeOnTab: true,
  containerClassName: '',
  disabled: false,
  inputBgClassName: '',
  placeholder: '',
  value: ''
}

AutofillInput.propTypes = {
  /**
   * The autofill placeholder value.
   * When the tab key is pressed (if completeOnTab is true),
   * the input will be auto-populated.
   */
  autofillValue: PropTypes.string.isRequired,
  /**
   * Class name styles for the input text.
   */
  className: PropTypes.string,
  /**
   * Identifies whether the input text will be completed
   * on pressing the tab key. By default, this is set to true.
   */
  completeOnTab: PropTypes.bool,
  /**
   * Class name styles for the input container.
   */
  containerClassName: PropTypes.string,
  /**
   * Disables the input text.
   */
  disabled: PropTypes.bool,
  /**
   * Class name styles for the input background container.
   */
  inputBgClassName: PropTypes.string,
  /**
   * Accepts a text string.
   *
   * `onChange(text) => console.log(text)`;
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Placeholder value when the autofill value is empty.
   */
  placeholder: PropTypes.string,
  /**
   * Text string value.
   */
  value: PropTypes.string.isRequired
}
