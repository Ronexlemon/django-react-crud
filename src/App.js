import logo from './logo.svg';
import './App.css';
import Create from './components/create';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Create/>}/>
      <Route path="/create" element={<Create/>}/>


        </Routes></BrowserRouter>
  );
}

export default App;
