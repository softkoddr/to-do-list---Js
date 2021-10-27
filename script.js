const inputBox = document.querySelector(".inputField input")
const addBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".todoList")
const pendingTask = document.querySelector(".pendingTasks")
const delBtn = document.querySelector(".footer button")

inputBox.onkeyup =()=>{
    let userEnteredValue = inputBox.value;
    if(userEnteredValue.trim() !=0){
        addBtn.classList.add("active")
    }else{
        addBtn.classList.remove("active")
    }
}

showList();

addBtn.onclick = () => {
    let UserEnteredValue = inputBox.value;
    let getLocalStorageValue = localStorage.getItem("To Do List")
    if(getLocalStorageValue == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageValue);
    }
    listArray.push(UserEnteredValue)
    localStorage.setItem("To Do List", JSON.stringify(listArray));
    showList();
    addBtn.classList.remove("active")
}

function showList(){
    let getLocalStorageValue = localStorage.getItem("To Do List")
    if(getLocalStorageValue == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageValue);
    }
    pendingTask.innerHTML = listArray.length;
    if(listArray.length > 0){
        delBtn.classList.add("active")
    }else{
        delBtn.classList.remove("active")
    }
    let newList = "";
    listArray.forEach((element, index) => {
        newList += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newList; 
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStorageValue = localStorage.getItem("To Do List");
    listArray = JSON.parse(getLocalStorageValue);
    let taskDeleted = listArray.splice(index, 1);
    console.log(taskDeleted);
    localStorage.setItem("To Do List", JSON.stringify(listArray));
    showList();
}

function delAll(){
    listArray = [];
    pendingTask.innerHTML = listArray.length;
    localStorage.setItem("To Do List", JSON.stringify(listArray));
    showList();
}

function completedTask(index){
    taskCompleted = [];
    let getLocalStorageValue = localStorage.getItem("To Do List");
    listArray = JSON.parse(getLocalStorageValue);
    taskCompleted += listArray.splice(index, 1).join(" ").appendChild[0](`<li>`);
    todoList.innerHTML = taskCompleted;
}


