let compteur = 1;
let tab =[];
tab[0] = 1;
const addTask = () => {
    compteur ++;
  const newTask = document.querySelector(".myTask");

  const divTask = document.createElement("Div");
  divTask.id =`div${compteur}`
  document.querySelector(".tasks").appendChild(divTask);
  
  const task = document.createElement("P");
  task.innerText = newTask.value;
  document.querySelector(`#div${compteur}`).appendChild(task);

  const taskCheck = document.createElement("Input");
  taskCheck.id =`${compteur}`
  taskCheck.type=`checkbox`
  document.querySelector(`#div${compteur}`).appendChild(taskCheck);
    tab.push(compteur);
  newTask.value = "";
};

const deleteTask = () =>{
    for (let index = 0; index <= tab.length; index++) {
        let check = document.getElementById(`${tab[index]}`);
        if (check.checked === true) {
            const taskFinish = document.getElementById(`div${tab[index]}`);
            taskFinish.remove();
            tab.remove(tab[index])
        }
      }
}
