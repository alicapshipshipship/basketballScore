let homeScore = 0;
let awayScore = 0;
document.getElementById('away-score').innerText = awayScore;

function addHomeScore1() {
    homeScore += 1; 
    document.getElementById('home-score').innerText = homeScore;
    console.log(homeScore);
}

function addHomeScore2() {
    homeScore += 2; 
    document.getElementById('home-score').innerText = homeScore;
    console.log(homeScore);
}

function addHomeScore3() {
    homeScore += 3; 
    document.getElementById('home-score').innerText = homeScore;
    console.log(homeScore);
}

function addAwayScore1() {
    awayScore += 1; 
    document.getElementById('away-score').innerText = awayScore;
    console.log(homeScore);
}

function addAwayScore2() {
    awayScore += 2; 
    document.getElementById('away-score').innerText = awayScore;
    console.log(homeScore);
}

function addAwayScore3() {
    awayScore += 3; 
    document.getElementById('away-score').innerText = awayScore;
    console.log(homeScore);
}

function resetScore() {
    homeScore = 0;
    awayScore = 0;
    document.getElementById('home-score').innerText = homeScore;
    document.getElementById('away-score').innerText = awayScore;
}


