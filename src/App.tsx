import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Seven from './pages/Seven';
import Fine from './pages/Fine';
import Nine from './pages/Nine';
import Dam_ngo from "./pages/Dam_ngo";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Seven/>}></Route>
          <Route path='/seven' element={<Seven/>}></Route>
          <Route path='/fine' element={<Fine/>}></Route>
          <Route path='/nine' element={<Nine/>}></Route>
          <Route path='/dam-ngo' element={<Dam_ngo/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
