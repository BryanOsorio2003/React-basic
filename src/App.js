import './App.css';
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Main } from './Components/Page/Main/Main';
import { Register } from './Components/Page/Register/Register';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
