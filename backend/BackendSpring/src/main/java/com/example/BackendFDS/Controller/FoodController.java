package com.example.BackendFDS.Controller;

import java.util.List;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.BackendFDS.Entity.FoodEntity;
import com.example.BackendFDS.Service.FoodService;
@RestController
@Data
@CrossOrigin(origins="http://localhost:4200" ,allowCredentials ="true")
@RequestMapping("fds/food")
public class FoodController {
	@Autowired
	FoodService foodService;
	
	@PostMapping("/posts")
	public FoodEntity saveData(@RequestBody FoodEntity foodEntity) {
		System.out.print(foodEntity.getDiscount()+foodEntity.getFood_code());
		return foodService.post(foodEntity);
	}
	
	@GetMapping("/posts")
	public List<FoodEntity> getAllData(){
		
		return foodService.getAllData();
	}
	
	@DeleteMapping("/posts/{id}")
	public String deleteData(@PathVariable long id) {
		
		return foodService.delete(id);
	}
	
//	@PutMapping("/posts/{id}")
//	public FoodEntity update(@RequestBody FoodEntity foodEntity ,@PathVariable long id ) {
//
//		System.out.println(foodEntity);
//
//
//		return foodService.update(foodEntity, id);
//	}
	
	@GetMapping("/posts/{id}")
	public FoodEntity getById(@PathVariable Long id) {
		return foodService.getById(id);
	}

}
