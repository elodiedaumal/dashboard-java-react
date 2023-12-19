import React, { useState } from "react";
import StudentForm from "../components/student/StudentForm";
import { useNavigate } from "react-router-dom";
import { addStudent, studentAlreadyExist } from "../axios/axios";

const AddStudent = () => {
   const [error, setError] = useState(null);
   const navigate = useNavigate();

   const handleSubmit = async (student) => {
      const emailExists = await studentAlreadyExist(student.email);

      if (emailExists) {
         setError("Student with this email already exists");
         return;
      }

      await addStudent(student);
      navigate("/");
   };

   return (
      <>
         {error && <p className='text-red-700'>{error}</p>}
         <StudentForm
            initialValues={{
               firstName: "",
               lastName: "",
               email: "",
               department: "",
            }}
            onSubmit={handleSubmit}
            isUpdate={false}
         />
      </>
   );
};

export default AddStudent;
