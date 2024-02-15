package com.table.course.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.table.course.Entity.Courses;
import com.table.course.Services.CourseService;

import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;

@CrossOrigin
@RestController
public class CourseController {
@Autowired
CourseService employeeService;
@Tag(name="add the Courses",description = "fetch the courses")
@PostMapping("/add")
public boolean addEmployee(@RequestBody Courses employee)
{
	return employeeService.addEmployee(employee);
}

@Tag(name="get the Courses",description = "get the courses")
@GetMapping("/get")
public List <Courses> getAllEmployees()
{
	return employeeService.getAllEmployees();
}
@Tag(name="update the Courses",description = "update the courses")
@PutMapping("/put")
		public Courses updateInfo(@RequestBody Courses st)
		{
			return employeeService.updateDetails(st);
		}
@Tag(name="delete the Courses",description = "delete the courses")

@DeleteMapping("/deleteproducts/{id}")
public String deleteCarts(@PathVariable int id) {
	return employeeService.deleteCart(id);
}

}