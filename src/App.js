import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './containers/home';
import Details from './containers/details';

function App() {
  return (
    <Routes>

      <Route path="/details/:id" element={<Details/>}></Route>
      <Route path="/reactday8/" element={<Home/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      
    </Routes>
  );
}

export default App;
