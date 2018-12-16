var addButton = document.getElementById('add_button');
var clearButton = document.getElementById('clear_button');
var todoList = document.getElementById('todo');
var todoHeader = document.getElementById('todo_header');

renderList();

addButton.addEventListener("click", add);
clearButton.addEventListener("click", clear);

function add () {
  var addToListVal = document.getElementById('item_to_add').value;
  localStorage.setItem(addToListVal, addToListVal);
  document.getElementById('item_to_add').value = "";
  renderList();
}

function clear() {
  localStorage.clear();
  todoList.innerHTML = '';
  renderList();
}

function renderList () {
  todoList.innerHTML = '';
  for (var item in localStorage) {
    if (localStorage.hasOwnProperty(item)) {
      var point = document.createElement("li")
      var node = document.createTextNode(item);
      point.appendChild(node);

      todoList.appendChild(point);
    }
 }

 if (todoList.innerHTML !== '') {
   todoHeader.innerHTML = "Todo List"
 }
}