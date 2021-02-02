import React from "react";


const Diagram = (props) => {
    const stat = props.stat

    return <div className="single-chart">
        <svg viewBox="0 0 36 36" className="circular-chart orange">
            <path className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path className="circle"
                  stroke-dasharray={"" + stat.toString() + ", 100"}
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">{stat}%</text>
        </svg>
    </div>
}
export default Diagram