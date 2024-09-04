import {BrowserRouter as Router,
Routes,
Navigate,
Route
} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import WorkCardContainer from './components/main/WorkCardContainer/WorkCardContainer';
import Bio from './components/bio/Bio';

function App() {

  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path='/' element={<WorkCardContainer/>}/>
              <Route path='/shop' element={<></>}/>
              <Route path='/bio' element={<Bio/>}/>
              <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
          <Footer/>
      </Router>
  )
}

export default App
