import { Card } from './card.interface';

export interface Player {
    hand: Card[]
}

export function createPlayer(): Player {
    return {
        hand: []
    }
}