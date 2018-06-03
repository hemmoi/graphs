import React, {Component} from "react";
import graphContainer from './GraphContainer';
import {VictoryPie, VictoryChart, VictoryTheme} from 'victory';

class Pie extends Component {
    render() {
        const {data} = this.props;
        return (
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={20}
                style={{
                parent: {
                    maxWidth: "50%"
                }
            }}>
                <VictoryPie data={data} x="quarter" y="earnings"/>
            </VictoryChart>
        )
    }
}

export default graphContainer(Pie);