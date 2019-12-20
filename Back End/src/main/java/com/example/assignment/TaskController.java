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

import com.example.assignment.TaskDetails;
import com.example.assignment.TaskRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {	
	
	@Autowired
	TaskRepository assignmentRepository;	
	
	//Adding task	
	@RequestMapping(method = RequestMethod.POST, value = "/AddTask")
	public boolean  save(@RequestBody TaskDetails details) {
		int length = assignmentRepository.findAll().size();
		details.setTask_ID(++length);
		assignmentRepository.save(details);
		return true;	
        }
	
	//Getting task details	
	@RequestMapping(method = RequestMethod.GET, value = "/TaskDetails")
	public List<TaskDetails> assignment() {
		List<TaskDetails> details = assignmentRepository.findAll();
		return details;	
        }

	//Getting the particular task detail	
	@RequestMapping(method = RequestMethod.GET, value = "/{task_ID}")
	public Optional<TaskDetails> assignment(@PathVariable int task_ID) {
		System.out.println("in detailsssssss");
		System.out.println(task_ID);
		  return assignmentRepository.findByTaskId(task_ID);	
	
        }
	
	//Deleting data
	 @RequestMapping(method=RequestMethod.DELETE, value="/Del/{id}") 
	 public List<TaskDetails> deleteTask(@PathVariable int id){
		 System.out.println("in del " + id);
		Optional<TaskDetails > detailss = assignmentRepository.findByTaskId(id);
		TaskDetails detail = detailss.get();
		 String id1 = String.valueOf(detail.getTask_ID());
                assignmentRepository.deleteById(id1);		
		 return assignmentRepository.findAll();		 
	 }
	
        //Deleting the data of particular user    
        @RequestMapping(method=RequestMethod.DELETE, value="/Delete/{task}")
        public List<TaskDetails> delete(@PathVariable String task) {
	       Optional<TaskDetails> optcontact = assignmentRepository.findById(task);
	       TaskDetails particularDetail = optcontact.get();
	       assignmentRepository.delete(particularDetail);
	       return assignmentRepository.findAll();

	 }
	
	//Editing particular task details	
	@RequestMapping(method=RequestMethod.PUT, value="/UpdateTask/{task_ID}")
         public TaskDetails update(@PathVariable  int task_ID, @RequestBody TaskDetails assignment) {
        Optional<TaskDetails> particularDetail = assignmentRepository.findByTaskId(task_ID);
        TaskDetails c = particularDetail.get();
        System.out.println(c.getEndDate()+c.getPriority()+c.getParentTask()+c.getTask_ID()+c.getStartDate());
        System.out.println(assignment.getPriority()+"----"+assignment.getParentTask());
        if(assignment.getTask() != null)
          c.setTask(assignment.getTask());
        if(assignment.getPriority() != null)
        c.setPriority(assignment.getPriority());
        if(assignment.getParentTask()!= null)
          c.setParentTask(assignment.getParentTask());
        if(assignment.getStartDate()!= null)
          c.setStartDate(assignment.getStartDate());
        if(assignment.getEndDate()!= null)
          c.setEndDate(assignment.getEndDate());
       
        assignmentRepository.save(c);
        return c;
       }
}
