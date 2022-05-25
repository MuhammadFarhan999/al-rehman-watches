import Layout from './Layout';
import Second_page from './Second_page';
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Rolex from './Rolex';
import Login from './Login';
import Signup from './Signup';
import Mens_watch from './Mens_watch';
import Detail from './Detail';
import Card_data from './Card_data';
import Mcards from './Mcards';
import Add_to_cart from './Add_to_cart';
import Formss from './Formss';


function App() {
  return (
    
      <div className="app">
     
       
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="/rolex" element={<Second_page />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>        
          <Route path='/buy' element={<Detail />}/> 
          <Route path='/login' element={<Detail />}/>  
          <Route path='/cart' element={<Add_to_cart />}/>
          <Route path='/buy/form' element={<Formss />}/>
        </Routes>
        </BrowserRouter>

        
      </div>
  
  );
}

export default App;
