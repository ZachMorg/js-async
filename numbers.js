//Part 1:
async function partOneNumberFacts() {
    let res = await $.getJSON('http://numbersapi.com/25?json');
    console.log(res.text);
}

partOneNumberFacts();


//Part 2:
const factListTwo = document.getElementById('factListTwo');
let factsHtml = document.createElement('p');

async function partTwoNumberFacts(){
    let res = await $.getJSON('http://numbersapi.com/25..30?json');
    const listOfFacts = Object.getOwnPropertyNames(res);
    let factText = '';
    for(let i = 0; i < listOfFacts.length; i++){
        factText += res[listOfFacts[i]]+'\n';
    }
    return factListTwo.append(factsHtml.innerText = factText)
}

partTwoNumberFacts();


//Part 3:
const factListThree = document.getElementById('factListThree');

async function partThreeNumberFacts(){
    let res = await $.getJSON('http://numbersapi.com/25?json');
    let factHtml = document.createElement('p');
    return factListThree.append(factHtml.innerText = res.text);
}

partThreeNumberFacts();
partThreeNumberFacts();
partThreeNumberFacts();
partThreeNumberFacts();