import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
import { AddEmployee } from './MyComponents/AddEmployee';
import { EmpList } from './MyComponents/EmpList';
import { UpdateEmployee } from './MyComponents/UpdateEmployee';
import { Error } from './MyComponents/Error';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<EmpList/>}></Route>
      <Route path="/addEmployee" element={<AddEmployee/>}></Route>
      <Route path="/update/:id" element={<UpdateEmployee/>}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
