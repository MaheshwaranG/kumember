import React, { Component } from 'react';

class RedoCommand extends Component {
    constructor(props) {
        super(props);
    }

    doActionOnClick = (event) => {
        this.props.executeCommand('redo', null)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button className="uppercase" onClick={(event) => this.doActionOnClick(event)}>
                    <i className="fa fa-repeat" aria-hidden="true"></i>
                </button>
            </div >
        )
    }
}

export default RedoCommand;