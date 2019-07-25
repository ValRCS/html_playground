// Setup
const collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
const collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  console.log(id, prop, value);
  if (!collection.hasOwnProperty(id)) {
    console.log("We do not an have id", id);
    return collection;
  }
  const record = collection[id];

  console.log(JSON.stringify(record));
  if (value === "") {
    delete record[prop];//turns out we do not need to check
    //if prop exists when deleting
    return collection;
  }
  if (prop === "tracks") {
    // if (record.hasOwnProperty(prop) === false) {
    if (!record.hasOwnProperty(prop)) {
      console.log("Creating tracks property array");
      record.tracks = []; //record[prop] = [] or record["tracks"] = []   
    } 
    record.tracks.push(value); //record[prop].push(value)
    //could do collection[id][prop].push(value);
    return collection;
  }

  record[prop] = value;

  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Dancing Queen");
updateRecords(5439, "tracks", ["Waterloo", "Money Money"]);
updateRecords(5439, "eurovisionwins", 1);
updateRecords(5439, "eurovisionwins", "Who cares?");
updateRecords(5439, "artist", "4 Swedes");
updateRecords(15439, "tracks", "Let's Get Crazy");
updateRecords(2548, "tracks", "");
updateRecords(2548, "tracks", "Some Crazy Song");
updateRecords(2548, "tracks", "Some Crazy Song");
console.log(JSON.stringify(collection));
//Remember innerHTML should be avoided in production !
document.body.innerHTML = "<p>" + JSON.stringify(collection) + "</p>";