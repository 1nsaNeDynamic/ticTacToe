gameStarted = false;
chosen = {
    'a1' : 0,
    'a2' : 0,
    'a3' : 0,
    'b1' : 0,
    'b2' : 0,
    'b3' : 0,
    'c1' : 0,
    'c2' : 0,
    'c3' : 0,
}


function buttonsClickable() {
    for (item in chosen) {
        document.getElementById(item).disabled = false;
    }
}


function buttonsUnclickable() {
    for (item in chosen) {
        document.getElementById(item).disabled = true;
        document.getElementById(item).style.backgroundColor = '';
    }
}

function botPuts() {
    notChosen = getNotChosenArray()
    randomPosition = Math.floor(Math.random() * notChosen.length)
    // console.log(notChosen[randomPosition])

    document.getElementById(notChosen[randomPosition]).innerText = 'O';
    chosen[notChosen[randomPosition]] = 2;

    declareResult(2)
}


function getNotChosenArray() {
    notChosenList = []
    for (item in chosen) {
        if (chosen[item] == 0) {
            notChosenList.push(item)
        }
    }

    return notChosenList
}

function declareResult(player) {
    if (chosen['a1'] == 1 && chosen['a2'] == 1 && chosen['a3'] == 1) {
        document.getElementById('gameOverResult').value = 'User Won!'
        document.getElementById('gameOverResult').style.color = 'green';
        buttonsUnclickable()

        document.getElementById('a1').style.backgroundColor = '#4caf50'
        document.getElementById('a2').style.backgroundColor = '#4caf50'
        document.getElementById('a3').style.backgroundColor = '#4caf50'

    }

    else if (chosen['b1'] == 1 && chosen['b2'] == 1 && chosen['b3'] == 1) {
        document.getElementById('gameOverResult').value = 'User Won!'
        document.getElementById('gameOverResult').style.color = 'green';
        buttonsUnclickable()

        document.getElementById('b1').style.backgroundColor = '#4caf50'
        document.getElementById('b2').style.backgroundColor = '#4caf50'
        document.getElementById('b3').style.backgroundColor = '#4caf50'
    }

    else if (chosen['c1'] == 1 && chosen['c2'] == 1 && chosen['c3'] == 1) {
        document.getElementById('gameOverResult').value = 'User Won!'
        document.getElementById('gameOverResult').style.color = 'green';
        buttonsUnclickable()

        document.getElementById('c1').style.backgroundColor = '#4caf50'
        document.getElementById('c2').style.backgroundColor = '#4caf50'
        document.getElementById('c3').style.backgroundColor = '#4caf50'
    }

    else if (chosen['a1'] == 1 && chosen['b1'] == 1 && chosen['c1'] == 1) {
        document.getElementById('gameOverResult').value = 'User Won!'
        document.getElementById('gameOverResult').style.color = 'green';
        buttonsUnclickable()

        document.getElementById('a1').style.backgroundColor = '#4caf50'
        document.getElementById('b1').style.backgroundColor = '#4caf50'
        document.getElementById('c1').style.backgroundColor = '#4caf50'
    }

    else if (chosen['a2'] == 1 && chosen['b2'] == 1 && chosen['c2'] == 1) {
        document.getElementById('gameOverResult').value = 'User Won!'
        document.getElementById('gameOverResult').style.color = 'green';
        buttonsUnclickable()

        document.getElementById('a2').style.backgroundColor = '#4caf50'
        document.getElementById('b2').style.backgroundColor = '#4caf50'
        document.getElementById('c2').style.backgroundColor = '#4caf50'
    }

    else if (chosen['a3'] == 1 && chosen['b3'] == 1 && chosen['c3'] == 1) {
        document.getElementById('gameOverResult').value = 'User Won!'
        document.getElementById('gameOverResult').style.color = 'green';
        buttonsUnclickable()

        document.getElementById('a3').style.backgroundColor = '#4caf50'
        document.getElementById('b3').style.backgroundColor = '#4caf50'
        document.getElementById('c3').style.backgroundColor = '#4caf50'
    }

    else if (chosen['a1'] == 1 && chosen['b2'] == 1 && chosen['c3'] == 1) {
        document.getElementById('gameOverResult').value = 'User Won!'
        document.getElementById('gameOverResult').style.color = 'green';
        buttonsUnclickable()

        document.getElementById('a1').style.backgroundColor = '#4caf50'
        document.getElementById('b2').style.backgroundColor = '#4caf50'
        document.getElementById('c3').style.backgroundColor = '#4caf50'
    }

    else if (chosen['a3'] == 1 && chosen['b2'] == 1 && chosen['c1'] == 1) {
        document.getElementById('gameOverResult').value = 'User Won!'
        document.getElementById('gameOverResult').style.color = 'green';
        buttonsUnclickable()

        document.getElementById('a3').style.backgroundColor = '#4caf50'
        document.getElementById('b2').style.backgroundColor = '#4caf50'
        document.getElementById('c1').style.backgroundColor = '#4caf50'
    }
    
    // Bot
    else if (chosen['a1'] == 2 && chosen['a2'] == 2 && chosen['a3'] == 2) {
        document.getElementById('gameOverResult').value = 'Bot Won!'
        document.getElementById('gameOverResult').style.color = 'red';
        buttonsUnclickable()

        document.getElementById('a1').style.backgroundColor = '#ec4040'
        document.getElementById('a2').style.backgroundColor = '#ec4040'
        document.getElementById('a3').style.backgroundColor = '#ec4040'
    }

    else if (chosen['b1'] == 2 && chosen['b2'] == 2 && chosen['b3'] == 2) {
        document.getElementById('gameOverResult').value = 'Bot Won!'
        document.getElementById('gameOverResult').style.color = 'red';
        buttonsUnclickable()

        document.getElementById('b1').style.backgroundColor = '#ec4040'
        document.getElementById('b2').style.backgroundColor = '#ec4040'
        document.getElementById('b3').style.backgroundColor = '#ec4040'
    }

    else if (chosen['c1'] == 2 && chosen['c2'] == 2 && chosen['c3'] == 2) {
        document.getElementById('gameOverResult').value = 'Bot Won!'
        document.getElementById('gameOverResult').style.color = 'red';
        buttonsUnclickable()

        document.getElementById('c1').style.backgroundColor = '#ec4040'
        document.getElementById('c2').style.backgroundColor = '#ec4040'
        document.getElementById('c3').style.backgroundColor = '#ec4040'
    }

    else if (chosen['a1'] == 2 && chosen['b1'] == 2 && chosen['c1'] == 2) {
        document.getElementById('gameOverResult').value = 'Bot Won!'
        document.getElementById('gameOverResult').style.color = 'red';
        buttonsUnclickable()

        document.getElementById('a1').style.backgroundColor = '#ec4040'
        document.getElementById('b1').style.backgroundColor = '#ec4040'
        document.getElementById('c1').style.backgroundColor = '#ec4040'
    }

    else if (chosen['a2'] == 2 && chosen['b2'] == 2 && chosen['c2'] == 2) {
        document.getElementById('gameOverResult').value = 'Bot Won!'
        document.getElementById('gameOverResult').style.color = 'red';
        buttonsUnclickable()

        document.getElementById('a2').style.backgroundColor = '#ec4040'
        document.getElementById('b2').style.backgroundColor = '#ec4040'
        document.getElementById('c2').style.backgroundColor = '#ec4040'
    }

    else if (chosen['a3'] == 2 && chosen['b3'] == 2 && chosen['c3'] == 2) {
        document.getElementById('gameOverResult').value = 'Bot Won!'
        document.getElementById('gameOverResult').style.color = 'red';
        buttonsUnclickable()

        document.getElementById('a3').style.backgroundColor = '#ec4040'
        document.getElementById('b3').style.backgroundColor = '#ec4040'
        document.getElementById('c3').style.backgroundColor = '#ec4040'
    }

    else if (chosen['a1'] == 2 && chosen['b2'] == 2 && chosen['c3'] == 2) {
        document.getElementById('gameOverResult').value = 'Bot Won!'
        document.getElementById('gameOverResult').style.color = 'red';
        buttonsUnclickable()

        document.getElementById('a1').style.backgroundColor = '#ec4040'
        document.getElementById('b2').style.backgroundColor = '#ec4040'
        document.getElementById('c3').style.backgroundColor = '#ec4040'
    }

    else if (chosen['a3'] == 2 && chosen['b2'] == 2 && chosen['c1'] == 2) {
        document.getElementById('gameOverResult').value = 'Bot Won!'
        document.getElementById('gameOverResult').style.color = 'red';
        buttonsUnclickable()

        document.getElementById('a3').style.backgroundColor = '#ec4040'
        document.getElementById('b2').style.backgroundColor = '#ec4040'
        document.getElementById('c1').style.backgroundColor = '#ec4040'
    }
    
    


    else {
        notChosenArray = []
        for (item in chosen) {
            if (chosen[item] == 0){
                notChosenArray.push(item)
            }
        }

        if (notChosenArray.length == 0) {
            for (item in chosen) {
                document.getElementById(item).disabled == true;
            }
            document.getElementById('gameOverResult').value = "Nobody won, It's a tie."
            document.getElementById('gameOverResult').style.color = '#ff3cfe';
            for (item in chosen) {
                document.getElementById(item).style.backgroundColor = '#ff3cfe';
            }
        }

        else {

            if (player == 2) {
                return
            }
            else if (player == 1) {
                botPuts()
            }

        }
    }

}


function putCross(id) {
    document.getElementById(id).innerText = 'X';
    chosen[id] = 1;
}

function userPuts(id) {
    if (chosen[id] == 0) {
        putCross(id)

        notChosen = getNotChosenArray()

        declareResult(1)

    }

    else {
        return
    }
}


function startGame(id) {
    if (gameStarted == false) {
        gameStarted = true;
        document.getElementById('playAgainButton').style.display = 'block';

        userPuts(id);
    }
    else {
        userPuts(id);
    }
}

function startGameAgain() {
    for (item in chosen) {
        chosen[item] = 0
        document.getElementById(item).innerText = '';
        document.getElementById(item).style.backgroundColor = 'white';
    }
    document.getElementById('gameOverResult').value = '';

    buttonsClickable()


    document.getElementById('playAgainButton').style.display = 'none'
    gameStarted = false;
}