package com.example.BackendFDS.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BackendFDS.Entity.FoodEntity;

import com.example.BackendFDS.Repository.FoodRepository;
@Service
public class FoodService {
	@Autowired
	FoodRepository foodRepository;
	
	//savedata
	public FoodEntity post(FoodEntity foodEntity) {
		if(!foodRepository.equals(null)) {//object nd business logic return
			return foodRepository.save(foodEntity);
			
		}
		return null;
	}
	

//getdata
public List<FoodEntity> getAllData() {
	
	
	return foodRepository.findAll();
	
}





//deleteData
public String delete(Long id ) {
	Optional<FoodEntity> mode=foodRepository.findById(id);
	
	
	if(mode.isPresent()) {
		foodRepository.delete(mode.get());
		
		return "Delete";
	}
	
	return "Failed";
}
//updateData
//public FoodEntity update(FoodEntity foodEntity ,long id) {
//
//	Optional<FoodEntity> fooOptional = foodRepository.findById(id);
//
//	FoodEntity fooEntity = new FoodEntity();
//	if (fooOptional.isEmpty()) {
//
//		fooEntity.setFood_code(foodEntity.getFood_code());
//		fooEntity.setFood_name(foodEntity.getFood_name());
//		fooEntity.setOrgin(foodEntity.getOrgin());
//		fooEntity.setPrice(foodEntity.getPrice());
//		fooEntity.setPrice(foodEntity.getPrice());
//		fooEntity.setCategory(foodEntity.getCategory());
//		fooEntity.setDiscount(foodEntity.getDiscount());
//		fooEntity.setImage(foodEntity.getImage());
//		return foodRepository.save(foodEntity);
//
//	}else {
//		foodEntity.setId(id);
//		return foodRepository.save(foodEntity);
//	}
////catagoryRepository.findById(id).map(cat->{
////	cat.setCat_code(catagoryEntity.getCat_code());
////	cat.setCat_name(catagoryEntity.getCat_name());
////	cat.setFood_description(catagoryEntity.getFood_description());
////	cat.setFood_orgin(catagoryEntity.getFood_orgin());
////	catagoryRepository.save(cat);
////	return cat;
////}
////).orElseGet(()->{
////	catagoryEntity.setId(id);
////	return catagoryRepository.save(catagoryEntity);
////});
//}
//one id
public FoodEntity getById(Long id) {
	Optional<FoodEntity> mode=foodRepository.findById(id);
	
	

	
	return mode.get();
}



}
