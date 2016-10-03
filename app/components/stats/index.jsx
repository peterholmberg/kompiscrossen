import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {LineChart} from 'react-svg-line-chart'
import {Tooltip} from 'react-simple-tooltip'

class Stats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePoint: null,
            tooltipTrigger: null,
        }
    }

    handlePointHover(point, trigger) {
        this.setState({
            activePoint: point,
            tooltipTrigger: trigger,
        })
    }

    render() {
        const data = [
            {
                x: 1,
                y: 3
            }, {
                x: 2,
                y: 6
            }, {
                x: 3,
                y: 9
            }
        ];
        return (
            <div>
                { this.state.tooltipTrigger
                    ? (
                    <Tooltip placement="top" trigger={ this.state.tooltipTrigger }>
                        <div>y : { this.state.activePoint.y }</div>
                        <div>x : { this.state.activePoint.x }</div>
                    </Tooltip>
                )
                    : null
                }
                <LineChart activePoint={ this.state.activePoint } data={data} onPointHover={this.handlePointHover }
                           nogrid/>
            </div>
        )
    }
}

function propProvider(reduxState, props) {
    const {appState, statsState} = reduxState;

    return {
        appState,
        statsState
    };
}


export default connect(propProvider)(Stats);
