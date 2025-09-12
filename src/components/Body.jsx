import { FormItem } from './FormItem'
import { useState } from 'react'

export function Body() {
  const [formData, setFormData] = useState({
    size: '8',
    uppercase: false,
    numbers: false,
    symbols: false
  })

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox'
          ? checked 
          : value
      }
    })
  }

  const submit = (e) => {
    e.preventDefault()

    let formData = {}

    new FormData(e.currentTarget)
      .forEach((value, key) => {
        formData[key] = value
      })
      console.log(formData)
  }

  return (
    <div className='body-container'>
      <form onSubmit={submit}>
        <div className='body-form-wrapper'>
          <div className='body-form-item-wrapper'>
            <span className='body-form-checkbox-name'>Size</span>
            <select 
              className='body-form-select'
              name='size'   
              value={formData.size}
              onChange={handleChange}
            >
              <option>8</option>
              <option>12</option>
              <option>16</option>
              <option>20</option>
            </select>
          </div>
          <FormItem
            label='Uppercase'
            name='uppercase'
            checked={formData.uppercase}
            onChange={handleChange}
          />
          <FormItem
            label='Numbers'
            name='numbers'
            checked={formData.numbers}
            onChange={handleChange}
          />
          <FormItem
            label='Symbols'
            name='symbols'
            checked={formData.symbols}
            onChange={handleChange}
          />
        </div>
        <div className='body-form-btn-wrapper'>
          <button 
            type='submit'
            className='body-form-btn'
          >
            Invoke
          </button>
        </div>
      </form>
    </div>   
  )
}