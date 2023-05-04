package com.example.examPortalBackend.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.examPortalBackend.services.UserDetailsServiceImpl;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;

	@Autowired
	private JwtUtil jwtUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		final String requestHeaderToken = request.getHeader("Authorization");
		System.out.println(requestHeaderToken);

		String username = null;
		String jwtToken = null;

		if (requestHeaderToken != null && requestHeaderToken.startsWith("Bearer")) {

			try {
				jwtToken = requestHeaderToken.substring(7);
				username = this.jwtUtil.extractUsername(jwtToken);

			} catch (ExpiredJwtException e) {
				System.out.println("jwt token has expired ");
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			System.out.println("Invalid token !!");
		}

		if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			final UserDetails userDetails = this.userDetailsServiceImpl.loadUserByUsername(username);

			if (this.jwtUtil.validateToken(jwtToken, userDetails)) {

//				 token is valid

				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());

				usernamePasswordAuthenticationToken
						.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}

		}
		else {
			System.out.println("token invalid !");
		}
		filterChain.doFilter(request, response);

	}

}
