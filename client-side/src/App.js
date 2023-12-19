import Home from "./Home";
import Navbar from "./components/commun/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
   return (
      <>
         <Navbar />

         <Routes>
            <Route path='/' element={<Home />} />
         </Routes>
      </>
   );
}

export default App;
