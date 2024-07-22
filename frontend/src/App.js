import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (<div>
    <BrowserRouter>
    <Nav/> 
  <Routes>
<Route  path="/"  element={<Create/>}/>
<Route  path="/all" element={<Read/>}/>

<Route  path="/:id" element={<Update/>}/>
<Route/>


  </Routes>
   
     
   
    </BrowserRouter>
    
   </div>
  );
}

export default App;
