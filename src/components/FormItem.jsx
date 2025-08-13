export function FormItem({ label, name, checked, onChange }) {
  return (
    <div className='body-form-item-wrapper'>
      <span className='body-form-checkbox-name'>{label}</span>
      <label className='body-form-checkbox-container'>
        <input
          type='checkbox'
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className='body-form-checkmark'></span>
      </label>
    </div>
  )
}

