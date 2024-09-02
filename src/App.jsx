import {BrowserRouter as Router,
Routes,
Navigate,
Route
} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App() {

  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/shop' element={<></>}/>
              <Route path='/bio' element={<></>}/>
              <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
          <Footer/>
      </Router>
  )
}

export default App
