package com.table.course.Controller;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Form {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String phone;
    private String gender;
    private String state;
    private int tenthpercentage;
    private int twelvethpercentage; 
    private int course_id;
    public int getId() {
        return id;
    }
    

    

}
