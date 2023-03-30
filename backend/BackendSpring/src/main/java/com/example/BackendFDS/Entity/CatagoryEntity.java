package com.example.BackendFDS.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="category")
public class CatagoryEntity {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long id;
private String cat_name;
private String food_orgin;
private String cat_code;
private String food_description;


public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getCat_name() {
	return cat_name;
}
public void setCat_name(String cat_name) {
	this.cat_name = cat_name;
}
public String getFood_orgin() {
	return food_orgin;
}
public void setFood_orgin(String food_orgin) {
	this.food_orgin = food_orgin;
}
public String getCat_code() {
	return cat_code;
}
public void setCat_code(String cat_code) {
	this.cat_code = cat_code;
}
public String getFood_description() {
	return food_description;
}
public void setFood_description(String food_description) {
	this.food_description = food_description;
}
public CatagoryEntity(long id, String cat_name, String food_orgin, String cat_code, String food_description) {
	super();
	this.id = id;
	this.cat_name = cat_name;
	this.food_orgin = food_orgin;
	this.cat_code = cat_code;
	this.food_description = food_description;
}
public CatagoryEntity() {
	super();
	// TODO Auto-generated constructor stub
}


}
