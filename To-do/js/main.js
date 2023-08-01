const inputBox = document.getElementById("todo-input");
const listContainer = document.getElementById("todo-list");

function addTask(){
    if(inputBox.value == ""){
        alert("Write your task!");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("stored-data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("stored-data");
}
showTask();


