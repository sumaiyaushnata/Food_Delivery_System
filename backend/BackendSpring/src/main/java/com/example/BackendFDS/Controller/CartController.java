package com.example.BackendFDS.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.BackendFDS.Entity.CartEntity;
import com.example.BackendFDS.Entity.FoodEntity;
import com.example.BackendFDS.Service.CartService;
import com.example.BackendFDS.Service.FoodService;

@RestController
@CrossOrigin(origins="http://localhost:4200" ,allowCredentials ="true")
@RequestMapping("fds/cart")
public class CartController {
	@Autowired
	CartService cartService;
	
	@PostMapping("/posts")
	public CartEntity saveData(@RequestBody CartEntity cartEntity) {
		System.out.print("jjjjjjjj");
		System.out.print(cartEntity);
		return cartService.post(cartEntity);
	}
//	@GetMapping("/posts")
//	public List<CartEntity> getById(@RequestParam (value="userId")  Long id) {
//		return cartService.getById(id);
//	}
	@GetMapping("/posts")
	public List<CartEntity> getById(@RequestParam (value="userId") long id){
		return cartService.getById(id);
	}
	@GetMapping("/getAll")
	public List<CartEntity> getAllCard(@RequestParam (value="userId") long userId){
		return  cartService.getAllCard(userId);
	}

	@DeleteMapping("/posts/{id}")
	public  String delete(@PathVariable long id){
		return cartService.delete(id);
	}
//	@GetMapping("/posts")
//	public List<CartEntity> getAllData(){
//		
//		return cartService.getAllData();
//	}
//	
//	@DeleteMapping("/posts/{id}")
//	public String deleteData(@PathVariable long id) {
//		
//		return cartService.delete(id);
//	}
	
//	@PutMapping("/posts/{id}")
//	public FoodEntity update(@RequestBody FoodEntity foodEntity ,@PathVariable long id ) {
//		
//		System.out.println(foodEntity);
//		
//		
//		return cartService.update(foodEntity, id);
//	}
	
//	@GetMapping("/posts/{id}")
//	public CartEntity getById(@PathVariable Long id) {
//		return cartService.getById(id);
//	}

	

}
