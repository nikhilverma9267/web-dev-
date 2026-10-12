//console.log(document.childNodes);
//document print karne pe pura html body aur sath me aur bhi object par jab document.chilnodes kartye hai to nodlist return hoti 

//const { log10 } = require("chart.js/helpers");

// hoti hai jisme doctype aur html hote hai bss 
     //const body = document.body;
//console.log(body.childNodes );// isme nodelist 4 return hoga jiske andar text main text script hoga 
//console.log(body.children);//html collection ayega 
// childeren me sirf children milenge  
//const main = document.querySelector("main");
//console.log(main.childNodes);
//console.log(main.children);

// ab ham h1 ko change karenge 
     //const h1 = document.querySelector("h1");


       //console.log(h1);

       ///h1.textContent = "hey mai dom se change ho chuka hu ";

// textContent -> only change or update text
//innertext -> kisi bhi chidtren ke element ke andar change kar sakta hai 
//innerHTML -> string ke andar koi tag pass hoga tab ye use tag ki tarah hi treat karega par un dono me is tarah nhi tha 



//   css ko change karna 

      ///body.style.color="red"
      //h1.style.fontSize = "25px"


// janna hai h1 ke upar kon si class lagi hai 

//kai sare h1 hone pe hamesa query selector first element ko select karega 


// is my h1 has some class
///const isclass = h1.classList.contains("heading");
   //console.log(isclass);
// i have to change or replase my clas 
     //h1.classList.replace("heading","newHead")


// i have to toggle my class 
     //h1.classList.toggle("heading");


    //const div = document.querySelector("#head1");
      //div.classList.add("#box");
//uski class me newHead heading #box teeno rehenge 



/// Event ko add karna 
// bulb wala project


const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");
/*
let  flag = true;


btn.addEventListener('click',function(){
     //console.log("i am triggered");
     // ye hamara blocked scope hai ye baar baar chalega baki sab ek baar 
     // hi chalega 
      // bulb.style.backgroundColor = "yellow";
         //btn.textContent = "off";
      
         if(flag){
          bulb.style.backgroundColor = "yellow";
          btn.textContent = "OFF";
          flag = false;
         }else{
          bulb.style.backgroundColor = "Transparent";
          btn.textContent = "ON";
          flag = true;
         }
});
*/



// ab ham classe ki help se banayenge 

btn.addEventListener('click',function(){
    // bulb.classList.add('lightUp')    isse lag jayegi par hategi nhi isi ko sahi katrne ke liye toggle ka use karenge 
   if(bulb.classList.toggle('lightUp')){
       btn.textContent = "OFF";
   }else{
     btn.textContent="ON";
   }
   
   
    
})

