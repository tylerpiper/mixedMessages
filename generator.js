const quarterBack = [
    'Tom Brady',
    'Pat Mahomes',
    'Lamar Jackson',
    'Josh Allen',
    'Aaron Rodgers'
]

const actions = [
    'beat',
    'lost to',
    'tied'
]

const teams = [
    'the Rams',
    'the Texans',
    'the Seahawks',
    'the Saints',
    'the Vikings'
]

var partOne = quarterBack[Math.floor(Math.random()*quarterBack.length)];

var partTwo = actions[Math.floor(Math.random()*actions.length)];

var partThree = teams[Math.floor(Math.random()*teams.length)];

console.log(partOne + ' ' + partTwo + ' ' + partThree + '.')