package com.example.examPortalBackend.repositery;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.examPortalBackend.model.exam.Category;
import com.example.examPortalBackend.model.exam.Queastion;
import com.example.examPortalBackend.model.exam.Quiz;

public interface QuizRepo extends JpaRepository<Quiz, Integer> {
	List<Quiz> findByCategory(Category category);
	
	List<Quiz>findByActive(Boolean b);
	List<Quiz>findByCategoryAndActive(Category category,Boolean value);

}
