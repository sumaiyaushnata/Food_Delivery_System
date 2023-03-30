package com.example.BackendFDS.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.BackendFDS.Entity.CartEntity;
import com.example.BackendFDS.Entity.RegisterEntity;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<CartEntity, Long>{

	@Query(value="SELECT * FROM cart1 where user_id=:userId ",nativeQuery=true)
	List<CartEntity> getById(@Param("userId") long userId);
	

	@Query(value="SELECT * FROM cart1 where user_id=:userId ",nativeQuery=true)
	List<CartEntity> getAllCard(@Param("userId") long userId);

}
	
	

