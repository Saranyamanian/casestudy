package com.example.assignment;

import java.util.Optional;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TaskRepository extends MongoRepository<TaskDetails, String> {
	
	@Query("{ '_id' : ?0 }")
	Optional<TaskDetails> findById(int task_ID);
	
	@Query("{ 'task_ID' : ?0 }")
	Optional<TaskDetails> findByTaskId(int id);

}


