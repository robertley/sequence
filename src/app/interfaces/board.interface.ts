import { Boardspace, newBoardSpace } from './boardspace.interface';
import { createUnshuffuledDeck, Deck } from './deck.interface';
import * as _ from 'lodash';

export interface Board {
    boardspaces: Boardspace[][];
    boardspaceMap: Map<string, Boardspace>
}

export function createBoard(): Board {
    let deck: Deck = createUnshuffuledDeck();
    let cards = deck.cards;
    let board: Board = createNullBoard();
    let boardspaces = board.boardspaces;

    // borrowed logic from https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/

    let deckIter = 0;
    let k = 0, m = 10, l = 0, n = 10, i;
  
    /* k - starting row index  
        m - ending row index  
        l - starting column index  
        n - ending column index  
        i - iterator  
    */
    // let boardspace: Boardspace = newBoardSpace();
    // boardspace.cardKey = 1;
    // boardspaces[0][0] = boardspace;
    while (k < m && l < n) { 

        /* Print the first row from 
               the remaining rows */
        for (i = l; i < n; ++i) { 
            let boardspace: Boardspace = newBoardSpace();
            if (i === 0 || i === 9) {
                boardspace.cardKey = 0;
                boardspace.name = "%";
                boardspace.suit = null;
            } else {
                boardspace.cardKey = cards[deckIter].key;
                boardspace.name = cards[deckIter].name;
                boardspace.suit = cards[deckIter].suit;
                deckIter++;
            }
            boardspace.key = '' + k + i;
            board.boardspaceMap.set(boardspace.key, boardspace);
            boardspaces[k][i] = boardspace;
        } 
        k++;
  
        /* Print the last column  
         from the remaining columns */
        for (i = k; i < m; ++i) {
            let boardspace: Boardspace = newBoardSpace();
            if (i === 9) {
                boardspace.cardKey = 0;
                boardspace.name = "%";
                boardspace.suit = null;
            } else {
                boardspace.cardKey = cards[deckIter].key;
                boardspace.name = cards[deckIter].name;
                boardspace.suit = cards[deckIter].suit;
                deckIter++;
            }
            boardspace.key = '' + i + (n - 1);
            board.boardspaceMap.set(boardspace.key, boardspace);
            boardspaces[i][n - 1] = boardspace;
        } 
        n--;
  
        /* Print the last row from  
                the remaining rows */
        if (k < m) { 
            for (i = n - 1; i >= l; --i) {
                let boardspace: Boardspace = newBoardSpace();
                if (i === 0) {
                    boardspace.cardKey = 0;
                    boardspace.name = "%";
                    boardspace.suit = null;
                } else {
                    boardspace.cardKey = cards[deckIter].key;
                    boardspace.name = cards[deckIter].name;
                    boardspace.suit = cards[deckIter].suit;
                    deckIter++;
                }
                boardspace.key = '' + (m - 1) + i;
                board.boardspaceMap.set(boardspace.key, boardspace);
                boardspaces[m - 1][i] = boardspace;
            } 
            m--; 
        } 
  
        // /* Print the first column from 
        //            the remaining columns */
        if (l < n) { 
            for (i = m - 1; i >= k; --i) { 
                let boardspace: Boardspace = newBoardSpace();
                boardspace.cardKey = cards[deckIter].key;
                boardspace.name = cards[deckIter].name;
                boardspace.suit = cards[deckIter].suit;
                deckIter++;
                boardspace.key = '' + i + l;
                board.boardspaceMap.set(boardspace.key, boardspace);
                boardspaces[i][l] = boardspace; 
            } 
            l++; 
        } 
    } 

    return board;
}

function createNullBoard(): Board {
    let boardspace = newBoardSpace();
    let row = Array(10).fill(_.cloneDeep(boardspace));
    let spaces: Boardspace[][] = [];
    for (let i = 0; i < 10; i++) {
        spaces.push(_.cloneDeep(row));
    }
    let nullBoard: Board = {
        boardspaces: spaces,
        boardspaceMap: new Map()
    }
    return nullBoard;
}