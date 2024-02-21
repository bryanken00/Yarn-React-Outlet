import { useOutletContext } from "react-router-dom"
const HomePage = () => {

  const { test } = useOutletContext()
    return (
      <div className="HomePage">
        This is Home Page context: {test}
      </div>
    )
  }
  
  export default HomePage