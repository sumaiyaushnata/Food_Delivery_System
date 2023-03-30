package com.example.BackendFDS.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.BackendFDS.Entity.CatagoryEntity;
@Repository
public interface CatagoryRepository extends JpaRepository<CatagoryEntity, Long> {

	
	
	@Query(value="SELECT *FROM category ", nativeQuery=true)
	List<CatagoryEntity> getAllCatagoryName();
}
