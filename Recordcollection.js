function updateRecords(recordCollection, id, prop, value) {
  if (value === "") {

    delete recordCollection[id][prop];
  } 
  
  else if (prop !== "tracks") {
    recordCollection[id][prop] = value;
  } 
  
  else if (prop === "tracks") {
    
    if (!recordCollection[id].hasOwnProperty("tracks")) {
      recordCollection[id]["tracks"] = [];
    }
    
    recordCollection[id]["tracks"].push(value);
  }
  return recordCollection;
}
updateRecords(recordCollection, 5439, "artist", "ABBA");

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");


updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");

updateRecords(recordCollection, 2548, "artist", "");

console.log("\n=== FINAL UPDATED RECORD COLLECTION ===");
console.log(JSON.stringify(recordCollection, null, 2));