package com.example.BackendFDS.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.BackendFDS.Entity.FoodEntity;
@Repository
public interface FoodRepository extends JpaRepository<FoodEntity, Long>{




}
