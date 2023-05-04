package com.example.examPortalBackend.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.examPortalBackend.model.exam.Queastion;
import com.example.examPortalBackend.model.exam.Quiz;
import com.example.examPortalBackend.repositery.QueastionRepo;


@Service
public class QueastionServiceImpl implements QueastionService {
	
	@Autowired
	QueastionRepo queastionRepo;

	@Override
	public Queastion addQueastion(Queastion queastion) {
		
		return queastionRepo.save(queastion);
	}

	@Override
	public List<Queastion> getAllQueastions() {
		
		return queastionRepo.findAll();
	}

	@Override
	public Queastion getQueastionById(Integer queastionId) {
		
		return queastionRepo.findById(queastionId).get();
	}

	@Override
	public Queastion updateQueastion(Queastion queastion) {
		
		return queastionRepo.save(queastion);
	}

	@Override
	public void deleteQueastion(Integer queastionId) {
		queastionRepo.deleteById(queastionId);
		
	}

	@Override
	public Set<Queastion> getQueastionOfQuizes(Quiz quiz) {
		// TODO Auto-generated method stub
		return queastionRepo.findByQuiz(quiz);
	}

}
