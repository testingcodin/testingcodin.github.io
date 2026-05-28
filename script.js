var task;
function addtask() {
    const newtask = document.getElementById('task')
    const tasks =[];
    if (tasks.length > 0) {
       tasks[tasks.length] = newtask;
    }
    else {
        tasks = [newtask];
    }
    localStorage.setItem('todolist', JSON.stringify(tasks))    
};
const add = document.getElementById('add');
add.addEventListener('click', addtask) ;