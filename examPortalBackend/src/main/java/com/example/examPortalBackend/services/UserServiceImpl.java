package com.example.examPortalBackend.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.examPortalBackend.exceptions.UserFoundException;
import com.example.examPortalBackend.model.User;
import com.example.examPortalBackend.model.UserRole;
import com.example.examPortalBackend.repositery.RoleRepo;
import com.example.examPortalBackend.repositery.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private RoleRepo roleRepo;
	
	
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws UserFoundException {
		User check=userRepo.findByUserName(user.getUsername());
		
		if(check!=null)
//			System.out.println("user is already Prasent !!");
			throw new UserFoundException();
		
		else {
			for(UserRole ur:userRoles) {
				roleRepo.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			
			check=this.userRepo.save(user);
			
		}
		return check;
	}

	@Override
	public User updateUser(User user, int userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteUser(Integer userId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public User findByUserId(Integer userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> findAllUser() {
		List<User>listUser=this.userRepo.findAll();
		return listUser;
	}

	

}
