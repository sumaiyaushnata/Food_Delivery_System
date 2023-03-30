package com.example.BackendFDS.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BackendFDS.Entity.CartEntity;
import com.example.BackendFDS.Entity.CatagoryEntity;
import com.example.BackendFDS.Entity.FoodEntity;
import com.example.BackendFDS.Entity.OrderEntity;

import com.example.BackendFDS.Repository.OrderRepository;
@Service
public class OrderService {
	@Autowired
	OrderRepository orderRepository;
	
	//savedata
	public OrderEntity post(OrderEntity orderEntity) {
		if(!orderRepository.equals(null)) {//object nd business logic return
			return orderRepository.save(orderEntity);
			
		}
		return orderRepository.save(orderEntity);
	}
	
	public List<OrderEntity> getAllOrder(long userId) {
		
		
		return orderRepository.getAllOrder(userId);
		
	}
	public List<OrderEntity> getAllData() {
		
		
		return orderRepository.findAll();
		
	}
	public void userUpdateStatus(String state,long id){
		orderRepository.userstatusOrder(state, id);
	}
	public String delete(Long id ) {
		Optional<OrderEntity> mode=orderRepository.findById(id);


		if(mode.isPresent()) {
			orderRepository.delete(mode.get());

			return "Delete";
		}

		return "Failed";
	}

}
