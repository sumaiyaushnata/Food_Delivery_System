package com.example.BackendFDS.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.BackendFDS.Entity.CatagoryEntity;
import com.example.BackendFDS.Repository.CatagoryRepository;


@Service
public class CatagoryService {
	@Autowired
	CatagoryRepository catagoryRepository;
	
	//savedata
	public CatagoryEntity post(CatagoryEntity catagoryEntity) {
		if(!catagoryRepository.equals(null)) {//object nd business logic return
			return catagoryRepository.save(catagoryEntity);
			
		}
		return null;
	}
	

//getdata
public List<CatagoryEntity> getAllData() {
	
	
	return catagoryRepository.getAllCatagoryName();
	
}





//deleteData
public String delete(Long id ) {
	Optional<CatagoryEntity> mode=catagoryRepository.findById(id);
	
	
	if(mode.isPresent()) {
		catagoryRepository.delete(mode.get());
		
		return "Delete";
	}
	
	return "Failed";
}
//updateData
//public CatagoryEntity update(CatagoryEntity catagoryEntity ,long id) {
//
//	Optional<CatagoryEntity> catOptional = catagoryRepository.findById(id);
//
//	CatagoryEntity cataEntity = new CatagoryEntity();
//	if (catOptional.isEmpty()) {
//
//		cataEntity.setCat_code(catagoryEntity.getCat_code());
//		cataEntity.setCat_name(catagoryEntity.getCat_name());
//		cataEntity.setFood_description(catagoryEntity.getFood_description());
//		cataEntity.setFood_orgin(catagoryEntity.getFood_orgin());
//		return catagoryRepository.save(cataEntity);
//
//	}else {
//		cataEntity.setId(id);
//		return catagoryRepository.save(cataEntity);
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
public CatagoryEntity getById(Long id) {
	Optional<CatagoryEntity> mode=catagoryRepository.findById(id);
	
	

	
	return mode.get();
}
public List<CatagoryEntity> getAllCatagoryName() {
	return catagoryRepository.getAllCatagoryName();
}



}



