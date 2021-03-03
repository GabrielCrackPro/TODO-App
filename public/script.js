const newTodoForm = document.querySelector('form')
const todoListElement = document.querySelector('.todo-list')
const todoList = []
const doneButton = document.querySelector('#done-button')
const deleteButton = document.querySelector('#delete-button')
//Add new TODO

newTodoForm.addEventListener('submit', (event) => {
    const newTodoData = new FormData(newTodoForm)

    const todoName = newTodoData.get('todo-name')
    const todoDescription = newTodoData.get('todo-description')

    const newTodo = {
        todoName,
        todoDescription
    }
    if (newTodo.todoName == '' || newTodo.todoDescription == '') {
        console.error('You must type something')
    } else {
        todoListElement.innerHTML += `
        <div id="todo-card">
        <h3>${newTodo.todoName}</h3>
        <p>${newTodo.todoDescription}</p>
        <div class="todo-buttons">
        <button id="done-button"><i class="fas fa-check"></i></button>
        <button id="delete-button"><i class="fas fa-times"></i></button>
        </div>
        </div>
        `
        todoList.push(newTodo)
        localStorage.setItem('TodoArray', JSON.stringify(todoList))
    }
    newTodoForm.reset()
    event.preventDefault()
})
//Get stored todos
const getTodos = () => {
    if (localStorage != null) {
        const storedTodos = JSON.stringify(localStorage.getItem('TodoArray'))
        todoListElement.innerHTML += `
        <div id="todo-card">
        <h3>${storedTodos[0].todoName}</h3>
        <p>${storedTodos[0].todoDescription}</p>
        <div class="todo-buttons">
        <button id="done-button"><i class="fas fa-check"></i></button>
        <button id="delete-button"><i class="fas fa-times"></i></button>
        </div>
        </div>
        `
    }
}
/* TODO: Integrate this
const saveLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}*/

//window.onload = getTodos()