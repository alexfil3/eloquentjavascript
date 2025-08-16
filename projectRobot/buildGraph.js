import addEdge from "./addEdge.js";

function buildGraph(edges) {
    let graph = Object.create(null);

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    
    return graph;
}

export default buildGraph;
