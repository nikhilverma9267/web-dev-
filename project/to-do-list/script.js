const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list")
btn.addEventListener('click',()=>{
const value = inp.value;
if(value.trim() === "") return;

    todoBox.innerHTML += ` <div class="li">
               <h3>${value}</h3> 
               <div>
                <button class="btn edit" id="edit">EDIT</button>
                <button class="btn del" >DELETE</button>
               </div>
            </div>`  ;  // ``  -> iske andar ham dynamic javascript likh sakte hai 
    inp.value = "";
})