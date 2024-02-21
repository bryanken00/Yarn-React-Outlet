import RootLayout from './Shared/Components/Layouts/RootLayout'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import CarsPage from './Pages/Cars'
import CarPage from './Pages/Car'
import AddCarPage from './Pages/addCar'
import NotFoundPage from './Pages/NotFound'
import CarsLayout from './Shared/Components/Layouts/CarsLayout'

const App = () => {

  return (
    <div className="App">
        <Routes>

          <Route element={<RootLayout />}>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>

              
            <Route element={<CarsLayout />}>
                <Route path='/cars' element={<CarsPage />}/>
                <Route path='/car/:id' element={<CarPage />}/>
                <Route path='/car/add' element={<AddCarPage />}/>
            </Route>

          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </div>
  )
}

export default App