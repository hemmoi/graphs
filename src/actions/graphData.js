export const ADD_GRAPH_DATA = 'ADD_GRAPH_DATA';
let json = require('../testdata/dataset1.json');

export function getGraphData(dispatch) {
    dispatch(
        {type: ADD_GRAPH_DATA, payload: json.data}
    )
}