import React, { useEffect, useState } from "react";
import StudentForm from "../components/student/StudentForm";
import { useNavigate, useParams } from "react-router-dom";
import { updateStudent, getSpecificStudent } from "../axios/axios";

const UpdateStudent = () => {
   const [student, setStudent] = useState({});
   const navigate = useNavigate();
   const { id } = useParams();

   const handleSubmit = async (updatedStudent) => {
      console.log(updatedStudent);
      await updateStudent(id, updatedStudent);
      navigate("/");
   };

   useEffect(() => {
      fetchStudent();
   }, [id]);

   const fetchStudent = async () => {
      try {
         const data = await getSpecificStudent(id);
         setStudent(data || {});
      } catch (error) {
         console.error("Error fetching student:", error);
      }
   };
   return (
      <StudentForm
         initialValues={{
            firstName: student.firstName || "",
            lastName: student.lastName || "",
            email: student.email || "",
            department: student.department || "",
         }}
         onSubmit={handleSubmit}
         isUpdate={true}
      />
   );
};

export default UpdateStudent;
