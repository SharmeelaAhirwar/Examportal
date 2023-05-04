package com.example.examPortalBackend.repositery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.examPortalBackend.model.User;


public interface UserRepo extends JpaRepository<User, Integer> {
	
	public User findByUserName(String userName);

}
