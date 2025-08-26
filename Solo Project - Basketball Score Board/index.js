let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");
let homeScore = 0;
let guestScore = 0;



homeScoreEl.innerHTML = homeScore;
guestScoreEl.innerHTML = guestScore;



function score1h(){
    homeScore += 1;
    homeScoreEl.innerHTML = homeScore;
}

function score2h(){
    homeScore += 2;
    homeScoreEl.innerHTML = homeScore;
}

function score3h(){
    homeScore += 3;
    homeScoreEl.innerHTML = homeScore;
}


function score1g(){
    guestScore += 1;
    guestScoreEl.innerHTML = guestScore;
}

function score2g(){
    guestScore += 2;
    guestScoreEl.innerHTML = guestScore;
}

function score3g(){
    guestScore += 3;
    guestScoreEl.innerHTML = guestScore;
}

function reset(){
    homeScore = 0;
    guestScore = 0;
    guestScoreEl.innerHTML = guestScore;
    homeScoreEl.innerHTML = homeScore;

}
