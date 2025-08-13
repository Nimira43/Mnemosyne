import { Body } from './Body'
import { Footer } from './Footer'
import { Header } from './Header'

export function Card() {
  return (
    <div className='container'>
      <div className='main'></div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}