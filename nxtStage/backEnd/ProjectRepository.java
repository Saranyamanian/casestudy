package com.example.assignment;

import java.util.Optional;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ProjectRepository extends MongoRepository<ProjectDetails, String> {
	
	@Query("{ '_id' : ?0 }")
	Optional<ProjectDetails> findById(int task_ID);

	@Query("{ '_id' : ?0 }")
	Optional<ProjectDetails> findByProjectName(String projectName);

	@Query("{ 'projectID' : ?0 }")
	Optional<ProjectDetails> findByProjectId(int projectID);


}


