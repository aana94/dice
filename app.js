let total = 0;
let tot = 0;
let bot = 0;
let num = 0;
let bonus = 0;
let previousNum = false;
let player = 1;
function rollDice(){
    if(player === 1){
        let num = getNumber();
        if(num){
            document.getElementById('die').style.display = "block";
        }
        if(isBonus(num) || previousNum == true){
            bot = bot + num;
            document.getElementById('current-0').innerHTML= bot;
            if(num === 6){
                previousNum = true;
            }else{
                previousNum = false;
            }
        }else{
            document.getElementById('current-0').innerHTML= num;
        }
        document.getElementById('die').innerHTML= num;
        tot = addTotal(tot, num);
        document.getElementById('score-0').innerHTML= tot;
        if(!isBonus(num)){
            player = 2
        }
    }else{
        let num = getNumber();
        if(num){
            document.getElementById('die').style.display = "block";
        }
        if(isBonus(num) || previousNum == true){
            bonus = bonus + num;
            document.getElementById('current-1').innerHTML= bonus;
            if(num === 6){
                previousNum = true;
            }else{
                previousNum = false;
            }
        }else{
            document.getElementById('current-1').innerHTML= num;
        }
        document.getElementById('die').innerHTML= num;
        total = addTotal(total, num);
        document.getElementById('score-1').innerHTML= total;
        if(!isBonus(num)){
            player = 1
        }
    }
    
}
function getNumber(){
    return Math.floor(Math.random() * 6) + 1;
}
function isBonus(cond){
    if(cond == 6){
        return true;
    }
    return false;
}
function addTotal(last, current){
    return last + current;
}
function shiftHold(){

}

var btn = document.getElementById('rollDice');

btn.addEventListener("click", rollDice);