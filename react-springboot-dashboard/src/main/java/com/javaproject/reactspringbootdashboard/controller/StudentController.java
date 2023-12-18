package com.javaproject.reactspringbootdashboard.controller;

import com.javaproject.reactspringbootdashboard.model.Student;
import com.javaproject.reactspringbootdashboard.service.IStudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    private final IStudentService studentService;

    @GetMapping
    public ResponseEntity<List<Student>> getStudents() {
        return new ResponseEntity<>(studentService.getStudents(), HttpStatus.FOUND);
    }
    public Student addStudent(@RequestBody Student student) {
      return studentService.addStudent(student);
    }

    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable Long id) {
        return studentService.updateStudent(student, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable Long id){
studentService.deleteStudent(id);
    }
    @PutMapping("/student/{id}")
    public Student getStudentById(@PathVariable Long id){
      return  studentService.getStudentById(id);
    }

}
