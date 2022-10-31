export default function Ball(props) {
  const {x, y} = props
  return(
    <div className='ball' style={{transform: `translate(${x}px, ${y}px)`}}>
    </div>
  )
}