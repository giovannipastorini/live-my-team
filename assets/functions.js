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