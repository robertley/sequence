export interface Boardspace {
    cardKey: number;
    name: string;
    suit: number;
    occupiedBy: number;
    inSequence: boolean;
    inHand: boolean;
}

export function newBoardSpace(): Boardspace {
    return {
        cardKey: null,
        occupiedBy: 0,
        name: null,
        suit: null,
        inSequence: false,
        inHand: false
    }
}