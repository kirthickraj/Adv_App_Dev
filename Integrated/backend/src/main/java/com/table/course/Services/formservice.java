package com.table.course.Services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.table.course.Controller.Form;
import com.table.course.Repo.formrepo;



@Service
public class formservice {
	
@Autowired
public formrepo rep;
public Form addEmployee(Form employee)
{
return rep.save(employee);

}
public List <Form> getAllEmployees()
{
return rep.findAll();
}
// public Form updateDetails(Form e) {
// 	return rep.saveAndFlush(e);
// }

// public String deleteCart(int id) {
// 	rep.deleteById(id);
// 	return "Delete the item "+id;
// }
}
