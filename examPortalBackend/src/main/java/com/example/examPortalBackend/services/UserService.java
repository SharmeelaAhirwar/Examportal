package com.example.examPortalBackend.services;

import java.util.List;
import java.util.Set;

import com.example.examPortalBackend.exceptions.UserFoundException;
import com.example.examPortalBackend.model.User;
import com.example.examPortalBackend.model.UserRole;

public interface UserService {
	
	
	//create
	
	User createUser(User user,Set<UserRole>userRoles) throws UserFoundException;
	
	User updateUser(User user,int userId);
	
	void deleteUser(Integer userId);
	
	User findByUserId(Integer userId);
	
	List<User>findAllUser();
	

}
