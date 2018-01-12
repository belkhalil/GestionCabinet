package com.msii.nafissa.service;

import java.util.List;

import com.msii.nafissa.entities.User;

public interface UserService {

	public void save(User user);
	public User getOne(Long id);
	public int update(User user, Long idOldUser);

	public void delete(Long id);

	public List<User> findAll();
}
