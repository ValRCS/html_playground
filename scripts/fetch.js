const url = 'https://jsonplaceholder.typicode.com/todos';

function processJSON(json) {
    console.log("Processing some json");
    // console.log(json);
    console.log(json[0]);
}


fetch(url)
  .then(response => response.json())
  .then(json => processJSON(json))