package com.example.BackendFDS.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.BackendFDS.Entity.CartEntity;
import com.example.BackendFDS.Entity.RegisterEntity;
import com.example.BackendFDS.Service.UserService;
@CrossOrigin(origins="http://localhost:4200" ,allowCredentials =  "true")
@RestController
@RequestMapping("fds/user")
public class UserController {
	@Autowired
	UserService userService;
	
	@PostMapping("/posts")
	public RegisterEntity saveData(@RequestBody RegisterEntity registerEntity) {
		System.out.print("jjjjjjjj");
		
		return userService.post(registerEntity);
	}
	@GetMapping("/login")
	public RegisterEntity login(@RequestParam (value="userPhone") String userPhone,@RequestParam(value="password") String password) {
		System.out.println("hit login");
		return userService.login(userPhone, password);
	}
	@GetMapping("/count")
	public void count(long id){
		userService.count(id);
	}
	
	
	
	
	
	


}
