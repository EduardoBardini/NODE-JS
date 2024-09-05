package com.example.exemplo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "time_futebol")
public class TimeFutebolEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    @Column(name = "id")
    private Long id;
    
    @Column(name = "nome")
    private String nomeClube;
    
    @Column(name = "divisao")
    private String divisao;
    
    @Column(name = "pais")
    private String pais;
    
    @Column(name = "tem_mundial")
    private Boolean temMundial;

    public void setId(Long id){
        this.id = id;
    }

    public Long getId(){
        return id;
    }

    public String getNomeClube() {
        return nomeClube;
    }

    public void setNomeClube(String nomeClube) {
        this.nomeClube = nomeClube;
    }

    public String getDivisao() {
        return divisao;
    }

    public void setDivisao(String divisao) {
        this.divisao = divisao;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public Boolean getTemMundial() {
        return temMundial;
    }

    public void setTemMundial(Boolean temMundial) {
        this.temMundial = temMundial;
    }

    

}
