import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentForm = ({ initialValues, onSubmit, isUpdate }) => {
   const navigate = useNavigate();

   const [student, setStudent] = useState(initialValues);

   useEffect(() => {
      setStudent(initialValues);
   }, [initialValues]);

   const { firstName, lastName, email, department } = student;

   const handleChange = (e) => {
      const { name, value } = e.target;
      setStudent({ ...student, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const updatedStudent = {
         firstName: student.firstName,
         lastName: student.lastName,
         email: student.email,
         department: student.department,
      };
      await onSubmit(updatedStudent);
      navigate("/");
   };

   return (
      <div className='max-w-md mx-auto mt-8 p-8 bg-white rounded-md shadow-md'>
         <h2 className='text-2xl font-bold mb-6'>
            {isUpdate ? "Update Student" : "Add New Student"}
         </h2>

         <form onSubmit={handleSubmit}>
            <div className='mb-4'>
               <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='firstName'
               >
                  First Name:
               </label>
               <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={firstName}
                  onChange={handleChange}
                  className='w-full p-2 border rounded-md'
                  required
               />
            </div>

            <div className='mb-4'>
               <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='lastName'
               >
                  Last Name:
               </label>
               <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={lastName}
                  onChange={handleChange}
                  className='w-full p-2 border rounded-md'
                  required
               />
            </div>

            <div className='mb-4'>
               <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='email'
               >
                  Email:
               </label>
               <input
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  className='w-full p-2 border rounded-md'
                  required
               />
            </div>

            <div className='mb-4'>
               <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='department'
               >
                  Department:
               </label>
               <input
                  type='text'
                  id='department'
                  name='department'
                  value={department}
                  onChange={handleChange}
                  className='w-full p-2 border rounded-md'
                  required
               />
            </div>

            <button
               type='submit'
               className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-10'
            >
               {isUpdate ? "Update Student" : "Add Student"}
            </button>
            <Link to='/'>
               <button
                  type='submit'
                  className='border border-red-400 text-red-400 px-4 py-2 rounded-md hover:bg-red-400 hover:border-red-400 hover:text-white'
               >
                  Cancel
               </button>
            </Link>
         </form>
      </div>
   );
};

export default StudentForm;
