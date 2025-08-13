export function Body() {
  return (
    <div className='body-container'>
      <form className='body-form'>
        <div className='body-form-grid'>
          <div className='body-form-grid-item'>
            <span>Size</span>
            <select>
              <option>8</option>
              <option>12</option>
              <option>16</option>
              <option>20</option>
            </select>
          </div>
          <div className='body-form-grid-item'>
            <span>Uppercase</span>
            <input 
              type="checkbox" 
            />
          </div>
          <div className='body-form-grid-item'>
            <span>Numbers</span>
            <input 
              type="checkbox" 
            />
          </div>
          <div className='body-form-grid-item'>
            <span className='body-form-checkbox-name'>Symbols</span>
            <label className="body-form-checkbox-container">
              <input 
                className="body-form-checkbox" 
                type='checkbox'
              />
              <span class="body-form-checkmark"></span>
            </label>
          </div>
        </div>
        <button>Invoke</button>
      </form>
    </div>
    
  )
}