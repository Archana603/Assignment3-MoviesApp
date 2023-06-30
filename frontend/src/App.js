
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Addform from './components/Addform';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      <Route path='/add'
       element={<Addform data={{name:"",actor:"",actress:"",director:"",year:"",camera:"",producer:"",language:""}} method="post"/>}/>
      </Routes>
    </div>
  );
}

export default App;
