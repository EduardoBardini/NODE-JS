package com.example.exemplo.entities;

import org.springframework.boot.autoconfigure.amqp.RabbitConnectionDetails.Address;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity(name = "cliente")
public class ClienteEntity {
    
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "id_cliente")
   private Long id;
   
   @OneToOne
   @JoinColumn(name = "usuario_id")
   private UsuarioEntity UsuarioEntity;

   @Column(name = "cep")
   private String cep;

   @Column(name = "numCasa")
   private String numCasa;

   @Column(name = "notaCliente")
   private float notaCliente;










public UsuarioEntity getUsuarioEntity() {
    return UsuarioEntity;
}

public void setUsuarioEntity(UsuarioEntity usuarioEntity) {
    UsuarioEntity = usuarioEntity;
}

public void setId(Long id){
    this.id = id;
}

public Long getId(){
    return id;
}

public String getCep() {
    return cep;
}

public void setCep(String cep) {
    this.cep = cep;
}

public String getNumCasa() {
    return numCasa;
}

public void setNumCasa(String numCasa) {
    this.numCasa = numCasa;
}

public float getNotaCliente() {
    return notaCliente;
}

public void setNotaCliente(float notaCliente) {
    this.notaCliente = notaCliente;
}

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

   



}
