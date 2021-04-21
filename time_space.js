//Overall time complexity O(nlog(n) -- due to sorting function)
//Overall space complexity is O(N) -- results used to store the merged intervals

//time O(1)
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
    return this;         
        }
    }

function parseInput(string){
  if(string == null){
    return ("ValueError")
  }

//time O(1)
  let newIntervals = [];
  const result = [];
  let intervalObjects = [];


  splitString(string);

//time O(n)
function splitString (string) {
    let newArray = string.split(',')
   for(let i=0; i<newArray.length; i++){
       newIntervals.push(replaceDashes(newArray[i]))
   }
}

//time O(1)
function replaceDashes(string){
    let newString = string.toString().replace(/-/g,",").split(",");
    return newString;
}

//time O(n)
 for(let i=0; i<newIntervals.length; i++){
     let newInt = new Interval(newIntervals[i][0], newIntervals[i][1]);
     intervalObjects.push(newInt);
 }

//time O(n)
 let mergeArray = intervalObjects.map(obj => Object.values(obj));

 function merge(mergeArray) {
  
  if (mergeArray.length <2) return mergeArray;
//time O(nlog(n))
  mergeArray.sort((a,b)=> a[0] - b[0]);
  let prev = mergeArray[0];
//time O(n)  
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
