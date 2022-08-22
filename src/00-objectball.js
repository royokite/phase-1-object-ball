//Object Ball!

function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

function homePlayers() {
    return gameObject().home.players;
}

function awayPlayers() {
    return gameObject().away.players;
}

function allPlayers() {
    return Object.assign({}, homePlayers(), awayPlayers());
}

function numPointsScored(playerNameInput) {
    return allPlayers()[playerNameInput].points;
}

function shoeSize(playerNameInput) {
    return allPlayers()[playerNameInput].shoe;
}

function homeColors() {
    return gameObject().home.colors;
}

function awayColors() {
    return gameObject().away.colors;
}

function homeTeamName() {
    return gameObject().home.teamName;
}

function awayTeamName() {
    return gameObject().away.teamName;
}

function teamColors(teamName=homeTeamName()) {
    if (teamName===homeTeamName()) return homeColors();
    else return awayColors();
}

function teamNames() {
    return [homeTeamName(), awayTeamName()];
}

function homeTeamJerseys() {
    return (Object.values(homePlayers())).map(pInfo=>pInfo.number)
}

function awayTeamJerseys() {
    return Object.values((awayPlayers())).map(pInfo=>pInfo.number)
}

function playerNumbers(teamName=homeTeamName()) {
    if (teamName===homeTeamName()) return homeTeamJerseys();
    else return awayTeamJerseys();
}

function playerStats(playerNameInput) {
    return allPlayers()[playerNameInput];
}

function getObjKey(obj, value) {
    return Object.keys(obj).find(key => obj[key]===value);
}

function bigShoeRebounds() {
    shoeSizes = Object.values(allPlayers()).map(pInfo => pInfo.shoe);
    biggestShoeSize = shoeSizes.reduce((a, c) => Math.max(a, c), -Infinity);
    playerRebounds = Object.values(allPlayers()).filter(pInfo => pInfo.shoe===19)[0].rebounds;

    return `Rebounds: ${playerRebounds}`;
}

function mostPointsScored() {
    allPoints = Object.values(allPlayers()).map(pInfo=>pInfo.points);
    mostPoints = allPoints.reduce((a, c) => Math.max(a, c), 0);
    playerMostPoints = Object.values(allPlayers()).filter(p=>p.points===mostPoints)[0].points;

    for (const player in allPlayers()) {
        if(numPointsScored(player)===playerMostPoints) return `Player with most points: ${player}`;
    }  
}

function winningTeam() {
    homePoints = Object.values(homePlayers()).map(pInfo=>pInfo.points).reduce((a, c)=>a + c, 0);
    awayPoints = Object.values(awayPlayers()).map(pInfo=>pInfo.points).reduce((a, c)=>a + c, 0);
    
    if(homePoints>awayPoints) {
        return homeTeamName();
    } else if (homePoints<awayPoints){
        return awayTeamName();
    } else return `Draw between ${homeTeamName()} and ${awayTeamName()}`;
}

function playerWithLongestName() {
    nameLength = Object.keys(allPlayers()).map(pName=>pName.length).reduce((a, c)=>Math.max(a, c), 0);
    LongestNamedPlayer = Object.keys(allPlayers()).filter(pName=>pName.length===nameLength);
    return LongestNamedPlayer.toString();
}

function doesLongNameStealATon() {
    mostSteals = Object.values(allPlayers()).map(pInfo=>pInfo.steals).reduce((a, c)=>Math.max(a, c), 0);
    playerSteals = allPlayers()[playerWithLongestName()].steals;
    
    return `Longest named player has the most steals: ${playerSteals===mostSteals? true: false}`;
}

console.log(awayPlayers());



