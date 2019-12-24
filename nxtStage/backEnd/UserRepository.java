package com.example.assignment;

import java.util.Optional;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<UserDetails, String> {
	
	@Query("{ '_id' : ?0 }")
	Optional<UserDetails> findById(int employeeID);


}


