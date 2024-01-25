//Part 1:
async function partOneCards() {
    let res = await $.getJSON('https://deckofcardsapi.com/api/deck/new/draw');
    console.log(res.cards[0].value+' of '+res.cards[0].suit);
}

partOneCards();


//Part 2:
async function partTwoCards() {
    let res = await $.getJSON('https://deckofcardsapi.com/api/deck/new/draw');
    console.log(res.cards[0].value+' of '+res.cards[0].suit);
    let resTwo = await $.getJSON(`https://deckofcardsapi.com/api/deck/${res.deck_id}/draw`);
    console.log(resTwo.cards[0].value+' of '+resTwo.cards[0].suit);
}

partTwoCards();


//Part 3:
const cardButton = document.getElementById('drawCard');
cardButton.addEventListener('click', partThreeCards);
const totalCardDiv = document.getElementById('cardDiv');

let permDeckId;
async function getNewDeck() {
    let res = await $.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle');
    return permDeckId = res.deck_id;
}

let cardCount = 0;

async function partThreeCards() {
    let cardText = document.createElement('p');
    let cardImg = document.createElement('img');
    let singleCardDiv = document.createElement('div');

    let res = await $.getJSON(`https://deckofcardsapi.com/api/deck/${permDeckId}/draw`);
    cardText.innerText = res.cards[0].value+' of '+res.cards[0].suit;
    cardImg.src = res.cards[0].image;
    singleCardDiv.append(cardText);
    singleCardDiv.append(cardImg);
    totalCardDiv.append(singleCardDiv);
    cardCount++;
    if(cardCount == 52){
        cardButton.style.display = 'none';
    }
}

getNewDeck();