package com.example.exemplo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.exemplo.entities.TimeFutebolEntity;

@Repository
public interface TimeFutebolRepository extends JpaRepository<TimeFutebolEntity, Long>{
    
       
    
}
