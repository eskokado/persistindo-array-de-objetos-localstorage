let lastId = 5

function state(initialValue) {
  let value = initialValue;

  function getValue() {
    return value;
  }

  function setValue(newValue) {
    value = newValue;
  }

  return [getValue, setValue];
}

const tasksInLocalStorege = localStorage.getItem("tasks")

const [database, setDatabase] = state(tasksInLocalStorege == null ? [] : JSON.parse(tasksInLocalStorege));


// const [database, setDatabase] = state([
//   {
//     id: 1,
//     name: "Tarefa 1",
//   },
//   {
//     id: 2,
//     name: "Tarefa 2",
//   },
//   {
//     id: 3,
//     name: "Tarefa 3",
//   },
//   {
//     id: 4,
//     name: "Tarefa 4",
//   },
// ]);


const tasks = database()

if (tasks.length <= 0 ) {
  // renderTasksEmpty()
} 

renderTasks(tasks)

const input = document.getElementById("inpTask")
const btnAdd = document.getElementById("btnAdd")
btnAdd.addEventListener("click", () => {
  if (input.value.length == 0) {
    alert("Por favor, digite alguma tarefa")
    return
  }
  const tasksEmpty = document.getElementById("tasksEmpty")
  if (tasksEmpty != null) {
    tasksEmpty.remove()
  }
  
  const task =  { 
    id: lastId, 
    name: input.value, 
  }
  tasks.push(task)
  renderTasks(tasks)

  localStorage.setItem("tasks", JSON.stringify(tasks))

  input.value = ""
  lastId++
})

