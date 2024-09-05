package com.example.exemplo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.exemplo.entities.TimeFutebolEntity;
import com.example.exemplo.repository.TimeFutebolRepository;

@Service
public class TimeFutebolService {
    
    @Autowired
    TimeFutebolRepository timeFutebolRepository;

    public List<TimeFutebolEntity> getAllTimes(){
      
        return timeFutebolRepository.findAll();
    }
}
