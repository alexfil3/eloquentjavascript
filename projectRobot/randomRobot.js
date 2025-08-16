import randomPick from "./randomPick.js";

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

export default randomRobot;