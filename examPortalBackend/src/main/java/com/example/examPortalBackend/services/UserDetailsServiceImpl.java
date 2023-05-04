package com.example.examPortalBackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.examPortalBackend.model.User;
import com.example.examPortalBackend.repositery.UserRepo;

@Service
public class UserDetailsServiceImpl  implements UserDetailsService{
	
	@Autowired
	private UserRepo userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user=this.userRepo.findByUserName(username);
		if(user==null) {
			System.out.println("username is not found");
			throw new UsernameNotFoundException("user not found !!");
		}
		return user;
	}

}
