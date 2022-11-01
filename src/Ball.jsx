import { useState } from "react"
export default function Ball(props) {
  const {y} = props

  const [angle, setAngle] = useState(y)

  

  return(
    <div className='ball' style={{transform: `translateY(${angle}px)`}}>
    </div>
  )
}