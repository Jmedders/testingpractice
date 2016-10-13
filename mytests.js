var myTests = function(firsty, colours, favNumber){
  this.firsty = firsty;
  this.colours = colours;
  this.favNumber = favNumber;
  this.favNumberSquared = function(){
    return this.favNumber * this.favNumber;
  }
};

module.exports = myTests;
