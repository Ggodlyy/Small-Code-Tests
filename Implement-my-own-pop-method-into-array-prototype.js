Array.prototype.poop = function() {
    let lastEl = this[this.length - 1];
    this.length = this.length - 1;
    return lastEl;
};

let arr = [1, 2, 3];

let lastEl = arr.poop();

console.log(arr);
console.log(lastEl);
