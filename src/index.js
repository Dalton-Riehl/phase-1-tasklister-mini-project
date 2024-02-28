document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(e.target["new-task-description"].value);
  })
})

function addTask(task){
  let p = document.createElement('p');
  let deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', () => {
    deleteButton.parentNode.remove();
  })
  deleteButton.textContent = "Delete";
  p.textContent = `${task}  `;
  document.querySelector('#tasks').appendChild(p);
  p.appendChild(deleteButton);
}