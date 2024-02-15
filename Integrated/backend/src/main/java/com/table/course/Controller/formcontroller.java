package com.table.course.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.table.course.Services.formservice;
import java.util.List;

@RestController
@CrossOrigin
public class formcontroller {

@Autowired
formservice ApplyService;
@PostMapping("/adddetails")
public Form addEmployee(@RequestBody Form emp)
{
	return ApplyService.addEmployee(emp);
   
}
@GetMapping("/getdetails")
public List <Form> getAllEmployees()
{
	return ApplyService.getAllEmployees();
}
// @PutMapping("/update")
// public Form updateInfo(@RequestBody Form st)
// {
// 	return ApplyService.updateDetails(st);
// }
// @DeleteMapping("/deletedetails/{id}")
// public String deleteCarts(@PathVariable int id) {
// 	return ApplyService.deleteCart(id);
// }

}
