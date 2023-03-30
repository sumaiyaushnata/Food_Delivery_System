package com.example.BackendFDS.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BackendFDS.Entity.CartEntity;
import com.example.BackendFDS.Entity.CatagoryEntity;
import com.example.BackendFDS.Repository.CartRepository;
import com.example.BackendFDS.Repository.CatagoryRepository;

@Service
public class CartService {
	@Autowired
	CartRepository cartRepository;
	
	//savedata
	public CartEntity post(CartEntity cartEntity) {
		if(!cartRepository.equals(null)) {//object nd business logic return
			return cartRepository.save(cartEntity);
			
		}
		return cartRepository.save(cartEntity);
	}
	
public List<CartEntity> getById(long id) {

		return cartRepository.getById(id);
}
//getdata
public List<CartEntity> getAllCard(long userId) {
	
	
	return cartRepository.getAllCard(userId);
	
}





//deleteData
public String delete(Long id ) {
	Optional<CartEntity> mode=cartRepository.findById(id);
	
	
	if(mode.isPresent()) {
		cartRepository.delete(mode.get());
		
		return "Delete";
	}
	
	return "Failed";
}
//updateData
//public CartEntity update(CartEntity catagoryEntity ,long id) {
//	
//	Optional<CartEntity> catOptional = cartRepository.findById(id);
//	
//	CartEntity cataEntity = new CartEntity();
//	if (catOptional.isEmpty()) {
//		
//		cataEntity.setCat_code(catagoryEntity.getCat_code());
//		cataEntity.setCat_name(catagoryEntity.getCat_name());
//		cataEntity.setFood_description(catagoryEntity.getFood_description());
//		cataEntity.setFood_orgin(catagoryEntity.getFood_orgin());
//		return cartRepository.save(cataEntity);
//		
//	}else {
//		cataEntity.setId(id);
//		return cartRepository.save(cataEntity);
//	}
//catagoryRepository.findById(id).map(cat->{
//	cat.setCat_code(catagoryEntity.getCat_code());
//	cat.setCat_name(catagoryEntity.getCat_name());
//	cat.setFood_description(catagoryEntity.getFood_description());
//	cat.setFood_orgin(catagoryEntity.getFood_orgin());
//	catagoryRepository.save(cat);
//	return cat;
//}
//).orElseGet(()->{
//	catagoryEntity.setId(id);
//	return catagoryRepository.save(catagoryEntity);
//});	
//}
//one id
public CartEntity getById(Long id) {
	Optional<CartEntity> mode=cartRepository.findById(id);
	
	

	
	return mode.get();
}




}
