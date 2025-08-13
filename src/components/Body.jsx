export function Body() {
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
          <div className='body-form-item-wrapper'>
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
          </div>
        </div>
        <div className='body-form-btn-wrapper'>
          <button className='body-form-btn'>Invoke</button>
        </div>

      </form>
    </div>   
  )
}