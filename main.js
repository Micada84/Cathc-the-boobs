const table = document.getElementById('main');
const mall = document.getElementsByClassName('mall');
let polje = document.getElementsByClassName('field');
const score = document.getElementById('score');
const startButton = document.getElementById('startButon')
const timerBoard = document.getElementById('time')
let time = 60;
let clickScore = 0
score.innerHTML = clickScore

///starting the game///
startButton.addEventListener('click',function(){
    movePicture = setInterval(randomPosition,800)
    timerInterval = setInterval(timer,1000)
    
})
//function for timer

function timer(){
    timerBoard.innerHTML = time--
    if( time == -2){
        clearInterval(timerInterval)
        clearInterval(movePicture)
        alert('game over')
        location.reload();
    }
}
///function that create board for game main field, 9 fileds and picture
function kreirajTabelu(redova) {
    for (var i = 0; i < redova; i++) {
        if(i == 5){
            var newRow = document.createElement("div");
        newRow.setAttribute('id',i)
        newRow.className = 'field'
        newRow.className +=' mall'
        table.appendChild(newRow)
        }
        var newRow = document.createElement("div");
        newRow.setAttribute('id',i)
        newRow.className = 'field'
        table.appendChild(newRow) 
        
    }
    table.appendChild(newRow) 
}
kreirajTabelu(8)

function randomPosition(){
   for (let i = 0; i < polje.length; i++) {
    polje[i].classList.remove('mall')
    console.log(polje[i]);  
   }
   let helper = Math.floor(Math.random() * polje.length)
   for (let i = 0; i < polje.length; i++) {
       if(i == helper){
           polje[i].classList.add('mall')
       }
   }
}
randomPosition()

table.addEventListener('click',clickOnPicture)
function clickOnPicture(event){
  if(event.target.className == 'field mall'){
     clickScore++
     score.innerHTML = clickScore
  } 
}


