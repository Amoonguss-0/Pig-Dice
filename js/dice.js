window.onload = function () {
    var newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("hold").onclick = holdDie;
};
function generateRandomValue(minValue, maxValue) {
    var random = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    minValue = Math.ceil(minValue);
    maxValue = Math.ceil(maxValue);
    return random;
}
function changePlayers() {
    var currentPlayerName = document.getElementById("current");
    var player1Name = document.getElementById("player1").value;
    var player2Name = document.getElementById("player2").value;
    if (currentPlayerName.innerText == player1Name) {
        currentPlayerName.innerText = player2Name;
    }
    else {
        currentPlayerName.innerText = player1Name;
    }
}
function createNewGame() {
    var nameSet = true;
    var score1 = document.getElementById("score1");
    var score2 = document.getElementById("score2");
    score1.value = "0";
    score2.value = "0";
    var p1 = document.getElementById("player1");
    var p2 = document.getElementById("player2");
    if (p1.value == "" || p2.value == "") {
        alert("Please Input Player Names");
        nameSet = false;
    }
    if (nameSet == true) {
        document.getElementById("turn").classList.add("open");
        document.getElementById("total").value = "0";
        document.getElementById("player1").setAttribute("disabled", "disabled");
        document.getElementById("player2").setAttribute("disabled", "disabled");
        changePlayers();
    }
}
function rollDie() {
    var currTotal = parseInt(document.getElementById("total").value);
    var rolls = generateRandomValue(1, 6);
    if (rolls == 1) {
        currTotal = 0;
        changePlayers();
    }
    else {
        currTotal += rolls;
    }
    var dieRoll = document.getElementById("die");
    dieRoll.value = rolls.toString();
    var total = document.getElementById("total");
    total.value = currTotal.toString();
}
function holdDie() {
    var currTotal = parseInt(document.getElementById("total").value);
    var score = 0;
    if ((document.getElementById("current")).innerHTML == document.getElementById("player1").value) {
        score = parseInt(document.getElementById("score1").value);
        score += currTotal;
        document.getElementById("score1").value = score.toString();
    }
    else {
        score = parseInt(document.getElementById("score2").value);
        score += currTotal;
        document.getElementById("score2").value = score.toString();
    }
    document.getElementById("total").value = "0";
    var score1 = parseInt(document.getElementById("score1").value);
    var score2 = parseInt(document.getElementById("score1").value);
    if (score1 >= 100) {
        alert("Player 1 wins");
        document.getElementById("score1").value = "0";
        document.getElementById("score2").value = "0";
    }
    if (score2 >= 100) {
        alert("Player 2 wins");
        document.getElementById("score1").value = "0";
        document.getElementById("score2").value = "0";
    }
    changePlayers();
}
