addtask()
function addtask() {
     var newtask = document.getElementById('task').value;
    if (localStorage.getItem('todolist') == null && newtask.trim().length > 0) {
        localStorage.setItem('todolist', JSON.stringify([newtask]));
        displaytask()
    } else if (newtask.trim().length > 0){
    
    const list = getarray();
    console.log(getarray() + 'addtask')
    
    var newtask = document.getElementById('task').value;
    console.log(JSON.stringify(newtask) + 'jsonstringify')
    list[list.length] = newtask
    localStorage.setItem('todolist', JSON.stringify(list));   
    displaytask()
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
    var listlength = getarray().length;
    console.log(listlength);
    var input = document.getElementById('hidden').value;
    input = parseInt(input)
    console.log(input);
    if (Number.isInteger(input) == true && input > 0 && input <= listlength ){
       var array = getarray();
       console.log(JSON.stringify(array))
       array.splice((input - 1), 1); 
       console.log(JSON.stringify(array))
       localStorage.setItem('todolist', JSON.stringify(array));
       displaytask()
    }
    
}
function cleararray() {
    var list = ["short"];
    list.length = 0;
    localStorage.setItem('todolist', JSON.stringify(list));    
    displaytask()
}
function displaytask(){
    document.getElementById('tasklist').innerHTML = "";
    for (let i = 0; i < getarray().length; i++){
        document.getElementById('tasklist').innerHTML += ('<p>' + getarray()[i]+'</p>')
}
}
const add = document.getElementById('add');
add.addEventListener('click', addtask);
const clear = document.getElementById('clear');
clear.addEventListener('click', cleararray);
const subtract = document.getElementById('subtract');
subtract.addEventListener('click', removetask);


