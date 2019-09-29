import React, { Component } from 'react';

class UndoCommand extends Component {
    constructor(props) {
        super(props);
    }
    doActionOnClick = (event) => {
        this.props.executeCommand('undo', null)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button className="uppercase" onClick={(event) => this.doActionOnClick(event)}>
                    <i className="fa fa-undo" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default UndoCommand;