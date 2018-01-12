package com.msii.nafissa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.msii.nafissa.entities.User;
/**
 * 
 * @author nacer
 *
 */
public interface UserRepository extends JpaRepository<User, Long> {

}
