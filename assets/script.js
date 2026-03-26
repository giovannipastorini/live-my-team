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

//Loop over the array of objects using a for loop
for (let i=0; i< teamMembers.length; i++){

  //select the element from the array using i as index of the item
  const member=teamMembers[i];
  //Access the object properties
  console.log(member);
  /* 
  console.log(member.name);
  console.log(member["img"]);
   */
  
  //Destructuring
  const {name, role, email, img}= member;

  //Created a list item using a DOM api
  const divEl=document.createElement("div");
  divEl.classList.add("col");

  const markupString=`
   <div class="card">
            <img src="./assets/${img}" alt="">
            <div class="card-body">
                <h2>${name}</h2>
                <div>${role}</div>
                <div>${email}</div>
            </div>
        </div>
  `
  divEl.innerHTML=markupString;
  
  //append the list item to the ul
  divList.appendChild(divEl);
  
}

