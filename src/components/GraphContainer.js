import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';

export default function (ComposedComponent, reducers) {
    class graphContainer extends Component {
        render() {
            return (
                <Panel id="graph-container">
                    <ComposedComponent {...this.props}/>;
                </Panel>
            )
        }
    }

    function mapStateToProps(state) {
        return {
            data: state.graphData.data || []
        }
    }

    return connect(mapStateToProps)(graphContainer);
}