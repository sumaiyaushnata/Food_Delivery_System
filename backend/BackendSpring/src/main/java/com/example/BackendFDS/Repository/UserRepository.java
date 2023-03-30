package com.example.BackendFDS.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.example.BackendFDS.Entity.RegisterEntity;

@Repository
public interface UserRepository extends JpaRepository<RegisterEntity, Long> {
	
@Query(value="SELECT * FROM user where user_phone=:userPhone and user_password=:password limit 1",nativeQuery=true)
RegisterEntity login(@Param("userPhone") String userPhone, @Param("password") String password);

    long countById(long id);


}
