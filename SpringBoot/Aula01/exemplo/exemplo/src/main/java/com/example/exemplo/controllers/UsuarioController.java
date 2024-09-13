package com.example.exemplo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exemplo.services.UsuarioServices;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    
    @Autowired
    UsuarioServices UsuarioServices;

    @GetMapping
    public ResponseEntity<?> getAllTimes(){
        var times = UsuarioServices.getAllTimes();
        return ResponseEntity.ok(times);
    }

    
    
    

}
