import StudentForm from "../components/student/StudentForm";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../axios/axios";

const AddStudent = () => {
   const navigate = useNavigate();

   const handleSubmit = async (student) => {
      await addStudent(student);
      navigate("/");
   };
   return (
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
   );
};

export default AddStudent;
