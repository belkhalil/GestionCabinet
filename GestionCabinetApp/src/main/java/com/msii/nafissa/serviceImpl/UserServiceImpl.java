package com.msii.nafissa.serviceImpl;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msii.nafissa.entities.User;
import com.msii.nafissa.repository.UserRepository;
import com.msii.nafissa.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	private Logger logger;

	@Override
	public void save(User user) {
		try {
			userRepository.save(user);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}

	}

	@Override
	public int update(User user, Long idOldUser) {
		User oldUser = userRepository.findOne(idOldUser);
		if (user.getEmail() != null)
			oldUser.setEmail(user.getEmail());

		if (user.getFirstName() != null)
			oldUser.setEmail(user.getFirstName());

		if (user.getLastName() != null)
			oldUser.setEmail(user.getLastName());

		userRepository.saveAndFlush(oldUser);
		return 1;
	}

	@Override
	public void delete(Long id) {
		userRepository.delete(id);
	}

	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public User getOne(Long id) {
		// TODO Auto-generated method stub
		return userRepository.findOne(id);
	}

}
