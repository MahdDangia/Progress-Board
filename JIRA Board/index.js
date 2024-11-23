const input = document.getElementById('addTask')
const button = document.getElementById('submit')
const todo = document.getElementById('TO-DO')
const prog = document.getElementById('IN-Progress')
const done = document.getElementById('Done')
const allLists = document.getElementById('allLists')

function addTask(){
   if(input.value == ''){
     alert('Please enter a task')
   
}
else{
    const li = document.createElement('li')
    li.textContent = input.value
    document.getElementById('TO-DO').appendChild(li)
}
input.value = ''
saveData()
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


