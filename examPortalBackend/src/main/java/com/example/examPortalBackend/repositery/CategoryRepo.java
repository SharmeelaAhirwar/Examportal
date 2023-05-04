package com.example.examPortalBackend.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.examPortalBackend.model.exam.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer> {

}
