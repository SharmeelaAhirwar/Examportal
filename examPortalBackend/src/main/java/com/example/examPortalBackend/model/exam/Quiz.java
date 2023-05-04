package com.example.examPortalBackend.model.exam;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;


import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Quiz {
	
	     @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private  Integer qid;
	    private  String title;
	    private  String description;
	    private  boolean active=false;
	    private String maxMarks;
	    private  String noOfQuestions;
	    
	    @ManyToOne()
	    @JoinColumn(name="cid")
	    private  Category category;	
	    
	    @OneToMany(mappedBy = "quiz",cascade = CascadeType.ALL)
	    @JsonIgnore
	    private Set<Queastion>questions =new HashSet<>();
	

}
