export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
  /**
   * remove the function keyword
   * use an arrow function for the `addNeighborhood` method
   * use lexical scoping to access `this` within the arrow function
   */
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  }
}

