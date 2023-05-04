package com.example.examPortalBackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.examPortalBackend.model.exam.Category;
import com.example.examPortalBackend.model.exam.Quiz;
import com.example.examPortalBackend.services.QuizService;



@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {
	
	
	@Autowired
	private QuizService quizService;
	
	
	
	@PostMapping("/add")
	public ResponseEntity<Quiz>addQuiz(@RequestBody Quiz quiz){
		Quiz savedQuiz=quizService.addQuiz(quiz);
		
		return ResponseEntity.ok(savedQuiz);
	}
	
	
	@PutMapping("/update")
	public ResponseEntity<Quiz>updateQuiz(@RequestBody Quiz quiz){
		Quiz updateCategory=quizService.updateQuiz(quiz);
		return ResponseEntity.ok(updateCategory);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Quiz>>getAllQuiz(){
		List<Quiz>listCategories=quizService.getAllQuizes();
		return ResponseEntity.ok(listCategories);
	}
	
	@GetMapping("/getById/{quizId}")
	public ResponseEntity<Quiz>getQuizByID(@PathVariable Integer quizId){
		Quiz quiz=quizService.getQuizById(quizId);
		return ResponseEntity.ok(quiz);
	}
	
	
	@DeleteMapping("/deletById/{quizId}")
	public ResponseEntity<?>deleteQuiz(@PathVariable Integer quizId){
		quizService.deleteQuiz(quizId);
		return  new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/getQuizByCategoryId/{cid}")
	public ResponseEntity<List<Quiz>>getQuizesByCategoryID(@PathVariable Integer cid){
		Category cat=new Category();
		cat.setCid(cid);
		 List<Quiz>quizes=quizService.getQuizeByCategory(cat);
		 System.out.println("liststtt"+quizes);
		 return ResponseEntity.ok(quizes);
	}
	
	@GetMapping("/getActiveQuizByCategoryId/{cid}")
	public ResponseEntity<List<Quiz>>getActiveQuizesByCategoryID(@PathVariable Integer cid){
		Category cat=new Category();
		cat.setCid(cid);
		 List<Quiz>quizes=quizService.getActiveQuizeByCategory(cat);
		 System.out.println("liststtt"+quizes);
		 return ResponseEntity.ok(quizes);
	}
	
	@GetMapping("/getAllActiveQuizes")
	public ResponseEntity<List<Quiz>>getActiveQuizes(){
		
		 List<Quiz>quizes=quizService.getActiveQuiz();
		 System.out.println("liststtt"+quizes);
		 return ResponseEntity.ok(quizes);
	}
	
	

}
