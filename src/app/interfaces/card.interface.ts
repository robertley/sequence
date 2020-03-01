export interface Card {
    key: number;
    name: string;
    suit: number;
}

export function newCard() : Card {
    return {
        key: null,
        name: null,
        suit: null
    }
}