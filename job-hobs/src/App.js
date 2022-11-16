import Home from './Pages/home';
import Deatils from './Pages/detail';
import About from './Pages/about';
import Create from './Pages/addEditBlog';
import NotFound from './Pages/notFound';
import {Routes, Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/details/:id' element={<Deatils />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/update/:id' element={<Create />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<NotFound />}/>

        </Routes>
    </div>
  );
}

export default App;
