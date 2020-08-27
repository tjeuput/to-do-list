// Select elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Clases names
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = "lineThrough";

//show todays date  
const options = {weekday: "short", month : "short", day: "numeric"};
const today  = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);
console.log(today);

//variables
let LIST,id;

//get item from localstorage
let data = localStorage.getItem("TODO");

//check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; //set the id to the last one in the list
    loadList(LIST);//load the list to the user interface
} else {
    //if data isn't empty
    LIST = [];
    id = 0;
}

function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });

}

//add to do function
function addToDo(toDo, id, done, trash){

    if(trash){return; }//if in the trash then prevent the code below (return)
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
     
    
    const item = `<li class= "item">
                        <i class = "fa ${DONE} co"
                        job ="complete" id = "${id}"></i>
                        <p class = "text ${LINE}">${toDo}</p>
                        <i class = "fa fa-trash-o de"
                        job = "delete" id = "${id}"></i></li>
    
    `;
    const position = "beforeend";
    list.insertAdjacentHTML(position,item);

}

//add item to list user when enter is pressed.
document.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        const toDo = input.value;
        //if input isn't empty
         if(toDo){
             addToDo(toDo, id, false, false);

             LIST.push({
                 name : toDo,
                 id : id,
                 done : false,
                 trash : false
             });
             //add item to localstorage (this code must be added where the LIST array updated)
             localStorage.setItem("TODO", JSON.stringify(LIST));
             console.log(localStorage);
             id++;
         }
         input.value ="";
         
    }
});

//complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

//remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

//clear the local storage
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();

})

//target the items created dynamically

addEventListener('click', function(event){

    const element = event.target; //return the clicked element inside list
  
    const elementJob = element.attributes.job.value; //complete or delete

    if(elementJob === null || elementJob === undefined){
        console.log('ntn');
    }

    if (elementJob == "complete"){
        completeToDo(element);
    } else if(elementJob == "delete"){
        removeToDo(element);
    }
    //add item to localstorage (this code must be added where the LIST array updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
})