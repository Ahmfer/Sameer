// Hitta viktiga element i HTML
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Lägg till event för att bocka av förinställda uppgifter
const preSetTasks = document.querySelectorAll('.complete-btn');
preSetTasks.forEach(btn => {
  btn.addEventListener('click', function() {
    btn.parentElement.classList.toggle('completed');
  });
});

// Funktion för att lägga till ny uppgift
function addTask() {
  const taskText = taskInput.value;
  
  // Kolla att fältet inte är tomt
  if (taskText === '') {
    alert('Skriv något i uppgiften!');
    return;
  }
  
  // Skapa nytt <li>-element
  const li = document.createElement('li');
  li.innerHTML = `<span>${taskText}</span> <button class="complete-btn">Bocka av</button>`;
  
  // Lägg till nytt <li> till listan
  taskList.appendChild(li);
  
  // Rensa inputfältet
  taskInput.value = '';
  
  // Lägg till event för att bocka av uppgiften
  const completeBtn = li.querySelector('.complete-btn');
  completeBtn.addEventListener('click', function() {
    li.classList.toggle('completed');
  });
}

// Lägg till event på "Lägg till"-knappen
addTaskBtn.addEventListener('click', addTask);

// Lägga till uppgift genom att trycka på Enter
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
