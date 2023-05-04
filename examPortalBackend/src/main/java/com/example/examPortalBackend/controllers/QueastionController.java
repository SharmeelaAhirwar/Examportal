package com.example.examPortalBackend.controllers;

import java.util.List;
import java.util.Map;
import java.util.Set;

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

import com.example.examPortalBackend.model.exam.Queastion;
import com.example.examPortalBackend.model.exam.Quiz;
import com.example.examPortalBackend.services.QueastionService;


@RestController
@RequestMapping("/queastion")
@CrossOrigin("*")
public class QueastionController {
	
	
	@Autowired
	private QueastionService queastionService;
	
	
	
	@PostMapping("/add")
	public ResponseEntity<Queastion>addQueastion(@RequestBody Queastion queastion){
		Queastion savedQueastion=queastionService.addQueastion(queastion);
		
		return ResponseEntity.ok(savedQueastion);
	}
	
	
	@PutMapping("/update")
	public ResponseEntity<Queastion>updateQueastion(@RequestBody Queastion queastion){
		Queastion updateQueastion=queastionService.updateQueastion(queastion);
		return ResponseEntity.ok(updateQueastion);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Queastion>>getAllQueastion(){
		List<Queastion>listCategories=queastionService.getAllQueastions();
		return ResponseEntity.ok(listCategories);
	}
	
	@GetMapping("/getById/{qId}")
	public ResponseEntity<Queastion>getQueastionByID(@PathVariable Integer qId){
		Queastion queastion=queastionService.getQueastionById(qId);
		return ResponseEntity.ok(queastion);
	}
	
	
	@DeleteMapping("/deletById/{qId}")
	public ResponseEntity<?>deleteQueastion(@PathVariable Integer qId){
		queastionService.deleteQueastion(qId);
		return  new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	@GetMapping("/getAllQueastionByQuizId/{quizId}")
	public ResponseEntity<?>getAllQueastionByQuizId(@PathVariable Integer quizId){
		
		Quiz quiz=new Quiz();
		quiz.setQid(quizId);
		Set<Queastion>allQueastionOfQuiz=this.queastionService.getQueastionOfQuizes(quiz);
		
		return  ResponseEntity.ok(allQueastionOfQuiz);
	}
	
//	evalQueastion
	
	@PostMapping("/eval")
	public ResponseEntity<?>evalQUiz(@RequestBody List<Queastion>queastions){
		System.out.println("queastion :  "
				+queastions);
		
		  double marksGot=0;
		  Integer correctAnswer=0;
		  Integer attempted=0;
		  
		  for(Queastion q:queastions) {
			  //single queastion
			  
			 
			  Queastion que=this.queastionService.getQueastionById(q.getQuesId());
			 
				  if(que.getAnswer().equals(q.getGivenAnswer()))
				    {
				    	correctAnswer++;
				    	double marksSingle=Double.parseDouble(queastions.get(0).getQuiz().getMaxMarks())/queastions.size();
				    	marksGot+=marksSingle;
				    }
				  
			  
		   
		    if(q.getGivenAnswer()!=null)
		    	attempted++;
		   
		  }
		  
		  Map<String, Object>map=Map.of("marksGot",marksGot,"correctAnswer",correctAnswer,"attempted",attempted);
		return ResponseEntity.ok(map);
		
		
	}
	

}
