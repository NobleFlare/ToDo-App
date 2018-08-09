let toDoForm = document.forms.todoform;
let toDoInput = toDoForm.todoinput;

toDoForm.addEventListener("submit", e => {
  e.preventDefault();
  let textInput = toDoInput.value
  let li = document.createElement("li");
  let input = document.createElement("input");
  let label = document.createElement("label");
  let editButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  let content = document.createTextNode(textInput);
  document.getElementById("todo").appendChild(li);
  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", e =>{
    let parent = document.getElementById("todo");
    let child = document.getElementById(textInput);
    todo.removeChild(child);
  })
  label.appendChild(content);
  editButton.appendChild(document.createTextNode("edit"));
  deleteButton.appendChild(document.createTextNode("delete"));
  input.type="checkbox";
  input.className="status";
  //input.id=textInput;
  input.value=textInput;
  label.for=textInput;
  li.id=textInput;
  toDoForm.reset();
});



// document.addEventListener('click',function(e){
//     if(e.target && e.target.id== 'brnPrepend'){
//       alert("wooo");
//  })



// document.getElementById("todo").appendChild(div);
//
// listElement.append(li,input,label,button)
