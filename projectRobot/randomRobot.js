import randomPick from "./randomPick.js";
import roadGraph from "./buildGraph.js";

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

export default randomRobot;