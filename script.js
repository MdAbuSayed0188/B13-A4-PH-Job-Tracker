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

function calculation() {
  total.innerText = totalCard.children.length;
  interviewCount.innerText = filterInerviewSection.children.length;
  rejectedCount.innerText = filterRejectedSection.children.length;
}
calculation();

function toggleStyle(id) {
  const containers = [filterInerviewSection, filterRejectedSection, totalCard];
  for (let section of containers) {
    section.classList.add("hidden");
  }
  noJobAvailabol.classList.add("hidden");
  if (id == "allJob") {
    totalCard.classList.remove("hidden");
    if (totalCard.children.length < 1) {
      noJobAvailabol.classList.remove("hidden");
    }
    allJobsbtn.classList.add("bg-black", "text-white");
    allJobsbtn.classList.remove("bg-gray-300", "text-black");
    rejectedbtn.classList.add("bg-gray-300", "text-black");
    interviewbtn.classList.add("bg-gray-300", "text-black");
    interviewbtn.classList.remove("bg-black", "text-white");
    rejectedbtn.classList.remove("bg-black", "text-white");
    function allcount() {
      total2.innerText = totalCard.children.length;
    }
    allcount();
  } else if (id == "interview") {
    filterInerviewSection.classList.remove("hidden");
    if (filterInerviewSection.children.length < 1) {
      noJobAvailabol.classList.remove("hidden");
    }
    interviewbtn.classList.add("bg-black", "text-white");
    interviewbtn.classList.remove("bg-gray-300", "text-black");
    allJobsbtn.classList.remove("bg-black", "text-white");
    allJobsbtn.classList.add("bg-gray-300", "text-black");
    rejectedbtn.classList.remove("bg-black", "text-white");
    rejectedbtn.classList.add("bg-gray-300", "text-black");
    function allcount() {
      total2.innerText = filterInerviewSection.children.length;
    }
    allcount();
  } else {
    filterRejectedSection.classList.remove("hidden");
    if (filterRejectedSection.children.length < 1) {
      noJobAvailabol.classList.remove("hidden");
    }
    allJobsbtn.classList.remove("bg-black", "text-white");
    rejectedbtn.classList.add("bg-black", "text-white");
    rejectedbtn.classList.remove("bg-gray-300", "text-black");
    allJobsbtn.classList.add("bg-gray-300", "text-black");
    interviewbtn.classList.remove("bg-black", "text-white");
    interviewbtn.classList.add("bg-gray-300", "text-black");
    function allcount() {
      total2.innerText = filterRejectedSection.children.length;
    }
    allcount();
  }
}
toggleStyle(currentTeb);

maincontainer.addEventListener("click", function (event) {
  const clickElement = event.target;
  const card = clickElement.closest(".card");
  const cardParent = card.parentNode;

  const status = card.querySelector(".state");

  if (clickElement.classList.contains("interview-btn")) {
    filterInerviewSection.appendChild(card);
    status.innerText = "INTEVIEW";
    calculation();
  } else if (clickElement.classList.contains("rejected-btn")) {
    filterRejectedSection.appendChild(card);
    status.innerText = "REJECTED";
    calculation();
  } else if (clickElement.classList.contains("delete")) {
    cardParent.removeChild(card);

    calculation();
  }
});