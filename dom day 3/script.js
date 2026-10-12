//console.log("hello");
// attributes and properties
   //-setAttribute , getAttribute, removeAttribute, hasAttribute ;
   // with data -* name 
   // input.value(property,current state ) VS input.getAttribute("value")  (attribute, initial state)

/*const h3 = document.querySelector("#id1");

 let res =   h3.getAttribute("class");
 h3.setAttribute("width","200")
 console.log(res);

 h3.removeAttribute("class")  //class atrribute hata dega 
 console.log(h3.hasAttribute("class")); // ye batayega ki attribute hai ki nhi

 
 const userCard = document.querySelector('#user_card')
console.log(userCard.getAttribute('data-user-id'));

console.log(userCard.dataset.userId = "678");
*/
  

// input.value(property,current state ) VS input.getAttribute("value")  (attribute, initial state)

  //const inp = document.querySelector("input");
//const btn = document.querySelector("button");


//btn.addEventListener("click" , () => {
//console.log(inp.value);

//});







// creating inserting and removing elements from DOM 

// insertion ----
//  appendChild -- old 
//   append--- new  multiple element ko insert kaer sakta hAI

const main = document.querySelector('main');
let footer = document.createElement('footer')  // 'andar tag ayega'
console.log(footer);
// yaha rak create ho chuka hai ab ham use insert karenge 
//document.appendChild(footer);/// yaha pe body me footer insert ho rha hai 
main.appendChild(footer) //yaha pe main ke andar insert ho rha hai 

const span = document.createElement('span');
main.appendChild(span);
main.append(footer,span);


//  insertBefore -- matlab isse pahele 
// prepend -- sabse pahele add kar do 
// after -- uske baad add kar doi   after before children pe kamm karte hai 



// replace -- parent pe kam karta hai ye cheeje basdal deta hai 
