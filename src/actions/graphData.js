export const ADD_GRAPH_DATA = 'ADD_GRAPH_DATA';
let json = require('../testdata/dataset1.json');

export const getGraphData = () => {
    console.log("action");
    return ({type: ADD_GRAPH_DATA, payload: json})
}
