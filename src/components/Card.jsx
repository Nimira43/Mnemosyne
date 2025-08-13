import { Body } from './Body'
import { Footer } from './Footer'
import { Header } from './Header'

export function Card() {
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