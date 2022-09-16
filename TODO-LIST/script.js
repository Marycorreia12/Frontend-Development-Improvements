/* To render any existing todo list items when the page is loaded */
document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItemsRef');
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach(t => {
      renderTodo(t);
    });
  }
});

// This is the array that will hold the todo list items
let todoItems = [];

/*********1-Add a todo **********/
function addTodo(text){
  const todo = {
      text,
      checked: false,
      id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}
 
// Select the form element
const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

    // Get the value of the input and remove whitespace
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
    console.log(text);
  }
});  

/********** 2-Render the todo items ***********/
function renderTodo(todo) {
  localStorage.setItem('todoItemsRef', JSON.stringify(todoItems));
  const list = document.querySelector('.js-todo-list');
  const item = document.querySelector(`[data-key='${todo.id}']`);

  if(todo.deleted){
    item.remove();
        // add this line to clear whitespace from the list container
      // when `todoItems` is empty
      if (todoItems.length === 0) list.innerHTML = '';
        return
      }

  // Add a click event listener to the list and its children
  list.addEventListener('click', event => {
    if (event.target.classList.contains('js-tick')) {
      const itemKey = event.target.parentElement.dataset.key;
      toggleDone(itemKey);
    }
    //detect when the delete button is clicked
    if (event.target.classList.contains('js-delete-todo')) {
      const itemKey = event.target.parentElement.dataset.key;
      deleteTodo(itemKey);
    }
  });

  const isChecked = todo.checked ? 'done': '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  // If the item already exists in the DOM
  if (item) {
    // replace it
    list.replaceChild(node, item);
  } else {
    // otherwise append it to the end of the list
    list.append(node);
  }
}

/********** 3-Mark a task as completed ***********/

function toggleDone(key){
      // find the corresponding todo object in the todoItems array
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

/************ 4-Delete todo items *************/

function deleteTodo(key){
    // find the corresponding todo object in the todoItems array
  const index = todoItems.findIndex(item => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index]
  };
  todoItems = todoItems.filter(item => item.id !== Number(key));
  renderTodo(todo);
}

/************ 5-Add an empty state prompt *************/

/* Once there are no tasks to display, we’ll add a prompt that encourages the user to add a new task. This feature can be implemented with just HTML and CSS. */

/************ 5-A subtle bug *************/

 /* we need to clear any whitespace from the element in our JavaScript code. Modify the renderTodo() 

 if (todo.deleted) {
  item.remove();
  // add this line to clear whitespace from the list container
  // when `todoItems` is empty
  if (todoItems.length === 0) list.innerHTML = '';
  return
}
 */

/************ 5-Persist the application state *************/

/* At the moment, once the page is refreshed, all the todo items are cleared. Let’s prevent this by persisting the application state to the browser’s localstorage. 

localStorage.setItem('todoItemsRef', JSON.stringify(todoItems));

To render any existing todo list items when the page is loaded:

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItemsRef');
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach(t => {
      renderTodo(t);
    });
  }
});
*/
