let count=0;
function cardCounter(card){
if(card>=2 && card <=6){
count++;
}else if(card === 10 || card === "J" 
|| card === "Q"|| card === "K" || card === "A"){
 count--; 
}
let action= "Hold";
if(count>0){
action="Bet";
}
return count +" " + action;
}

