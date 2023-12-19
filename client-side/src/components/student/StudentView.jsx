import React, { useEffect, useState } from "react";
import axios from "axios";
import { SiCodereview } from "react-icons/si";
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

const tableCellStyle = "py-2 px-4 text-sm text-gray-800 border-r";
const actionCellStyle = "py-2 px-4 text-sm cursor-pointer hover:underline";

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
      <section className=' max-w-5xl mx-auto  rounded-md p-10'>
         <table className='min-w-full rounded-md overflow-hidden shadow-md border border-gray-900'>
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
                     <td className={`${actionCellStyle} text-green-500`}>
                        <SiCodereview />
                     </td>
                     <td className={actionCellStyle}>
                        <GrUpdate />
                     </td>
                     <td className={`${actionCellStyle} text-red-500`}>
                        <MdDeleteForever />
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   );
};

export default StudentView;
