import { MdContentPaste } from 'react-icons/md'

export function Footer(props) {
  return (
    <div className='footer-container'>
      <h3>{props.password}</h3>
      <MdContentPaste />
    </div>
  )
}