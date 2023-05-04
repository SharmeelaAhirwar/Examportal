package com.example.examPortalBackend.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="roles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor 
public class Role {
	
	
	@Id
	private Integer roleId;
	
	private String roleName;
	

	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "role")
	
	private Set<UserRole>userRoles=new HashSet<UserRole>();

}
