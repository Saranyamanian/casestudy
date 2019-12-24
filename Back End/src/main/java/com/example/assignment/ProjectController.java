
package com.example.assignment;

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
public class ProjectController {
	
	
	@Autowired
	ProjectRepository projectRepository;

	
	
	//To add task
	
	@RequestMapping(method = RequestMethod.POST, value = "/Add/Project")
	public boolean  save(@RequestBody ProjectDetails details) {
		System.out.println("in");
		int length = projectRepository.findAll().size();
		details.setProjectID(++length);
		projectRepository.save(details);
		
		return true;
	
        }
	
	//To get the full task details
	
	@RequestMapping(method = RequestMethod.GET, value = "/Details/Project")
	public List<ProjectDetails> assignment() {
		System.out.println("in details");
		List<ProjectDetails> details = projectRepository.findAll();
		return details;
	
        }

	
 //To delete the data of particular user
    
    @RequestMapping(method=RequestMethod.DELETE, value="/Delete/Project/{projectName}")
	    public List<ProjectDetails> delete(@PathVariable String projectName) {
		 System.out.println("in delete");
		 System.out.println(projectName);
	        Optional<ProjectDetails> optcontact = projectRepository.findByProjectName(projectName);
	        ProjectDetails particularDetail = optcontact.get();
	        projectRepository.delete(particularDetail);
	        return projectRepository.findAll();

	       }
	//To get the particular task details
	
	@RequestMapping(method = RequestMethod.GET, value = "/Project/{projectID}")
	public Optional<ProjectDetails> assignment(@PathVariable int projectID) {
		System.out.println("in detailsssssss");
		System.out.println(projectID);
		  return projectRepository.findByProjectId(projectID);
		
	
        }
	
	//To edit particular task details
	
	@RequestMapping(method=RequestMethod.PUT, value="/Project/Update/{projectID}")
    public ProjectDetails update(@PathVariable  int projectID, @RequestBody ProjectDetails projectUpdate) {
	System.out.println("edit");
	System.out.println(projectID);
//        Optional<ProjectDetails> particularDetail = projectRepository.findById(projectID);
	  Optional<ProjectDetails> particularDetail = projectRepository.findByProjectId(projectID);
        ProjectDetails c = particularDetail.get();
        	System.out.println(c.getEndDate()+c.getPriority()+c.getStartDate());
        if(projectUpdate.getProjectName()!= null)
          c.setProjectName(projectUpdate.getProjectName());
        if(projectUpdate.getManagerName() != null)
        c.setManagerName(projectUpdate.getManagerName());
        if(projectUpdate.getPriority() !=null){
        	c.setPriority(projectUpdate.getPriority());
        }
        if(projectUpdate.getStartDate()!= null)
          c.setStartDate(projectUpdate.getStartDate());
        if(projectUpdate.getEndDate()!= null)
          c.setEndDate(projectUpdate.getEndDate());
       
        projectRepository.save(c);
        return c;
       }


}
