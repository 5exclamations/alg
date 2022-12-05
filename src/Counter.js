import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        value: 0,
    }

    render() {
        const { value } = this.state;

        return (
            <div className="counter">
                <button
                    onClick={(event) => {
                        if (this.state.value > -10)
                            return this.setState({ value: this.state.value - 1 });
                    }}
                >-</button>
                <p>{value}</p>
                <button onClick={(event) => {
        if (this.state.value < 10)
            return this.setState({ value: this.state.value + 1 });
    }
}>+</button>
            </div>
        );
    }
}