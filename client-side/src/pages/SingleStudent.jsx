import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getSpecificStudent } from "../axios/axios";

const ViewStudent = () => {
   const [student, setStudent] = useState({});

   const { id } = useParams();

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
   if (!student) {
      return <div>Loading...</div>;
   }

   const getInitials = (firstName, lastName) => {
      // Provide default values in case firstName or lastName is undefined
      const firstInitial = firstName ? firstName.charAt(0) : "";
      const lastInitial = lastName ? lastName.charAt(0) : "";

      return `${firstInitial}${lastInitial}`;
   };

   return (
      <div className='max-w-xl mx-auto mt-8 p-8 bg-white rounded-md shadow-md'>
         <div className='flex items-center justify-center mb-6'>
            <div
               className='w-20 h-20 flex items-center justify-center rounded-full mr-4 bg-blue-500 text-white'
               style={{ fontSize: "1.5rem" }}
            >
               {getInitials(student.firstName, student.lastName)}
            </div>

            <div>
               <h2 className='text-3xl font-bold'>
                  {student.firstName} {student.lastName}
               </h2>
               <p className='text-gray-600'>{student.email}</p>
               <p className='text-gray-600'>{student.department}</p>
            </div>
         </div>

         <div className='mt-10'>
            <p className='text-gray-600'>Grade: {student.grade}</p>
            <p className='text-gray-600'>Year: {student.year}</p>
         </div>
      </div>
   );
};

export default ViewStudent;
