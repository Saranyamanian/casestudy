
package com.example.assignment;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	UserRepository userRepository;

	// To add task

	@RequestMapping(method = RequestMethod.POST, value = "/Add/User")
	public boolean save(@RequestBody UserDetails details) {
		System.out.println("in");
		// int length = userRepository.findAll().size();
		userRepository.save(details);

		return true;

	}

	// To get the full task details

	@RequestMapping(method = RequestMethod.GET, value = "/Details/User")
	public List<UserDetails> all() {
		System.out.println("in details");
		List<UserDetails> details = userRepository.findAll();
		return details;

	}

	// To get the particular task details

	@RequestMapping(method = RequestMethod.GET, value = "/User/{employeeID}")
	public Optional<UserDetails> assignment(@PathVariable int employeeID) {
		System.out.println("in detailsssssss");
		System.out.println(employeeID);
		return userRepository.findById(employeeID);

	}
	
	 //To delete the data of particular user
    
    @RequestMapping(method=RequestMethod.DELETE, value="/Delete/User/{employeeID}")
	    public List<UserDetails> delete(@PathVariable int employeeID) {
		 System.out.println("in delete");
	        Optional<UserDetails> optcontact = userRepository.findById(employeeID);
	        UserDetails particularDetail = optcontact.get();
	        userRepository.delete(particularDetail);
	        return userRepository.findAll();

	       }


	// To edit particular task details

	@RequestMapping(method = RequestMethod.PUT, value = "/Update/User/{employeeID}")
	public UserDetails update(@PathVariable int employeeID, @RequestBody UserDetails userUpdate) {
		System.out.println("edit");
		System.out.println(employeeID);
		Optional<UserDetails> particularDetail = userRepository.findById(employeeID);
		UserDetails c = particularDetail.get();
		System.out.println(userUpdate.getEmployeeID() + "----" + userUpdate.getFirstName() + "--------"
				+ userUpdate.getLastName());

		if (userUpdate.getFirstName() != null)
			c.setFirstName(userUpdate.getFirstName());
		if (userUpdate.getLastName() != null)
			c.setLastName(userUpdate.getLastName());

		userRepository.save(c);
		return c;
	}

}
