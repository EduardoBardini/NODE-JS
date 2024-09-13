package com.example.exemplo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exemplo.repository.ClienteRepository;
import com.example.exemplo.entities.ClienteEntity;
import java.util.List;


@Service
public class ClienteServices {
    @Autowired
    ClienteRepository ClienteRepository;

    public List<ClienteEntity> getAllTimes() {
        return ClienteRepository.findAll();
    }

}
