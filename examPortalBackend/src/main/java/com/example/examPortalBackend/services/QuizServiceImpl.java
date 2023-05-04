package com.example.examPortalBackend.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.examPortalBackend.model.exam.Category;
import com.example.examPortalBackend.model.exam.Queastion;
import com.example.examPortalBackend.model.exam.Quiz;
import com.example.examPortalBackend.repositery.QuizRepo;

@Service
public class QuizServiceImpl implements QuizService{
	
	@Autowired
	QuizRepo quizRepo;

	@Override
	public Quiz addQuiz(Quiz quiz) {
		
		return quizRepo.save(quiz);
	}

	@Override
	public List<Quiz> getAllQuizes() {
		
		return quizRepo.findAll();
	}

	@Override
	public Quiz getQuizById(Integer quizId) {
		
		return quizRepo.findById(quizId).get();
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		
		return quizRepo.save(quiz);
	}

	@Override
	public void deleteQuiz(Integer quizId) {
		quizRepo.deleteById(quizId);
	}

	@Override
	public List<Quiz> getQuizeByCategory(Category cat) {
		
		return quizRepo.findByCategory(cat);
	}

	@Override
	public List<Quiz> getActiveQuiz() {
		
		return quizRepo.findByActive(true);
	}

	@Override
	public List<Quiz> getActiveQuizeByCategory(Category cat) {
		// TODO Auto-generated method stub
		return quizRepo.findByCategoryAndActive(cat, true);
	}

	

}
