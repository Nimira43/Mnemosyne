import { MdContentPaste } from 'react-icons/md'

export function Footer(props) {
  const saveInClipboard = () => navigator.clipboard.writeText(props.password)
  
  return (
    <div 
      className='footer-container'
      onClick={saveInClipboard}
    >
      <h3>{props.password}</h3>
      <MdContentPaste />
    </div>
  )
}