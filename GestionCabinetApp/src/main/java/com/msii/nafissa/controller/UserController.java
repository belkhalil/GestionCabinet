package com.msii.nafissa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.msii.nafissa.entities.User;
import com.msii.nafissa.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	
	@RequestMapping(value="/save", method = RequestMethod.POST)
	public User addStudent(@RequestBody User e)
	{
		userService.save(e);
		System.out.println("etudiant id : "+e.getId());
		return e; 
		
		}
	
	/**
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value ="/findOne/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public User getOne(@PathVariable("id") Long id)
	{
		if(userService.getOne(id)!= null)
		return userService.getOne(id);
		else return null;
		}

	/**
	 * 
	 * @return
	 */
	@RequestMapping(value="/getAll",method = RequestMethod.GET)
	public List<User> getAll()
	{
		
		return userService.findAll();
		}
	/**
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/delete/{id}",method = RequestMethod.DELETE)
	public boolean delete(@PathVariable("id") Long id)
	{ 
	     userService.delete(id);
	     return true;
	}

	@RequestMapping(value="/update/{id}" ,method = RequestMethod.PUT)
	public User update(@PathVariable("id") Long id,@RequestBody User e)
	{
		userService.update(e, id);
		return e;
		}
	 

}
