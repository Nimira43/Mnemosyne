import { useState } from 'react'
import { Body } from './Body'
import { Footer } from './Footer'
import { Header } from './Header'

export function Card() {
  const [password, setPassword] = useState('TestPassword4321')

  return (
    <div className='card-container'>
      <div className='card-main'>
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
  )
}