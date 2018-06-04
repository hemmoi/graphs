import React, {Component} from "react";
import graphContainer from './GraphContainer';
import {VictoryLine, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

class Line extends Component {
    render() {
        const {data} = this.props;
        return (
            <VictoryChart theme={VictoryTheme.material} domainPadding={5}>
                <VictoryLine data={data} x={0} y={1}/>
            </VictoryChart>
        )
    }
}

export default graphContainer(Line);