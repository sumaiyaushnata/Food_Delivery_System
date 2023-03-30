package com.example.BackendFDS.Controller;

import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.BackendFDS.Entity.CatagoryEntity;
import com.example.BackendFDS.Service.CatagoryService;

@RestController
@CrossOrigin("*")
@RequestMapping("fds/category")
public class CatagoryController {
	@Autowired
	CatagoryService catagoryService;
	
	@PostMapping("/posts")
	public CatagoryEntity saveData(@RequestBody CatagoryEntity catagoryEntity) {
		return catagoryService.post(catagoryEntity);
	}
	
	@GetMapping("/posts")
	public List<CatagoryEntity> getAllData(){
		
		return catagoryService.getAllData();
	}


	
	@DeleteMapping("/posts/{id}")
	public String deleteData(@PathVariable long id) {
		
		return catagoryService.delete(id);
	}
	
//	@PutMapping("/posts/{id}")
//	public CatagoryEntity update(@RequestBody CatagoryEntity catagoryEntity ,@PathVariable long id ) {
//
//		System.out.println(catagoryEntity);
//
//
//		return catagoryService.update(catagoryEntity, id);
//	}
	
	@GetMapping("/getAllCatagoryName")
	public List<CatagoryEntity> getAllCatagoryName(){
		return catagoryService.getAllCatagoryName();
	}

}
