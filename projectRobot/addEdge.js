function addEdge(from, to) {
    if (from in graph) {
        graph[from].push(to);
    } else {
        graph[from] = [to];
    }
}

export default addEdge;