package com.example.BackendFDS.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class RegisterEntity {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
    private String user_firstName;
    private String user_lastName;
    private String user_email;
    private String user_phone;
    private String user_address;
    private String user_password;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUser_firstName() {
		return user_firstName;
	}
	public void setUser_firstName(String user_firstName) {
		this.user_firstName = user_firstName;
	}
	public String getUser_lastName() {
		return user_lastName;
	}
	public void setUser_lastName(String user_lastName) {
		this.user_lastName = user_lastName;
	}
	public String getUser_email() {
		return user_email;
	}
	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}
	public String getUser_phone() {
		return user_phone;
	}
	public void setUser_phone(String user_phone) {
		this.user_phone = user_phone;
	}
	public String getUser_address() {
		return user_address;
	}
	public void setUser_address(String user_address) {
		this.user_address = user_address;
	}
	public String getUser_password() {
		return user_password;
	}
	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}
	public RegisterEntity() {
		
	}
}
