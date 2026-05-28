function booWho(boolean){
  return typeof boolean === "boolean"
}
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1,2,3]));
console.log(booWho([].slice));
console.log(booWho({"a":1}));
console.log(booWho(1));
console.log(booWho(NaN));
  
