package com.example.examPortalBackend.controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.examPortalBackend.config.JwtUtil;
import com.example.examPortalBackend.model.JwtRequest;
import com.example.examPortalBackend.model.JwtResponse;
import com.example.examPortalBackend.model.User;
import com.example.examPortalBackend.services.UserDetailsServiceImpl;

@RestController
@CrossOrigin("*")

public class AuthenticatController {
	
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	
	
	
	@PostMapping("/genrate-token")
	public ResponseEntity<?>genrateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
		try {
			
			authenticate(jwtRequest.getUserName(), jwtRequest.getPassword());
			
		} catch (UsernameNotFoundException e) {
			e.printStackTrace();
			throw new Exception("user not found!");
			// TODO: handle exception
		}
		 UserDetails userDetails=this.userDetailsServiceImpl.loadUserByUsername(jwtRequest.getUserName());
		 
		 String token=this.jwtUtil.generateToken(userDetails);
		 
		 return ResponseEntity.ok(new JwtResponse(token));
	}
	private void authenticate(String username,String password) throws Exception {
		
		try {
			
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			
		} catch (DisabledException e) {
			throw new Exception("User_Disable"+e.getMessage());
		}
		
		catch (BadCredentialsException e) {
			throw new Exception("Invalid "+e.getMessage());
		}
		
	}
	
	
	//get current loginUser
	
	
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		return (User)this.userDetailsServiceImpl.loadUserByUsername(principal.getName());
	}

}
