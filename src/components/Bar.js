import React, {Component} from "react";
import {connect} from 'react-redux';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

class Bar extends Component {
    render() {
        const {data} = this.props;
        return (
            <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
                <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}/>
                <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)}/>
                <VictoryBar data={data} x="quarter" y="earnings"/>
            </VictoryChart>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.graphData.data || []
    }
}

export default connect(mapStateToProps)(Bar)