package com.example.examPortalBackend.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.examPortalBackend.model.Role;

public interface RoleRepo  extends JpaRepository<Role, Integer>{

}
