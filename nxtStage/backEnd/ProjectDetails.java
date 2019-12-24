package com.example.assignment;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "projectDetails")
public class ProjectDetails {

	
	@Id
	public String projectName;
	private int projectID;
	public String priority;
	public String startDate;
	public String endDate;
	public String managerName;
	
	public ProjectDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public ProjectDetails(int projectID, String projectName, String priority, String startDate, String endDate,
			String managerName) {
		super();
		this.projectID = projectID;
		this.projectName = projectName;
		this.priority = priority;
		this.startDate = startDate;
		this.endDate = endDate;
		this.managerName = managerName;
	}


	public int getProjectID() {
		return projectID;
	}

	public void setProjectID(int projectID) {
		this.projectID = projectID;
	}

	
	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
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

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}
	
}
