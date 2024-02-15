package com.table.course.Repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.table.course.Controller.Form;

@Repository
public interface formrepo extends JpaRepository<Form, Integer> {
   
}
