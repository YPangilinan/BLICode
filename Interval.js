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

module.exports = Interval