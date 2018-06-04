import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import {getGraphData} from '../actions/graphData';

export default function (ComposedComponent, reducers) {
    class graphContainer extends Component {
        componentDidMount() {
            getGraphData(dispatch);
        }

        render() {
            return (
                <Panel id="graph-container" className="container">
                    <ComposedComponent {...this.props} />
                </Panel>

            )
        }
    }

    function mapStateToProps(state) {
        return {
            data: state.graphData.data || []
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            getGraphData
        }
      }

    return connect(mapStateToProps, mapDispatchToProps)(graphContainer);
}