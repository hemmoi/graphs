import React, {Component} from "react";
import {connect} from 'react-redux';
import {VictoryPie, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

class Pie extends Component {
    render() {
        const {data} = this.props;
        return (<VictoryPie data={data} x="quarter" y="earnings"/>)
    }
}

function mapStateToProps(state) {
    return {
        data: state.graphData.data || []
    }
}

export default connect(mapStateToProps)(Pie)