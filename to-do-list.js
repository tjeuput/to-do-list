// Select elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = "lineThrough";

//show todays date  
const options = { weekday : "long", month : "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDataString("en-US", options);

//add to do function
function addTodDo(toDo){
    
    const item = `<li class= "item">
    <i class = "fa fa-circle-thin co"
    job="complete" id = "0"></i>
    <p class = "text"> Drink Coffee </p>
    <i class = "fa fa-trash-o de"
    job = "delete" id = "0"></li>
    `;

    const position = "beforeend";

    list.insertAdjacentElement(position,item);
}

addTodDo("drink coffee");