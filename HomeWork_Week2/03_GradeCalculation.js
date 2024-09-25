function studentsScore(){
    var score = 81;
    switch (true) {
        case (score >= 90):
            console.log(score+" is a 'A' grade");
            break;
        case (score >= 80):
            console.log(score+" is a 'B' grade");
            break;
        case (score >= 70):
            console.log(score+" is a 'C' grade");
            break;
        case (score >= 60):
            console.log(score+" is a 'D' grade");
            break;                    
        default:
            console.log(score+" is a 'F' grade" )
            break;
    }
}

studentsScore();