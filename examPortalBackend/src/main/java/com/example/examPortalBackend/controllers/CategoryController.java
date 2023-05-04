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
import com.example.examPortalBackend.services.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
	
	
	@Autowired
	private CategoryService categoryService;
	
	
	//add categoty
	
	@PostMapping("/add")
	public ResponseEntity<Category>addCategory(@RequestBody Category category){
		Category savedCategory=categoryService.addCategory(category);
		
		return ResponseEntity.ok(savedCategory);
	}
	
	//update-category
	@PutMapping("/update")
	public ResponseEntity<Category>updateCategory(@RequestBody Category category){
		Category updateCategory=categoryService.updateCategory(category);
		return ResponseEntity.ok(updateCategory);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Category>>getAllCategory(){
		List<Category>listCategories=categoryService.getAllCategory();
		return ResponseEntity.ok(listCategories);
	}
	
	@GetMapping("/getById/{catId}")
	public ResponseEntity<Category>getCategoryByID(@PathVariable Integer catId){
		Category category=categoryService.getCategeryById(catId);
		return ResponseEntity.ok(category);
	}
	
	
	@DeleteMapping("/deletById/{catId}")
	public ResponseEntity<?>deleteCategory(@PathVariable Integer catId){
		categoryService.deleteCategory(catId);
		return  new ResponseEntity<>(HttpStatus.OK);
	}
	
	

}
