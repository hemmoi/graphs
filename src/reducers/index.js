import {combineReducers} from 'redux'
import graphDataReducer from '../reducers/graphData'

export default combineReducers({graphData: graphDataReducer})