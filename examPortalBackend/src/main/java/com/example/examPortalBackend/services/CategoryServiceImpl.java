package com.example.examPortalBackend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.examPortalBackend.model.exam.Category;
import com.example.examPortalBackend.repositery.CategoryRepo;


@Service
public class CategoryServiceImpl implements CategoryService {
	
	
	@Autowired
	CategoryRepo categoryRepo;

	@Override
	public Category addCategory(Category category) {
		
		return categoryRepo.save(category);
	}

	@Override
	public List<Category> getAllCategory() {
		List<Category>categories=categoryRepo.findAll();
		return categories;
	}

	@Override
	public Category getCategeryById(Integer categoryId) {
		
		return categoryRepo.findById(categoryId).get();
	}

	@Override
	public Category updateCategory(Category category) {
		
		return categoryRepo.save(category);
	}

	@Override
	public void deleteCategory(Integer catId) {
		categoryRepo.deleteById(catId);
		
	}

}
