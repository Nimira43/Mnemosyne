export function Body() {
  return (
    <div className='body-container'>
      <form >
      <div  >
        <span>Size</span>
        <select>
        <option>8</option>
        <option>12</option>
        <option>16</option>
        <option>20</option>
      </select>
      </div>
      
      <button>Invoke</button>
    </form>
    </div>
    
  )
}