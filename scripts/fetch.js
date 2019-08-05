const url = 'https://jsonplaceholder.typicode.com/todos';
let begvalue = 0;
let maxvalues = 150;
let myjson = {};


function createChild(parent,data) {
    const li = document.createElement("li");
    li.innerText = data[i]['title'];
    if (data[i]['completed']) li.innerText += " DONE";
    parent.appendChild(li);
}

function createChildren(parent, data) {
    for (let i = begvalue; i < data.length && i < maxvalues; i++ ) {
        createChild(parent, data);
    }
}

function processJSON(json) {
    console.log("Processing some json");
    // console.log(json);
    console.log(json[0]);
    const ul = document.createElement("ol");
    //loop goes here
    //we add each li element here
    console.log("maxvalues",maxvalues);
    createChildren(ul, json);
    //we should end loop here after everything is added
    document.querySelector("main").appendChild(ul);
    myjson = json;
}

function removeAllFromMain() {
    const main = document.querySelector("main");
    while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
}

function handleInput(ev) {
    console.log("Value Changed to "+ev.target.value);
    maxvalues = parseInt(ev.target.value);
    console.log("New max value is"+maxvalues);
    removeAllFromMain();
    processJSON(myjson);
}

// oninput is live before enter
// document.querySelector("#maxvalues").oninput = handleInput;
//onchange works when you press Enter
document.querySelector("#maxvalues").onchange = handleInput;

fetch(url)
  .then(response => response.json())
  .then(processJSON)