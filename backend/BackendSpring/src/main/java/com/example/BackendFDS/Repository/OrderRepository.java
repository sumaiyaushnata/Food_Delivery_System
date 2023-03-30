package com.example.BackendFDS.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.BackendFDS.Entity.CartEntity;
import com.example.BackendFDS.Entity.OrderEntity;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Long>{
	@Query(value="SELECT * FROM order1 where user_id=:userId ",nativeQuery=true)
	List<OrderEntity> getAllOrder(@Param("userId") long userId);

	@Transactional
	@Modifying
	@Query(value="UPDATE order1 o SET o.state=:state WHERE o.id=:orderId", nativeQuery = true)
	public void userstatusOrder(@Param("state") String state,@Param("orderId") long id);
}
