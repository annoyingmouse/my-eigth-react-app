import {useState} from 'react'
import styles from './Converter.module.scss'

export const Converter = () => {
  const [value, setValue] = useState()
  const [origin, setOrigin] = useState()
  const isDisabled = base => origin !== undefined && origin !== base
  const updateValue = (baseName, base) => e => {
    if(e.target.value === '') {
      setValue(() => undefined)
      setOrigin(() => undefined)
    } else {
      setValue(() => {
        const newValue = parseInt(e.target.value, base)
        return isNaN(newValue) ? "" : newValue
      })
      setOrigin(baseName)
    }
  }

  return (
    <div className={styles.Converter}>
      <label>
        Decimal:
        <input type="number"
               value={value?.toString(10) || ""}
               name="decimal"
               onChange={updateValue('decimal', 10)}
               disabled={isDisabled('decimal')}/>
      </label>
      <label>
        Hexadecimal:
        <input type="text"
               value={value?.toString(16) || ""}
               name="hex"
               onChange={updateValue('hex', 16)}
               disabled={isDisabled('hex')}/>
      </label>
      <label>
        Binary:
        <input type="text"
               value={value?.toString(2) || ""}
               name="binary"
               onChange={updateValue('binary', 2)}
               disabled={isDisabled('binary')}/>
      </label>
    </div>
  )
}