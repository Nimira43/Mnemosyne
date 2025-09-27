import { MdContentPaste } from 'react-icons/md'

export function Footer(props) {
  function saveInClipboard() {}
  
  return (
    <div 
      className='footer-container'
      onClick={}
    >
      
      <h3>{props.password}</h3>
      <MdContentPaste />
    </div>
  )
}