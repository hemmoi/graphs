import React, {Component} from "react";
import graphContainer from './GraphContainer';
import {VictoryPie, VictoryTheme} from 'victory';

class Pie extends Component {
    render() {
        const {pieData} = this.props;
        return (<VictoryPie
            theme={VictoryTheme.material}
            data={pieData}
            x="quarter"
            y="earnings"
            labels={(d) => `Quarter ${d.x}: ${d.y}$`}/>)
    }
}

export default graphContainer(Pie);