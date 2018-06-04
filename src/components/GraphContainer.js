import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';
import {getGraphData} from '../actions/graphData';

export default function (ComposedComponent, reducers) {
    class graphContainer extends Component {
        componentWillMount() {
            this
                .props
                .dispatch(getGraphData());
        }

        render() {
            return (
                <Panel
                    id="graph-container"
                    className="container"
                    style={{
                    height: "600px",
                    width: "600px"
                }}>
                    <ComposedComponent {...this.props}/>
                </Panel>

            )
        }
    }

    function mapStateToProps(state) {
        return {
            data: state.graphData.data || [],
            pieData: state.graphData.pieData || []
        }
    }

    return connect(mapStateToProps, null)(graphContainer);
}