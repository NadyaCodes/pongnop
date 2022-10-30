import Paddle from './Paddle'
import { useState, useEffect } from 'react'

export default function Table() {
  const [position, setPosition] = useState('0')

  const handleUserKeyPress = (e) => {
    let num =  Number(position)

    if (e.key === "ArrowUp") {
      if (num > 0) {
        num -= 15
      }
    }

    if (e.key === "ArrowDown") {
      if (num < 330) {
        num += 15
      }

    }
    setPosition(num.toString())
  }


useEffect(() => {
  window.addEventListener('keydown', handleUserKeyPress);

  return () => {
    window.removeEventListener('keydown', handleUserKeyPress);
  };
});



  return(
    <div className='table'>
      <Paddle side='left' distance='0' />
      <Paddle side='right' distance={position}/>
    </div>
  )
}