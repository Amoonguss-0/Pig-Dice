window.onload = function(){
    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;

    document.getElementById("roll").onclick = rollDie;

    document.getElementById("hold").onclick = holdDie;
}

function generateRandomValue(minValue:number, maxValue:number):number{
    var random = Math.random();
    
    //TODO: use random to generate a number between min and max
    minValue = random;
    maxValue = random;
    return random;
}


function changePlayers():void{
    let currentPlayerName = document.getElementById("current").innerText;
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;

    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
    if(currentPlayerName == player1Name)
    {
        currentPlayerName = player2Name;
    }
    else
    {
        currentPlayerName = player1Name;
    }
}

function createNewGame(){
    //set player 1 and player 2 scores to 0
    let nameSet = true; 
    let score1 = <HTMLInputElement>document.getElementById("score1");
    let score2 = <HTMLInputElement>document.getElementById("score2");

    score1.value = "0"
    score2.value = "0"
    //verify each player has a name
    let p1 = <HTMLInputElement>document.getElementById("player1");
    let p2 = <HTMLInputElement>document.getElementById("player2");
    //if both players don't have a name display error
    if(p1.value == "" || p2.value){
        alert("Please Input Player Names");
        nameSet = false;
    }
    //if both players do have a name start the game!
    document.getElementById("turn").classList.add("open");
    (<HTMLInputElement>document.getElementById("total")).value = "0";
    //lock in player names and then change players
    document.getElementById("player1").setAttribute("disabled", "disabled");
    document.getElementById("player2").setAttribute("disabled", "disabled");
    changePlayers();
}

function rollDie():void{
    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);
    
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)

    //if the roll is 1
    //  change players
    //  set current total to 0
    
    //if the roll is greater than 1
    //  add roll value to current total

    //set the die roll to value player rolled
    //display current total on form
}

function holdDie():void{
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score

    //reset the turn total to 0

    //change players
    changePlayers();
}