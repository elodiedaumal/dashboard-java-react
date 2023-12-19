import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../../axios/axios";
import { Link } from "react-router-dom";
import { SiCodereview } from "react-icons/si";
import { ImCross } from "react-icons/im";
import { GrUpdate } from "react-icons/gr";

const tableCellStyle = "py-2 px-4 text-sm text-gray-800 border-r";

const StudentsView = ({ searchQuery }) => {
   const [students, setStudents] = useState([]);

   useEffect(() => {
      fetchStudents();
   }, [searchQuery]); // Update the effect to include searchQuery as a dependency

   const fetchStudents = async () => {
      const data = await getStudents();
      setStudents(data || []);
   };

   const handleDelete = async (id) => {
      await deleteStudent(id);
      fetchStudents();
   };

   const filteredStudents = students.filter((student) => {
      const fullName = `${student.firstName} ${student.lastName}`;
      return fullName.toLowerCase().includes(searchQuery.toLowerCase());
   });

   return (
      <section className=' max-w-5xl mx-auto p-10 pt-0 mt-4'>
         <div className='overflow-x-auto border border-gray-900 rounded-md'>
            {filteredStudents.length === 0 ? (
               <p className='p-4 text-gray-800'>
                  No students found with the given name.
               </p>
            ) : (
               <table className='min-w-full  overflow-hidden shadow-md '>
                  <thead className='bg-gray-100 border-b'>
                     <tr>
                        <th
                           className={`${tableCellStyle} border-r font-bold hidden xl:table-cell`}
                        >
                           ID
                        </th>
                        <th className={`${tableCellStyle} border-r font-bold`}>
                           First Name
                        </th>
                        <th className={`${tableCellStyle} border-r font-bold`}>
                           Last Name
                        </th>
                        <th
                           className={`${tableCellStyle} border-r font-bold hidden md:table-cell`}
                        >
                           Email
                        </th>
                        <th
                           className={`${tableCellStyle} border-r font-bold hidden lg:table-cell`}
                        >
                           Department
                        </th>
                        <th
                           className={`${tableCellStyle} border-r-0 font-bold`}
                           colSpan='3'
                        >
                           Actions
                        </th>
                     </tr>
                  </thead>

                  <tbody>
                     {filteredStudents.map((student, index) => (
                        <tr
                           key={student.id}
                           className={
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                           }
                        >
                           <td
                              className={`${tableCellStyle} border-r hidden xl:table-cell`}
                           >
                              {index + 1}
                           </td>
                           <td className={`${tableCellStyle} border-r`}>
                              {student.firstName}
                           </td>
                           <td className={`${tableCellStyle} border-r`}>
                              {student.lastName}
                           </td>
                           <td
                              className={`${tableCellStyle} border-r hidden md:table-cell`}
                           >
                              {student.email}
                           </td>
                           <td
                              className={`${tableCellStyle} border-r hidden lg:table-cell`}
                           >
                              {student.department}
                           </td>

                           <td>
                              <div className='flex gap-5 items-center justify-center cursor-pointer'>
                                 <Link to={`/student-profile/${student.id}`}>
                                    <SiCodereview className='text-green-500' />
                                 </Link>
                                 <Link to={`/student-update/${student.id}`}>
                                    <GrUpdate />
                                 </Link>

                                 <button
                                    onClick={() => handleDelete(student.id)}
                                 >
                                    <ImCross className='text-red-500 ' />
                                 </button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            )}
         </div>
      </section>
   );
};

export default StudentsView;
