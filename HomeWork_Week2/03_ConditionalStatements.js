function launchBrowser(){
    var browserName = 'chrome'
    if(browserName == 'chrome'){
        console.log(browserName + " browser launched successfully");
    } else if(browserName == 'edge'){
        console.log(browserName + " browser launched successfully");
    }
}

function runTests(){
    let testType = 'smoke'
    switch (testType) {
        case 'smoke':
            console.log("Running "+testType+" test");
            break;
        case 'sanity' :
            console.log("Running "+testType+" test");
            break;
        case 'regression':
            console.log("Running "+testType+" test");
            break;
        default:
            console.log("Test type not recognized");
            break;
    }

}
launchBrowser();
runTests();