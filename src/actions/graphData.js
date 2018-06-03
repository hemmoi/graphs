export const ADD_GRAPH_DATA = 'ADD_GRAPH_DATA';

export function getGraphData(data) {
    return {type: ADD_GRAPH_DATA, payload: data};
}