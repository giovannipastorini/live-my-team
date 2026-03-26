function getMarkup(member){
  //Destructuring
  const {name, role, email, img}= member;

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
  return markupString;
}


//RenderTeams
function renderTeams(teamMembers, divList){

    //Loop over the array of objects using a for loop

    for (let i=0; i< teamMembers.length; i++){

    //select the element from the array using i as index of the item
    const member=teamMembers[i];
    //Access the object properties
    console.log(member);

    //Created a list item using a DOM api
    const divEl=document.createElement("div");
    divEl.classList.add("col");

    markupString= getMarkup(member); //getMarkup is inside functions.js
    
    divEl.innerHTML=markupString;
    console.log(divEl);
    
    //append the list item to the ul
    divList.appendChild(divEl);
    
    }
}