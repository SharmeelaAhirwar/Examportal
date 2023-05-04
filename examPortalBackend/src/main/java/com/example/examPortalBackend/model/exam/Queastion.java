package com.example.examPortalBackend.model.exam;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.criteria.CriteriaBuilder.In;

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
public class Queastion {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer quesId;
	    private  String content;
	    private  String image;
	    private  String option1;
	    private  String option2;
	    private  String option3;
	    private  String option4;

	    
//	    @JsonIgnore  //beacuse of jsonIgnor this filed will not pass to client side
	    private  String answer;
	    
	    @Transient  //beacuse of transient this field will not save in db 
	    private String givenAnswer;


	    @ManyToOne(fetch = FetchType.EAGER)
	    @JoinColumn(name="qid")
	    private  Quiz quiz;
}
