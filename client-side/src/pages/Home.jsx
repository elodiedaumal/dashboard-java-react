import React, { useState } from "react";
import StudentsView from "../components/student/StudentsView";
import SearchBar from "../components/SearchBar"; // Import the new SearchBar component

const Home = () => {
   const [searchQuery, setSearchQuery] = useState("");

   return (
      <div>
         <SearchBar value={searchQuery} onChange={setSearchQuery} />

         <StudentsView searchQuery={searchQuery} />
      </div>
   );
};

export default Home;
