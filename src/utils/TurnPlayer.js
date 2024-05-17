import { useReducer } from "react";
import { useAppContext } from "../contexts/Context";

const turnPlayer=()=>{
   
    const { appState : {movesList} } = useAppContext();
    const turn=appState.Players.nextPlayerColour
    return turn
}
export default turnPlayer;