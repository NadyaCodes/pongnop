import Paddle from './Paddle'
import { useState } from 'react'

export default function Table() {
  const [position, setPosition] = useState('0')

  document.addEventListener('keydown', function(e) {
    let num = Number(position)
    switch (e.code) {
        case "ArrowUp":
          num--
          setPosition(num.toString())
          //  alert('up');
            break;
        case "ArrowDown":
          num++
          setPosition(num.toString())
            // alert('down');
            break;
        default:
          break
    }
});

  return(
    <div className='table'>
      <Paddle side='left' distance='0' />
      <Paddle side='right' distance={position}/>
    </div>
  )
}