//할일 추가하기, 할일 보여주기, 할일 수정하기, 할일 삭제하기
const todayH1 = document.getElementById("today");
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
let todoArr = [];

const today = new Date();
let month = today.getMonth() + 1;
let date = today.getDate();
todayH1.textContent = `${month}월 ${date}일 TO DO LIST`;

//로컬 저장소에 저장하기
function saveTodos(){
  const todoString = JSON.stringify(todoArr);
  localStorage.setItem("myTodos", todoString);
}

//로컬 저장소에서 가져오기
function loadTodos(){
  const myTodos = localStorage.getItem("myTodos");
  if(myTodos !== null){
    todoArr = JSON.parse(myTodos);
    displayTodos();
  }
}
loadTodos();

//할일 삭제하기
function handleTodoDelBtnClick(clickedId){
  todoArr = todoArr.filter(function(aTodo){
    return aTodo.todoId !== clickedId;
  });
  displayTodos();
  saveTodos();
}

//할일 수정하기
function handleTodoItemClick(clickedId){
  todoArr = todoArr.map(function(aTodo){
    if(aTodo.todoId === clickedId){
      return{
        ...aTodo, todoDone: !aTodo.todoDone
      }
    }else{
      return aTodo;
    }
  });
  displayTodos();
  saveTodos();
}

//할일 보여주기
function displayTodos(){
  todoList.innerHTML = "";

  todoArr.forEach(function(aTodo){
    const todoItem = document.createElement("li");
    const todoDelBtn = document.createElement("span");
    
    todoItem.textContent = aTodo.todoText;
    todoItem.title = "클릭하면 완료됨";

    todoDelBtn.textContent = "x";
    todoDelBtn.title = "클릭하면 삭제됨";

    if(aTodo.todoDone){
      todoItem.classList.add("done");
    }else{
      todoItem.classList.add("yet");
    }

    //할일 수정 시 클래스 변경 메소드 호출
    todoItem.addEventListener("click", function(){
      handleTodoItemClick(aTodo.todoId);
    });
    //할일 삭제 시 삭제하는 메소드 호출
    todoDelBtn.addEventListener("click", function(){
      handleTodoDelBtnClick(aTodo.todoId);
    });

    todoItem.appendChild(todoDelBtn);
    todoList.appendChild(todoItem);
  });
}

//할일 추가하기
todoForm.addEventListener("submit", function(e){
  e.preventDefault();

  const toBeAdded = {
    todoText : todoForm.todo.value,
    todoId : new Date().getTime(),
    todoDone : false
  }

  todoForm.todo.value = "";
  todoArr.push(toBeAdded);

  displayTodos();
  saveTodos();
});