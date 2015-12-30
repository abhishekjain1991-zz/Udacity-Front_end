/*
This is empty on purpose! Your code to build the resume will go here.
 

 

 $("#main").append(bio.twitter);
 var length_of_skills_array = skills.length;
 $("#main").append(length_of_skills_array);
  bio.twitter = "twitter.com"
 //or 
 //bio["twitter"] = "twitter.com";
 */

 var bio = {
 	name : "Abhishek Jain",
 	role  : "Software Developer",
 	skills: ["C++","C","JAVA","HTML","CSS","JAVASCRIPT","PYTHON", "SWIG", "C#"],
 	contacts:{
 		mobile: "+14049519122",
 		email : "abhishek50000@gmail.com",
 		github: "www.github.com",
 		linkedin: "www.linkedin.com",
 		twitter : "www.twitter.com",
 		location:"San Jose"
 	},
 	welcomeMessage: "Hello",
 	biopic:"./images/fry.jpg"
 };


 var education={
 	schools:[
 		{
 			Name:"PVPPCOE",
 			Degree:"BE",
 			Major:"EXTC",
 			Dates :"2009-2013",
 			Location:"Mumbai, India",
 			relevant_course_work:[
 			"Computer programming 1 and 2",
 			"Micro-Controllers and Micro-Processors 1 and 2"
 			]
 		},
 		{
 			Name:"Georgia Tech",
 			Degree:"MS",
 			Major:"ECE",
 			Location:"Atlanta, USA",
 			Dates: "2013-2015",
 			relevant_course_work:[
 			"Advanced Operating systems",
 			"Advanced Computer Architecture",
 			"Advanced Programming Techniques for Engineering Applications",
 			"Mobile Apps and Services",
 			"Parallel and Distributed Computer Architecture",
 			"Computer Networks",
 			"GPU programming for video games",
 			"Analysis of massively parallel computer Architectures"
 			]
 		}
 	],
 	Online:[{"Udacity Front End Web Developer Nano-degree":"2015"}]

};

var work = {
	Cisco:["Software Engineer","June 2015-Present","San Jose","Working on the forwarding layer of the next-gen router Operating System, IOS-XR"],
	"Extreme Engineering projects" : ["CTO","August 2012 - July 2013","Mumbai","Small Start-up"],
	Ericsson:["Software Engineer", "August 2014-December 2014","San Jose","Intern"],
	GTRI: ["Software Engineer", "May 2014-August 2014","Atlanta","Intern"],
	Godrej: ["PLC programmer", "May2011-August 2012","Mumbai","Intern"]
};

var projects = {
	project_work : [
	{C:["Kernels to find Cache Characteristics",
	"Implementation of Danielson–Lanczos algorithm using Pthreads",
	"Distributed Two-Dimensional Discrete Fourier Transform",
	"Implementation of C++ vectors in C using templates",
	"Encryption/Decryption and breaking the RSA algorithm"
	],
	"C++":["Recoverable Virtual Memory","RPC Based Proxy Server",
	"Barrier Implementation and Synchronization",
	"User Level Thread Library",
	"Firewall simulation",
	"Simulator for Out-of-Order Superscalar processor using the Tomasulo Algorithm",
	"Cache Coherence Protocol Simulator",
	"Cache Simulator",
	"N-Queen Problem",
	"Implementation of Raja Raman and Wong clustering",
	"Object loader in OPEN GL",
	"Mandelbrot set based benchmark",
	"Study and simulation of application aware routing in Software Defined Networks ",
	"Object tracker",
	"Design of Humanoid and Drone Hybrid for Neutralizing Threats and Surveillance",
	"DTMF Controlled Home Automation",
	"Advanced Skateboard",
	"A Cell-Phone For Blind People",
	"Chain pulling detection and anti-tampering system for trains in India",
	"Coin based Mobile phone charger",
	"Automated Anti-Tampering System",
	"Development of pressure control systm for Brace treatment of Scoliosis"
	],
	Python:["Chutes and Ladders in Monte Carlo"],
	Java:["Distributed Batch Processing System"],
	Android:["The Silent Guardian"],
	"C#":["Holographic and Camouflage shaders","Post-processing shaders",
	"Study and Comparison of Shaders","Vertex lit and Pixel Lit shaders"],
	Others:["Introduction to Docker","G.P.U Pipeline implementation",
	"Pipelined Alu",
	"CRC Implementation and Circuit Optimization for High Speed operation",
	"Smart ALU"]}],
	"display":function(){
		for (project_language in projects["project_work"][0]){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project_language));
			for(index in projects["project_work"][0][project_language]){
				$(".project-entry:last").append(HTMLproject.replace("%data%",projects["project_work"][0][project_language][index]));
			}

		}
	}


};

function display_bio(){
 	$("#header").prepend(HTMLheaderRole.replace("%data%",bio["role"]));
 	$("#header").prepend(HTMLheaderName.replace("%data%",bio["name"]));
	for (contact in bio["contacts"]){
		var formatted_contact_detail = HTMLcontactGeneric.replace("%contact%",contact);
		formatted_contact_detail = formatted_contact_detail.replace("%data%",bio["contacts"][contact]);
		$("#topContacts").append(formatted_contact_detail);
	}

	if(bio["skills"].length >= 1){
		$("#header").append(HTMLbioPic.replace("%data%",bio["biopic"]));
		$("#header").append(HTMLskillsStart);
		HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio["welcomeMessage"]);
		$("#skills-h3").prepend(HTMLwelcomeMsg);
		var skill_count = 0;
		var formatted_skill;
		while (skill_count < bio["skills"].length){
			formatted_skill = HTMLskills.replace("%data%",bio["skills"][skill_count]);
			$("#skills").append(formatted_skill);
			skill_count++;
		}
	}
}

function display_work(){
	for (job in work){
		$("#workExperience").append(HTMLworkStart);
		var formatted_job = HTMLworkTitle.replace("%data%",work[job][0]) ;
		var formatted_employer = HTMLworkEmployer.replace("%data%",job);
		var formatted_employer_job = formatted_employer+formatted_job;
		var formatted_work_dates = HTMLworkDates.replace("%data%",work[job][1]);
		var formatted_work_location = HTMLworkLocation.replace("%data%",work[job][2]);
		var formatted_work_description = HTMLworkDescription.replace("%data%",work[job][3]);
		$(".work-entry:last").append(formatted_employer_job);
		$(".work-entry:last").append(formatted_work_dates);
		$(".work-entry:last").append(formatted_work_location);
		$(".work-entry:last").append(formatted_work_description);

	}
}


function display_education(){
		for (index in education["schools"]){
			$("#education").append(HTMLschoolStart);
			var formatted_school_name = HTMLschoolName.replace("%data%",education["schools"][index]["Name"]).replace("%data%",education["schools"][index]["Degree"]);
			var formatted_dates = HTMLworkDates.replace("%data%",education["schools"][index]["Dates"]);
			var formatted_major = HTMLschoolMajor.replace("%data%",education["schools"][index]["Major"]);
			var formatted_location = HTMLschoolLocation.replace("%data%",education["schools"][index]["Location"]);
			$(".education-entry:last").append(formatted_school_name);
			$(".education-entry:last").append(formatted_dates);
			$(".education-entry:last").append(formatted_major);
			$(".education-entry:last").append(formatted_location);
		}
}
$("#main").append(internationalizeButton);
function inName(){
    var finalName = bio["name"];
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
display_bio();
display_work();
projects.display();
display_education();
$("#mapDiv").append(googleMap);

 
 


 