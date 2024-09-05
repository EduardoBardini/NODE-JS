package com.example.exemplo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exemplo.repository.TimeFutebolRepository;
import com.example.exemplo.services.TimeFutebolService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/time-futebol")
public class TimeFutebolController {
    
    @Autowired
    TimeFutebolService timeFutebolService;

    @GetMapping
    public ResponseEntity getTimes() {

        var times = timeFutebolService;
        return ResponseEntity.ok(times);    
    }
    
}