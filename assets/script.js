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
const ulEl= document.getElementById("list");

//Loop over the array of objects using a for loop
for (let i=0; i< teamMembers.length; i++){

  //select the element from the array using i as index of the item
  const member=teamMembers[i];
  //Access the object properties
  console.log(member);
  console.log(member.name);
  console.log(member["img"]);
  
  
  //Created a list item using a DOM api
  const liEl=document.createElement("li");

  /* liEl.innertext=member.name; */
  /* liEl.textContent=member.name;  */
   liEl.innerHTML=member.name;

  console.log(liEl);
  
  //append the list item to the ul
  ulEl.appendChild(liEl);
  
}

