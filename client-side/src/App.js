import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import UpdateStudent from "./pages/UpdateStudent";
import Navbar from "./components/commun/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddStudent />} />
            <Route path='student-profile/:id' element={<UpdateStudent />} />
         </Routes>
      </Router>
   );
}

export default App;
