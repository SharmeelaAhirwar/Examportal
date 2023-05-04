package com.example.examPortalBackend.exceptions;

public class UserNotFoundException extends Exception {
	public  UserNotFoundException() {
		super("userName is not found in DB !!");
	}
	
	public UserNotFoundException(String msg) {
		super(msg);
	}

}
