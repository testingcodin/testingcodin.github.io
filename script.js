var tasks = [];
function addtask() {
    var newtask = document.getElementById('task').value;
    if (localStorage.todolist == null){
        tasks = ["short"];
        tasks.length = 0;
    }
    if (tasks.length > 0) {
       tasks[tasks.length] = newtask;
    }   else {
            tasks = [newtask];
        }
    localStorage.setItem('todolist', JSON.stringify(tasks));    
};
const add = document.getElementById('add');
add.addEventListener('click', addtask);