const list = document.getElementById("exerciseList");
let exercises;
if (localStorage.getItem("ejercicios") === null){
    exercises = [];
}
else {
    exercises = JSON.parse(localStorage.getItem("ejercicios"));
}
window.onload = function () {
    list.innerHTML='<p>Lista de ejercicios</p>'; //Borra todo y agrega de nuevo el p
    exercises.forEach(ej => {
        addElemList(ej);
    })
}
function addElemList (newExercise){
    const elemList = document.createElement("li");
    elemList.textContent = newExercise.exercise + " para " + newExercise.muscularGroup + " | " + newExercise.reps + "x"+ newExercise.sets + " ";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => {
        elemList.remove();
        exercises = exercises.filter(e => e !== newExercise)
        localStorage.setItem("ejercicios",JSON.stringify(exercises));
    })
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.addEventListener("click",() => {
        editButton.addEventListener("click", () => {
        document.getElementById("exerciseInput").value = newExercise.exercise;
        document.getElementById("muscularGroup").value = newExercise.muscularGroup;
        document.getElementById("repsInput").value = newExercise.reps;
        document.getElementById("setsInput").value = newExercise.sets;
        elemList.remove();
        exercises = exercises.filter(e => e !== newExercise);
        localStorage.setItem("ejercicios", JSON.stringify(exercises));
    });
    })
    elemList.appendChild(deleteButton);
    elemList.appendChild(editButton);
    list.appendChild(elemList);
}
function addData (event) {
    event.preventDefault();
    const exer = {
        exercise: document.getElementById("exerciseInput").value,
        muscularGroup: document.getElementById("muscularGroup").value,
        reps: document.getElementById("repsInput").value,
        sets: document.getElementById("setsInput").value
    }
    exercises.push(exer);
    localStorage.setItem("ejercicios", JSON.stringify(exercises));
    addElemList(exer);
}