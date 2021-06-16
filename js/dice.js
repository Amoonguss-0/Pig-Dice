window.onload = function () {
    var newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("hold").onclick = holdDie;
};
function generateRandomValue(minValue, maxValue) {
    var random = Math.random();
    minValue = random;
    maxValue = random;
    return random;
}
function changePlayers() {
    var currentPlayerName = document.getElementById("current").innerText;
    var player1Name = document.getElementById("player1").value;
    var player2Name = document.getElementById("player2").value;
    if (currentPlayerName == player1Name) {
        currentPlayerName = player2Name;
    }
    else {
        currentPlayerName = player1Name;
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
    if (p1.value == "" || p2.value) {
        alert("Please Input Player Names");
        nameSet = false;
    }
    document.getElementById("turn").classList.add("open");
    document.getElementById("total").value = "0";
    document.getElementById("player1").setAttribute("disabled", "disabled");
    document.getElementById("player2").setAttribute("disabled", "disabled");
    changePlayers();
}
function rollDie() {
    var currTotal = parseInt(document.getElementById("total").value);
}
function holdDie() {
    changePlayers();
}
