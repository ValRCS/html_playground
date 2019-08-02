const url = 'https://jsonplaceholder.typicode.com/todos';



function processJSON(json) {
    console.log("Processing some json");
    // console.log(json);
    console.log(json[0]);
    const ul = document.createElement("ol");
    //loop goes here
    //we add each li element here
    const li = document.createElement("li");
    li.innerText = json[3]['title'];
    if (json[3]['completed']) li.innerText += " DONE";
    ul.appendChild(li);

    //we should end loop here after everything is added
    document.querySelector("main").appendChild(ul);
}


fetch(url)
  .then(response => response.json())
  .then(json => processJSON(json))