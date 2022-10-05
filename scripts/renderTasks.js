const renderTasksEmpty = () => {
  const main = document.getElementById("main")
  const li = document.getElementById("listTask")
  li.innerHTML = ""

  const section = document.createElement("section")
  section.id="tasksEmpty"
  section.classList = "mt-0 flex justify-center"

  const h2 = document.createElement("h2")
  h2.innerText = "Without any task registered..."

  section.append(h2)
  main.append(section)
}
/*

    <section class="mt-0 flex justify-center" id="tasksEmpty">
      <h2>Without any task registered...</h2>
    </section>

*/

const renderTask = (task) => {
  const li = document.createElement("li")
  li.id = `task-${task.id}`
  li.classList = "pt-6 pb-6 pr-5 pl-5 mt-5 bg-color-grey-5 radius-1 flex justify-between items-center"

  const span = document.createElement("span")
  span.classList = "font-text-2-medium"
  span.innerText = task.name

  const button = document.createElement("button") 
  button.id = `${task.id}`
  button.classList = "button-grey"
  button.innerText = "Excluir"

  button.addEventListener("click", removerTask)

  li.append(span, button)

  return li
}

const removerTask = (event) => {
  const id = event.target.id
  const li = document.getElementById(`task-${id}`)
  li.remove()
  const task = tasks.find((e) => e.id == id)
  const index = tasks.indexOf(task)
  tasks.splice(index, 1)
  renderTasks(tasks)
}

const renderTasks = (tasks = []) => {
  if (tasks.length === 0) {
    renderTasksEmpty()
  } else {
    const listTask = document.getElementById("listTask")
    listTask.innerHTML = ""
    tasks.forEach((task) => {
      const taskHtml = renderTask(task)
      listTask.append(taskHtml)
    })  
  }
}


/*

<ul id="listTask">

      <li data-id="1" class="pt-6 pb-6 pr-5 pl-5 mt-5 bg-color-grey-5 radius-1 flex justify-between items-center">
        <span class="font-text-2-medium">Fazer as compras no supermercado</span>
        <button class="button-grey">Excluir</button>
      </li>


*/