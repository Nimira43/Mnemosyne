import { Body } from './Body'
import { Footer } from './Footer'
import { Header } from './Header'

export function Card() {
  return (
    <div className='card-container'>
      <Header />
      <Body />
      <div className='card-main'>
        <Footer />
      </div>
    </div>
  )
}