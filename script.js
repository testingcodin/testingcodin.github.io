function addtask() {
    if (localStorage.getItem('todolist') == null) {
        var newtask = document.getElementById('task').value;
        localStorage.setItem('todolist', JSON.stringify([newtask]));
    } else {
    
    const list = getarray();
    console.log(getarray() + 'addtask')
    
    var newtask = document.getElementById('task').value;
    console.log(JSON.stringify(newtask) + 'jsonstringify')
    list[list.length] = newtask
    localStorage.setItem('todolist', JSON.stringify(list));   
    }
};
function getarray() {
    var array = localStorage.getItem('todolist');
    const retrn = JSON.parse(array)
    console.log(JSON.parse(array) + "getarrayjson")
    console.log(retrn + 'getarrayretrn')
    return retrn;  
}
function removetask() {

}
function cleararray() {
    var list = ["short"];
    list.length = 0;
    localStorage.setItem('todolist', JSON.stringify(list));    
}
const add = document.getElementById('add');
add.addEventListener('click', addtask);
const clear = document.getElementById('clear');
clear.addEventListener('click', cleararray);



