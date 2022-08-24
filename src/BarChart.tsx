import React from "react";
import * as d3 from "d3";

interface stateInterface{
    data : number[]
}

interface propsInterface {
    id : string
}

class BarChart extends React.Component <propsInterface, stateInterface>{

    constructor (props) {
        super(props);
        this.state = {
            data: [12, 5, 6, 6, 9, 10]
        }

    }
    componentDidMount(): void {
        this.drawChart();
    }

    public drawChart = () : void => {

        // const data : number[] = [12, 5, 6, 6, 9, 10];
        const svg  = d3.select("#main").append("svg")
        .attr("width", 700).attr("height", 300);

        const bars = svg.selectAll("rect").data(this.state.data).enter().append("rect");

        bars
          .attr("x", (d, i) => i * 70)
          .attr("y", (d) => 300 - d * 10)
          .attr("width", 65)
          .attr("height", (d) => d * 10)
          .attr("fill", "green");

        svg.selectAll("text")
        .data(this.state.data)
        .enter()
        .append("text")
        .text( d => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => 300 - (10 * d) - 3);

    }

    render(): React.ReactNode {
        return(
            <div
            id={this.props.id}>
            </div>
        );
    }
}

export default BarChart;

