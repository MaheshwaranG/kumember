import React, { Component } from 'react';

class CutCommand extends Component {
    constructor(props) {
        super(props);
    }

    doActionOnClick = (event) => {
        this.props.executeCommand('cut', null)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button className="uppercase" onClick={(event) => this.doActionOnClick(event)}>
                    <i className="fa fa-scissors" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default CutCommand;