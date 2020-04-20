import  { Card, newCard } from './card.interface';
import * as _ from 'lodash';

export interface Deck {
    cards: Card[];
}

function createDeck() {
    let allCards: Card[] = [];

    for (let i = 0; i < 108; i++) {
        let card: Card = newCard();
        // normal cards
        if (i < 48) {
            createNormalCard(card, i);
        }
        else if (i < 96) {
            createNormalCard(card, i - 48);
        }
        // special cards
        else {
            // black jokers
            if (i < 98) {
                card.key = 0;
                card.name = '%';
                card.suit = 0;
            }
            // red jokers
            else if (i < 100) {
                card.key = 0;
                card.name = '%';
                card.suit = 1;
            }
            // one-eyed jacks
            else if (i < 104) {
                card.key = 12;
                card.name = 'J';
                card.suit = i % 4;
            }
            // two-eyed jacks
            else {
                card.key = 13;
                card.name = 'J';
                card.suit = i % 4;
            }
            
        }
        allCards.push(card);
    }

    return allCards;
}

function createNormalCard(card: Card, i) {
    card.key = i + 1;
    if (i < 12) {
        card.suit = 0;
        if (i < 9) {
            card.name = `${i + 2}`;
        } else if (i === 9) {
            card.name = 'Q';
        } else if (i === 10) {
            card.name = 'K';
        } else {
            card.name = 'A';
        }
    }
    else if (i < 24) {
        card.suit = 1;
        if (i < 21) {
            card.name = `${i - 12 + 2}`;
        } else if (i === 21) {
            card.name = 'Q';
        } else if (i === 22) {
            card.name = 'K';
        } else {
            card.name = 'A';
        }
    }
    else if (i < 36) {
        card.suit = 2;
        if (i < 33) {
            card.name = `${i - 24 + 2}`;
        } else if (i === 33) {
            card.name = 'Q';
        } else if (i === 34) {
            card.name = 'K';
        } else {
            card.name = 'A';
        }
    }
    else if (i < 48) {
        card.suit = 3;
        if (i < 45) {
            card.name = `${i - 36 + 2}`;
        } else if (i === 45) {
            card.name = 'Q';
        } else if (i === 46) {
            card.name = 'K';
        } else {
            card.name = 'A';
        }
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export function createShuffledDeck(): Deck {
    let shuffledDeck = createUnshuffuledDeck();
    shuffleArray(shuffledDeck.cards);
    return shuffledDeck;
}

export function createUnshuffuledDeck(): Deck {
    let deck: Deck = {
        cards: null
    };
    deck.cards = createDeck();
    console.log(deck)
    return deck;
}
