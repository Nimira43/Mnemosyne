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
    setFormData(prevFormData => {})
  }

  return (
    <div className='body-container'>
      <form>
        <div className='body-form-wrapper'>
          <div className='body-form-item-wrapper'>
            <span className='body-form-checkbox-name'>Size</span>
            <select className='body-form-select'>
              <option>8</option>
              <option>12</option>
              <option>16</option>
              <option>20</option>
            </select>
          </div>

          {/* <div className='body-form-item-wrapper'>
            <span className='body-form-checkbox-name'>Uppercase</span>
            <label className="body-form-checkbox-container">
              <input 
                type='checkbox'
              />
              <span class="body-form-checkmark"></span>
            </label>
          </div>
          <div className='body-form-item-wrapper'>
            <span className='body-form-checkbox-name'>Numbers</span>
            <label className="body-form-checkbox-container">
              <input  
                type='checkbox'
              />
              <span class="body-form-checkmark"></span>
            </label>
          </div>
          <div className='body-form-item-wrapper'>
            <span className='body-form-checkbox-name'>Symbols</span>
            <label className="body-form-checkbox-container">
              <input 
                type='checkbox'
              />
              <span class="body-form-checkmark"></span>
            </label>
          </div> */}
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
          <button className='body-form-btn'>Invoke</button>
        </div>

      </form>
    </div>   
  )
}