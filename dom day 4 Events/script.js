const btn = document.querySelector('button');
// const div = document.querySelector('div');
const main = document.querySelector('main');
const body = document.body;



  //   btn.addEventListener('click' , (events) => {  // event listener is higher order function jo click events pe chalta ahai 
    // click me sare pointerEvents aate hai
    
        
    
   //   console.log(events);
    

//  })
//  btn.addEventListener('dblclick' , (events) =>{
       //   console.log(events);  ///  mouse events honge 
  //  });

// btn.addEventListener('click' , (events) =>{
  //    console.log("btn trigered");  // key board events
  //  }, true);

// div.addEventListener('click' , (events) =>{
//       console.log("div trigered");  // key board events
//   },false);
  //  main.addEventListener('click' , (events) =>{
       //  console.log("main  trigered");  // key board events
  //  }, true);
  // body.addEventListener('click' , (events) =>{
     //  console.log("body trigered");  // key board events
  //  }, true);


// EVEN propogation ---- event traversal -> hamare event kaise travel kar
//  rhe hai



const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
form.addEventListener("submit",(events) => {            // form me submit event lagta hai 
 events.preventDefault();   // form ko page reload karne se rokti hai 
  console.log(events); // target har event me common hota hai target ke andar hintag hota hai
  
  
  console.log(events.target[0].value);
   
  //console.log(name.value);
  console.log(email.value);
  
  
});
