import Paddle from './Paddle'
import Ball from './Ball'
import { useState, useEffect, useRef } from 'react'

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

const ballRef = useRef();
const paddleRef = useRef();


  // X
  const [ballX, setBallX] = useState(0);

  // Y
  const [ballY, setBallY] = useState(0);

  // This function calculate X and Y
  const getPosition = () => {
    const posX = ballRef.current.offsetLeft;
    setBallX(posX);

    const posY = ballRef.current.offsetTop;
    setBallY(posY);
    console.log(ballX, ballY)
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();

  });





  return(
    <div className='table'>
      <Paddle side='left' distance='0' />
      <div ref={ballRef}><Ball x='0' y='0'/></div>
      <div ref={paddleRef}><Paddle side='right' distance={position}/></div>
    </div>
  )
}