import roads from "./roads.js";
import addEdge from "./addEdge.js";

function buildGraph(edges) {
    let graph = Object.create(null);

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to, graph);
        addEdge(to, from, graph);
    }
    
    return graph;
}

const roadGraph = new buildGraph(roads);

export default roadGraph;
