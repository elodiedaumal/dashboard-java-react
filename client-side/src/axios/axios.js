// studentService.js
import axios from "axios";

const getStudents = async () => {
   const results = await axios.get("http://localhost:8080/students", {
      validateStatus: () => {
         return true;
      },
   });
   if (results.status === 302) {
      return results.data;
   }
};
const getSpecificStudent = async (id) => {
   const results = await axios.get(
      `http://localhost:8080/students/student/${id}`
   );

   return results.data;
};

const addStudent = async (student) => {
   return axios.post("http://localhost:8080/students", student);
};

const updateStudent = async (id, student) => {
   return axios.put(`http://localhost:8080/students/update/${id}`, student);
};

const deleteStudent = async (id, student) => {
   return axios.delete(`http://localhost:8080/students/delete/${id}`, student);
};

export {
   getStudents,
   addStudent,
   updateStudent,
   deleteStudent,
   getSpecificStudent,
};
