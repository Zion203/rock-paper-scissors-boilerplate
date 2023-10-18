var score1=document.getElementById("score1")
var score2=document.getElementById("score2")
var playerHand=document.getElementById("PlayerHand")
var compHand=document.getElementById("compHand")
var temp=document.getElementById("temp")
var result = document.getElementById("result")
var buttons=document.getElementById("button")
var playerIndex=0
var randIndex=0
var teamPlayer=0
var teamComp=0
hands=["./assets/rock-hand.png","./assets/paper-hand.png","./assets/scissors-hand.png"]

function rand(){

    randIndex=Math.floor(Math.random()*3)
    console.log(randIndex)
    return randIndex
}

function adder(index){
    playerIndex=index
    playerHand.removeAttribute("src")
    playerHand.setAttribute("src",`${hands[index]}`)
    compHand.removeAttribute("src")
    compHand.setAttribute("src",`${hands[rand()]}`)
    checker()
    ender()
    

}
function checker(){
    let tick
    tick=playerIndex-randIndex
    if (tick==1){
        teamPlayer+=1
    }else if(tick==-1){
        teamComp+=1
    }else if(tick==-2){
        teamPlayer+=1
    }else if(tick==2){
        teamComp+=1
    }
    console.log(tick)
    score1.textContent=teamPlayer
    score2.textContent=teamComp

    
}
function ender(){
    if (teamComp==5 || teamPlayer==5){
        temp.style.visibility="visible"
        buttons.style.visibility="hidden"
        if(teamComp>teamPlayer){
            result.textContent="computer Wins"
        }else{
            result.textContent="Players Wins"
        }
    }
    
    
}