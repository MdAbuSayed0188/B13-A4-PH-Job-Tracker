let interviewlist = [];
let rejectedlist = [];
let currentTeb = "allJob";

// count list
let total = document.getElementById("total-job");
let total2 = document.getElementById("total-allJob");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

// card
const totalCard = document.getElementById("All-card");
const maincontainer = document.getElementById("main-jobContainer");

// section
const filterInerviewSection = document.getElementById("filterInerviewSection");
const filterRejectedSection = document.getElementById("filterRejectedSection");
const noJobAvailabol = document.getElementById("noJobAvailabol");

// buttons
const allJobsbtn = document.getElementById("allJob");
const interviewbtn = document.getElementById("interview");
const rejectedbtn = document.getElementById("rejected");

// dashboard calculation
function calculation() {
  const counts = {
    allJob: totalCard.children.length,
    interview: interviewlist.length,
    rejected: rejectedlist.length,
  };
  total.innerText = counts.allJob;
  interviewCount.innerText = counts.interview;
  rejectedCount.innerText = counts.rejected;

  total2.innerText = counts[currentTeb];
}

calculation();

// no job message
function checkNoJob(section, list) {
  if (list.length === 0) {
    noJobAvailabol.classList.remove("hidden");
    section.classList.add("hidden");
  } else {
    noJobAvailabol.classList.add("hidden");
    section.classList.remove("hidden");
  }
}

// tab toggle
function toggleStyle(id) {
  currentTeb = id;

  const containers = [filterInerviewSection, filterRejectedSection, totalCard];

  for (let section of containers) {
    section.classList.add("hidden");
  }

  noJobAvailabol.classList.add("hidden");

  if (id == "allJob") {
    totalCard.classList.remove("hidden");

    allJobsbtn.classList.add("bg-black", "text-white");
    allJobsbtn.classList.remove("bg-gray-300", "text-black");

    interviewbtn.classList.remove("bg-black", "text-white");
    interviewbtn.classList.add("bg-gray-300", "text-black");

    rejectedbtn.classList.remove("bg-black", "text-white");
    rejectedbtn.classList.add("bg-gray-300", "text-black");
  } else if (id == "interview") {
    filterInerviewSection.classList.remove("hidden");

    interviewbtn.classList.add("bg-black", "text-white");
    interviewbtn.classList.remove("bg-gray-300", "text-black");

    allJobsbtn.classList.remove("bg-black", "text-white");
    allJobsbtn.classList.add("bg-gray-300", "text-black");

    rejectedbtn.classList.remove("bg-black", "text-white");
    rejectedbtn.classList.add("bg-gray-300", "text-black");

    renderInterviewList();
    checkNoJob(filterInerviewSection, interviewlist);
  } else {
    filterRejectedSection.classList.remove("hidden");

    rejectedbtn.classList.add("bg-black", "text-white");
    rejectedbtn.classList.remove("bg-gray-300", "text-black");

    allJobsbtn.classList.remove("bg-black", "text-white");
    allJobsbtn.classList.add("bg-gray-300", "text-black");

    interviewbtn.classList.remove("bg-black", "text-white");
    interviewbtn.classList.add("bg-gray-300", "text-black");

    renderRejectedList();
    checkNoJob(filterRejectedSection, rejectedlist);
  }
  calculation();
}

toggleStyle(currentTeb);

// interview / rejected click
maincontainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parenNode = event.target.parentNode.parentNode;

    const companyName = parenNode.querySelector(".companyName").innerText;
    const jobName = parenNode.querySelector(".jobName").innerText;
    const advanTage = parenNode.querySelector(".advanTage").innerText;
    const notes = parenNode.querySelector(".notes").innerText;

    parenNode.querySelector(".applied").innerText = "INTERVIEW";

    const cardInfo = {
      companyName,
      jobName,
      advanTage,
      applied: "INTERVIEW",
      notes,
    };

    const companyExist = interviewlist.find(
      (item) => item.companyName === cardInfo.companyName,
    );

    if (!companyExist) {
      interviewlist.push(cardInfo);
    }

    rejectedlist = rejectedlist.filter(
      (item) => item.companyName !== cardInfo.companyName,
    );

    calculation();

    if (currentTeb == "interview") {
      renderInterviewList();
    }

    if (currentTeb == "rejected") {
      renderRejectedList();
    }
  } else if (event.target.classList.contains("rejected-btn")) {
    const parenNode = event.target.parentNode.parentNode;

    const companyName = parenNode.querySelector(".companyName").innerText;
    const jobName = parenNode.querySelector(".jobName").innerText;
    const advanTage = parenNode.querySelector(".advanTage").innerText;
    const notes = parenNode.querySelector(".notes").innerText;

    parenNode.querySelector(".applied").innerText = "REJECTED";

    const cardInfo = {
      companyName,
      jobName,
      advanTage,
      applied: "REJECTED",
      notes,
    };

    const companyExist = rejectedlist.find(
      (item) => item.companyName === cardInfo.companyName,
    );

    if (!companyExist) {
      rejectedlist.push(cardInfo);
    }

    interviewlist = interviewlist.filter(
      (item) => item.companyName !== cardInfo.companyName,
    );

    calculation();

    if (currentTeb == "rejected") {
      renderRejectedList();
    }

    if (currentTeb == "interview") {
      renderInterviewList();
    }
  }
});

// interview render
function renderInterviewList() {
  filterInerviewSection.innerHTML = "";

  for (let inter of interviewlist) {
    let card = document.createElement("div");

    card.innerHTML = `
<div id="card" class="card bg-base-100 shadow-sm mb-6 p-4 sm:p-8">

<div class="flex justify-between">
<h4 class="companyName text-2xl sm:text-3xl font-bold">
${inter.companyName}
</h4>

<button onclick="deleteCard(event)" class="delete rounded-2xl sm:rounded-4xl border-2 border-y-blue-400 py-1 sm:py-2 px-3 sm:px-5">
<img class="size-3 sm:size-5 pointer-events-none" src="./delete.png"/>
</button>

</div>

<p class="jobName mb-2 text-gray-500">${inter.jobName}</p>

<p class="advanTage mb-2 text-gray-500">
${inter.advanTage}
</p>

<div>
<button class="applied font-bold border-2 border-amber-500 p-1 state text-amber-500">
${inter.applied}
</button>
</div>

<p class="notes my-2 text-gray-900">
${inter.notes}
</p>

<div class="flex gap-5">

<button class="interview-btn rounded-2xl font-bold border-2 border-green-800 text-green-800 px-2 sm:px-4 py-1 sm:py-2">
INTERVIEW
</button>

<button class="rejected-btn border-2 rounded-2xl font-bold border-red-600 text-red-600 px-2 sm:px-4 py-1 sm:py-2">
REJECTED
</button>

</div>

</div>
`;

    filterInerviewSection.appendChild(card);
  }

  checkNoJob(filterInerviewSection, interviewlist);
}

// rejected render
function renderRejectedList() {
  filterRejectedSection.innerHTML = "";

  for (let reject of rejectedlist) {
    let card = document.createElement("div");

    card.innerHTML = `
<div id="card" class="card bg-base-100 shadow-sm mb-6 p-4 sm:p-8">

<div class="flex justify-between">

<h4 class="companyName text-2xl sm:text-3xl font-bold">
${reject.companyName}
</h4>

<button onclick="deleteCard(event)" class="delete rounded-2xl sm:rounded-4xl border-2 border-y-blue-400 py-1 sm:py-2 px-3 sm:px-5">
<img class="size-3 sm:size-5 pointer-events-none" src="./delete.png"/>
</button>

</div>

<p class="jobName mb-2 text-gray-500">${reject.jobName}</p>

<p class="advanTage mb-2 text-gray-500">
${reject.advanTage}
</p>

<div>
<button class="applied font-bold border-2 border-amber-500 p-1 state text-amber-500">
${reject.applied}
</button>
</div>

<p class="notes my-2 text-gray-900">
${reject.notes}
</p>

<div class="flex gap-5">

<button class="interview-btn rounded-2xl font-bold border-2 border-green-800 text-green-800 px-2 sm:px-4 py-1 sm:py-2">
INTERVIEW
</button>

<button class="rejected-btn border-2 rounded-2xl font-bold border-red-600 text-red-600 px-2 sm:px-4 py-1 sm:py-2">
REJECTED
</button>

</div>

</div>
`;

    filterRejectedSection.appendChild(card);
  }

  checkNoJob(filterRejectedSection, rejectedlist);
}

// delete card
function deleteCard(event) {
  const card = event.target.closest("#card");

  const companyName = card.querySelector(".companyName").innerText;

  interviewlist = interviewlist.filter(
    (item) => item.companyName !== companyName,
  );

  rejectedlist = rejectedlist.filter(
    (item) => item.companyName !== companyName,
  );

  card.remove();

  calculation();

  if (currentTeb == "interview") {
    renderInterviewList();
  }

  if (currentTeb == "rejected") {
    renderRejectedList();
  }
  if (total.innerText == 0) {
    noJobAvailabol.classList.remove("hidden");
  }
}
deleteCard();
