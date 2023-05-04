package com.example.examPortalBackend.services;

import java.util.List;
import java.util.Set;

import com.example.examPortalBackend.model.exam.Category;
import com.example.examPortalBackend.model.exam.Queastion;
import com.example.examPortalBackend.model.exam.Quiz;

public interface QuizService {
	
    Quiz addQuiz(Quiz quiz);
	
	
	List<Quiz>getAllQuizes();
	
	Quiz getQuizById(Integer quizId);
	
	
	Quiz updateQuiz(Quiz quiz);
	
	 void deleteQuiz(Integer quizId);


	List<Quiz> getQuizeByCategory(Category cat);
	
	List<Quiz>getActiveQuiz();
	
	List<Quiz>getActiveQuizeByCategory(Category cat);
	 
	 

}
