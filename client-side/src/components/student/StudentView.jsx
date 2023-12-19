import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SiCodereview } from "react-icons/si";
import { ImCross } from "react-icons/im";

import { GrUpdate } from "react-icons/gr";

const tableCellStyle = "py-2 px-4 text-sm text-gray-800 border-r";

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
      <section className=' max-w-5xl mx-auto   p-10'>
         <div className='overflow-x-auto border border-gray-900 rounded-md'>
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
                  {students.map((student, index) => (
                     <tr
                        key={student.id}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                     >
                        <td
                           className={`${tableCellStyle} border-r hidden lg:table-cell`}
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
                              <Link to={`/edit-student/${student.id}`}>
                                 <SiCodereview className='text-green-500' />
                              </Link>
                              <Link to={`/student-profile/${student.id}`}>
                                 <GrUpdate />
                              </Link>

                              <Link to={`/delete-student/${student.id}`}>
                                 <ImCross className='text-red-500 ' />
                              </Link>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>
   );
};

export default StudentView;
