const newTodoForm = document.querySelector('form')
const todoListElement = document.querySelector('.todo-list')
const todoList = []
const doneButton = document.querySelector('#done-button')
const deleteButton = document.querySelector('#delete-button')
//Add new TODO

class todo {
    constructor(name, description) {
        this.name = name
        this.description = description
        this.date = new Date().toLocaleDateString()
    }
}

newTodoForm.addEventListener('submit', (event) => {
    const newTodoData = new FormData(newTodoForm)

    const todoName = newTodoData.get('todo-name')
    const todoDescription = newTodoData.get('todo-description')

    const newTodo = new todo(todoName, todoDescription, 'today')
    if (newTodo.todoName == '' || newTodo.todoDescription == '') {
        console.error('You must type something')
    } else {
        todoListElement.innerHTML += `
        <div id="todo-card">
        <h3>${newTodo.name}</h3>
        <p>${newTodo.description}</p>
        <p>Added at: ${newTodo.date}</p>
        <div class="todo-buttons">
        <button id="done-button"><i class="fas fa-check"></i></button>
        <button id="delete-button"><i class="fas fa-times"></i></button>
        </div>
        </div>
        `
        todoList.push(newTodo)
        localStorage.setItem('TodoList', JSON.stringify(todoList))
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
        <h3>${storedTodos[0].name}</h3>
        <p>${storedTodos[0].description}</p>
        <div class="todo-buttons">
        <button id="done-button"><i class="fas fa-check"></i></button>
        <button id="delete-button"><i class="fas fa-times"></i></button>
        </div>
        </div>
        `
    }
}
