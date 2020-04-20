import { Card } from './card.interface';

export interface Player {
    key: number;
    hand: Card[];
}

export function createPlayer(): Player {
    return {
        key: null,
        hand: []
    }
}