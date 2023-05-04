package com.example.examPortalBackend.repositery;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.examPortalBackend.model.exam.Queastion;
import com.example.examPortalBackend.model.exam.Quiz;

public interface QueastionRepo extends JpaRepository<Queastion, Integer> {

	Set<Queastion> findByQuiz(Quiz quiz);

}
