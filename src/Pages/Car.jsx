import { useParams } from 'react-router-dom'
const CarPage = () => {
  const { id } = useParams()
    return (
      <div className="CarPage">
        This is Car Page. My id is {id}
      </div>
    )
  }
  
  export default CarPage