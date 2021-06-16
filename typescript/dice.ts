window.onload = function () {
    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;

    document.getElementById("roll").onclick = rollDie;

    document.getElementById("hold").onclick = holdDie;
}

function generateRandomValue(minValue: number, maxValue: number): number {
    var random = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

    //TODO: use random to generate a number between min and max
    minValue = Math.ceil(minValue);
    maxValue = Math.ceil(maxValue);
    return random;
}


function changePlayers(): void {
    let currentPlayerName = document.getElementById("current");
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;

    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
    if (currentPlayerName.innerText == player1Name) {
        currentPlayerName.innerText = player2Name;
    }
    else {
        currentPlayerName.innerText = player1Name;
    }
}

function createNewGame() {
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
    if (p1.value == "" || p2.value == "") {
        alert("Please Input Player Names");
        nameSet = false;
    }
    //if both players do have a name start the game!
    if (nameSet == true) {
        document.getElementById("turn").classList.add("open");
        (<HTMLInputElement>document.getElementById("total")).value = "0";
        //lock in player names and then change players
        document.getElementById("player1").setAttribute("disabled", "disabled");
        document.getElementById("player2").setAttribute("disabled", "disabled");
        changePlayers();
    }
}

function rollDie(): void {
    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);

    //roll the die and get a random value 1 - 6 (use generateRandomValue function)
    let rolls = generateRandomValue(1, 6);
    //if the roll is 1
    //  change players
    //  set current total to 0
    if(rolls == 1)
    {
        currTotal = 0;
        changePlayers();
    }
    //if the roll is greater than 1
    //  add roll value to current total
    else
    {
        currTotal += rolls;
    }
    //set the die roll to value player rolled
    let dieRoll = <HTMLInputElement>document.getElementById("die");
    dieRoll.value = rolls.toString();
    //display current total on form
    let total = <HTMLInputElement>document.getElementById("total");
    total.value = currTotal.toString();
}

function holdDie(): void {
    //get the current turn total
    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);
    //determine who the current player is
    //add the current turn total to the player's total score
    let score = 0;
    if((document.getElementById("current")).innerHTML == (<HTMLInputElement>document.getElementById("player1")).value){
        score = parseInt((<HTMLInputElement>document.getElementById("score1")).value);
        score += currTotal;
        (<HTMLInputElement>document.getElementById("score1")).value = score.toString();
    }
    else{
        score = parseInt((<HTMLInputElement>document.getElementById("score2")).value);
        score+= currTotal;
        (<HTMLInputElement>document.getElementById("score2")).value = score.toString();
    }
    //reset the turn total to 0
    (<HTMLInputElement>document.getElementById("total")).value = "0";
    let score1 = parseInt((<HTMLInputElement>document.getElementById("score1")).value)
    let score2 = parseInt((<HTMLInputElement>document.getElementById("score1")).value)

    if(score1 >= 100){
        alert("Player 1 wins");
        (<HTMLInputElement>document.getElementById("score1")).value = "0";
        (<HTMLInputElement>document.getElementById("score2")).value = "0";
    }
    if(score2 >= 100){
        alert("Player 2 wins");
        (<HTMLInputElement>document.getElementById("score1")).value = "0";
        (<HTMLInputElement>document.getElementById("score2")).value = "0";
    }
    //change players
    changePlayers();
}