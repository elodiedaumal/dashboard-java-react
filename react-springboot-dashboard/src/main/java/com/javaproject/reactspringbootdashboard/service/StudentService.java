package com.javaproject.reactspringbootdashboard.service;

import com.javaproject.reactspringbootdashboard.exception.StudentAlreadyExistException;
import com.javaproject.reactspringbootdashboard.model.Student;
import com.javaproject.reactspringbootdashboard.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService {

    private final StudentRepository studentRepository;

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student addStudent(Student student) {
        if(studentAlreadyExist(student.getEmail())){
            throw new StudentAlreadyExistException(student.getEmail() + " email address already use");
        }
        return studentRepository.save(student);
    }




    @Override
    public Student updateStudent(Student student, Long id) {
        return null;
    }

    @Override
    public Student getStudentById(Long id) {
        return null;
    }

    @Override
    public void deleteStudent(Long id) {

    }
    private boolean studentAlreadyExist(String email) {
return studentRepository.findByEmail(email).isPresent();
    }
}
