import VillageState from "./VillageState.js";
import runRobot from "./runRobot.js";
import randomRobot from "./randomRobot.js";
import routeRobot from "./routeRobot.js";
import goalOrientedRobot from "./goalOrientedRobot.js";

runRobot(VillageState.random(), goalOrientedRobot, []);
