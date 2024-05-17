import actionTypes from '../actionTypes';
import { initGameState } from '../../constants';

export const updateCastling = (direction) => {
    return {
        type: actionTypes.CAN_CASTLE,
        payload: direction,
    }
}

export const detectStalemate = () => {
    return {
        type: actionTypes.STALEMATE,
    }
}

export const detectInsufficientMaterial = () => {
    return {
        type: actionTypes.INSUFFICIENT_MATERIAL,
    }
}

export const detectCheckmate = winner => {
    return {
        type: actionTypes.WIN,
        payload : winner
    }
}

export const setupNewGame = () => {
    return {
        type: actionTypes.NEW_GAME,
        payload : initGameState
    }
}
export const updatedRoom = (updatedRoom) => {
    console.log("updated room action",updatedRoom);
    return {
        type: actionTypes.UPDATED_ROOM_DATA,
        payload : updatedRoom
    }
}
export const CreatePosition = (currentPosition) => {
    console.log("current position action",currentPosition);
    return {
        type: actionTypes.CURRENT_POSITION,
        payload : currentPosition
    }
}