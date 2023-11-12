/*

Example 1:

    Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
    Output: 2
    Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.

Example 2:

    Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
    Output: -1
    
*/

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */

function graphSet(graph, key, value) {
  if (key in graph) {
    graph[key].push(value);
  } else {
    graph[key] = [value];
  }
}

const numBusesToDestination = (routes, source, target) => {
  const graph = {};

  // build graph where buses and stops are connecting nodes
  for ([bus, route] of routes.entries()) {
    for (stop of route) {
      const busId = `b${bus}`;
      graphSet(graph, stop, busId);
      graphSet(graph, busId, stop);
    }
  }

  const visited = new Set();
  const q = [[source, 0]];

  // perform BFS on graph to find minimal distance
  while (q.length) {
    let [point, distance] = q.shift();

    // target reached
    if (point === target) return distance;

    // prevent visiting the same stop or bus
    if (visited.has(point)) continue;
    visited.add(point);

    // visiting a bus node has an edge weight of 1
    if (typeof point === "string") distance += 1;

    // consider all connections of current point
    for (const connection of graph[point]) {
      q.push([connection, distance]);
    }
  }
  // no possible route to target
  return -1;
};

let routes = [
    [1, 2, 7],
    [3, 6, 7],
  ],
  source = 1,
  target = 6;

console.log(
  "numBusesToDestination",
  numBusesToDestination(routes, source, target)
);
