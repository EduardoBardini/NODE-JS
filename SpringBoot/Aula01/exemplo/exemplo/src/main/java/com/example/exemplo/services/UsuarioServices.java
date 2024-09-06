package com.example.exemplo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exemplo.entities.UsuarioEntity;
import com.example.exemplo.repository.UsuarioRepository;

@Service
public class UsuarioServices {
    
   @Autowired
   UsuarioRepository UsuarioRepository;

   public List<UsuarioEntity> getAllTimes(){
      return UsuarioRepository.findAll();
   }

}
