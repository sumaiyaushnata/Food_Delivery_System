package com.example.BackendFDS.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BackendFDS.Entity.FoodEntity;
import com.example.BackendFDS.Entity.RegisterEntity;
import com.example.BackendFDS.Repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	public RegisterEntity post(RegisterEntity registerEntity) {
		if(!userRepository.equals(null)) {//object nd business logic return
			return userRepository.save(registerEntity);
			
		}
		return null;
	}
	public RegisterEntity login(String userPhone,String password) {
		return userRepository.login(userPhone, password);
	}

	public void count(long id){
		 userRepository.countById(id);
	}
}
