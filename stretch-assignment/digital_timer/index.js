const startButton = document.querySelector(".start");

var mstCount = 1;
var mshCount = 0;
var soCount = 0;
var stCount = 0;

function tick(){
    const secondTens = document.querySelector("#secondTens");
    const secondOnes = document.querySelector("#secondOnes");
    const msHundreds = document.querySelector("#msHundreds");
    const msTens = document.querySelector("#msTens");

    if(mstCount < 10){
        msTens.innerHTML = mstCount;
        mstCount++;
        msHundreds.innerHTML = mshCount;
        secondOnes.innerHTML = soCount;
        secondTens.innerHTML = stCount;
    } else if (mstCount === 10) {
        mstCount = 0;
        msHundreds.innerHTML = mshCount++;
    }
    if(mshCount === 10) {
        secondOnes.innerHTML = soCount++;
        mshCount = 0;
    } 
    if(soCount === 10) {
        secondTens.innerHTML = stCount+1;
        clearInterval(startTimer);
        secondOnes.innerHTML = 0;
        msHundreds.innerHTML = 0;
        msTens.innerHTML = 0;
        
        secondTens.style.color = 'red';
        secondOnes.style.color = 'red';
        msHundreds.style.color = 'red';
        msTens.style.color = 'red';
    }
}

function resetTimer() {
    secondTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    msHundreds.innerHTML = 0;
    msTens.innerHTML = 0;
    
    secondTens.style.color = 'black';
    secondOnes.style.color = 'black';
    msHundreds.style.color = 'black';
    msTens.style.color = 'black';

    mstCount = 1;
    mshCount = 0;
    soCount = 0;
    stCount = 0;
}
//}

