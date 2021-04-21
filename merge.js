let arrayString = "1,2-5,6,10-12,11-15"

//Part 1: Interval Class with start and end
class Interval{
    constructor(start,end){
    this.start = parseInt(start);
    let ending = parseInt(end)
    if(isNaN(ending)){
        this.end = this.start;
    }
    else{
        this.end = ending;
    }
    //send back reference to newly created object to the loop
    return this;         
        }
    }
//Part 2: function that takes a user input string and parses it into a list of interval objects
function parseInput(string){

//value error
  if(string == null){
    return ("ValueError")
  }

//initialize variables
  let newIntervals = [];
  const result = [];
  let intervalObjects = [];

//initialize splitString function
  splitString(string);

//split number string into separated strings
function splitString (string) {
    let newArray = string.split(',')
   for(let i=0; i<newArray.length; i++){
       newIntervals.push(replaceDashes(newArray[i]))
      //  console.log("newIntervals", newIntervals)
   }
}

// helper function replace dashes to commas
function replaceDashes(string){
    let newString = string.toString().replace(/-/g,",").split(",");
    return newString;
}

//create array of parse interval objects
 for(let i=0; i<newIntervals.length; i++){
     let newInt = new Interval(newIntervals[i][0], newIntervals[i][1]);
     intervalObjects.push(newInt);
    //  console.log(intervalObjects);
 }

//array of objects to array of arrays to be used in merging algorithm
 let mergeArray = intervalObjects.map(obj => Object.values(obj));

//Part 3: Merge Intervals
 function merge(mergeArray) {
  //  console.log("merge", mergeArray)
  
  if (mergeArray.length <2) return mergeArray;

  //sort the intervals in ascending order
  mergeArray.sort((a,b)=> a[0] - b[0]);
  //starting interval to compare
  let prev = mergeArray[0];
  //loop through entire intervals array
  for(let i=1; i<mergeArray.length; i++){
    if(prev[1] >= mergeArray[i][0]){
      prev = [prev[0], Math.max(prev[1], mergeArray[i][1])];
    } else{
      result.push(prev);
      prev = mergeArray[i];
    }
  }
  result.push(prev);
};
merge(mergeArray);
return result;
}

// console.log(parseInput(arrayString))

module.exports = parseInput;
