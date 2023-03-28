import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar";

import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Page1 from './Components/Yeahhh'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
function App() {
  return (
<>
<BrowserRouter>
<Navbar name="Login"></Navbar>
<Routes>
  <Route exact path='/' element={<Page1 />}></Route>
  <Route exact path='/register' element={<Register/>}></Route>
  <Route exact path='/login' element={<Login/>}></Route>
  <Route exact path='/dashboard' element={<Dashboard/>}></Route>
</Routes >
</BrowserRouter>
</>
    );
}

export default App;
