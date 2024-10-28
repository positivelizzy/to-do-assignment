let addBtn = document.getElementById("add-task");
let toDo = document.getElementById("todo");
let todoMainContainer = document.getElementById("to-do-main-bx");


addBtn.addEventListener("click", function(){

    let toDoValue = toDo.value;
    let toDoText = document.createElement("p");
    toDoText.innerText = toDoValue
    
    let completeBtn = document.createElement("button");
    completeBtn.style.backgroundColor = "green"
    completeBtn.innerText = "Complete";

    let undoBtn = document.createElement("button");
    undoBtn.innerText = "Undo";
    undoBtn.style.display = "none";
    undoBtn.style.backgroundColor = "green";

    undoBtn.addEventListener("click", () => {
        completeBtn.style.display = "block";
        undoBtn.style.display = "none";
        toDoText.style.textDecoration = "none";
        toDoContainer.style.backgroundColor = "transparent"
    })

    completeBtn.addEventListener("click", function(){
        toDoText.style.textDecoration = "line-through";
        toDoText.style.textDecorationThickness = "3px";
        toDoContainer.style.backgroundColor = "#96ebbcda";

        undoBtn.style.display = "block";
        completeBtn.style.display = "none";
    })

    let deleteBtn = document.createElement("button");
    deleteBtn.style.backgroundColor = "red"
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function(){
        todoMainContainer.removeChild(toDoContainer);
    
        completeBtn.style.display = "none";

    })

    let toDoContainer = document.createElement("div");
    toDoContainer.classList.add("to-do-container");

    toDoContainer.appendChild(toDoText);
    toDoContainer.appendChild(completeBtn);
    toDoContainer.appendChild(undoBtn);
    toDoContainer.appendChild(deleteBtn);


    todoMainContainer.appendChild(toDoContainer);

    toDo.value = ""

})