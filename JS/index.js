let compteur = 1;
let j = 0
let tab = [];
let newTab = [];
tab[0] = 1;
const addTask = () => {
  compteur++;
  const newTask = document.querySelector(".myTask");

  const divTask = document.createElement("Div");
  divTask.id = `div${compteur}`;
  document.querySelector(".tasks").appendChild(divTask);

  const task = document.createElement("P");
  task.innerText = newTask.value;
  task.id = `p${compteur}`;
  document.querySelector(`#div${compteur}`).appendChild(task);

  const taskCheck = document.createElement("Input");
  taskCheck.id = `${compteur}`;
  taskCheck.type = `checkbox`;
  taskCheck.setAttribute("onchange", "checkedTask()");
  document.querySelector(`#div${compteur}`).appendChild(taskCheck);
  tab.push(compteur);
  newTask.value = "";
};

const deleteTask = () => {
  for (let index = 0; index < tab.length; index++) {
    let check = document.getElementById(`${tab[index]}`);
    if (check.checked === true) {
      const taskFinish = document.getElementById(`div${tab[index]}`);
      taskFinish.remove();
      //tab.remove(tab[index]);
    }
    else{
        newTab[j] = tab[index]
        j ++
    }
  }
  j =0
  tab.length = 0
  for (let index = 0; index < newTab.length; index++) {
    tab[index] = newTab[index]
    
  }
   newTab.length =0;
};


const checkedTask = () => {
    for (let index = 0; index < tab.length; index++) {
      let check = document.getElementById(`${tab[index]}`);
      if (check.checked === true) {
        const taskChecked = document.getElementById(`p${tab[index]}`);
        taskChecked.style.textDecoration = "line-through";
        //tab.remove(tab[index]);
      }
      else{
        const taskChecked = document.getElementById(`p${tab[index]}`);
        taskChecked.style.textDecoration = "none";
      }
    }
  };
