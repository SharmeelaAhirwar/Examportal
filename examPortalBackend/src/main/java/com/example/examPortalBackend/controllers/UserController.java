package com.example.examPortalBackend.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.examPortalBackend.exceptions.UserFoundException;
import com.example.examPortalBackend.model.Role;
import com.example.examPortalBackend.model.User;
import com.example.examPortalBackend.model.UserRole;
import com.example.examPortalBackend.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	
	@Autowired
	private UserService userService;
	
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	
	@PostMapping("/create")
	public User user(@RequestBody User user) throws UserFoundException {
		
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		
		Set<UserRole>userRole=new HashSet<UserRole>();
		Role role=new Role();
		role.setRoleId(2);
		role.setRoleName("NORMAL");
		
		UserRole ur=new UserRole();
		ur.setRole(role);
		ur.setUser(user);
		userRole.add(ur);
		User userS=this.userService.createUser(user, userRole);
		
		return userS;
		
	}
	
	@GetMapping("/getAllUsers")
	public List<User>getAllUser(){
		
		List<User>users=this.userService.findAllUser();
		return users;
		
	}
	

}
