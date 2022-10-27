import Paddle from './Paddle'

export default function Table() {
  return(
    <div className='table'>
      <Paddle side='left' distance='0' />
      <Paddle side='right' distance='20'/>
    </div>
  )
}