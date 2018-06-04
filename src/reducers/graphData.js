import {ADD_GRAPH_DATA} from '../actions/graphData'

const data2012 = [
    {
        quarter: 1,
        earnings: 13000
    }, {
        quarter: 2,
        earnings: 16500
    }, {
        quarter: 3,
        earnings: 14250
    }, {
        quarter: 4,
        earnings: 19000
    }
];

const initialState = {
    data: data2012,
    pieData: data2012
}

const graphDataReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case ADD_GRAPH_DATA:
            return Object.assign({}, state, {data: action.payload.data});
        default:
            return state
    }
}

export default graphDataReducer
