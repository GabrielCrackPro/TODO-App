//Add new TODO
const newTodoForm = document.querySelector('form')
const todoList = document.querySelector('.todo-list')
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
        todoList.innerHTML += `
        <div id="todo-card">
        <h3>${newTodo.todoName}</h3>
        <p>${newTodo.todoDescription}</p>
        <div class="todo-buttons">
        <button id="done-button"><i class="fas fa-check"></i></button>
        <button id="delete-button"><i class="fas fa-times"></i></button>
        </div>
        </div>
        `
        console.log(JSON.stringify(newTodo))
    }
    newTodoForm.reset()
    event.preventDefault()
})