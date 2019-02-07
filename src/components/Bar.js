import React, { Component } from "react";
import graphContainer from './GraphContainer';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

class Bar extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <VictoryChart theme={VictoryTheme.material} domainPadding={5}>
                    <VictoryBar data={data} x={0} y={1} />
                </VictoryChart>
            </div>
        )
    }
}

export default graphContainer(Bar);