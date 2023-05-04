package com.example.examPortalBackend;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.examPortalBackend.exceptions.UserFoundException;
import com.example.examPortalBackend.model.Role;
import com.example.examPortalBackend.model.User;
import com.example.examPortalBackend.model.UserRole;
import com.example.examPortalBackend.services.UserService;

@SpringBootApplication
public class ExamPortalBackendApplication implements CommandLineRunner {
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		
		
		SpringApplication.run(ExamPortalBackendApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		
		try {
		
		User user=new User();
		user.setFirstName("sharmeela");
		user.setLastName("ahirwar");
		user.setEmail("sharmeela@gmail.com");
		user.setPhoneNumber("12345");
		user.setProfile("default.png");
		user.setUserName("sharmeela123");
		user.setPassword(bCryptPasswordEncoder.encode("abc"));
		
		Role role=new Role();
		role.setRoleId(1);
		role.setRoleName("ADMIN");
		
		Set<UserRole>userRoleSet=new HashSet<>();
		
		UserRole userRole=new UserRole();
		userRole.setRole(role);
		userRole.setUser(user);
		userRoleSet.add(userRole);
		
		User user1=this.userService.createUser(user, userRoleSet);
		
		System.out.println(user1.getUsername());
		}
		catch ( UserFoundException e) {
			e.printStackTrace();
			
		}
		
		
		
		
	}

}
