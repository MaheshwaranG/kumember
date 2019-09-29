import React, { Component } from 'react';

class BoldCommand extends Component {
    constructor(props) {
        super(props);
    }
    doActionOnClick = (event) => {
        this.props.executeCommand('bold', null)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button className="uppercase" onClick={(event) => this.doActionOnClick(event)}>
                    <i className="fa fa-bold" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default BoldCommand;