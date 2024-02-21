import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {

    return (
      <div className="RootLayout">
        <Link to="/">Home Page</Link>
        <Link to="/about">About Page</Link>
        <Link to="/cars">Cars Page</Link>
        <Link to="/car/add">Add Car Page</Link>

        <Header></Header>
        <Outlet  context={{ test: 'test' }}/>
        <Footer></Footer>
      </div>
    )
  }
  
  export default RootLayout