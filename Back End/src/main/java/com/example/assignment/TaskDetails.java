package com.example.assignment;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "addTask")
public class TaskDetails {	
	
	@Id
	public String task;
	
	private int  task_ID;

	public String priority;
	public String parentTask;
	public String startDate;
	public String endDate;
	
	public TaskDetails() {
		super();
	}	
	public TaskDetails(int task_ID, String task, String priority, String parentTask, String startDate, String endDate) {
		super();
		this.task_ID = task_ID;
		this.task = task;
		this.priority = priority;
		this.parentTask = parentTask;
		this.startDate = startDate;
		this.endDate = endDate;
		
	}
	public int getTask_ID() {
		return task_ID;
	}

	public void setTask_ID(int task_ID) {
		this.task_ID = task_ID;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getParentTask() {
		return parentTask;
	}

	public void setParentTask(String parentTask) {
		this.parentTask = parentTask;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
}
