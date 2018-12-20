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

function removeTask(element) {
  console.log(element);
  // var element = document.getElementById(id);
  element.parentElement.removeChild(element);

  // localStorage.removeItem(id.id);
  // renderList();
}
 
function renderList () {
  todoList.innerHTML = '';
  for (var item in localStorage) {
    if (localStorage.hasOwnProperty(item)) {
      var point = document.createElement("li")
      var node = document.createTextNode(item);

      point.appendChild(node);
      
      var button = document.createElement("button");
      node = document.createTextNode("Remove");

      button.appendChild(node);
      button.setAttribute("id", item)

      var div = document.createElement("div");
      div.append(point);
       
      div.append(button);
      div.setAttribute("id", item);

      button.onclick = () => {removeTask(div)};
      todoList.appendChild(div);
    }
 }

 if (todoList.innerHTML !== '') {
   todoHeader.innerHTML = "Todo List"
 }
}