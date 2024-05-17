import { createPosition } from './helper'
import turnPlayer from './utils/TurnPlayer'

export const Status = {
    'ongoing' : 'Ongoing',
    'promoting' : 'Promoting',
    'playerTurn':'playerTurn',
    'white' : 'White wins',
    'black' : 'Black wins',
    'stalemate' : 'Game draws due to stalemate',
    'insufficient' : 'Game draws due to insufficient material',
}


export const initGameState = {
    position : [createPosition()],
    turn : 'w',
    candidateMoves : [],
    movesList : [],

    promotionSquare : null,
    status : Status.ongoing,
    castleDirection : {
        w : 'both',
        b : 'both'
    }, 
}