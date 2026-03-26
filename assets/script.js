const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//select the DOM node
const divList= document.getElementById("list");

//chiamo la funzione "RENDERTEAMS"
renderTeams(teamMembers, divList);


const formEl= document.querySelector("form");


formEl.addEventListener("submit", function(e) {

  e.preventDefault()
  
  //svuoto la lista html
  divList.innerHTML="";

  const newMember= {
  name: document.getElementById("name").value,
  role: document.getElementById("role").value,
  email: document.getElementById("email").value,
  img: "img/"+document.getElementById("image").value
   }

   //aggiorno l'array di oggetti
   teamMembers.unshift(newMember);

   //chiamo la funzione "RENDERTEAMS"
   renderTeams(teamMembers, divList);

   /* console.log(teamMembers); */
   
   //reset del form
   formEl.reset();

})

