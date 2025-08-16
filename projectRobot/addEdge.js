function addEdge(from, to, graph) {
    if (from in graph) {
        graph[from].push(to);
    } else {
        graph[from] = [to];
    }
}

export default addEdge;
