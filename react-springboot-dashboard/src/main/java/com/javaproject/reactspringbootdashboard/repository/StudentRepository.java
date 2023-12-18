package com.javaproject.reactspringbootdashboard.repository;

import com.javaproject.reactspringbootdashboard.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
