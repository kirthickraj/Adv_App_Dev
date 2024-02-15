package com.table.course.Repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.table.course.Entity.Courses;



@Repository
public interface CourseRepo extends JpaRepository<Courses, Integer> {

}


