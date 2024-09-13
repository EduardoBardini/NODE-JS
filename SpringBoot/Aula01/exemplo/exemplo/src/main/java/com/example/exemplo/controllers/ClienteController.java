package com.example.exemplo.controllers;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exemplo.services.ClienteServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/clientes")
public class ClienteController {
    @Autowired
    ClienteServices ClienteServices;

    @GetMapping
    public ResponseEntity<?> getAllTimes() {
        var times = ClienteServices.getAllTimes();
        return ResponseEntity.ok(times);
    }
}
