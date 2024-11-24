const input = document.getElementById('addTask')
const button = document.getElementById('submit')
const todo = document.getElementById('TO-DO')
const prog = document.getElementById('IN-Progress')
const done = document.getElementById('Done')

function addTask(){
   if(input.value == ''){
     alert('Please enter a task')
   
}
else{
    const li = document.createElement('li')
    li.textContent = input.value
    document.getElementById('TO-DO').appendChild(li)
    li.style.padding = '10px'

    const removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'X'
    removeBtn.style.color = 'red'
    removeBtn.style.background = 'rgba(255, 0, 0, 0.3)'
    removeBtn.style.borderRadius = '20px'
    removeBtn.style.marginLeft = '20px'
    removeBtn.style.padding = '5px'
    removeBtn.addEventListener('click', function(e){
      e.target.parentElement.remove()
      saveData()
    })
    li.appendChild(removeBtn)
    
    
}

new Sortable(todo, {
  group: 'shared', // set both lists to same group
  animation: 150
});

new Sortable(prog, {
  group: 'shared',
  animation: 150
});

new Sortable(done, {
  group: 'shared',
  animation: 150
});
}
