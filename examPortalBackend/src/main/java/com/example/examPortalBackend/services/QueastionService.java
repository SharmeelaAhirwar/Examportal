package com.example.examPortalBackend.services;

import java.util.List;
import java.util.Set;

import com.example.examPortalBackend.model.exam.Queastion;
import com.example.examPortalBackend.model.exam.Quiz;


public interface QueastionService {
	
	
	 Queastion addQueastion(Queastion queastion);
		
		
		List<Queastion>getAllQueastions();
		
		Queastion getQueastionById(Integer queastionId);
		
		
		Queastion updateQueastion(Queastion queastion);
		
		 void deleteQueastion(Integer queastionId);
		 
		 Set<Queastion>getQueastionOfQuizes(Quiz quiz);

}
