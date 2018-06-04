import React, { Component } from "react";
import graphContainer from './GraphContainer';
import { VictoryPie, VictoryChart, VictoryTheme } from 'victory';

const chartStyle = {
    parent: {
        maxWidth: "80%"
    }
}

class Pie extends Component {
    render() {
        const { data } = this.props;
        return (
            <VictoryPie
                width={800}
                theme={VictoryTheme.material}
                data={data} x="quarter" y="earnings"
                labels={(d) => `Quarter ${d.x}: ${d.y}$`} />
        )
    }
}

export default graphContainer(Pie);