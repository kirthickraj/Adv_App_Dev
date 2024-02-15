package com.table.course.Services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.table.course.Entity.Courses;
import com.table.course.Repo.CourseRepo;


@Service
public class CourseService {
@Autowired
public CourseRepo employeeRepo;
public boolean addEmployee(Courses employee)
{
return employeeRepo.save(employee)!=null?true:false;
}
public List <Courses> getAllEmployees()
{
return employeeRepo.findAll();
}
public Courses updateDetails(Courses e) {
	return employeeRepo.saveAndFlush(e);
}

public String deleteCart(int id) {
	employeeRepo.deleteById(id);
	return "Delete the item "+id;
}
}



