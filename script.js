let currentTeb = "allJob";
// count list
let total = document.getElementById("total-job");
let total2 = document.getElementById("total-allJob");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
// card
const totalCard = document.getElementById("All-card");
const maincontainer = document.getElementById("main-jobContainer");
//  section
const filterInerviewSection = document.getElementById("filterInerviewSection");
const filterRejectedSection = document.getElementById("filterRejectedSection");
const noJobAvailabol = document.getElementById("noJobAvailabol");

//
const allJobsbtn = document.getElementById("allJob");
const interviewbtn = document.getElementById("interview");
const rejectedbtn = document.getElementById("rejected");



function toggleStyle(id) {
  
  
  if (id == "allJob") {
   
    
    allJobsbtn.classList.add("bg-black", "text-white");
    allJobsbtn.classList.remove("bg-gray-300", "text-black");
    rejectedbtn.classList.add("bg-gray-300", "text-black");
    interviewbtn.classList.add("bg-gray-300", "text-black");
    interviewbtn.classList.remove("bg-black", "text-white");
    rejectedbtn.classList.remove("bg-black", "text-white");
    
  } else if (id == "interview") {
   
    
    interviewbtn.classList.add("bg-black", "text-white");
    interviewbtn.classList.remove("bg-gray-300", "text-black");
    allJobsbtn.classList.remove("bg-black", "text-white");
    allJobsbtn.classList.add("bg-gray-300", "text-black");
    rejectedbtn.classList.remove("bg-black", "text-white");
    rejectedbtn.classList.add("bg-gray-300", "text-black");
    
  } else {
    
    allJobsbtn.classList.remove("bg-black", "text-white");
    rejectedbtn.classList.add("bg-black", "text-white");
    rejectedbtn.classList.remove("bg-gray-300", "text-black");
    allJobsbtn.classList.add("bg-gray-300", "text-black");
    interviewbtn.classList.remove("bg-black", "text-white");
    interviewbtn.classList.add("bg-gray-300", "text-black");
    
  }
}
toggleStyle(currentTeb);

