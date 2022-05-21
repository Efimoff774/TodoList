const todoList = document.querySelector('#todo-list')
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')


todoForm.addEventListener('submit', function addNewTodo(e) {
    e.preventDefault()
    const valueText = todoInput.value // получаем текст
    const newTodo = document.createElement('li') // создаем ли
    const deleteButton = document.createElement('Button')
    const doneButton = document.createElement('Button')
    doneButton.innerHTML = 'Задача выполнена'
    deleteButton.innerText = 'Удалить задачу'

    doneButton.classList.add('button-done')
    doneButton.addEventListener('click', function () {
        this.closest('li').style['text-decoration'] = 'line-through'
    })
    deleteButton.classList.add('button-delete')
    deleteButton.addEventListener('click', function () {
        // так как тег ли является родительским, то можно сделать следующее ->
        this.closest('li').remove()

    })
    newTodo.style['margin-bottom'] = '20px'
    newTodo.innerText = valueText // в созданный ли запихнуть текст
    newTodo.append(deleteButton)
    newTodo.append(doneButton)
    todoList.append(newTodo)




    todoInput.value = ''
    todoInput.focus()
})