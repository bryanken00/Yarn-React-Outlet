import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import { Link, Outlet } from 'react-router-dom'

const CarsLayout = () => {

    return (
      <div className="CarsLayout">
        <div>THIS IS CAR LAYOUT</div>
        <Outlet />
        <div>THIS IS CAR FOOTER</div>
      </div>
    )
  }
  
  export default CarsLayout