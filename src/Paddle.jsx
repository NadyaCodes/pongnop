export default function Paddle(props) {
  const {side, distance} = props
  const className = `paddle paddle=${side}`

  let placement = `translateY(${distance}rem)`
  return (
    <div className={className} style={{transform: placement}}></div>
  )
}