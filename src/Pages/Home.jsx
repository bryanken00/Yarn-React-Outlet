import { useEffect, useRef, useState } from "react"

const HomePage = () => {
  const [count, setCount] = useState(0)
  const HandleIncrement = () => setCount(count + 1)

  const buttonRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if(buttonRef.current){
      console.log("Elements: ", buttonRef.current)
    }
  }, []
  )
  
  return (
      <div className="HomePage">
        Count {count}
        <button ref={buttonRef} onClick={HandleIncrement}>Increment</button>
      </div>
    )
  }
  
  export default HomePage