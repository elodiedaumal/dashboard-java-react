import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentView = () => {
   const [students, setStudents] = useState([]);

   useEffect(() => {
      getStudents();
   }, []);

   const getStudents = async () => {
      const results = await axios.get("http://localhost:8080/students", {
         validateStatus: () => {
            return true;
         },
      });
      if (results.status === 302) {
         setStudents(results.data);
      }
   };

   return (
      <section>
         <table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>email</th>
                  <th>Department</th>
                  <th>Actions</th>
               </tr>
            </thead>

            <tbody>
               {students.map((student, index) => (
                  <tr key={student.id}>
                     <th scope='row' key={index}>
                        {index + 1}
                     </th>
                     <td>{student.firstName}</td>
                     <td>{student.lastName}</td>
                     <td>{student.email}</td>
                     <td>{student.department}</td>
                     <td>View</td>
                     <td>Update</td>
                     <td>Delete</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   );
};

export default StudentView;
