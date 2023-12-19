import Home from "./Home";
import Navbar from "./components/commun/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudentForm from "./components/student/AddStudentForm";

function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddStudentForm />} />
         </Routes>
      </Router>
   );
}

export default App;
