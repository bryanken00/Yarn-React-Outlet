import {Link} from 'react-router-dom'
const NotFoundPage = () => {

    return (
      <div className="NotFoundPage">
        This url not found. <Link to='/'>Go back home.</Link>
      </div>
    )
  }
  
  export default NotFoundPage