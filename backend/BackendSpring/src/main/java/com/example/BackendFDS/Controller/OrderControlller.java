package com.example.BackendFDS.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.BackendFDS.Entity.CartEntity;
import com.example.BackendFDS.Entity.FoodEntity;
import com.example.BackendFDS.Entity.OrderEntity;
import com.example.BackendFDS.Service.CartService;
import com.example.BackendFDS.Service.OrderService;

@RestController
@CrossOrigin(origins="http://localhost:4200" ,allowCredentials ="true")
@RequestMapping("fds/order")
public class OrderControlller {
	@Autowired
	OrderService orderService;
	
	@PostMapping("/posts")
	public OrderEntity saveData(@RequestBody OrderEntity orderEntity) {
		System.out.print("jjjjjjjj");
		System.out.print(orderEntity);
		return orderService.post(orderEntity);
	}
	
	@GetMapping("/getAll")
	public List<OrderEntity> getAllOrder(@RequestParam (value="userId") long userId){
		return  orderService.getAllOrder(userId);
	}
	@GetMapping("/posts")
	public List<OrderEntity> getAllData(){
		
		return orderService.getAllData();
	}

	@PutMapping("/updateStatus")
	public void userOrderStatus(@RequestParam(value = "state") String state,@RequestParam(value = "orderId") long id){
		System.out.println("method hit");
		 orderService.userUpdateStatus(state,id);
	}
	@DeleteMapping("/posts/{id}")
	public String deleteData(@PathVariable long id) {
		System.out.println("hitted delete");
		return orderService.delete(id);
	}
	

}
