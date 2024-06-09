// * html variable
let  textCAP = document.querySelector("#textCAP");
let  tryAgainBtn = document.querySelector("#reloadBtn");
let  capInput = document.querySelector("#capInput");
let  checkBtn = document.querySelector("#checkInput");


// * app variable
let correctAnswer = "";


// * functions
function generateCAPATCHA(){
    let CAPATCHA = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];
    let result = "";
    for (let i=1 ; i<7 ; i++){
        result += CAPATCHA[Math.trunc(Math.random()*CAPATCHA.length)];
    }
    correctAnswer = result;
console.log(result)
    textCAP.innerHTML = result;
}
generateCAPATCHA()

function  checkAnswer(){
    if(capInput.value == correctAnswer){
       
      alert("congratulation")
      generateCAPATCHA()
    }else{
        alert("try again")
    }
    clearInput()
}

function clearInput(){
    capInput.value = "";
}


// * events
tryAgainBtn.addEventListener("click",generateCAPATCHA);
checkBtn.addEventListener("click",checkAnswer);