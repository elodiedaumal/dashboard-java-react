import React, { useState } from "react";

const AddStudentForm = () => {
   const [student, setStudent] = useState([
      {
         firstName: "",
         lastName: "",
         email: "",
         department: "",
      },
   ]);

   const { firstName, lastName, email, department } = student;

   const handleChange = (e) => {
      const { name, value } = e.target;
      setStudent({ ...student, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Add your logic to handle form submission
      console.log("Form submitted:", student);
   };

   return (
      <div className='max-w-md mx-auto mt-8 p-8 bg-white rounded-md shadow-md'>
         <h2 className='text-2xl font-bold mb-6'>Add New Student</h2>

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
               className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
            >
               Add Student
            </button>
         </form>
      </div>
   );
};

export default AddStudentForm;
