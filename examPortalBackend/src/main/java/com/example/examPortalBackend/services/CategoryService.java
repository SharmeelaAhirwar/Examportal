package com.example.examPortalBackend.services;

import java.util.List;

import com.example.examPortalBackend.model.exam.Category;

public interface CategoryService {
	
	
	
	public Category addCategory(Category category);
	
	
	List<Category>getAllCategory();
	
	Category getCategeryById(Integer categoryId);
	
	
	Category updateCategory(Category category);
	
	 void deleteCategory(Integer catId);
	
	

}
