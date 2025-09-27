import { useState } from 'react'
import { Body } from './Body'
import { Footer } from './Footer'
import { Header } from './Header'

export function Card() {
  const [password, setPassword] = useState('Ready to Generate')

  return (
    <div className='card-container'>
      <div className='card-main'>
        <Header />
        <Body onSubmit={setPassword}/>
      </div>
      <Footer password={password} />
    </div>
  )
}